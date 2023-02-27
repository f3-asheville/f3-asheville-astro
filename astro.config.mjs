// https://astro.build/config

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: '22i3wv6j',
      dataset: 'production',
      apiVersion: '2023-02-03',
      useCdn: true,
    }),
    svelte(),
  ],
});
