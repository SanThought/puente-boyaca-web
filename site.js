(function () {
  "use strict";
  var D = window.PUENTE;
  var NS = "http://www.w3.org/2000/svg";
  var app = document.getElementById("app");
  var crumbs = document.getElementById("crumbs");
  var panel = document.getElementById("mapPanel");
  var panelBody = document.getElementById("mapPanelBody");
  var items = {}; D.items.forEach(function (i) { items[i.id] = i; });
  var SPECIAL = {
    tiempo: "Línea del tiempo", voces: "Voces", vacios: "Lo que falta", metodo: "Cómo se lee este archivo"
  };

  /* ---------- helpers ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function svg(tag, attrs, kids) {
    var n = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }
  function dot(color) { var s = el("span", { class: "dot", "aria-hidden": "true" }); s.style.background = color; return s; }
  function visited() { try { return JSON.parse(localStorage.getItem("puente-visitas") || "[]"); } catch (e) { return []; } }
  function markVisited(id) {
    var v = visited(); if (v.indexOf(id) < 0) { v.push(id); try { localStorage.setItem("puente-visitas", JSON.stringify(v)); } catch (e) {} }
  }
  function neighbors(id) {
    var out = [];
    D.edges.forEach(function (e) { if (e[0] === id) out.push(e[1]); else if (e[1] === id) out.push(e[0]); });
    return out;
  }

  function edgeKind(a, b) {
    var k = "ed";
    D.edges.forEach(function (e) { if ((e[0] === a && e[1] === b) || (e[0] === b && e[1] === a)) k = e[2]; });
    return k;
  }

  /* ---------- the map (schema of the mesh) ---------- */
  var CENTERS = { cocina: [112, 120], oficios: [330, 120], territorio: [112, 356], comunidad: [330, 356] };
  var RADIUS = 78;
  var pos = {};
  (function layout() {
    var byDomain = {};
    D.items.forEach(function (i) { (byDomain[i.domain] = byDomain[i.domain] || []).push(i); });
    Object.keys(byDomain).forEach(function (d) {
      var list = byDomain[d], c = CENTERS[d], n = list.length;
      list.forEach(function (it, idx) {
        var a = -Math.PI / 2 + (idx * 2 * Math.PI) / n;
        pos[it.id] = [c[0] + RADIUS * Math.cos(a), c[1] + RADIUS * Math.sin(a)];
      });
    });
  })();

  function drawMap(opts) {
    opts = opts || {};
    var cur = opts.current, curDomain = opts.domain, mini = !!opts.mini;
    var seen = visited();
    var near = cur ? neighbors(cur) : [];
    var s = svg("svg", { viewBox: "0 0 442 490", role: "group", "aria-label": "Mapa de relaciones entre las fichas", class: "meshmap" + (mini ? " mini" : "") });
    var gE = svg("g", { class: "edges" });
    D.edges.forEach(function (e) {
      var a = pos[e[0]], b = pos[e[1]];
      var on = cur && (e[0] === cur || e[1] === cur);
      gE.appendChild(svg("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1], class: "edge" + (on ? " on" : "") + (e[2] === "ed" ? " ed" : "") }));
    });
    s.appendChild(gE);
    Object.keys(D.domains).forEach(function (d) {
      var c = CENTERS[d];
      var active = curDomain === d;
      var link = svg("a", { href: "#/d/" + d, "aria-label": "Hebra: " + D.domains[d].name });
      var t = svg("text", { x: c[0], y: c[1] + 4, "text-anchor": "middle", class: "dlabel" + (active ? " active" : ""), fill: D.domains[d].color });
      var words = D.domains[d].name.split(" ");
      var cut = words.length > 2 ? 2 : 1;
      var t1 = svg("tspan", { x: c[0], dy: "-0.3em" }); t1.textContent = words.slice(0, cut).join(" "); t.appendChild(t1);
      var t2 = svg("tspan", { x: c[0], dy: "1.2em" }); t2.textContent = words.slice(cut).join(" "); t.appendChild(t2);
      link.appendChild(t); s.appendChild(link);
    });
    D.items.forEach(function (it) {
      var p = pos[it.id], color = D.domains[it.domain].color;
      var isCur = it.id === cur, isNear = near.indexOf(it.id) >= 0, isSeen = seen.indexOf(it.id) >= 0;
      var a = svg("a", { href: "#/f/" + it.id, "aria-label": it.title + (isCur ? " (estás aquí)" : "") + (isSeen ? ", ya visitada" : "") });
      var g = svg("g", { class: "node" + (isCur ? " cur" : "") + (isNear ? " near" : "") + (isSeen ? " seen" : "") });
      g.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 18, class: "hit", fill: "transparent" }));
      if (isCur) g.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 13, class: "halo", fill: "none", stroke: color }));
      g.appendChild(svg("circle", { cx: p[0], cy: p[1], r: isCur ? 8 : 6, class: "core", fill: isSeen || isCur ? color : "#0E1424", stroke: color }));
      if (!mini || isCur || isNear) {
        var tx = svg("text", { x: p[0], y: p[1] + 20, "text-anchor": "middle", class: "nlabel" });
        tx.textContent = it.short; g.appendChild(tx);
      }
      a.appendChild(g); s.appendChild(a);
    });
    return s;
  }

  function legend() {
    return el("p", { class: "legend" }, [
      el("span", { class: "lg solid", "aria-hidden": "true" }), " Relación que nombra una ficha del archivo. ",
      el("span", { class: "lg dashed", "aria-hidden": "true" }), " Relación editorial, propuesta por este sitio."
    ]);
  }
  function fichaList() {
    var wrap = el("nav", { class: "flist", "aria-label": "Todas las fichas" });
    Object.keys(D.domains).forEach(function (k) {
      var d = D.domains[k];
      var ul = el("ul");
      D.items.filter(function (i) { return i.domain === k; }).forEach(function (i) {
        ul.appendChild(el("li", null, [el("a", { href: "#/f/" + i.id, text: i.title })]));
      });
      wrap.appendChild(el("section", { style: "--c:" + d.color }, [el("h3", null, [dot(d.color), el("a", { href: "#/d/" + k, text: d.name })]), ul]));
    });
    return wrap;
  }

  /* ---------- components ---------- */
  function status(it) {
    return el("p", { class: "status" }, [el("span", { class: "chip", text: "Documentado" }), el("span", { class: "pg", text: "Inventario Memorias Vivas, " + it.pages })]);
  }
  function placeholder(ph) {
    return el("figure", { class: "ph" }, [
      el("div", { class: "ph-frame", "aria-hidden": "true" }, [el("span", { text: "Foto reservada" })]),
      el("figcaption", null, [el("strong", { text: ph.t }), el("br"), ph.why])
    ]);
  }
  function stepper(st, color) {
    var i = 0;
    var out = el("p", { class: "step-t", "aria-live": "polite" });
    var k = el("h3", { class: "step-k" });
    var pg = el("span", { class: "pg" });
    var dots = el("div", { class: "step-dots", "aria-hidden": "true" });
    var prev = el("button", { class: "btn", type: "button", text: "Atrás" });
    var next = el("button", { class: "btn primary", type: "button", text: "Siguiente" });
    function render() {
      var s = st.steps[i];
      k.textContent = (i + 1) + " de " + st.steps.length + ": " + s.k;
      out.textContent = s.t; pg.textContent = s.p;
      prev.disabled = i === 0; next.disabled = i === st.steps.length - 1;
      Array.prototype.forEach.call(dots.children, function (d, j) { d.className = "sd" + (j <= i ? " on" : ""); d.style.background = j <= i ? color : ""; });
    }
    st.steps.forEach(function () { dots.appendChild(el("span", { class: "sd" })); });
    prev.addEventListener("click", function () { if (i > 0) { i--; render(); } });
    next.addEventListener("click", function () { if (i < st.steps.length - 1) { i++; render(); } });
    render();
    return el("section", { class: "artifact", "aria-label": st.title }, [
      el("h2", { class: "art-h", text: st.title }), dots, k, out, el("p", { class: "src" }, ["Fuente: ", pg]),
      el("div", { class: "btnrow" }, [prev, next])
    ]);
  }
  function toggle(tg, color) {
    var list = el("ul", { class: "tg-list" });
    var cur = "a";
    var ba = el("button", { type: "button", role: "tab", "aria-selected": "true", text: tg.a.k });
    var bb = el("button", { type: "button", role: "tab", "aria-selected": "false", text: tg.b.k });
    function render() {
      list.textContent = "";
      tg[cur].items.forEach(function (t) { list.appendChild(el("li", { text: t })); });
      ba.setAttribute("aria-selected", cur === "a"); bb.setAttribute("aria-selected", cur === "b");
    }
    ba.addEventListener("click", function () { cur = "a"; render(); });
    bb.addEventListener("click", function () { cur = "b"; render(); });
    render();
    return el("section", { class: "artifact", "aria-label": tg.title }, [
      el("h2", { class: "art-h", text: tg.title }),
      el("div", { class: "tabs", role: "tablist" }, [ba, bb]), list
    ]);
  }
  function quote(b) {
    return el("figure", { class: "quote" }, [
      el("blockquote", { text: "\u201c" + b.q + "\u201d" }),
      el("figcaption", { text: b.qa + ", " + b.p })
    ]);
  }
  function doors(ids, title, from) {
    var wrap = el("nav", { class: "doors", "aria-label": title }, [el("h2", { text: title })]);
    var ul = el("ul");
    ids.forEach(function (id) {
      var it = items[id], d = D.domains[it.domain];
      var a = el("a", { href: "#/f/" + id, class: "door", style: "--c:" + d.color }, [
        dot(d.color),
        el("span", { class: "door-b" }, [el("strong", { text: it.title }), el("span", { class: "door-s", text: it.hook }),
          from && edgeKind(from, id) === "ed" ? el("span", { class: "etag", text: "Relación editorial, no la nombra el archivo" }) : null]),
        el("span", { class: "arrow", "aria-hidden": "true", text: "\u2192" })
      ]);
      ul.appendChild(el("li", null, [a]));
    });
    wrap.appendChild(ul);
    return wrap;
  }

  /* ---------- pages ---------- */
  function pageHome() {
    var v = visited().length;
    var intro = el("section", { class: "home-intro" }, [
      el("h1", { class: "display", text: "Memorias vivas del Puente de Boyacá" }),
      el("p", { class: "lede", text: "Una vereda cuenta cómo cocina, siembra, celebra y recuerda. Este mapa muestra 16 fichas del archivo y cómo se tocan entre sí. Entra por cualquier punto." })
    ]);
    var map = el("section", { class: "home-map" }, [
      drawMap({}),
      el("p", { class: "map-note", text: v ? "Has recorrido " + v + " de 16 fichas. Los puntos llenos son las que ya viste." : "Cada punto es una ficha." }),
      legend()
    ]);
    var extra = el("nav", { class: "extras", "aria-label": "Otros caminos" }, [
      el("a", { href: "#/tiempo", class: "extra" }, [el("strong", { text: "Línea del tiempo" }), el("span", { text: "De 1819 a 2026, qué dice el documento y qué dicen las fuentes públicas" })]),
      el("a", { href: "#/voces", class: "extra" }, [el("strong", { text: "Voces" }), el("span", { text: "Ocho frases del inventario, una por una" })]),
      el("a", { href: "#/vacios", class: "extra" }, [el("strong", { text: "Lo que falta" }), el("span", { text: "Vacíos, contradicciones y lo que está reservado" })])
    ]);
    var hebras = el("nav", { class: "hebras", "aria-label": "Hebras" }, [el("h2", { text: "Cuatro hebras" })]);
    var ul = el("ul");
    Object.keys(D.domains).forEach(function (k) {
      var d = D.domains[k], n = D.items.filter(function (i) { return i.domain === k; }).length;
      ul.appendChild(el("li", null, [el("a", { href: "#/d/" + k, class: "hebra", style: "--c:" + d.color }, [dot(d.color), el("span", { class: "door-b" }, [el("strong", { text: d.name }), el("span", { class: "door-s", text: d.blurb })]), el("span", { class: "count", text: n + "" })])]));
    });
    hebras.appendChild(ul);
    var all = el("section", { class: "allf" }, [el("h2", { text: "Las 16 fichas, en lista" }), fichaList()]);
    return [intro, map, hebras, all, extra, footer()];
  }
  function pageDomain(k) {
    var d = D.domains[k]; if (!d) return pageHome();
    var ids = D.items.filter(function (i) { return i.domain === k; }).map(function (i) { return i.id; });
    var head = el("header", { class: "ph-head", style: "--c:" + d.color }, [el("div", { class: "band" }), el("h1", { class: "display", text: d.name }), el("p", { class: "lede", text: d.blurb })]);
    var m = el("aside", { class: "minimap", "aria-label": "Dónde estás" }, [el("h2", { class: "sr", text: "Dónde estás" }), drawMap({ domain: k, mini: false })]);
    var other = Object.keys(D.domains).filter(function (x) { return x !== k; }).map(function (x) {
      return el("a", { href: "#/d/" + x, class: "pill", style: "--c:" + D.domains[x].color }, [dot(D.domains[x].color), D.domains[x].name]);
    });
    return [head, el("div", { class: "cols" }, [el("div", { class: "main" }, [doors(ids, "Fichas de esta hebra"), el("nav", { class: "pills", "aria-label": "Otras hebras" }, other)]), m]), footer()];
  }
  function pageItem(id) {
    var it = items[id]; if (!it) return pageHome();
    markVisited(id);
    var d = D.domains[it.domain];
    var head = el("header", { class: "ph-head", style: "--c:" + d.color }, [
      el("div", { class: "band" }),
      el("h1", { class: "display", text: it.title }),
      el("p", { class: "lede", text: it.hook }),
      status(it)
    ]);
    var main = el("div", { class: "main" });
    var more = el("div", { class: "more-body" });
    function addBlock(host, b) {
      if (b.q) host.appendChild(quote(b));
      else host.appendChild(el("section", { class: "block" }, [el("h2", { text: b.h }), el("p", { text: b.t }), el("p", { class: "pg", text: b.p })]));
    }
    var shown = 0;
    it.blocks.forEach(function (b) {
      if (shown < 2) { addBlock(main, b); shown++; } else addBlock(more, b);
    });
    if (it.placeholder) main.appendChild(placeholder(it.placeholder));
    if (it.stepper) main.appendChild(stepper(it.stepper, d.color));
    if (it.toggle) main.appendChild(toggle(it.toggle, d.color));
    if (it.tension) main.appendChild(el("section", { class: "tension" }, [el("h2", { text: "Tensión registrada" }), el("p", { text: it.tension })]));
    main.appendChild(el("section", { class: "think" }, [el("h2", { text: "Para pensar" }), el("p", { text: it.think }), el("p", { class: "src", text: "Pregunta del proyecto, no del documento." })]));
    if (it.public) {
      var pl = el("ul", { class: "pubs" });
      it.public.forEach(function (p) { pl.appendChild(el("li", null, [p.t + " ", el("a", { href: p.u, rel: "noopener", text: "Ver fuente" })])); });
      more.appendChild(el("section", { class: "block" }, [el("h2", { text: "Corroborado en fuentes públicas" }), pl]));
    }
    var gl = el("ul"); it.gaps.forEach(function (g) { gl.appendChild(el("li", { text: g })); });
    more.appendChild(el("section", { class: "block" }, [el("h2", { text: "Lo que el archivo aún no tiene" }), gl]));
    main.appendChild(el("details", { class: "gaps" }, [el("summary", { text: "Seguir leyendo: voces, fuentes y vacíos" }), more]));
    var ids = it.links.slice();
    var side = el("aside", { class: "minimap", "aria-label": "Dónde estás" }, [el("h2", { class: "sr", text: "Dónde estás" }), drawMap({ current: id, domain: it.domain, mini: true }),
      el("p", { class: "map-note" }, ["Estás en ", el("a", { href: "#/d/" + it.domain, text: d.name }), ". Los puntos con nombre son las fichas vecinas."]), legend()]);
    var out = [head, el("div", { class: "cols" }, [main, side]), el("div", { class: "doorsrow" }, [doors(ids, "Puertas a seguir", id)]), footer()];
    return out;
  }
  function pageTiempo() {
    var T = D.timeline, i = 0;
    var yEl = el("div", { class: "tl-y display" }), tEl = el("p", { class: "tl-t", "aria-live": "polite" }), sEl = el("p", { class: "tl-s" });
    var range = el("input", { type: "range", min: 0, max: T.length - 1, step: 1, value: 0, "aria-label": "Año", class: "range" });
    var ticks = el("div", { class: "ticks", "aria-hidden": "true" });
    T.forEach(function (x) { ticks.appendChild(el("span", { text: x.y })); });
    function render() {
      var x = T[i]; yEl.textContent = x.y; tEl.textContent = x.t;
      sEl.textContent = "";
      var lab = x.src === "doc" ? "Solo el documento (" + x.p + "). Sin corroborar." : x.src === "public" ? "Fuente pública. " : "Documento y fuente pública. ";
      sEl.appendChild(document.createTextNode(lab));
      if (x.u) sEl.appendChild(el("a", { href: x.u, rel: "noopener", text: "Ver fuente" }));
      sEl.className = "tl-s " + x.src;
    }
    range.addEventListener("input", function () { i = +range.value; render(); });
    render();
    var head = el("header", { class: "ph-head" }, [el("div", { class: "band neutral" }), el("h1", { class: "display", text: "Línea del tiempo" }), el("p", { class: "lede", text: "Mueve el control. Cada fecha dice de dónde viene: del documento, de fuentes públicas o de ambos." })]);
    var card = el("section", { class: "artifact tl" }, [yEl, tEl, sEl, range, ticks]);
    var steps = el("div", { class: "btnrow" }, [
      el("button", { class: "btn", type: "button", text: "Antes", onclick: function () { if (i > 0) { i--; range.value = i; render(); } } }),
      el("button", { class: "btn primary", type: "button", text: "Después", onclick: function () { if (i < T.length - 1) { i++; range.value = i; render(); } } })
    ]);
    return [head, el("div", { class: "main solo" }, [card, steps, doors(["monumento", "alumbrado", "zanahoria"], "Fichas con fechas")]), footer()];
  }
  function pageVoces() {
    var V = D.voices, i = 0;
    var q = el("blockquote", { class: "vq", "aria-live": "polite" }), who = el("p", { class: "vw" }), note = el("p", { class: "src" });
    function render() { var v = V[i]; q.textContent = "\u201c" + v.q + "\u201d"; who.textContent = v.a + ", " + v.p; note.textContent = v.n ? "Nota: " + v.n : ""; counter.textContent = (i + 1) + " de " + V.length; }
    var counter = el("p", { class: "src" });
    var btns = el("div", { class: "btnrow" }, [
      el("button", { class: "btn", type: "button", text: "Anterior", onclick: function () { i = (i + V.length - 1) % V.length; render(); } }),
      el("button", { class: "btn primary", type: "button", text: "Otra voz", onclick: function () { i = (i + 1) % V.length; render(); } })
    ]);
    render();
    var head = el("header", { class: "ph-head" }, [el("div", { class: "band neutral" }), el("h1", { class: "display", text: "Voces" }), el("p", { class: "lede", text: "Frases tal como las recogió el documento. Las personas aparecen sin nombre." })]);
    return [head, el("div", { class: "main solo" }, [el("section", { class: "artifact voice" }, [q, who, note, counter]), btns, doors(["monumento", "lideres", "jutes"], "Dónde nacen estas voces")]), footer()];
  }
  function pageVacios() {
    var head = el("header", { class: "ph-head" }, [el("div", { class: "band neutral" }), el("h1", { class: "display", text: "Lo que falta" }), el("p", { class: "lede", text: "Un archivo honesto dice también lo que no tiene. Nada de esto se resolvió en silencio." })]);
    var main = el("div", { class: "main solo" });
    D.gaps.forEach(function (g, n) {
      var ul = el("ul"); g.items.forEach(function (t) { ul.appendChild(el("li", { text: t })); });
      main.appendChild(el("details", { class: "gaps open", open: n === 0 ? "" : false }, [el("summary", { text: g.h }), ul]));
    });
    return [head, main, footer()];
  }
  function pageMetodo() {
    var head = el("header", { class: "ph-head" }, [el("div", { class: "band neutral" }), el("h1", { class: "display", text: "Cómo se lee este archivo" })]);
    var main = el("div", { class: "main solo" }, [
      el("section", { class: "block" }, [el("h2", { text: "Documentado" }), el("p", { text: "Está en el inventario \"Memorias Vivas del Puente de Boyacá\" (54 páginas, 2026), con su página. No afirma que sea cierto: afirma que el documento lo dice." })]),
      el("section", { class: "block" }, [el("h2", { text: "Corroborado" }), el("p", { text: "Confirmado por una fuente pública independiente, que se enlaza." })]),
      el("section", { class: "block" }, [el("h2", { text: "Interpretación" }), el("p", { text: "Preguntas y relaciones que arma el proyecto. Se marcan como tales." })]),
      el("section", { class: "block" }, [el("h2", { text: "Reservado temporalmente" }), el("p", { text: "En este prototipo los nombres de personas y negocios aparecen como [reservado], las fotografías con personas son marcos vacíos y el PDF original no se publica." })]),
      el("section", { class: "block" }, [el("h2", { text: "Autoría" }), el("p", { text: "El contenido viene del inventario elaborado con la Junta de Acción Comunal de la vereda Puente de Boyacá. Prototipo para revisión de la dirección del proyecto." })])
    ]);
    return [head, main, footer()];
  }
  function footer() {
    return el("footer", { class: "foot" }, [
      el("a", { href: "#/metodo", text: "Cómo se lee este archivo" }),
      el("span", { text: " · Sin analítica ni seguimiento · Prototipo" })
    ]);
  }

  /* ---------- router ---------- */
  function setCrumbs(parts) {
    crumbs.textContent = "";
    parts.forEach(function (p, i) {
      if (i) crumbs.appendChild(el("span", { class: "sep", "aria-hidden": "true", text: "/" }));
      if (p.href) crumbs.appendChild(el("a", { href: p.href, text: p.t }));
      else crumbs.appendChild(el("span", { "aria-current": "page", text: p.t }));
    });
  }
  function route() {
    var h = location.hash.replace(/^#\/?/, ""), seg = h.split("/"), nodes, trail = [{ t: "Mapa", href: "#/" }];
    if (seg[0] === "f" && items[seg[1]]) {
      var it = items[seg[1]]; nodes = pageItem(seg[1]);
      trail.push({ t: D.domains[it.domain].name, href: "#/d/" + it.domain }, { t: it.short });
      document.title = it.title + " · Memorias vivas del Puente de Boyacá";
    } else if (seg[0] === "d" && D.domains[seg[1]]) {
      nodes = pageDomain(seg[1]); trail.push({ t: D.domains[seg[1]].name });
      document.title = D.domains[seg[1]].name + " · Memorias vivas del Puente de Boyacá";
    } else if (SPECIAL[seg[0]]) {
      nodes = seg[0] === "tiempo" ? pageTiempo() : seg[0] === "voces" ? pageVoces() : seg[0] === "vacios" ? pageVacios() : pageMetodo();
      trail.push({ t: SPECIAL[seg[0]] });
      document.title = SPECIAL[seg[0]] + " · Memorias vivas del Puente de Boyacá";
    } else {
      nodes = pageHome(); trail = [{ t: "Mapa" }];
      document.title = "Memorias vivas del Puente de Boyacá";
    }
    app.textContent = "";
    nodes.forEach(function (n) { app.appendChild(n); });
    setCrumbs(trail);
    document.body.setAttribute("data-page", seg[0] || "home");
    if (panel.open) panel.close();
    window.scrollTo(0, 0);
    var h1 = app.querySelector("h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
  }
  document.getElementById("mapBtn").addEventListener("click", function () {
    panelBody.textContent = "";
    var seg = location.hash.replace(/^#\/?/, "").split("/");
    var o = {}; if (seg[0] === "f" && items[seg[1]]) { o.current = seg[1]; o.domain = items[seg[1]].domain; }
    panelBody.appendChild(drawMap(o)); panelBody.appendChild(legend());
    panelBody.appendChild(el("h2", { class: "flh", text: "O elige en lista" })); panelBody.appendChild(fichaList());
    panel.show();
  });
  document.getElementById("mapClose").addEventListener("click", function () { panel.close(); });
  window.addEventListener("hashchange", route);
  route();
})();
