import type { APIRoute } from 'astro';
import redis from '../../lib/redis';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { email, code } = body;

        if (!email || !code) {
            return new Response(JSON.stringify({
                success: false,
                message: "Faltan datos obligatorios"
            }), { status: 400 });
        }

        // CONSULTA A REDIS
        // Busca el código guardado en send-otp.ts
        const savedCode = await redis.get(`otp:${email}`);

        // VALIDACIÓN LOGICA
        if (!savedCode) {
            return new Response(JSON.stringify({
                success: false,
                message: "El código ha expirado o no existe. Solicita uno nuevo."
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
                message: "Código verificado correctamente"
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            // ERROR: El código no coincide
            return new Response(JSON.stringify({
                success: false,
                message: "El código introducido es incorrecto"
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }
    } catch (error) {
        console.error("Error en verify-otp:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Error interno del servidor"
        }), { status: 500 });
    }
};