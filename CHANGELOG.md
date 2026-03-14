# Landing page con Astro PDF GATE: Descarga de PDFs con validación por email

### [V0.0.5] Eliminar Dark mode - 2026-3-14
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Eliminar todos los estilos `dark` que existían para simular un modo oscuro.
- **Pruebas:** ✅ Se elimina de todos los compnentes y se elimina el script para manejo del modo oscuro.
- **CSS:** Se eliminan las clases creadas en el `global.css`.

### [V0.0.4] Header y Breadcrumb - 2026-3-14
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear componente para Header, crear Breadcrumb con `h1` y link en el breadcrumb.
- **Estructura:** Crear componente `PageHeader.astro`
- **Layout.astro:** Llamada al componente `PageHeader`
- **PageHeader.astro:** Crear Breadcrumb efecto `Chevron`.

### [V0.0.3] Menú NavBar  - 2026-3-13
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear barra menú Navbar, de modo `sticky`
- **Estructura:** Crear componente `Navbar.astro`
- **Layout.astro:** Llamada al componente `Navbar`


### [V0.0.2] Landing Astro PDF-Gate  - 2026-3-13
- **Pruebas:** ✅ Todo ok. 
- **index.ts:** Crear un `interface` donde definir cada `relatedProduct` y utilizar este tipo en el componente `RelatedProducts.astro`.
- **Hero.astro:** Crear un input para introducir el email.
- **RelatedProducts.astro:** tipar la variable `related` ya que se importa del `index.ts`


### [V0.0.1] Inicio Landing Astro PDF-Gate  - 2026-3-13
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear proyecto con imagen principal de descarga y descripcion y boton de descarga. Añadir un carrusel de Productos relacionados (solo imagenes).
- **Estructura:** Crear estructura de carpetas con `pages` `assets` `components`.
- **Estructura:** Crear Layout
- **Estructura:** Crear `data.ts` donde se inicializan variables globales.
- **index.astro:** Crear contenedores para mostrar PDF con información y botón de descarga.
- **CSS:** Crear estilos globales para ver todo correctamente en el Front, en `global.css`.
- **Tailwind CSS:** Instalar Tailwind y trabajar e importar la librería de Tailwind.
