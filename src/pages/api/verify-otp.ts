import type { APIRoute } from 'astro';
import redis from '../../lib/redis';
import { useTranslations } from '../../utils/i18n';

export const POST: APIRoute = async ({ request }) => {
    
    let body;
        try {
            body = await request.json(); // request=> objeto con email y locale
        } catch {
            body = {};
        }
    
        const { email, code, locale } = body;
    
        // Elegir el idioma (por defecto español si no viene o no existe)
        const lang = locale ? locale : 'es';
        const t = useTranslations(lang);
    
    
    
    try {
        

        if (!email || !code) {
            return new Response(JSON.stringify({
                success: false,
                message: t("email.verify.data")
            }), { status: 400 });
        }

        // CONSULTA A REDIS
        // Busca el código guardado en send-otp.ts
        const savedCode = await redis.get(`otp:${email}`);

        // VALIDACIÓN LOGICA
        if (!savedCode) {
            return new Response(JSON.stringify({
                success: false,
                message: t("email.verify.expired")
            }), { status: 400 });
        }

        // Forzar conversión a string para una comparación correcta
        const normalizedSaved = String(savedCode).trim();
        const normalizedInput = String(code).trim();


        console.log(`Comparando: "${normalizedInput}" con "${normalizedSaved}"`);
        if (normalizedSaved === normalizedInput) {
            // ÉXITO: Código correcto.
            // Borrar el código de Redis inmediatamente para que no se pueda reutilizar (Seguridad)
            await redis.del(`otp:${email}`);

            return new Response(JSON.stringify({
                success: true,
                message: t("email.verify.codeok")
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            // ERROR: El código no coincide
            return new Response(JSON.stringify({
                success: false,
                message: t("email.verify.codeNook")
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }
    } catch (error) {
        console.error("Error en verify-otp:", error);
        return new Response(JSON.stringify({
            success: false,
            message: t("email.verify.error")
        }), { status: 500 });
    }
};