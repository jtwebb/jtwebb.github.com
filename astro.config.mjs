import { defineConfig } from 'astro/config';
import { SITE } from './src/config.mjs';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  trailingSlash: 'never',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [sitemap()]
});