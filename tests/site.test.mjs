import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readOutput = (path = '') => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const readOutputBytes = (path = '') => readFile(new URL(`../dist/${path}`, import.meta.url));

test('build emits a Portuguese homepage with unique SEO metadata and canonical URL', async () => {
  const html = await readOutput('index.html');

  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>Hernani — Desenvolvimento de sites e software em Belo Horizonte<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/hernani\.dev\/"/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/hernani\.dev\/og-image\.png"/);
  assert.match(html, /<meta property="og:image:type" content="image\/png"/);
  assert.match(html, /<meta property="og:image:width" content="1200"/);
  assert.match(html, /<meta property="og:image:height" content="630"/);
  assert.match(html, /<meta property="og:image:alt" content="Hernani — engenharia de software em Belo Horizonte\. Sites e software para problemas reais\."/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.match(html, /<meta name="twitter:image" content="https:\/\/hernani\.dev\/og-image\.png"/);
  assert.match(html, /<meta name="twitter:image:alt" content="Hernani — engenharia de software em Belo Horizonte\. Sites e software para problemas reais\."/);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
});

test('contact action is omitted when unconfigured and GitHub is clearly a profile link', async () => {
  const html = await readOutput('index.html');
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];

  assert.doesNotMatch(html, /data-analytics-event="contact_click"/);
  assert.ok(
    anchors.some(([, attributes, content]) =>
      attributes.includes('href="https://github.com/hernanijr"') &&
      content.includes('Visitar meu GitHub')
    ),
  );
  assert.ok(
    anchors.some(([, attributes, content]) =>
      attributes.includes('href="https://github.com/hernanijr"') &&
      content.includes('GitHub')
    ),
  );
});

test('project case study displays its position and count', async () => {
  const html = await readOutput('index.html');
  const indexLabels = [...html.matchAll(/<span class="project__index"[^>]*>([\s\S]*?)<\/span>/g)]
    .map(([, content]) => content.replace(/\s+/g, ' ').trim());

  assert.deepEqual(indexLabels, ['01 / 01']);
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
      /[^<\s][^<]*/.test(content) || /\baria-label=/.test(attributes),
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
  const siteSource = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8');
  const domain = siteSource.match(/domain: '([^']+)'/)?.[1];

  assert.match(robots, /Allow: \//);
  assert.ok(domain, 'The centralized production domain should be configured.');
  assert.match(robots, new RegExp(`Sitemap: ${domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/sitemap\\.xml`));
  assert.match(sitemap, /<loc>https:\/\/hernani\.dev\/<\/loc>/);
  assert.match(html, /https:\/\/hernani\.dev\/og-image\.png/);
  const socialImage = await readOutputBytes('og-image.png');
  assert.equal(socialImage.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(socialImage.readUInt32BE(16), 1200);
  assert.equal(socialImage.readUInt32BE(20), 630);
  await readOutput('favicon.svg');
});
