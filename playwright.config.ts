import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  /* Ejecución en paralelo para ir más rápido */
  fullyParallel: true,
  /* Fallar el build en CI si te dejas un .only en el código */
  forbidOnly: !!process.env.CI,
  /* Reintentar si falla en CI */
  retries: process.env.CI ? 2 : 0,
  /* Reporte en HTML para ver qué falló con capturas de pantalla */
  reporter: 'html',

  use: {
    /* Base URL donde corre Astro en local */
    baseURL: 'http://localhost:4321',
    // 'on' -> Graba siempre
    // 'retain-on-failure' -> Solo guarda si el test falla
    // 'on-first-retry' -> Solo si falla y se reintenta
    trace: 'on',
    /* Captura de pantalla si el test falla */
    screenshot: 'only-on-failure',
  },

  /* Probar en diferentes navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Opcional: Probar en móvil */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  /* Lanza tu servidor de Astro automáticamente antes de los tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
