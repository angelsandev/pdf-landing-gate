# EAN - PDF Landing Gate (Astro)

Este proyecto es una Landing Page de alto rendimiento construida con **Astro**, diseñada para la descarga de documentación técnica (PDF) y la visualización de productos relacionados. Se ha puesto especial énfasis en la **performance (100% en Lighthouse)**, la **accesibilidad** y una **lógica de internacionalización (i18n) y divisas dinámica**.

---

## 🚀 Tecnologías Principales

- **Framework:** [Astro 4.x](https://astro.build/) (Modo híbrido/estático).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y utilitario).
- **Estado Global:** [Nanostores](https://github.com/nanostores/nanostores) y `@nanostores/persistent` para persistencia en `localStorage`.
- **Tipado:** [TypeScript](https://www.typescriptlang.org/) para una arquitectura robusta y sin errores.
- **Despliegue:** [Vercel](https://vercel.com/).

---

## 🛠️ Estructura y Características Clave

### 1. Sistema de Divisas Dinámico (Currency System)
A diferencia de una SPA tradicional, hemos implementado una solución reactiva que funciona en una arquitectura de islas/estática:
- **Store Persistente:** Uso de Nanostores para guardar la preferencia del usuario (`EUR`, `USD`, `JPY`, etc.) y que se mantenga al recargar (localstorage).
- **Price Formatter Global:** Centralización de la lógica en `/src/utils/cart.ts` (basado en el código de producción original) y `/src/utils/priceFormatter.ts`.
- **Reactividad sin React:** Un observador global en el `Layout.astro` escucha cambios en el Store y actualiza automáticamente todos los elementos con la clase `.product-price-display` mediante atributos `data-base-price`.

### 2. Internacionalización (i18n)
- **Rutas Dinámicas:** Estructura de carpetas basada en `[locale]` para manejar `/es/`, `/en/`, `/it/`, etc.
- **Traducciones Centralizadas:** Sistema basado en `/src/utils/i18n.ts` que permite traducciones tanto en el servidor (Astro) como en los scripts del cliente.
- **Redirección Automática:** Configuración de un `index.astro` raíz para redirigir a la variante de idioma por defecto.

### 3. Optimización de Performance (Lighthouse 100)
- **LCP (Largest Contentful Paint):** Optimización de imágenes mediante el componente `<Image />` de Astro y asignación de `fetchpriority="high"` en el Hero.
- **Lazy Loading Estratégico:** El slider de productos relacionados se carga con un ligero retardo y `content-visibility: auto` para no penalizar la carga inicial.
- **Compresión:** Configuración de `astro.config.mjs` para minificación de HTML/CSS/JS y compresión de activos.

### 4. Componentes de Conversión
- **Sticky CTA:** Un componente inteligente (`StickyForm.astro`) (que muestra el input del Email y botón de descarga) controlado por un script de scroll (`StickyController.ts`) que aparece cuando el usuario desliza la página y se oculta al llegar al footer para evitar solapamientos.

---

### 📩 Lógica de Captación y Descarga

El flujo principal de conversión (descarga del PDF) está centralizado en el componente Hero:

- **Ubicación:** `src/components/features/Hero.astro` (y sus variantes `HeroNew`, `HeroNew3`).
- **Funcionamiento:** 1. El usuario introduce su correo electrónico en el campo `<input type="email">`.
    2. Al hacer clic en el botón de descarga, se debe capturar el valor del input.
    3. Este valor debe enviarse mediante una petición `fetch o axios` (POST) a un endpoint de `Astro`.
    4. **Backend-Astro:** El servidor se encargará de validar el email, gestionar el envío del archivo mediante un servicio de correo *Mailtrap* y devolver la respuesta de éxito o error.


---

## 🚀 Estrategia de Verificación y Descarga (OTP = One Time Password)

Para optimizar el flujo de captación de leads y asegurar la validez de los datos, se ha implementado un sistema de verificación por pasos (One-Time Password) integrando **Astro Endpoints**. Este enfoque permite centralizar la lógica del servidor sin depender de servicios externos como FastAPI durante el despliegue inicial.

### 📋 Flujo Lógico del Sistema

1.  **Captura de Lead (Frontend):**
    El usuario introduce su dirección de correo electrónico en el componente *Hero* y solicita la descarga del archivo PDF.

2.  **Generación y Envío (API Astro Server):**
    * El servidor genera de forma automática un código de verificación aleatorio de 6 dígitos.
    * Dicho código se almacena temporalmente en el estado del servidor o base de datos para su posterior validación.
    * Se realiza el envío de un correo electrónico al usuario utilizando **Mailtrap** (o proveedor compatible), notificándole su código único.

3.  **Interfaz de Verificación (UI):**
    Tras recibir la confirmación de envío por parte de la API, la interfaz bloquea la descarga directa y despliega un **Modal de Verificación**.

4.  **Validación de Identidad (Frontend):**
    El usuario debe introducir los 6 dígitos recibidos en su bandeja de entrada dentro de los campos específicos del modal.

5.  **Confirmación y Entrega (API Astro):**
    El servidor valida si el código introducido coincide con el generado originalmente. En caso de éxito, la API autoriza la transacción y entrega el enlace final para la descarga del recurso PDF.

---


## 📂 Estructura de Carpetas

```text
/src
  ├── assets/          # Imágenes y recursos estáticos
  ├── components/
  │   ├── conversion/  # StickyForm, StickyController (Lógica de captación)
  │   ├── footer/      # Footer multilingüe
  │   ├── navigation/  # Header, TopBar, MainHeader, Breadcrumbs
  │   └── features/    # FAQ, Steps, RelatedProducts
  ├── data/            # Datos estáticos y constantes
  ├── layouts/         # Layout principal con scripts globales
  ├── pages/
  │   └── [locale]/    # Páginas dinámicas por idioma
  │   └── api/                
  │       ├── send-otp.ts
  │       └── verify-otp.ts
  ├── store/           # Nanostores (currencyStore.ts)
  └── utils/           # i18n.ts, cart.ts, priceFormatter.ts
```

## 💡 Librerías Especiales Instaladas

Para mantener el control de las funcionalidades personalizadas, estas son las dependencias que se han añadido manualmente al proyecto:

| Librería | Propósito |
| :--- | :--- |
| **`nanostores`** | Motor de estados ligeros (el equivalente a "Zustand" en Astro). |
| **`@nanostores/persistent`** | Permite que la divisa se guarde en el `localStorage` de forma automática. |
| **`@astrojs/tailwind`** | Integración oficial para usar clases de Tailwind CSS en componentes `.astro`. |
| **`@astrojs/check`** | Motor de validación para que TypeScript revise archivos `.astro` además de los `.ts`. |
| **`@types/nodemailer`** | para comunicarnos con el servidor de correos (Mailtrap/Resend) `npm install nodemailer npm install @types/nodemailer -D`. |


---

### 📦 Instalación de Dependencias

Si acabas de clonar el proyecto o necesitas restaurar el entorno, no es necesario instalar las librerías una a una. Simplemente ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



### 🌐 Gestión de Traducciones (i18n)

El proyecto utiliza un sistema de internacionalización basado en diccionarios estáticos y tipados. A continuación se detalla la ubicación de cada bloque de contenido:

| Archivo | Contenido / Responsabilidad |
| :--- | :--- |
| **`src/utils/navData.ts`** | Contiene exclusivamente los textos, enlaces y submenús del menú de navegación superior y principal. |
| **`src/utils/footerData.ts`** | Gestiona todos los textos del **Footer**, incluyendo los grupos de enlaces y títulos de secciones. |
| **`src/utils/i18n.ts`** | **Archivo Central:** Contiene los textos generales de la web, placeholders de formularios, mensajes de error y todos los `aria-label` para accesibilidad. También incluye las traducciones del **Hero** (migradas recientemente). |


---

### 🛠️ ¿Cómo añadir una nueva traducción?

1. Abre el archivo `src/utils/i18n.ts`.
2. Añade la nueva "key" en el objeto de cada idioma (es, en, it, fr...).
3. En el componente `.astro`, asegúrate de recibir la prop `lang` y utiliza la función helper:
   ```astro
   ---
   import { useTranslations } from "../utils/i18n";
   const { lang } = Astro.props;
   const t = useTranslations(lang);
   ---
   <h2>{t("tu_nueva_clave")}</h2>
    ```




## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
