import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hernani.dev',
  output: 'static',
  build: { format: 'directory' },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
