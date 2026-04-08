# Landing page con Astro PDF GATE: Descarga de PDFs con validación por email

### [V0.5.5] Descarga del PDF - 2026-4-08
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Se descarga correctamente el pdf asignado. Hay un pdf asignado por defecto , solo se ha puesto una ruta, para probar.
- **optModalLogic.ts:** Implementar lógica para descarga del PDF que accede a la ruta `/public/pdfs/...`.
- **optModalLogic.ts:** Guard Clause, comprobaciones de seguridad.



### [V0.5.4] REDIS para guardar códigos y Verify Email en Modal - 2026-4-08
- **Pruebas:** ✅ Todo ok. 100% Performance 
- **Pruebas:** ✅ Comprobado envío de código a email, se guarda tb en Redis. Se introduce código en Modal y se verifica correctamente. Aparecen `Alerts` de Windows.
- **.env:** Añadir variables de entorno creadas en `Upstash` donde he creado una base de datos `REDIS`.
- **send-otp.ts:** Añadir lógica para guardar email y código en `REDIS`, con expiración a los `300` segundos.
- **verify-otp.ts:** Añadir lógica para coger el código de `REDIS` y compararlo.
- **verify-otp.ts:** Convertir código introducido y código guardado a `String` para que la comparación sea correcta, sino, no los compara bien.
- **Estructura:** Crear `/src/lib/redis.ts` donde se crear un nuevo cliente de `Redis`, una instancia de Redis.
- **Estructura:** Instalar el cliente de Redis Upstash con `npm`
- **Estructura:** Crear una Base de datos Redis en la plataforma `Upstash`.



### [V0.5.3] Verify Email en Modal - 2026-4-08
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Comprobación con un código provisional `123456` para comprobar el funcionamiento.
- **verify-otp.ts:** Lógica para comparar el código recibido en el email.
- **optModalLogic.ts:** Conectar el botón `Verify` con la API de verificar: `/api/verify-otp`. Lógica para hacer el `fetch` a esa API.

### [V0.5.2] Resend Email en Modal - 2026-4-08
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Probado reenvío de email desde Modal. Aparece mensaje opaco con la cuenta atrás para próximo envío permitido, para que no pulsen varias veces y se colapse.
- **OTPModal.astro:** Borrar todo el código script y hacer la llamada a la función de `otpModalLogic`.
- **optTrigger.ts:** Guardar el emil introducido para enviarlo al Modal y utilizarlo en el Modal para `Reenviar código`.
- **Estructura:** Crear `/utils/otpModalLogic.ts` para englobar toda la lógica del Modal, reenvío de código, etc...

### [V0.5.1] Validación Email en StickyForm - 2026-4-08
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Validación del email con `regex` en el `StickyForm`.
- **StickyForm.astro:** Colocar atributo `novalidate` en el `form` para que la validación la hagamos por JavaScript.


### [V0.5.0] Validación Email regex  - 2026-4-07
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Validación del email con `regex`. Se cambia el foco a color rojo y aparece texto en rojo.
- **OTPModal.astro:** Modificar dibujo `svg` eliminando la llave.
- **optTrigger.ts:** Añadir lógica para añadir texto y foco de input en rojo.
- **optTrigger.ts:** Se modifica el `placeholder` mediante `JavaScript`.


### [V0.4.9] Borrar Form automáticamente  - 2026-4-07
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Cuando aparezca el Modal, se debe borrar el email de los formularios para que, cuando vuelva el usuario, los vea vacíos.
- **optTrigger.ts:** Hacer reset al `form` para que el email desaparezca del formulario.
- **OTPModal.astro:** Aumentar el z-index a `z-120` para que el modal esté por encima del stickyForm que estaba a `z-100`


### [V0.4.8] Unificar Envío Emails  - 2026-4-07
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** Unificar código envío de emails de `Hero.astro` y `StickyForm.astro` para evitar código duplicado. Probado en formulario de Hero y StickyForm.
- **Pruebas:** Crear una función en `utils` con el código común y en los componentes simplemente llamar a esta función.
- **Estructura:** Crear `utils/otpTrigger.ts` para que coja todos los `forms` con clase llamada `download-form`.
- **optTrigger.ts:** Crear variable para evitar llamar 2 veces a la función ya que Mailtrap solo coge 1 petición cada 5 segundos.  


