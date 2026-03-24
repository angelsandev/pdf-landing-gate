# Landing page con Astro PDF GATE: Descarga de PDFs con validación por email

### [V0.2.2] Update Componentes Nav - 2026-3-24
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Adaptar los estilos idénticos que en la web de `Desarrollo`, según componentes nuevos.
- **TopBar:** ✅
- **NavBar:** ✅
- **MainHeader:** ✅
- **Breadcrumb:** ✅ Añadir nuevos textos traducidos a `i18n.ts` para los Breadcrumbs e importar esas traducciones en el archivo `Breadcrumb.astro`.
- **Header.astro:** ✅




### [V0.2.1] Cambio Logo por idioma - 2026-3-24
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Modificar el Logo según el idioma seleccionado.
- **MainHeader.astro:** Añadir lógica para imortar todos los logos, crear mapa y seleccionar el logo dependiendo del idioma. 


### [V0.2.0] Traducciones Nav Bar - 2026-3-24
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Crear lógica para cambiar idioma automaticamente mediante el Dropdown seleccionando idioma.
- **Pruebas:** ✅ Probado `TopBar` `NavBar` y `MainHeader`, con todos los enlaces exactamente igual que en la web
- **Estructura:** Modificar `astro.config.ts` para indicar que la uRL de la web incorporará el `es, en, it.....`
- **i18n.ts:** Archivo donde están las traducciones del menú de navegación `TopBar` y la función para acceder a estas traducciones.
- **Props:** Añadir props a todos los archivos de navegación para que coja la variable `lang`.
- **navData.ts:** Archivo donde están las traducciones del menú de navegación `NavBar`.


### [V0.1.9] Traducciones Footer - 2026-3-23
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Comprobar todas las traducciones de textos y links en Footer.
- **navigation.ts:** Añadir textos correctos en cada idioma traducido. Añadir los enlaces a las páginas según su idioma.
- **navigation.ts:** Añadir títulos de cada sección en cada interface `FooterData`.
- **Footer.astro:** Utilizar la llamada a los títulos de cada sección.


### [V0.1.8] Footer - 2026-3-20
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Crear Footer con todos sus links, textos y traducciones.
- **Pruebas:** ✅ Falta comprobar los textos y links de los idiomas que sean exactamente los de la web original..
- **Estructura:** Crear `utils/navigation.ts` donde están traducciones de los elementos del footer.
- **Footer.astro:** Importar ese `utils/navigation.ts` para cambiar automaticamente los links y tetos de los elementos del footer.

### [V0.1.7] Links en Menú - 2026-3-20
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Colocar Links y probar. Comprobar performance 100%.
- **Enlaces:** Colocar enlaces en los distintos elementos del Menú.
- **Imágenes:** Importar imagen del Logo y utilizar etiqueta especial `Image` en `MainHeader.astro`.

### [V0.1.6] NavBar retocar elementos - 2026-3-20
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ `NavBar.astro` retocar alturas y padding, eliminar altura de textos individuales, exactamente igual que la pagina original.

### [V0.1.5] MainHeader retocar elementos - 2026-3-20
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ `MainHeader.astro` retocar alturas y padding y añadir imagen Logo EAN exactamente igual que la pagina original.

### [V0.1.4] Nuevo Menú Navegación - 2026-3-17
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Crear un Menú de navegación idéntico al de EAN. Probado, Idioma y Divisa exactamente igual.
- **Estructura:** Crear todos los archivos necesarios para los menús de navegación, dentro de la carpeta `navigation`.
- **Estructura:** Crear carpeta `utils` donde están archivos de `langauages.ts` y `currencies.ts`. Aquí se guardan los `interface` que hemos creado para tipar los idiomas y las divisas.


### [V0.1.3] Hero New3 section (imagen pequeña y form debajo) - 2026-3-17
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Probados todos los componentes de Hero correctos.
- **Estructura:** Crear componente `HeroNew3` y cambiar el HTML para que imagen y titulo arriba y el formulario abajo ocupando todo el ancho.

### [V0.1.2] Sticky-Typescript y separar script del HTML - 2026-3-16
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Pruebas de scroll, aparece y desaparece correcto y en el footer aparece ok.
- **Estructura:** Transformar el script de posición del scroll a `Typescript`.
- **Estructura:** Separar la lógica del elemento HTML de la lógica del script.
- **Estructura:** La lógica HTML está en el component `StickyForm.astro`. Se crea una `prop` para pasarle el id al componente, indicando si `id=sticky-cta`.
- **Estructura:** La lógica script está en el component `StickyController.astro`.
- **Layout.astro:** Se llama a los componentes. En el footer se llama al componente pasando una prop `sticky=false`. 

### [V0.1.1] Sticky component para boton de descarga - 2026-3-16
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Mostrar un elemento sticky con el input y boton de descarga cuando se haga scroll.
- **Pruebas:** ✅ Cuando se llegue al footer, este elemento desaparecerá para que se quede visible el footer.
- **Estructura:** Crear un nuevo componente `StickyEmail` en el cual se hará visible un elemento con el input y su botón. Aparece cuando se hace scroll más de 20% y desaparece cuando llegue a 95% para no tapar el footer.
- **Estructura:** Hacer la llamada del componente `StickyEmail` desde el `Layout.astro`.

### [V0.1.0] Hero New2 section (eliminar contenedor) - 2026-3-16
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Sección de botón de descargas `Hero` más grande y llamativa.
- **Estructura:** Crear un nuevo componente `HeroNew2` igual que HeroNew pero eliminando un contenedor que englobaba al input y boton. 

### [V0.0.9] Hero New section (email al centro) - 2026-3-16
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Sección de botón de descargas `Hero` más grande y llamativa.
- **Estructura:** Crear un nuevo componente `HeroNew` donde se visualiza el boton mas grande y el inpunt de email mas grande.



### [V0.0.8] Colores corporativos - 2026-3-16
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Añadir variables globales para modificar colores y adaptarlos a colores corporativos.
- **Estructura:** Se modifican colores en diferentes componentes: `Navbar`, `RelatedProducts`, `PageHeader`, `Layout`, `FAQ`, `Steps`, `Hero`
- **CSS:** Se añaden variables de colores específicos par autilizarlos globalmente

### [V0.0.7] FAQ section - 2026-3-14
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Introducir sección `FAQ` con preguntas frecuentes en modo acordeón.
- **Estructura:** Crear componente `FAQ.astro` dentro de carpeta `features`.
- **index.astro:** Llamada al componente `FAQ.astro`


### [V0.0.6] Pasos de la descarga - 2026-3-14
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Introducir unas `cards` que muestren los pasos a seguir para la descarga del PDF.
- **Estructura:** Crear componente `Steps.astro` dentro de carpeta `features`.
- **index.astro:** Llamada al componente `Steps.astro`



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
