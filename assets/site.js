/* Puente de Boyacá — interacciones ligeras, sin frameworks */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Hebra de progreso */
  var hebra = document.getElementById('hebra-progreso');
  function pintarHebra() {
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var p = total > 0 ? (window.scrollY / total) * 100 : 0;
    hebra.style.width = p + '%';
  }
  window.addEventListener('scroll', pintarHebra, { passive: true });
  pintarHebra();

  /* Adivina y revela */
  var adivina = document.querySelector('.adivina');
  if (adivina) {
    var opciones = adivina.querySelectorAll('.opcion');
    var respuesta = adivina.querySelector('.respuesta');
    var veredicto = adivina.querySelector('.veredicto');
    var contestada = false;
    opciones.forEach(function (b) {
      b.addEventListener('click', function () {
        if (contestada) return;
        contestada = true;
        var ok = b.getAttribute('data-ok') === 'si';
        opciones.forEach(function (o) {
          if (o.getAttribute('data-ok') === 'si') o.classList.add('acierto');
          else if (o === b) o.classList.add('fallo');
          o.disabled = true;
        });
        veredicto.textContent = ok
          ? 'Así es: el fique.'
          : 'Casi: la respuesta es el fique.';
        respuesta.hidden = false;
      });
    });
  }

  /* Caminos: abrir la capa de cada hebra */
  document.querySelectorAll('.camino').forEach(function (camino) {
    var boton = camino.querySelector('.hebra-boton');
    var capa = camino.querySelector('.capa');
    boton.addEventListener('click', function () {
      var abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', String(!abierto));
      capa.hidden = abierto;
    });
  });

  /* Revelado al hacer scroll (una sola vez) */
  var capas = document.querySelectorAll('.revelar');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    capas.forEach(function (c) { c.classList.add('visible'); });
  } else {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    capas.forEach(function (c) { obs.observe(c); });
  }
})();
