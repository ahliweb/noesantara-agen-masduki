import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://agen.noesantara.co.id/kebumen-masduki',
  integrations: [sitemap()],
});
