// src/utils/otpTrigger.ts

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

        let isSubmit = false;                               // Evitar múltiples envíos mientras se procesa la solicitud    

        form.addEventListener("submit", async (event: Event) => {
            event.preventDefault();

            if (isSubmit) return;
            if (!emailInput || !submitBtn) return;

            const email = emailInput.value;
            const locale = document.documentElement.lang || "es";

            if (!email || !email.includes("@")) {
                alert("Please enter a valid email");
                return;
            }

            // Feedback visual: deshabilitar el botón mientras carga
            //const originalText = submitBtn.textContent;

            //submitBtn.textContent = "...";

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

                    const EVENT_NAME = "open-otp-modal";
                    const openEvent = new CustomEvent(EVENT_NAME); // Crear evento personalizado
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






