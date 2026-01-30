import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// Note: For pure static sites on Cloudflare Pages, no adapter is needed.
// Cloudflare Pages automatically serves static files from the dist folder.
// Only add @astrojs/cloudflare adapter if you need SSR or edge functions.

export default defineConfig({
  output: 'static',
  site: 'https://longbrick.com',
  integrations: [
    partytown({
      config: {
        forward: [
          'dataLayer.push',  // Google Analytics
          'clarity'          // Microsoft Clarity
        ],
        // Debug mode - disable in production
        // debug: true,
      },
    }),
  ],
  vite: {
    build: {
      // Inline small assets for fewer requests
      assetsInlineLimit: 4096,
    },
  },
});
