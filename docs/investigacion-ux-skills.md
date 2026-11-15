# Investigación: skills de diseño y direcciones UX/UI
## Proyecto: Puente de Boyacá — atractivos y saberes
Fecha: 14 de noviembre de 2026 (revisado)

### Por qué este documento
El primer prototipo se rechazó por sentirse como un blog genérico. Antes de escribir más código, este documento (1) audita skills de agente publicados externamente que aportan diseño creativo y minimalista, y (2) propone direcciones UX/UI interactivas arraigadas en el oficio y el paisaje local. Nada de lo propuesto aquí está implementado todavía.

---

## 1. Skills de agente auditados

### Fuente principal: anthropics/skills (publicado por Anthropic)
- Repo: https://github.com/anthropics/skills — creado 2025-09-22, actualizado al día de esta revisión, ~195.000 estrellas.
- Licencia: Apache 2.0 — verificada individualmente en el LICENSE.txt de cada skill citado abajo.
- Aviso del propio repo: "provided for demonstration and educational purposes only… always test skills thoroughly in your own environment".

| Skill | Qué aporta | Tipo | Resultado de la revisión | Encaje |
|---|---|---|---|---|
| **[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)** | Guía para diseño visual distintivo: tipografía, paleta, layout, anti-patrones "de plantilla" | Solo instrucciones (sin scripts) | Sin señales de inyección ni instrucciones ocultas | **Alto** — diagnostica justo lo que hizo genérico al primer prototipo |
| **[algorithmic-art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art)** | Arte generativo con p5.js (semillas, campos de flujo, partículas) | Instrucciones + plantilla viewer.html | Contenido revisado; la plantilla trae marca/tipografías de Anthropic (Poppins/Lora) que habría que reemplazar | Medio-alto — motivos textiles generativos |
| **[web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder)** | Artefactos React+TS+Vite+Tailwind+shadcn empaquetados a un solo HTML | Instrucciones + 2 scripts bash (init/bundle) | init-artifact.sh revisado (323 líneas): scaffolding estándar npm/pnpm, sin patrones de exfiltración; exposición normal de cadena de suministro npm; el script de bundle no fue auditado | Bajo-medio — más pesado que la preferencia de sitio estático vanilla |
| **[webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing)** | Pruebas de apps web con Playwright (screenshots, selectores) | Instrucciones + scripts Python | Texto revisado; instruye ejecutar sus scripts como cajas negras sin leerlos — eso es un límite de revisión a tener en cuenta | Medio — verificación del sitio |
| **[canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design)** | Piezas visuales estáticas PNG/PDF | Instrucciones + directorio de fuentes | ⚠️ Ver nota abajo sobre un pasaje problemático | Bajo para un sitio web |
| **[theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory)** | 10 temas prefabricados de color/fuentes | Instrucciones + temas + PDF muestra | Revisado; los presets son genéricos por definición | Bajo |

**Nota sobre canvas-design:** la mayor parte de cualquier skill son instrucciones normativas al agente ("haz X, evita Y") — eso es ordinario y esperado. El problema específico aquí es un pasaje redactado como si fuera una frase que el usuario ya dijo (pidiendo más pulido), es decir, una aprobación fabricada dentro del prompt para empujar al agente a iterar más. No es una instrucción normativa común: es texto forjado como habla del usuario. Si se adopta este skill, ese pasaje debe eliminarse.

### Ecosistema comunitario (superficie de descubrimiento, no auditado pieza por pieza)
- **VoltAgent/awesome-agent-skills** — https://github.com/VoltAgent/awesome-agent-skills — lista curada (licencia MIT) de 1000+ skills de equipos oficiales y comunidad, compatible con varios agentes; actualizada al día de esta revisión. Cada skill individual requiere su propia revisión antes de adoptarse.
- Registries/directorios: https://skills.sh y https://agentskills.io.

