// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and the absolute link-preview (Open Graph) image URLs.
  site: 'https://spiringayam.com',
  // Outputs /about/index.html so pages work as clean URLs on any
  // Apache/LiteSpeed host without rewrite rules.
  build: { format: 'directory' },
});
