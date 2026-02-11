// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  output: 'server',

  integrations: [sanity({
    studioBasePath: '/admin/church'
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});