### [V0.4.7] Test Enviar Email  - 2026-4-07
- **Pruebas:** ✅ Todo ok. 100% Performance
- **Pruebas:** ✅ Prodabo desde `Hero.astro` y se envía el correo correcto con código a Mailtrap.
- **Hero.astro:** Crear script para enviar email, con `fetch` para llamar a la API de envio de email.


### [V0.4.6] Lógica abrir Modal  - 2026-4-07
- **Pruebas:** ✅ Todo ok. 100% Performance.
- **Pruebas:** ✅ Abrir el modal cuando se pulsa el botón de descarga: desde el `Hero` y desde el `StickyForm`.
- **Hero.astro:** Crear evento personalizado para abrir el modal cuando se pulsa botón de descarga.
- **StickyForm.astro:** Crear evento personalizado para abrir el modal cuando se pulsa botón de descarga.
- **OTPModal.astro:** Escuchar el evento para abrir el Modal.

### [V0.4.5] API Astro  - 2026-4-02
- **Pruebas:** ✅ Todo ok. 100% Performance en Vercel.
- **Pruebas:** ✅ Crear API Astro para poder enviar emails con Mailtrap. Probado a enviar email manualmente desde consola.
- **astro.config.mjs:** Eliminar `proxy` porque ya no se comunica con backend. Añadir `output: server` par autilizar endpoints de la API.
- **Estructura:** Añadir `pages/api/` y dentro: `send-otp.ts` y `verify-otp.ts` para envio y verificacion emails.
- **Estructura:** Añadir `/components/auth/OTPModal.astro` para crear el modal y la logica par aintroducir los numeros del codigo.
- **send-otp:** Lógica para envío de emails y configuración Mailtrap.
- **.env:** Para guardar usuario y contraseña de Mailtrap.
- **OTPModal.astro:** Crear modal con `svg` de prueba y campos para introducir el codigo. Crer script que permite el cambio del foco en estos campos donde se introduce el codigo. 


### [V0.4.4] Backend connection - 2026-4-01
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ❌ Pruebas para introducir email y generar script para poder enviar un endpoint con el valor del email al backend. Evidentemente, da error ya que el backend no está implementado.
- **Estructura:** Añadir carpeta `services` y dentro `api.ts y downloadService.ts` para preparar la conexión con el backend.
- **Estructura:** Añadir `/utils/downloadEmail.ts` con el script para obtener el email y enviar a backend.
- **astro.config.mjs:** Añadir `proxy` para conexión con backend. 
- **Hero.astro:** Llamar al script que recoge el email.
- **StickyForm.astro:** Llamar al script que recoge el email.
- **global.css:** Añadir estilo a botón cuando está `disabled`. Para que esté sombreado cuando lo pulsas, indicando que se está enviando.

### [V0.4.3] Forms unificar clases - 2026-3-31
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Unificar clases de los forms para envío del email al backend. Tanto en Hero como en StickyForm deben tener la misma clase.
- **Hero.astro:** Añadir clase `download-form` al `form`.
- **StickyForm.astro:** Añadir clase `download-form` al `form`.
- **Layout.astro:** Colocqr la prop del idioma en la llamada a `StickyForm`.

### [V0.4.2] Readme y eliminar addData - 2026-3-31
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Todo probado. El title cambia de idioma también.
- **Estructura:** Eliminar `appData.ts` ya que todas las traducciones del interior se han pasado a `i18n.ts`.
- **Layout.astro:** Importar traducciones y utilizar los textos de `i18n.ts`. Borrar la llamada a `appData`.
- **Layout.astro:** Borrar la prop `title` que se la pasábamos al llamar al `Layout` y por eso no se traducía.
- **README.md:** Crear un readme con instrucciones de funcionamiento.


### [V0.4.1] Lógica de Divisas cambio localstorage - 2026-3-31
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Crear archivo en utils para formatear el precio. Ahora, en cada componente solo debemos utilizar las clases y atributos para mostrar el precio según el localstorage. Todo ok. Performance 100%.
- **TopNav.astro:** Mejoras en script, tipado para Typescript, buenas prácticas...
- **Estructura:** Crear `/utils/cart.ts` para formatear los precios.
- **Estructura:** Crear `/utils/priceFormatter.ts` para crear script que sirva para utilizarlo en cualquier componente. Escucha el localStorage y formatea el precio correctamente.
- **RelatedProducts.astro:** Añadir clase  `product-price-display` y atributo `data-base-price`.
- **Layout.astro:** Llamar a la función de formatear precios, en un script, al cargar la página.
- **currencyStore.ts:** Añadir elementos `decimal` y `thousands`.


