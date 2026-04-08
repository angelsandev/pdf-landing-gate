import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, code } = body;

    // SIMULACIÓN DE VALIDACIÓN
    // Aquí hay que consultar la DB o Cache (Redis)
    const MASTER_CODE = "123456"; 

    // new Response=> forma de devolver respuesta personalizada en endpoint de Astro
    if (code === MASTER_CODE) {
      return new Response(JSON.stringify({
        success: true,
        message: "Código verificado correctamente"
      }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: "El código introducido es incorrecto"
      }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: "Error en el servidor"
    }), { status: 500 });
  }
};
