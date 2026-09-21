import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine définitif : adn-ciel-territoire.fr
export default defineConfig({
  site: 'https://www.adn-ciel-territoire.fr',
  integrations: [sitemap()],
  output: 'static',
});
