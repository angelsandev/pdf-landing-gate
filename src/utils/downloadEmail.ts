import { downloadService } from "../services/downloadService";

export const initDownloadEmail = () => {


    const forms = document.querySelectorAll<HTMLFormElement>('.download-form');

    forms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', async (event: Event) => {
            event.preventDefault();

            const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
            const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
            const email = emailInput?.value.trim();

            if (!email) return;

            try {

                if (submitBtn) submitBtn.disabled = true; // Deshabilita botón para evitar múltiples envíos
                const response = await downloadService.sendEmail(email);
                console.log('Email enviado con éxito: ', response);
                form.reset(); // Limpia formulario después de enviar


            } catch (error) {
                console.error('Error al enviar el email: ', error);
            } finally {
                if (submitBtn) submitBtn.disabled = false; // Rehabilita el botón
            }


        }); // End Listener

    }) // End Foreach

}; // End of init function
