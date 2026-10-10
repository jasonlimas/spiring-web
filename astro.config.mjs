// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once it's registered. Used for canonical
  // URLs and the absolute link-preview (Open Graph) image URLs.
  site: 'https://www.example.com',
  // Outputs /about/index.html so pages work as clean URLs on any
  // Apache/LiteSpeed host without rewrite rules.
  build: { format: 'directory' },
});
