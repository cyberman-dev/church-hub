// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  output: 'server',

  integrations: [sanity({
    projectId: process.env.SANITY_PROJECT_ID || '',
    dataset: process.env.SANITY_DATASET || '',
    useCdn: false,
    studioBasePath: '/admin/church'
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});