export type Locale = 'pt-BR' | 'en';

export interface LocalizedUrl {
  locale: Locale;
  url: string;
}

export function getWritingSlug(id: string, frontmatterSlug?: string): string {
  return frontmatterSlug ?? id.split('/').at(-1) ?? id;
}

export function getWritingPath(locale: Locale, slug: string): string {
  const prefix = locale === 'en' ? '/en' : '';
  return prefix + '/writing/' + slug + '/';
}