### [V0.4.0] Lógica de Divisas cambio localstorage - 2026-3-31
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Funciona todo, al seleccionar la nueva divisa, se cierra el dropdown.
- **Pruebas:** Instalar librería para control de localstorage: `npm install nanostores @nanostores/persistent`. Es igual que `zustand` en React.
- **TopNav.astro:** Modificar HTML y añadir script para el cambio automático de divisa.
- **Estructura:** Crear `/store/currencyStore` para el control del localstorage.

### [V0.3.9] Colores botones - 2026-3-30
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Modificar el color azul para corregir problema accesibilidad, ahora 100%.
- **global.css:** Cambiar azul `#428bca` por este: `#3370a5`.
- **StickyForm.astro:** Modificar alineación del container para mostrar el correo y botón más centrados.

### [V0.3.8] Aria-label update accesibility - 2026-3-30
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** Añadir `aria-label` en botones, forms, etc... con traducciones automáticas.
- **MainNav.astro:** Añadir todos los `aria-label` necesarios, con traducciones automáticas (no todos) que cogen de `i18n.ts`.
- **RelatedProducts.astro:** Añadir todos los `aria-label` para los botones, con traducciones automáticas que cogen de `i18n.ts`.
- **StickyForm.astro:** Añadir todos los `aria-label` para los botones, con traducciones automáticas que cogen de `i18n.ts`. Añadir las props para `lang` y para `isSticky`.

### [V0.3.7] Traducciones container PDF - 2026-3-30
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Cambio correcto de idiomas en el container del PDF. Se utilizan traducciones de `i18n.ts`.
- **data.ts:** Eliminar elementos que no se utilizaban.
- **i18n.ts:** Añadir traducciones para textos del Hero.astro y utilizar dichos textos, en lugar de usar los de data.ts
- **TopNav.astro:** Eliminar `hidden` ya que impedía ver este menú en dispositivos móviles. 

### [V0.3.6] Problemas Performance - 2026-3-30
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Corregir error NO LCP al ejecutar el performance de Lighthouse para obtener el rendimiento.
- **Pruebas:** ✅ Problema principal: se ejecutaba el script del `RelatedProducts` al inicio, por tanto, se estaban cargando todas las imagenes del slider y esto hacía que `lighthouse` no detectara el LCP. Solución: colocar retardo para iniciar el script.
- **Header.astro:** Añadir `relative md:sticky`.
- **TopNav.astro:** añadir hidden lg:block
- **MainNav.astro:** añadir class="hidden md:flex
- **Header.astro:** añadir relative md:sticky
- **Hero.astro:** astro añadir texto más grande para que se reconozca en LCP en el `<h1>`: `text-3xl md:text-5xl`. Antes solo tenia `text-2xl`
- **RelatedProducts.astro:** Colocar retardo para ejecutar el script del slider, para esperar a que se cargue toda la página primero.
- **RelatedProducts.astro:** Colocar `style=invisible` al contenedor del slider para no cargarlo al inicio. Se carga después del retardo.

### [V0.3.5] Problemas Performance - 2026-3-27
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ 
- **MainNav:** Quitar `hidden` para que el logo sea visible en móvil + añadir aria-label al buscador.
- **Hero:** Mantener fetchpriority="high" en la imagen y asegurar que el h1 sea el único de la página.
- **Breadcrumb:** Cambiar h1 por p
- **RelatedProducts.astro:** Al usar content-visibility: auto, el navegador ignora la complejidad de los 291 elementos del DOM

### [V0.3.4] Problemas Performance - 2026-3-27
- **Pruebas:** ✅ Todo ok.
- **astro.config.mjs:** Modificar el `defineConfig` para añadir compresión y minificación

### [V0.3.3] Problemas Performance - 2026-3-27
- **Pruebas:** ✅ Todo ok.
- **astro.config.mjs:** Modificar el `defineConfig` para añadir compresión y minificación y llamada a VERCEL.
- **Estructura:** Asignar usuario `angelsandev` para que aparezca el nombre en los commits.

