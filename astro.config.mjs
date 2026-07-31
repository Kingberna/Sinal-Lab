import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://sinal.studio';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
