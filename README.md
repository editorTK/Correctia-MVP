# Correctia

Correctia es un corrector y asistente de redacción basado en inteligencia artificial. La aplicación es totalmente estática y está construida con HTML, CSS y JavaScript. Mediante [Puter.js](https://puter.com/) se realizan las peticiones al modelo `gpt-4.1-nano`, por lo que se requiere iniciar sesión para acceder a las funciones de IA.

## Características principales

- Corrección inteligente de ortografía, gramática y estilo.
- Transformación del texto a un tono formal o casual.
- Simplificación de contenido complejo.
- Generación de resúmenes y expansión de ideas.
- Prompts personalizados con opción de guardarlos (hasta 2).
- Historial local de interacciones (máximo 10 resultados).
- Modal para enviar comentarios al equipo.
- Interfaz disponible en español e inglés.
- Tema claro u oscuro según la preferencia del sistema.
- Autenticación mediante Puter.

## Tecnologías utilizadas

- HTML5 y [TailwindCSS](https://tailwindcss.com/) para el diseño.
- JavaScript moderno (`js/main.js`) para toda la lógica del cliente.
- [Puter.js](https://puter.com/) para autenticación y consultas al modelo de lenguaje.
- Aplicación 100 % estática sin backend.

## Estructura del repositorio

- `index.html` – Página principal de la herramienta.
- `js/main.js` – Lógica de autenticación, gestión de prompts, historial e interfaz.
- `images/` – Recursos gráficos y logotipos.
- `Blog/blog.html` – Sección con noticias y consejos.
- `legal/` – Contiene `terms.html` y `privacy_policy.html`.
- `CNAME` – Dominio personalizado para despliegues en GitHub Pages.

## Funcionamiento básico

1. Escribe o pega el texto a procesar.
2. Elige alguna de las acciones disponibles.
3. Si estás autenticado en Puter, se envía el prompt y se muestra la respuesta.
4. Cada resultado se guarda en el historial local para consultarlo después.

**Nota:** Las funciones de IA solo están disponibles al iniciar sesión.

## Instalación y ejecución

Clona el repositorio y abre `index.html` en tu navegador favorito. También puedes lanzar un servidor estático, por ejemplo `npx serve`, para probarlo de forma local.

```bash
git clone https://github.com/editorTK/correctia.git
cd correctia
# abrir index.html o ejecutar npx serve
```

## Contribuciones

Se agradecen comentarios y mejoras. Puedes abrir issues o enviar pull requests.
