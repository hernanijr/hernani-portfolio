import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';
import { getWritingPath, getWritingSlug, type Locale } from '../data/i18n';

export const prerender = true;

const xmlEscape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

interface SitemapUrl {
  locale: Locale;
  url: string;
}

function renderUrlGroup(urls: SitemapUrl[]): string {
  const alternates = urls.map((item) =>
    '    <xhtml:link rel="alternate" hreflang="' + item.locale + '" href="' + xmlEscape(item.url) + '" />'
  );
  const defaultUrl = urls.find((item) => item.locale === 'pt-BR');
  if (defaultUrl) {
    alternates.push('    <xhtml:link rel="alternate" hreflang="x-default" href="' + xmlEscape(defaultUrl.url) + '" />');
  }

  return urls.map((item) => [
    '  <url>',
    '    <loc>' + xmlEscape(item.url) + '</loc>',
    ...alternates,
    '  </url>',
  ].join('\n')).join('\n');
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('writing', ({ data }) => data.draft !== true);
  const groups: SitemapUrl[][] = [
    [
      { locale: 'pt-BR', url: siteConfig.domain + '/' },
      { locale: 'en', url: siteConfig.domain + '/en/' },
    ],
    [
      { locale: 'pt-BR', url: siteConfig.domain + '/writing/' },
      { locale: 'en', url: siteConfig.domain + '/en/writing/' },
    ],
  ];

  const articles = new Map<string, SitemapUrl[]>();
  for (const post of posts) {
    const slug = getWritingSlug(post.id, post.data.slug);
    const locale = post.data.locale as Locale;
    const url = siteConfig.domain + getWritingPath(locale, slug);
    const group = articles.get(slug) ?? [];
    if (group.some((item) => item.locale === locale)) {
      throw new Error('Duplicate published Writing slug "' + slug + '" for locale "' + locale + '".');
    }
    group.push({ locale, url });
    articles.set(slug, group);
  }

  groups.push(...articles.values());

  const entries = groups.map(renderUrlGroup).join('\n');
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