### Evidencia de riesgo (por qué la cautela está justificada)
- Estudio "Agent Skills in the Wild" (https://arxiv.org/html/2601.10338): el 26,1% de 31.132 skills analizados de dos marketplaces contiene al menos un patrón de vulnerabilidad; exfiltración de datos 13,3% y escalamiento de privilegios 11,8% son los más frecuentes; los skills con scripts ejecutables tienen 2,12× más probabilidad de contener vulnerabilidades que los de solo instrucciones.
- Datadog Security Labs (https://securitylabs.datadoghq.com/articles/malicious-skills-supply-chain-risks-in-coding-agents-with-dynamic-context/): documenta skills maliciosos para agentes de código y el riesgo del "contexto dinámico" (comandos shell que corren antes de que el modelo lea el skill).

### Reglas prácticas de adopción
1. Preferir skills de solo instrucciones sobre los que traen ejecutables.
2. Leer cualquier script incluido antes de correrlo; nada de cajas negras.
3. Rechazar/eliminar texto dentro de un skill redactado como si fueran frases o aprobaciones del usuario.
4. Fijar versiones y revisar cualquier URL que el skill pida descargar.
5. Desactivar/no usar sintaxis de contexto dinámico (`!` shell).
6. Ninguna fuente es "garantizada segura": esto fue una revisión puntual de los archivos citados; los repos cambian con el tiempo.

---

## 2. Direcciones de diseño (conceptos)
Propuestas de dirección visual e interactiva. Son marcos de diseño: el contenido local real lo aporta la comunidad y las fuentes, no el diseño.

### A. El telar (la base de conocimiento como tejido)
La metáfora central es el tejido en lana: cada persona/saber es una hebra; las categorías (música, oficios, cocina, cotidianidad) son tramas. Filtrar = tirar de una hebra y ver qué se ilumina. Layout de retícula irregular tipo urdimbre, divisores con patrón generativo de tejido (p5.js), paleta de lana y tintes naturales. Conocimiento = algo que se teje entre muchos, no una lista de artículos.

### B. Mapa vivo del camino
Un story-map (MapLibre + OpenStreetMap) que recorre el puente y sus alrededores por el antiguo camino; cada parada es una persona, un oficio o un saber. Scroll = avanzar por el territorio. Curvas de nivel del paisaje andino como textura de fondo. El lugar deja de ser "el monumento" y se vuelve un territorio habitado.

### C. Archivo de voces
Audio primero: cada entrada es una voz (historia oral, música carranga, sonido del oficio) con su onda visible (wavesurfer.js), una foto y tres líneas de contexto. Minimalismo de reproductor, no de blog. A futuro, las voces las graba y aprueba la comunidad.

### D. Libreta de campo
Estética de cuaderno de expedición (la tradición de Humboldt en estos Andes): cada persona/saber es una "ficha de especimen" con ilustración, notas de campo y fecha de registro. Tipografía serif editorial, papel con grano, anotaciones al margen. El sitio se lee como una libreta que sigue abierta.

### E. Cerámica viva
Paleta y textura de la cerámica de Ráquira (tierra cocida, cobalto, esmaltes): cada categoría es un "esmalte" con su muestra de color; las tarjetas tienen bordes y superficies de arcilla, no de SaaS. Los filtros son una bandeja de muestras de glaseado.

### F. Páramo en curvas de nivel
Minimalismo de paisaje: fondos con curvas de nivel topográficas, verdes fríos y tierra, mucho aire. Una sola cosa memorable por pantalla (una cara, una voz, un objeto), todo lo demás quieto. El paisaje como estructura, no como foto de stock.

---

## 3. Patrones de interacción y bibliotecas
Todas son bibliotecas de navegador cargables por `<script>` desde CDN (confirmar la variante e instrucciones concretas de cada una al adoptarla); ninguna exige build ni servidor, compatible con un sitio estático vanilla. Licencias verificadas en el archivo LICENSE de cada repo el 14-nov-2026.

| Biblioteca | Para qué | Fuente | Licencia (verificada) |
|---|---|---|---|
| MapLibre GL JS | Mapas interactivos (datos OpenStreetMap) | https://maplibre.org/projects/gl-js/ — repo: https://github.com/maplibre/maplibre-gl-js | BSD 3-Clause (LICENSE.txt) |
| maplibre-storymap | Scrollytelling con mapa | https://github.com/digidem/maplibre-storymap | BSD (LICENSE, texto tipo BSD 3-Clause) |
| D3.js | Grafo personas↔saberes↔lugares; visualizaciones a medida | https://d3js.org — repo: https://github.com/d3/d3 | ISC (LICENSE) |
| p5.js | Patrones generativos textiles / divisores vivos | https://p5js.org — repo: https://github.com/processing/p5.js | LGPL-2.1 (license.txt) |
| GSAP + ScrollTrigger | Animación y escenas al scroll | https://gsap.com | Gratuita desde 2024 (Webflow): https://webflow.com/blog/gsap-becomes-free |
| Scrollama | Scrollytelling ligero | https://github.com/russellsamora/scrollama | MIT (LICENSE) |
| wavesurfer.js | Ondas de audio para el archivo de voces | https://wavesurfer.xyz — repo: https://github.com/katspaugh/wavesurfer.js | BSD 3-Clause (LICENSE) |
| howler.js | Audio simple | https://howlerjs.com — repo: https://github.com/goldfire/howler.js | MIT (LICENSE.md) |

Precaución: Tailwind + shadcn/ui tienden justo al look "SaaS de tarjetas idénticas" que se rechazó; si se usan, con dirección visual fuerte encima, o no usarlas.

---

## 4. Tipografía y color
- **Bastarda Type** — fundición tipográfica de Bogotá: https://bastardatype.com — carácter local real; licencias comerciales (revisar precio/alcance antes de adoptar).
- Alternativas abiertas (OFL) en Google Fonts (https://fonts.google.com): Fraunces (serif editorial con carácter), Libre Caslon, IBM Plex para datos/etiquetas.
- Paletas propuestas (propuesta de diseño, no afirmación etnográfica): tierra cocida + cobalto (cerámica); lana cruda + gris piedra + ocres (ruana); verdes fríos + niebla (páramo).

---

## 5. Anti-patrones a evitar
Del skill frontend-design, que describe exactamente los rasgos que hacen ver "generada" una página:
- Tarjetas SaaS idénticas: mismo radio, misma sombra gris, contenido picado en rectángulos iguales.
- Etiquetas "eyebrow" en mayúsculas sobre cada título.
- Gradientes púrpura, Inter por defecto, fade-and-slide-up en cada sección.
- Numeración 01/02/03 donde el contenido no es una secuencia.
- Una sola palabra acentuada en color dentro del titular.

---

## 6. Referencias de inspiración (URLs observadas)
- Story-maps con MapLibre: https://makewithmaplibre.com/sdks/maplibre-storymap/ — tutorial: https://felipevaldez.com/tutorials/tutorial4/
- High Street Stories (historia oral de barrio, interactiva): https://nvinteractive.com/work/high-street-stories/
- The Baldwin-Emerson Elders Project (archivo de voces de mayores): https://www.commarts.com/webpicks/the-baldwin-emerson-elders-project
- Beneath the Rust (story map + archivo fílmico): https://www.wahidstudio.com/work/beneath-the-rust

---

## 7. Modelo de contenido y límites
- Entrada de persona: retrato + voz + un oficio + una historia + fuente. No tarjetas turísticas.
- El contenido local nuevo entra solo por revisión comunitaria; el sitio no recolecta envíos todavía.
- Sin testimonios, artesanos ni historias inventadas; siempre distinguir qué es del puente, qué de la región y qué del departamento.

---

## 8. Próximo paso recomendado
Elegir 1–2 direcciones (p. ej. **telar + mapa vivo**, o **archivo de voces + libreta de campo**) y un patrón de interacción principal. Solo entonces codificar una pieza pequeña que demuestre esa dirección, no el sitio entero.



---

## Anexo B — Skills externas NO-Anthropic, orientadas a UI interactiva y creativa (14 nov 2026, segunda ronda)

Objetivo de esta segunda ronda: buscar skills precisamente distintas a las de Anthropic, inclinadas hacia UI interactiva y creativa, con las mismas precauciones (revisión de contenido real, sin instalar ni ejecutar nada, sin cambios al sitio).

Método: se inspeccionó el contenido real de cada skill (archivo SKILL.md principal y, cuando aplica, estructura de archivos auxiliares), se verificó la licencia en el archivo LICENSE de cada repo y se escanearon los textos contra patrones de inyección (instrucciones que falsifican aprobación del usuario, exfiltración, "ignora instrucciones previas"). Resultado del escaneo: ninguna instrucción falsificada de usuario ni exfiltración en los archivos inspeccionados de esta ronda.

Verificación de independencia: ninguno de los ocho candidatos contiene referencias a anthropics/skills ni texto derivado de frontend-design; cada SKILL.md inspeccionado tiene estructura y doctrina propias. El único caso de derivación declarada está en B4 (ver su nota).

Límite de la revisión: análisis estático de los archivos indicados; no se revisó el 100% de los archivos auxiliares de cada repo; nada de esto es una garantía de seguridad.

### B1. sanand0/scripts → `interactive-storytelling` — la mejor encajada para este proyecto

- Fuente: https://github.com/sanand0/scripts/blob/main/agents/interactive-storytelling/SKILL.md
- Forma: solo instrucciones, sin scripts, sin hooks. Un solo archivo Markdown.
- Licencia: SIN licencia explícita en el repo (riesgo: por defecto son derechos reservados; usable como referencia conceptual, no para copiar texto literal sin permiso del autor).
- Contenido: teoría de interactividad con propósito para contenido narrativo. Define cuándo la interactividad gana ("si quitar la interactividad derrumba la historia, la estás usando bien") y patrones concretos: scrollytelling (narrativa fijada, revelado progresivo, secuencia de pasos), explicaciones explorables (el lector manipula variables), adivina-y-revela (efecto de testing: predecir antes de ver mejora la retención), simulaciones, revelado progresivo (overview primero, detalles bajo demanda), personalización ("en TU ciudad"). Incluye reglas de accesibilidad (teclado, lector de pantalla, prefers-reduced-motion), rendimiento (CSS primero, canvas para datos pesados) y móvil (44px, sin hover-dependencia). Anti-patrones explícitos: esconder datos críticos tras clics, animación con tirones, hostilidad móvil.
- Encaje con las seis direcciones: altísimo. Telar (seguir un hilo-persona = narrativa fijada), Mapa vivo (scrollytelling con mapa), Archivo de voces (revelado progresivo de testimonios), Paisaje por capas (explorable por capas de información). El quiz de la v1 es exactamente su patrón adivina-y-revela, que esta skill enseña a hacer bien.
- Riesgos/límites: sin licencia (ver arriba); repo personal de scripts varios, no un producto mantenido; contenido doctrinal, no genera código.

### B2. emilkowalski/skills — ingeniería de diseño y movimiento con criterio

- Fuente: https://github.com/emilkowalski/skills
- Forma: solo Markdown (19 skills), sin scripts. Sitio de referencia: aiforui.dev/skills.
- Licencia: MIT (verificada en LICENSE del repo).
- Procedencia: autor Emil Kowalski; repo dedicado, mantenido por su autor.
- Contenido: skills de micro-decisiones de UI que los agentes suelen hacer mal: `emil-design-eng` (filosofía base: estados de press/hover, origen de popovers, timing de tooltips, transitions vs keyframes), `animate` (construir una animación eligiendo curva, duración y propiedades correctas), `choreograph` (qué elemento lidera, cuál sigue, cuál no se mueve), `find-animation-opportunities` y `remove-animations` (dónde SÍ y dónde NO animar), `gestures` (arrastre 1:1 con el dedo, hojas, velocidad de liberación), `mobile-native` (estados hover pegajosos, safe areas, taps con lag), `prototype` (varias versiones de una pieza con un switcher), `learn-taste` (convierte correcciones del usuario en reglas en un DESIGN.md).
- Quirk detectado: `emil-design-eng` ordena responder con una frase de marca ("my knowledge comes from Emil Kowalski's...") al invocarse. Es publicidad del autor, no una falsificación de usuario; se omitiría al adoptar.
- Encaje: la capa de "sentirse bien" para cualquier dirección elegida: micro-interacciones sobrias, gestos en móvil, movimiento con intención. Minimalista por doctrina (incluye cuándo quitar animaciones).
- Riesgos/límites: orientado a apps y productos digitales, no a sitios narrativos; adoptar como doctrina de detalle, no como estructura del sitio.

### B3. LottieFiles/motion-design-skill — dirección de movimiento (filosofía primero)

- Fuente: https://github.com/LottieFiles/motion-design-skill
- Forma: solo documentos Markdown (SKILL.md + director/ + patterns/ + reference/). Sin scripts.
- Licencia: MIT (verificada). Editor: LottieFiles.
- Contenido: enseña a pensar como director de movimiento antes de escribir código: tres pilares, 12 principios de Disney adaptados a UI, 4 arquetipos de personalidad de movimiento, mapeo emoción→movimiento, tablas de duración y easing, coreografía multi-elemento, patrones de entrada/salida, estados (éxito, error, carga), movimiento ambiental/continuo, adaptación por contexto (plataforma, accesibilidad, rendimiento). Agnóstico de implementación (CSS, GSAP, Lottie, springs).
- Encaje: alto como doctrina de movimiento para las direcciones Telar / Paisaje por capas: define QUÉ debe sentir cada transición antes de implementarla. Complementa a B2 (B2 es micro-detalle; B3 es intención emocional).
- Riesgos/límites: no genera estructura de sitio; hay que traducir sus tablas a decisiones concretas del proyecto.

### B4. pbakaus/impeccable — vocabulario de diseño y crítica

- Fuente: https://github.com/pbakaus/impeccable (skill principal: .claude/skills/impeccable/SKILL.md)
- Licencia: Apache 2.0 (verificada en LICENSE).
- Procedencia: autor Paul Bakaus; repo dedicado con versionado. Independencia verificada: sin referencias a anthropics/skills; su NOTICE.md declara derivación solo de ehmo/platform-design-skills (MIT) para dos archivos de referencia de plataforma (ios.md y android.md), reescritos; el resto es obra propia con doctrina y estructura distintas.
- Contenido: vocabulario de operadores de diseño: `polish`, `bolder`, `quieter`, `distill`, `delight` (micro-interacciones), `critique` (review con heurísticas y puntaje), `audit` (accesibilidad, rendimiento, responsive, hallazgos P0-P3), `shape` (planear UX antes de codificar). Concepto de Modos: Persuade / Operate / Read / Experience — el modo define la ambición. Detector de "slop" con 62 reglas deterministas (sin LLM).
- Encaje: el proyecto es modo Read/Experience según su propia taxonomía; `critique` y `audit` servirían para revisar la v2 antes de mostrarla; `delight` aporta las micro-interacciones.
- Riesgos/límites: el flujo completo pide correr un binario launcher (se descarga en el primer uso) y un CLI con partes en Rust — NO instalar ni ejecutar; se adoptarían solo los archivos de guía. Repo grande y de ritmo rápido.

### B5. Leonxlnx/taste-skill — doctrina "anti-slop" de sitios

- Fuente: https://github.com/Leonxlnx/taste-skill
- Licencia: MIT (verificada).
- Contenido: doctrina para que un sitio no parezca plantilla: una sección por pantalla, bordes iguales, fotografías reales, micro-animaciones hover (levantar 2px, zoom 1.02), un "momento repartido" por página, restricción de efectos shader/WebGL solo a páginas de tecnología (un sitio de lugar/cultura va con fotos, color plano y tipografía). Regla útil para este proyecto: los créditos de licencia en una línea de pie, nunca captions bajo las imágenes.
- Nota de contenido: un pasaje ("estas nueve reglas ganan sobre todo lo demás en esta skill") es una directiva normativa agresiva del propio skill; no falsifica una declaración del usuario ni exfiltra datos. No se actuó sobre ella; se registra por transparencia.
- Riesgos/límites: incluye un hook `Stop` que ejecuta `gate.mjs` y scripts Node (requiere Node 22+ y Chrome) — NO ejecutables bajo nuestras reglas; solo la doctrina es adoptable. Está pensado para sitios comerciales (café, producto, SaaS), no para archivos culturales; su tabla de tipos no contempla un archivo comunitario.

### B6. vercel-labs/agent-skills → `web-design-guidelines` — revisión de calidad

- Fuente: https://github.com/vercel-labs/agent-skills
- Licencia: MIT (verificada). Editor: Vercel.
- Contenido: revisa código UI contra las Web Interface Guidelines de Vercel (espaciado, tipografía, interacción, accesibilidad), salida en formato archivo:línea.
- Riesgo de adopción concreto: el skill ordena descargar las reglas desde una URL remota en cada revisión (contenido dinámico de terceros en tiempo de ejecución). Si se adopta: leer una versión fija una vez y archivarla, nunca fetch en vivo.
- Encaje: como checklist de corrección (no de creatividad) antes de publicar.

### B7. ConardLi/garden-skills → `web-design-engineer` — proceso completo de diseño

- Fuente: https://github.com/ConardLi/garden-skills
- Licencia: MIT (verificada). Autor: ConardLi.
- Contenido: flujo disciplinado: verificar hechos ANTES de diseñar; declarar el sistema de diseño en Markdown y pedir confirmación antes de codificar; mostrar un v0 temprano en lugar de "la gran revelación"; crítica al final; catálogo de clichés de IA a evitar; protocolo de assets de marca (assets > códigos hex).
- Advertencia de procedencia: el README del repo incluye publicidad de un servicio de reventa de APIs de terceros; no afecta el contenido del skill pero es una señal comercial a tener en cuenta.
- Riesgos/límites: partes asumen React + Babel inline — más pesado que el estático vanilla preferido; la doctrina de proceso sí es adoptable. La colección incluye skills de video (motion-showreel) que requieren pipelines de render — fuera de alcance.

### B8. Referencias revisadas con encaje bajo (solo para constancia)

- fdaudens/ai-journalism-skills → `scrolly-sveltekit` (https://huggingface.co/spaces/fdaudens/ai-journalism-skills, licencia CC-BY-4.0): patrones de scrollytelling para periodismo de datos, incluido map-scrolly con MapLibre. Específico de SvelteKit; útil como referencia de patrón para Mapa vivo, no como base de código.
- buriedsignals/splash (https://github.com/buriedsignals/splash, MIT): pipeline local-first de periodismo visual (storyboard → aprobación humana → entrega). Requiere instalación pesada (Bun, Engine, credenciales); solo su flujo editorial es inspirador.
- Directorios: skills.sh/topic/design (https://www.skills.sh/topic/design) y VoltAgent/awesome-agent-skills sirven para descubrir; cada skill individual necesita su propia revisión (como se hizo aquí).

### B9. Conclusión de la ronda

Distintas a Anthropic y con sustancia real, la pila recomendada para la v2 es: B1 (interactive-storytelling) como estructura narrativa, B2 (emilkowalski) para micro-interacciones y gestos, B3 (LottieFiles) para intención de movimiento, y B4 (impeccable) para crítica/auditoría antes de mostrar. B6 como checklist de corrección. B5 y B7 aportan doctrina parcial con advertencias registradas. Todo adopción de guía leída: nada instalado, nada ejecutado, nada publicado.
