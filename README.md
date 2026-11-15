# Memorias Vivas del Puente de Boyacá — sitio

Interfaz pública de lectura del archivo de saberes de la vereda Puente de Boyacá (Ventaquemada, Boyacá). Sitio estático, vanilla (HTML + CSS + JS), sin frameworks, sin analítica, desplegado con GitHub Pages.

**En vivo:** https://santhought.github.io/puente-boyaca-web/

## Qué es

Prototipo de lectura del inventario de patrimonio cultural inmaterial "Memorias Vivas del Puente de Boyacá" (54 pp., marzo de 2026), construido con permiso del equipo del proyecto. La fuente, la extracción página por página, las entradas curadas y los criterios editoriales viven en el archivo de datos privado: [puente-boyaca-saberes](https://github.com/SanThought/puente-boyaca-saberes). Este repo contiene solo los artefactos del sitio y la documentación de diseño.

Regla madre del archivo, respetada por el sitio: **el original no se toca, la extracción no se corrige, el contenido cita su página, y las contradicciones quedan visibles.**

## Decisiones de contenido de esta versión

- Los nombres de las personas quedan **reservados de manera temporal**, por decisión del proyecto (WhatsApp, 15-nov-2026).
- Las fotografías del documento (46 imágenes) aparecen como **espacios reservados**; no se publica ninguna imagen con personas.
- Las voces se citan tal como la fuente las registró, sin nombre cuando la fuente no lo da.
- El PDF original no se publica.
- La historia pública del monumento (siglo XVIII, batalla de 1819, monumento nacional 1920) se marca como **corroborada** con fuentes nombradas (Wikipedia, Banrepcultural); la memoria registrada en el inventario se marca como **documentada** con su página. Las tensiones entre ambas quedan visibles.

## Estructura

```
index.html          Una sola página: método, línea de tiempo, 16 fichas, cabos sueltos
assets/site.css     Sistema visual: papel, tinta, cuatro hilos de color (cocina, tierra, memoria, fiesta)
assets/site.js      Hebra de progreso, filtro por hilos, relaciones entre fichas, scroll-spy
docs/               Dirección de diseño e investigación de skills (referencias del proyecto)
```

Tipografía (Google Fonts, OFL): Fraunces (titulares), Newsreader (cuerpo), IBM Plex Sans y Plex Mono (aparato editorial). Única dependencia externa.

Accesibilidad: objetivos táctiles de 44px, `prefers-reduced-motion` respetado, navegación por teclado, estados de foco del navegador.
