import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hernani.dev',
  output: 'static',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
