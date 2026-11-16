import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readOutput = (path = '') => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

test('build emits a Portuguese homepage with unique SEO metadata and canonical URL', async () => {
  const html = await readOutput('index.html');

  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>Hernani — Desenvolvimento de sites e software em Belo Horizonte<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/hernani\.dev\/"/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
});

test('build includes the professional profile, required sections and real Talk BH attribution', async () => {
  const html = await readOutput('index.html');

  for (const content of [
    'Belo Horizonte',
    'Software Engineer',
    'Talk BH',
    'Desenvolvimento de sites e software',
    'Decap Turbo CMS',
    'github.com/hernanijr/talkbh',
    'A comunidade e seus organizadores definem os encontros',
    'github.com/hernanijr',
  ]) {
    assert.ok(html.includes(content), `Expected generated homepage to include "${content}".`);
  }

  for (const id of ['about', 'services', 'projects', 'technology', 'process', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`), `Missing page section #${id}.`);
  }
  assert.doesNotMatch(html, /Lorem ipsum|Your Name|Coming soon|TODO/);
});

test('structured data identifies a person without inventing an organization', async () => {
  const html = await readOutput('index.html');
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

  assert.ok(jsonLd, 'Expected JSON-LD structured data.');
  const person = JSON.parse(jsonLd[1]);
  assert.equal(person['@type'], 'Person');
  assert.equal(person.name, 'Hernani');
  assert.equal(person.address.addressLocality, 'Belo Horizonte');
  assert.deepEqual(person.sameAs, ['https://github.com/hernanijr']);
});

test('internal links target existing sections and no links are empty', async () => {
  const html = await readOutput('index.html');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];

  assert.ok(anchors.length > 0);
  for (const [, attributes, content] of anchors) {
    const href = attributes.match(/\bhref="([^"]*)"/)?.[1];
    assert.ok(href, `Anchor is missing href: ${attributes}`);
    assert.notEqual(href.trim(), '', 'Anchor href must not be empty.');
    if (href.startsWith('#')) {
      assert.ok(ids.has(href.slice(1)), `Internal link target ${href} does not exist.`);
    }
    assert.ok(
      content.replace(/<[^>]*>/g, '').trim() || /\baria-label=/.test(attributes),
      `Anchor has no accessible name: ${attributes}`,
    );
  }
});

test('document uses semantic landmarks and accessible section headings', async () => {
  const html = await readOutput('index.html');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const labelledSections = [...html.matchAll(/<section\b[^>]*\baria-labelledby="([^"]+)"/g)];

  assert.match(html, /<header\b/);
  assert.match(html, /<nav aria-label="Navegação principal"/);
  assert.match(html, /<main id="main"/);
  assert.match(html, /<footer\b/);
  assert.ok(labelledSections.length > 0);
  for (const [, headingId] of labelledSections) {
    assert.ok(ids.has(headingId), `Section heading target #${headingId} does not exist.`);
  }
  for (const [, attributes] of html.matchAll(/<img\b([^>]*)>/g)) {
    assert.match(attributes, /\balt="/, 'Images must have alternative text.');
  }
});

test('robots, sitemap and static social assets are emitted', async () => {
  const [robots, sitemap] = await Promise.all([
    readOutput('robots.txt'),
    readOutput('sitemap.xml'),
  ]);
  const html = await readOutput('index.html');

  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/hernani\.dev\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/hernani\.dev\/<\/loc>/);
  assert.match(html, /https:\/\/hernani\.dev\/og-image\.svg/);
  await readOutput('favicon.svg');
  await readOutput('og-image.svg');
});
