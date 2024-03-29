# Modelo de Imagen a Texto con Traducción Automatizada

Este proyecto es un estudio del funcionamiento de dos modelos de IA: uno para convertir imágenes en texto utilizando HuggingFace y otro para traducir automáticamente el texto resultante del inglés al español.

## Descripción

El propósito de este proyecto es demostrar cómo integrar modelos de HuggingFace para realizar tareas específicas, como el análisis de imágenes y la traducción de texto. En este caso, utilizamos el modelo "Salesforce/blip-image-captioning-large" para convertir imágenes en texto descriptivo en inglés y luego traducimos ese texto al español utilizando el modelo "Helsinki-NLP/opus-mt-en-es".

## Funcionamiento

1. **Preparación del Entorno:** Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, instala las dependencias necesarias ejecutando `npm install`.

2. **Ejecución del Código:** Ejecuta el código proporcionado en el archivo index.js. Asegúrate de establecer las variables de entorno necesarias, incluyendo `HFTOKEN` que debería contener tu token de HuggingFace.

3. **Resultado:** Después de ejecutar el código, deberías ver dos resultados en la consola: el texto generado en inglés a partir de la imagen y su traducción al español.

## Ejemplo de Uso

```bash
# Clona el repositorio
git clone https://github.com/YampX/huggingFace_ImageToText
cd tu_repositorio

# Instala las dependencias
npm install

# Configura tus variables de entorno (asegúrate de tener tu token de HuggingFace)
export HFTOKEN="tu_token_de_huggingface"

# Ejecuta el código
npm run dev
