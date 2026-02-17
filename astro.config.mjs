// astro.config.mjs - Astro configuration with Tailwind.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alvarezbarber.netlify.app',
  integrations: [tailwind()]
});
