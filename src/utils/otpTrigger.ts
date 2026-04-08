// src/utils/otpTrigger.ts
import { isValidEmail } from "./validators";

interface ApiResponse {
    success: boolean;
    message: string;
}

////////////////////////////////////////////////////////////////////////
// Lógica para crear evento personalizado => abrir el Modal
// Lógica para el envío de Email
////////////////////////////////////////////////////////////////////////

let isInit = false;                                         // Evitar llamar 2 veces desde Hero y StickyForm

export function initOTPTriggers() {

    if (isInit) return;                                     // Si ya se ha llamado a la función, se sale

    const forms = document.querySelectorAll<HTMLFormElement>(".download-form");
    if (forms.length === 0) return;

    isInit = true;                                          // Marcar como inicializado para no volver a ejecutar                 

    forms.forEach((form) => {
        const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
        const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

        if (!emailInput || !submitBtn) return;
        const ORIGINAL_PLACEHOLDER = emailInput.placeholder;
        let isSubmit = false;                               // Evitar múltiples envíos mientras se procesa la solicitud    



        form.addEventListener("submit", async (event: Event) => {
            event.preventDefault();

            if (isSubmit) return;


            const email = emailInput.value.trim();
            const locale = document.documentElement.lang || "es";


            // Validación de EMAIL
            emailInput.classList.remove('border-red-500', 'placeholder-red-500', 'animate-shake');

            // VALIDACIÓN
            if (!isValidEmail(email)) {
                emailInput.value = ""; // Vaciar el input para que se vea el placeholder
                emailInput.placeholder = "Email no válido (ej: usuario@servidor.com)"; // Cambia placeholder

                emailInput.classList.remove('focus:ring-ean-blue', 'border-gray-300');
                emailInput.classList.add('border-red-500', 'focus:ring-red-500', 'placeholder-red-500', 'animate-shake');

                emailInput.focus();

                // Restaurar el placeholder original cuando el usuario vuelva a escribir
                emailInput.addEventListener('input', () => {
                    emailInput.placeholder = ORIGINAL_PLACEHOLDER;
                    emailInput.classList.remove('border-red-500', 'focus:ring-red-500', 'placeholder-red-500', 'animate-shake');
                    emailInput.classList.add('focus:ring-ean-blue', 'border-gray-300');
                }, { once: true });

                return;
            }

            try {
                isSubmit = true;
                submitBtn.disabled = true;                  // Deshabilitar botón para evitar hacer varios clics

                const response = await fetch("/api/send-otp", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, locale }),
                });

                const data: ApiResponse = await response.json();

                if (response.ok) {
                    console.log("API Response:", data);
                    const emailSent = email;                // Guardar el email para usarlo en el Modal para reenviar
                    form.reset();                           // Limpiar los form después de enviar
                    const EVENT_NAME = "open-otp-modal";
                    const openEvent = new CustomEvent(EVENT_NAME, {detail: {email: emailSent}}); // Crear evento personalizado, le enviamos el email tb
                    window.dispatchEvent(openEvent);
                } else {
                    alert("Error: " + data.message);
                }
            } catch (error) {
                console.error("OTP Error:", error);
                alert("Connection error");
            } finally {
                // Restaurar el botón
                submitBtn.disabled = false;
                isSubmit = false;
            }
        });
    });





}; // initOTPTriggers






