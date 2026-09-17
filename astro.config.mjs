import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine définitif prévu (à ajuster si besoin) : adncielterritoires.fr
export default defineConfig({
  site: 'https://www.adncielterritoires.fr',
  integrations: [sitemap()],
  output: 'static',
});
