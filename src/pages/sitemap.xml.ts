import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection('writing', ({ data }) => data.draft !== true);
  const urls = [
    siteConfig.domain + '/',
    siteConfig.domain + '/writing/',
    ...posts.map((post) => siteConfig.domain + '/writing/' + post.id + '/'),
  ];

  const entries = urls.map((url) => '  <url><loc>' + url + '</loc></url>').join('\n');
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
