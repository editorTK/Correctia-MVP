# Correctia

Correctia es un corrector de textos y generador de contenido que funciona completamente en el navegador. La aplicación emplea **Puter.js** para la autenticación y para enviar consultas al modelo `gpt-4.1-nano`. No requiere backend propio: todos los datos se procesan directamente en tu dispositivo y se envían a la API de Puter cuando la IA entra en acción.

## Características principales

- Corrección automática de ortografía, gramática y estilo.
- Transformación del texto a un tono formal o casual.
- Simplificación de fragmentos complejos para hacerlos más claros.
- Generación de resúmenes y expansión de ideas.
- Soporte para prompts personalizados con opción de guardado local.
- Historial de hasta diez interacciones almacenado en `localStorage`.
- Interfaz disponible en español o inglés.
- Tema claro/oscuro configurable desde el panel de ajustes.
- Páginas de ayuda y blog con consejos de redacción.

## Tecnologías utilizadas

- HTML5 y CSS3 con [TailwindCSS](https://tailwindcss.com/).
- JavaScript moderno (`js/main.js`).
- [Puter.js](https://puter.com/) para iniciar sesión y consultar el modelo de IA.

## Estructura de la aplicación

- `index.html` – interfaz principal del corrector.
- `herramientas/articulos.html` – generador de artículos con IA.
- `Blog/blog.html` – sección de noticias y trucos de escritura.
- `legal/` – políticas de privacidad y términos de uso.
- `js/` – código fuente de la aplicación (`main.js` y utilidades).

## Funcionamiento básico

1. Escribe o pega tu texto en el área principal.
2. Elige una de las acciones disponibles o define tu propio prompt.
3. Si estás autenticado en Puter, se enviará la petición al modelo de IA.
4. El resultado se muestra de inmediato y queda guardado en tu historial local.

**Importante:** las funciones que dependen de la inteligencia artificial solo están disponibles para usuarios autenticados mediante Puter.

## Instalación y uso

Clona el repositorio y abre `index.html` en tu navegador. También puedes publicar la carpeta en cualquier servidor estático.

```bash
git clone https://github.com/editorTK/correctia.git
cd correctia
# abrir index.html en tu navegador preferido
```

¡Con eso basta para empezar a usar Correctia!
