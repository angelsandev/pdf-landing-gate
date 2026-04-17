import { test, expect } from '@playwright/test';

test.describe('Flujo de autenticación OTP', () => {

  // page => objeto Fixture => ventana del navegador
  test('debe mostrar el modal de OTP tras introducir un email válido', async ({ page }) => {
    // 1. Navegar a la versión en español
    await page.goto('/es/');

    // 2. Definir los elementos usando los IDs reales 
    const emailInput = page.locator('#email');
    const submitButton = page.locator('#hero-download');
    const modal = page.locator('#otp-modal');

    // 3. Rellenar el formulario
    await emailInput.fill('geletesan@hotmail.com');
    
    // 4. Hacer clic en el botón de descarga
    await submitButton.click();

    // 5. Verificar que el modal se vuelve visible
    // Usamos un timeout de 10 segundos porque la API de envío puede tardar un poco
    await expect(modal).toBeVisible({ timeout: 19000 });

    // 6. Verificar que dentro del modal están los 6 inputs de código
    const otpInputs = page.locator('#otp-inputs input');
    await expect(otpInputs).toHaveCount(6);

    // 7. Opcional: Probar a escribir en el primer cuadradito
    await otpInputs.first().fill('1');
    await expect(otpInputs.first()).toHaveValue('1');
  });

  test('debe mostrar error de validación HTML5 si el email es incorrecto', async ({ page }) => {
    await page.goto('/es/');
    const emailInput = page.locator('#email');
    
    await emailInput.fill('correo-no-valido');
    await page.locator('#hero-download').click();

    // Comprobar que el navegador marca el campo como inválido (validación nativa)
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValid).toBe(false);
  });
});
