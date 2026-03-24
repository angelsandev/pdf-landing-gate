// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'it', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: true           // Esto hace que la URL sea siempre /es/, /en/, etc.
    }
  }
  });