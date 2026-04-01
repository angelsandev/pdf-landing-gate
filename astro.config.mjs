// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false, // Esto fuerza a que todo el CSS sea una sola pieza
      chunkSizeWarningLimit: 1000,
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
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