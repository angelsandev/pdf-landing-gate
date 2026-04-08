// src/utils/otpModalLogic.ts

export function initOTPModal() {

    const inputs = document.querySelectorAll<HTMLInputElement>("#otp-inputs input");
    const otpModal = document.getElementById("otp-modal") as HTMLDivElement | null;
    const resendBtn = document.getElementById("resend-link") as HTMLButtonElement | null;
    const verifyBtn = document.getElementById("verify-btn") as HTMLButtonElement | null;
    let currentEmail: string = ""; // Variable para guardar el email recibido del evento

    // Guard Clause: Comprobaciones de Seguridad.
    if (inputs.length === 0) return;
    if (!otpModal || !verifyBtn) return;

    ////////////////////////////////////////////////////////////////////////
    // Lógica para saltar de un input a otro automáticamente
    ////////////////////////////////////////////////////////////////////////

    inputs.forEach((input, index) => {
        input.addEventListener("input", (event: Event) => {
            const target = event.target as HTMLInputElement;
            // Si el usuario escribe algo y hay un siguiente input, salta a él
            if (target.value && index < inputs.length - 1) {
                (inputs[index + 1] as HTMLInputElement).focus();
            }
        });

        input.addEventListener("keydown", (event: KeyboardEvent) => {
            // Si pulsa "Borrar" y el campo está vacío, vuelve al anterior
            if (event.key === "Backspace" && !input.value && index > 0) {
                (inputs[index - 1] as HTMLInputElement).focus();
            }
        });
    });

    ////////////////////////////////////////////////////////////////////////
    // Lógica para abrir el Modal y Guardar el email para reenviar
    // (se ejecuta desde botón Download del Hero)
    ////////////////////////////////////////////////////////////////////////

    // Escucha el evento para abrir el Modal
    window.addEventListener("open-otp-modal", (event: any) => {
        if (otpModal) {
            currentEmail = event.detail?.email || ""; // Guardar el email recibido del evento
            console.log("Modal abierto. Email registrado para reenvío:", currentEmail);
            otpModal.classList.remove("hidden");
            otpModal.classList.add("flex");
            inputs[0]?.focus();              // Poner foco en primer input al abrir el Modal
        }
    });

    ////////////////////////////////////////////////////////////////////////
    // Lógica para REENVIAR CÓDIGO
    ////////////////////////////////////////////////////////////////////////

    resendBtn?.addEventListener("click", async () => {
        if (!currentEmail) return;

        // retardo 60 segundos para evitar spam de reenvíos al hacer varios clic
        let seconds = 60;
        resendBtn.disabled = true;
        resendBtn.classList.add("opacity-50", "cursor-not-allowed", "no-underline");

        const timer = setInterval(() => {
            seconds--;
            resendBtn.innerText = `Próximo reenvío de código en ${seconds}s`;

            if (seconds <= 0) {
                clearInterval(timer);
                resendBtn.disabled = false;
                resendBtn.innerText = "¿No has recibido el código? Reenviar";
                resendBtn.classList.remove("opacity-50", "cursor-not-allowed");
            }
        }, 1000);

        // Llamada a la API para reenvío del código al email guardado
        try {
            const locale = document.documentElement.lang || "es";
            const response = await fetch("/api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: currentEmail, locale }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Reenvío con éxito en servidor:", data);
            } else {
                console.error("Servidor rechazó el reenvío:", data.message);
            }
            console.log("Código reenviado a:", currentEmail);
        } catch (error) {
            console.error("Error al reenviar:", error);
        }
    });

    ////////////////////////////////////////////////////////////////////////
    // Lógica para VERIFICAR CÓDIGO
    ////////////////////////////////////////////////////////////////////////

    verifyBtn?.addEventListener("click", async () => {
        // Unir los valores de los 6 inputs
        const code = Array.from(inputs).map(i => (i as HTMLInputElement).value).join('');

        if (code.length !== 6) {
            alert("Introduce los 6 dígitos");
            return;
        }

        try {
            verifyBtn.disabled = true;
            verifyBtn.innerText = "Verificando...";

            // Llamada a la API de VERIFICAR
            const response = await fetch("/api/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: currentEmail,
                    code: code
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Verificación CORRECTA:", data);
                alert("¡Código correcto! Ahora empezará la descarga.");



                // LÓGICA PARA LA DESCARGA DEL PDF
                const pdfUrl = "/pdfs/guia-tecnica.pdf";    // ruta 
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "Guia_Tecnica_EAN.pdf";     // Nombre con el que se guardará el archivo
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);


                // CERRAR el modal
                otpModal?.classList.add("hidden");
                otpModal?.classList.remove("flex");

            } else {
                // Si el código no es correcto, saldrá este error
                alert("Error: " + data.message);
                // Limpiar inputs para volver a intentar
                inputs.forEach(input => (input as HTMLInputElement).value = "");
                inputs[0].focus();
            }
        } catch (error) {
            console.error("Error al verificar:", error);
            alert("Hubo un fallo en la conexión");
        } finally {
            verifyBtn.disabled = false;
            verifyBtn.innerText = "Verificar y descargar";
        }
    });

    ////////////////////////////////////////////////////////////////////////
    // Lógica Cerrar el Modal si se hace click fuera
    ////////////////////////////////////////////////////////////////////////

    window.addEventListener("click", (event: MouseEvent) => {
        if (otpModal && event.target === otpModal) {
            otpModal.classList.add("hidden");
            otpModal.classList.remove("flex");
        }
    });


} // initOTPModal()