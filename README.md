# Correctia

**Correctia** es una aplicación web sencilla y **estática**, desarrollada con tecnologías modernas y potenciada por **Inteligencia Artificial** mediante la biblioteca [Puter.js](https://puter.com/). Su propósito es ofrecer una experiencia rápida, intuitiva y eficiente para transformar textos en distintos estilos y niveles de complejidad.

## Características principales

- Corrección inteligente de ortografía, gramática y estilo.
- Formalización de textos para un tono más académico o profesional.
- Adaptación a un estilo más informal y cercano.
- Simplificación de contenido complejo para hacerlo más accesible.
- Generación de resúmenes automáticos.
- Expansión de ideas con ejemplos y detalles adicionales.
- Historial local de interacciones (hasta 10 entradas).
- Alternancia entre modo claro y modo oscuro.
- Autenticación mediante Puter para acceder a las funcionalidades de IA.

## Tecnologías utilizadas

- HTML5, CSS3 (con [TailwindCSS](https://tailwindcss.com/)) y JavaScript (ES6+)
- [Puter.js](https://puter.com/) para autenticación y consultas al modelo de lenguaje
- Modelo utilizado: `gpt-4.1-nano` (vía Puter API)
- Lógica 100 % del lado del cliente: aplicación completamente estática

## Estructura de la aplicación

- `index.html`: interfaz de usuario principal
- `app.js`: contiene la lógica de autenticación, interacción con IA, manejo de historial, gestión del DOM, etc.
- Prompts prediseñados para cada acción, seleccionados dinámicamente por el usuario

## Funcionamiento

1. El usuario introduce un texto.
2. Selecciona una acción: Corregir, Formalizar, Simplificar, entre otras.
3. Si ha iniciado sesión mediante Puter, se genera un prompt y se consulta el modelo IA.
4. La respuesta se muestra en pantalla y se almacena localmente en el historial del navegador.

**Nota:** El uso de las funciones de IA requiere autenticación vía Puter.

## Instalación y uso

No se necesita instalación ni servidor. Basta con abrir el archivo `index.html` en cualquier navegador moderno.

```bash
git clone https://github.com/editorTK/correctia.git
cd correctia
# Abrir index.html en el navegador
```

Abre index.html en tu navegador favorito y ¡listo!


