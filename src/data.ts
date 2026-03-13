// src/data.ts

export const appData = {
    // Información de la marca/empresa
    name: "Manuales Técnicos Oficiales",
    description: "Accede a la biblioteca completa de manuales de usuario y guías de configuración rápida en formato PDF.",
    logo: "/assets/Descarga de PDF.webp", // imagen en src/assets/
    
    // SEO
    keywords: ["manuales pdf", "guías de usuario", "documentación técnica", "descargas"],

// Datos de Valoración
    rating: {
        score: "",
        count: "2.5K",
    },
//    ageRating: "5+",

    // Enlaces 
    downloadLinks: {
        pdfDownload: "/public/pdfs/UP5.2. Creación de usuarios para acceso remoto al servidor FTP - CE4.b).pdf", // Aquí irá la ruta del PDF
        pdfView: "#", // Aquí se puede poner una versión online o manual rápido
    },

    // Datos del manual principal (el que verá el usuario al entrar)
    featuredManual: {
        title: "Guía de Configuración Avanzada",
        version: "V2.0",
        releaseDate: "12 Mar, 2026",
        size: "4.2 MB",
        language: "Español (ES)",
        thumbnail: "/assets/Descarga de PDF.webp" // La imagen que se verá en la landing
    },

    // Enlaces de redes sociales
    socialLinks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/tecnoplc" },
        { name: "Web", url: "https://www.tecnoplc.com" }
    ]
} as const;
