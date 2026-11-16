import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readOutput = (path = '') => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const readOutputBytes = (path = '') => readFile(new URL(`../dist/${path}`, import.meta.url));

test('build emits a Portuguese professional homepage with correct SEO metadata', async () => {
  const html = await readOutput('index.html');

  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>Hernani Junior — Engenheiro de Software \| Backend, APIs e Integrações<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/hernani\.dev\/">/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/hernani\.dev\/og-image\.png"/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
});

test('profile offers professional contact links instead of client-acquisition CTAs', async () => {
  const html = await readOutput('index.html');

  assert.match(html, /mailto:hernani\.junior13@gmail\.com/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/hernanivieirajr\//);
  assert.match(html, /https:\/\/github\.com\/hernanijr/);
  assert.match(html, /oportunidades em engenharia de software/);
  assert.doesNotMatch(html, /Vamos conversar sobre seu projeto|Como posso ajudar|TEM UM PROBLEMA PARA RESOLVER/);
});

test('selected work and experiments are clearly distinguished', async () => {
  const html = await readOutput('index.html');
  const indexLabels = [...html.matchAll(/<span class="project__index"[^>]*>([\s\S]*?)<\/span>/g)]
    .map(([, content]) => content.replace(/\s+/g, ' ').trim());

  assert.deepEqual(indexLabels, ['01 / 01']);
  assert.match(html, /Talk BH/);
  assert.match(html, /Bom Dia Pra Quem/);
  assert.match(html, /Cortex/);
  assert.match(html, /Homebroker/);
  assert.match(html, /Protótipo/);
  assert.match(html, /experimentos técnicos, não produtos apresentados como soluções prontas para produção/);
  assert.match(html, /A comunidade e seus organizadores definem os encontros/);
});

test('homepage includes all intended sections and excludes employer-specific content', async () => {
  const html = await readOutput('index.html');

  for (const id of ['about', 'expertise', 'projects', 'experiments', 'technology', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`), `Missing page section #${id}.`);
  }
  assert.doesNotMatch(html, /Grupo Boticário|FCamara/);
  assert.doesNotMatch(html, /Lorem ipsum|Your Name|Coming soon|TODO/);
});

test('structured data identifies the professional profile and public destinations', async () => {
  const html = await readOutput('index.html');
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

  assert.ok(jsonLd, 'Expected JSON-LD structured data.');
  const person = JSON.parse(jsonLd[1]);
  assert.equal(person['@type'], 'Person');
  assert.equal(person.name, 'Hernani Junior');
  assert.equal(person.jobTitle, 'Software Engineer');
  assert.equal(person.address.addressLocality, 'Belo Horizonte');
  assert.deepEqual(person.sameAs, [
    'https://github.com/hernanijr',
    'https://www.linkedin.com/in/hernanivieirajr/',
  ]);
});

test('internal links target existing sections and all links have accessible names', async () => {
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
