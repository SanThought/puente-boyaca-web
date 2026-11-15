// Memorias Vivas del Puente de Boyacá — interacción del archivo
// Vanilla JS. Sin frameworks, sin analítica.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Hebra de progreso de lectura
  var hebra = document.getElementById("hebra");
  function pintarHebra() {
    var doc = document.documentElement;
    var total = doc.scrollHeight - window.innerHeight;
    var p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
    hebra.style.width = (p * 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", pintarHebra, { passive: true });
  window.addEventListener("resize", pintarHebra);
  pintarHebra();

  // 2. Filtro por hilos: tirar de una hebra atenúa lo demás
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-hilo]"));
  var fichas = Array.prototype.slice.call(document.querySelectorAll(".ficha[data-hilo]"));
  var grupos = Array.prototype.slice.call(document.querySelectorAll(".hilo-grupo"));
  var conteo = document.querySelector(".filtro .conteo");

  function aplicarFiltro() {
    var activos = chips.filter(function (c) { return c.getAttribute("aria-pressed") === "true"; })
      .map(function (c) { return c.getAttribute("data-hilo"); });
    var filtrando = activos.length > 0;
    var visibles = 0;
    fichas.forEach(function (f) {
      var on = !filtrando || activos.indexOf(f.getAttribute("data-hilo")) !== -1;
      f.classList.toggle("atenuada", !on);
      if (on) visibles++;
    });
    grupos.forEach(function (g) {
      var on = !filtrando || activos.indexOf(g.getAttribute("data-hilo")) !== -1;
      g.classList.toggle("atenuada", !on);
      g.style.opacity = on ? "" : "0.28";
    });
    if (conteo) {
      conteo.textContent = filtrando
        ? visibles + " de " + fichas.length + " fichas en la hebra"
        : fichas.length + " fichas";
    }
  }

  chips.forEach(function (chip) {
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", function () {
      var on = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", on ? "false" : "true");
      aplicarFiltro();
    });
  });
  aplicarFiltro();

  // 3. Relaciones: saltar a otra ficha y marcarla
  function destacar(ficha) {
    ficha.classList.remove("destacada");
    // forzar reflow para reiniciar la animación
    void ficha.offsetWidth;
    ficha.classList.add("destacada");
    window.setTimeout(function () { ficha.classList.remove("destacada"); }, 1800);
  }

  document.querySelectorAll('a[href^="#ficha-"]').forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var id = a.getAttribute("href").slice(1);
      var destino = document.getElementById(id);
      if (!destino) return;
      ev.preventDefault();
      destino.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", "#" + id);
      if (!reduceMotion) destacar(destino);
    });
  });

  // 4. Scroll-spy de la barra superior
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var secciones = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && secciones.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id);
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    secciones.forEach(function (s) { spy.observe(s); });
  }
})();