### [V0.3.2] Performance y redirección URL - 2026-3-27
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Problema con el Performance que no cargaba el LCP. Debido a que en la URL no se cargaba inicialmente el `/es`.
- **Estructura:** Crear un `index.astro` dentro de `pages` y fuera de `[locale]` para indicar la redirección de la URL a `/es`.
- **Layout.astro:** Modificar la URL canonical para que ahora apunte a la URL del servidor de `VERCEL`.
- **Estructura:** Se ha desplegado la aplicación en `VERCEL` para comprobar cómo trabaja en un servidor de vercel. Se enlaza con el repositorio de Github automaticamente.


### [V0.3.1] Performance y mejora en imágenes - 2026-3-27
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Problema con el Performance y las imágenes, ya que vienen del servidor de EAN y esto es un problema.
- **astro.config.mjs:** Modificar el `defineConfig` para añadir compresión y aceptar que las imágenes vienen de un servidor externo EAN.
- **Layout.astro:** Corregir y eliminar la importacion de funtes de `Googleapis` que no se utilizaban.
- **Hero.astro:** Modificar opacidades que no le gustan a las métricas de Lighthouse.
- **global.css:** Eliminar estilos para `body`.

### [V0.3.0] Update Hero traducciones idiomas - 2026-3-26
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Probar textos en email, placeholder y botón de descarga todo ok en los idiomas.
- **i18n.ts:** Añadir nuevas traducciones.
- **index.astro:** Pasar parámetros `props` del padre al hijo para usar el idioma en `Hero.astro`.
- **Hero.astro:** Definir props, importar traducciones...


### [V0.2.9] Script slider - 2026-3-26
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Probar slider con las flechas derecha e izquierda y ver desplazamientos. También responsive.
- **RelatedProducts.astro:** Añadir `script` para capturar eventos de los botones e interactuar el slider.


### [V0.2.8] Related Products añadir productos - 2026-3-26
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Probar a visualizar todos los productos de la lista en el slider. Cambio de idioma automatico para el título del slider.
- **dataProducts.ts:** Añadir archivo de lista de productos con datos aleatorios para mostrar en el slider.
- **RelatedProducts.astro:** Importaciones de idiomas y lista de productos. Utilizar Props para idiomas.
- **index.astro:** Pasar parámetros `props` del padre al hijo para usar el idioma en `RelatedProducts.astro`.

### [V0.2.7] Related Products igual que Products Box - 2026-3-25
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Añadir el `slider` de productos relacionados igual que en web de Desarrollo. Productos colocados manualmente para pruebas.
- **RelatedProducts.astro:** Añadir todos los estilos idénticos a la web de Desarrollo.

### [V0.2.6] Eliminar DevToolBar - 2026-3-25
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Eliminar la barra de configuración de Astro que aparece por defecto abajo del todo.
- **astro.config.mjs:** Modificar el `defineConfig` para inhabilitar el `DevToolBar`.

### [V0.2.5] Update Footer - 2026-3-25
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Modificar el Footer para dejarlo igual que la web de Desarrollo.
- **Footer.astro:** Colocar los estilos de Tailwind exactamente igual que en la web de desarrollo. Modificar alguna altura de texto. Implementar la lógica para acceder a las traducciones.


### [V0.2.4] Dropdown script y Nombres componentes de Nav - 2026-3-25
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ Modificar los nombres de los componentes de Navegación para ser idénticos a la web en Desarrollo.
- **Pruebas:** ✅ Añadir script para activar y desactivar Dropdown de Divisa y Idioma. Antes no funcionaban en pantallas pequeñas.
- **TopNav.astro:** Añadir un indice `z-110` al dropdown de Idioma y Divisa, ya que se quedaban por debajo del elemento sticky del MainNav.
- **Estructura:** Crear carpeta `OLD` donde guardar todos los componentes viejos de momento como copia de seguridad.
- **TopNav.astro:** Se añade script para captar el `target` y activar y desactivar los dropdown cuando se hace clic en botón y fuera de él.


### [V0.2.3] Solucionar sticky header - 2026-3-24
- **Pruebas:** ✅ Todo ok.
- **Pruebas:** ✅ No funcionaba el sistema `sticky` para el `MainHeader`.
- **Pruebas:**  Eliminar la propiedad sticky de dentro del `Mainheader` y sacar esa propiedad al `Header.astro`. Se ha probado d emuchas formas, y el problemas está al utilizar la etiqueta HTML `<header>`. Se consigue el funcionamiento sticky usando `header` unicamente para el componente `MainHeader.astro`.



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
