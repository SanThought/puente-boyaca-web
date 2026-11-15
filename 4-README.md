# Memorias vivas del Puente de Boyacá (prototipo)

Archivo navegable de saberes, oficios, fiestas y relatos de la vereda Puente de Boyacá. Sitio estático (HTML, CSS y JavaScript sin dependencias de build), pensado para celular Android y escritorio.

Publicado en: https://santhought.github.io/puente-boyaca-web/

## Cómo está armado

- No es una página larga. Cada ficha es una página corta con su propia dirección (`#/f/jutes`, `#/d/cocina`, `#/tiempo`).
- Un mapa de relaciones entre las 16 fichas sirve de entrada y de brújula: marca dónde estás y qué fichas vecinas tienes.
- Algunas fichas traen un artefacto (paso a paso, comparación, línea del tiempo, voces) y una pregunta para pensar, marcada como pregunta del proyecto.
- Cada afirmación del documento lleva su página. Lo que viene de fuentes públicas se enlaza. Los desacuerdos entre fuentes quedan visibles, sin resolver.

## Archivos

- `index.html`: estructura y carga.
- `data.js`: contenido de las fichas, relaciones, línea del tiempo, voces y vacíos.
- `site.js`: navegación por rutas, mapa y componentes.
- `site.css`: estilo.

## Límites de este prototipo

- Los nombres de personas y negocios aparecen como [reservado]. Las fotografías con personas son marcos vacíos. El PDF original no se publica.
- La fuente completa, la extracción y la proveniencia viven en el repositorio privado de datos.
- Fuentes públicas consultadas: https://es.wikipedia.org/wiki/Puente_de_Boyac%C3%A1 y https://enciclopedia.banrepcultural.org/Puente_de_Boyac%C3%A1
