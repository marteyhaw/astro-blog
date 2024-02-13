import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://main--gilded-chaja-5f4cb6.netlify.app/',
  integrations: [preact()]
});