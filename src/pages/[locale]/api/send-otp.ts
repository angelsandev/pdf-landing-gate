export const prerender = false; // Forzamos a que se ejecute en el servidor (SSR)
import type { APIRoute } from 'astro';
import { record } from 'astro:schema';
import nodemailer from 'nodemailer';
import redis from '../../../lib/redis';
import { useTranslations } from '../../../utils/i18n';
import { Resend } from 'resend'; // Importar el SDK de Resend

// Inicializar Resend con la API Key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Diccionario rápido de mensajes (luego moverlo a i18n)
const messages: Record<string, { subject: string; body: string }> = {
    es: { subject: "Tu código de descarga", body: "Tu código de verificación es: " },
    en: { subject: "Your download code", body: "Your verification code is: " },
    fr: { subject: "Votre code de téléchargement", body: "Votre code de vérification est : " },
    de: { subject: "Ihr Download-Code", body: "Ihr Verifizierungscode lautet: " },
    it: { subject: "Il tuo codice di download", body: "Il tuo codice di verifica è: " },
    pt: { subject: "Seu código de download", body: "Seu código de verificação é: " },
} as const;

export const POST: APIRoute = async ({ request }) => {

    let body;
    try {
        body = await request.json(); // request=> objeto con email y locale
    } catch {
        body = {};
    }

    const { email, locale } = body;

    // Elegir el idioma (por defecto español si no viene o no existe)
    const lang = messages[locale] ? locale : 'es';
    const content = messages[lang];
    const t = useTranslations(lang);

    try {

        // Detectar si estamos en modo desarrollo (npm run dev)
        const isDev = import.meta.env.DEV;

        // Validación básica
        // new Response=> forma de devolver respuesta personalizada en endpoint de Astro
        if (!email) {
            return new Response(JSON.stringify({
                message: t("email.send.missing")
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }



        // Generar el OTP (6 dígitos aleatorios)
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        // GUARDAR EN REDIS (Expiración en 5 minutos = 300 segundos)
        // Usamos una clave tipo "otp:usuario@email.com" para identificarlo
        await redis.set(`otp:${email}`, otpCode, {
            ex: 300
        });

        // LÓGICA DE ENVÍO DE EMAIL
        if (isDev) {
            // EN DESARROLLO: No gastamos Mailtrap, lo vemos por consola
            console.log("-----------------------------------------");
            console.log("🚀 MODO DESARROLLO ACTIVADO");
            console.log(`📩 Email destino: ${email}`);
            console.log(`🔑 CÓDIGO OTP: ${otpCode}`);
            console.log("-----------------------------------------");



            const { data, error } = await resend.emails.send({
                from: 'EAN <onboarding@resend.dev>', // Si no existe un dominio, usa este por defecto
                to: [email],
                subject: content.subject,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                        <h2 style="color: #3370a5;">${content.subject}</h2>
                        <p style="font-size: 16px;">${content.body}</p>
                        <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #1f2937;">
                            ${otpCode}
                        </div>
                    </div>
                `,
            });

            if (error) {
                console.error("Error de Resend:", error);
                throw new Error("Fallo en el envío de email");
            }


            // Ver el código en la consola de npm run dev o en logs de Vercel
            console.log(`[OTP] Email: ${email} | Code: ${otpCode} | Lang: ${lang}`);
        } else {
            // EN PRODUCCIÓN (VERCEL): Usamos RESEND real

            const { data, error } = await resend.emails.send({
                from: 'EAN <onboarding@resend.dev>', // Si no existe un dominio, usa este por defecto
                to: [email],
                subject: content.subject,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                        <h2 style="color: #3370a5;">${content.subject}</h2>
                        <p style="font-size: 16px;">${content.body}</p>
                        <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #1f2937;">
                            ${otpCode}
                        </div>
                    </div>
                `,
            });

            if (error) {
                console.error("Error de Resend:", error);
                throw new Error("Fallo en el envío de email");
            }


            // Ver el código en la consola de npm run dev o en logs de Vercel
            console.log(`[OTP] Email: ${email} | Code: ${otpCode} | Lang: ${lang}`);


        }


        return new Response(JSON.stringify({
            success: true,
            message: t("email.send.success"),
            // debug_otp: otpCode
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Error en send-otp:", error);
        return new Response(JSON.stringify({
            message: t("email.send.error")
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
