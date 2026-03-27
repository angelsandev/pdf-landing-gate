// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss', // Más rápido y mejor que el estándar para Tailwind 4
      minify: 'terser',          // Terser es más lento pero falla menos que esbuild en minificación
    }
  },

  image: {
      domains: ['www.electricautomationnetwork.com'], // Para mejorar Performance: "Use efficient cache"
    },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'it', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: true           // Esto hace que la URL sea siempre /es/, /en/, etc.
    }
  },

  // Para mejorar Performance : errores minificación
  compressHTML: true,

  devToolbar: {
    enabled: false
  },

  build: {
    inlineStylesheets: 'always', // Para mejorar Performance : errores minificación
    assets: '_assets',
  },

  adapter: vercel()
});