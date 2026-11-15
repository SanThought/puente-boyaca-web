/* Memorias Vivas del Puente de Boyacá - datos del prototipo.
   Fuente: inventario PCI "Memorias Vivas del Puente de Boyacá" (54 pp.), archivo privado de saberes.
   Los nombres de personas y negocios de la comunidad están reservados temporalmente: aparecen como [reservado].
   Cada afirmación del documento lleva su página. "interpretación" = síntesis del proyecto. */
window.PUENTE = {
  domains: {
    cocina:     { name: "Cocina de la huerta", color: "#F2A33A", blurb: "Lo que se cultiva, se fermenta, se guisa y se comparte." },
    oficios:    { name: "Manos y oficios", color: "#3DBE8B", blurb: "Sembrar, hilar, hervir hierbas, encender el valle en diciembre." },
    territorio: { name: "Territorio y relatos", color: "#3BB5E8", blurb: "El monumento, lo que se perdió y lo que cuenta la montaña." },
    comunidad:  { name: "Gente y fiesta", color: "#E4558F", blurb: "Quién organiza, quién resiste, cómo se celebra." }
  },
  items: [
    {
      id: "jutes", domain: "cocina", title: "Jutes de maíz", short: "Jutes", pages: "pp. 20-22",
      hook: "Maíz que se fermenta un mes bajo el agua de manantial, comida del \"mes del hambre\" y luego plato de matrimonio.",
      blocks: [
        { h: "Qué son", t: "Maíz ablandado por fermentación natural en agua de manantial, técnica llamada juteo. El documento lo vincula con los pueblos chibchas y con referencias desde el siglo XVII.", p: "pp. 20-21" },
        { h: "De hambre a fiesta", t: "Sustento de mayo, \"el mes del hambre\", cuando las heladas de enero habían acabado los cultivos. Con el tiempo pasó a ser plato de lujo en matrimonios, con presa de gallina para novios y padrinos.", p: "pp. 20-21" },
        { h: "Una voz del inventario", q: "Se echa el maicito en un hoyo en la tierra con agua limpia, limpia, limpia el agua, y se deja un mes el bulto de maíz ahí. Al mes ya están los jutes ricos para cocinar con cuajada.", qa: "Persona entrevistada, anónima en el documento", p: "p. 21" }
      ],
      stepper: { title: "Seguir el grano", steps: [
        { k: "Zarzo", t: "Se escogen maíces secos y maduros y se guardan en el zarzo, el techo de la casa.", p: "p. 22" },
        { k: "Hoyo con agua", t: "El maíz en costal se sumerge de 25 días a más de un mes en un hoyo con agua limpia y corriente.", p: "p. 22" },
        { k: "Grano cremoso", t: "Cuando madura, el grano queda cremoso y \"se puede deshacer fácilmente con los dedos\".", p: "p. 22" },
        { k: "Lavado y olla", t: "Lavado profundo, sancochado, y se sirve con \"nutre\", papas, habas secas, arvejas y queso o cuajada.", p: "p. 22" }
      ]},
      think: "Un plato que nació de la escasez terminó en la mesa de las bodas. ¿Qué otras cosas cambian de lugar social cuando dejan de ser necesarias?",
      gaps: ["El documento no dice si esta preparación detallada puede publicarse tal cual; aquí se resume.", "El índice anuncia chicha y guarapo, pero esas secciones no existen en el documento."],
      links: ["cocido", "amasijos", "sopas"], voice: true
    },
    {
      id: "cocido", domain: "cocina", title: "Cocido boyacense", short: "Cocido", pages: "pp. 23-25",
      hook: "Un plato que los habitantes llaman mestizaje gastronómico, y su versión de trabajo: el puntal de las diez y media.",
      blocks: [
        { h: "Mestizaje y huerta", t: "Los habitantes lo definen como \"mestizaje gastronómico\" del Altiplano Cundiboyacense. Se funda en el \"pan coger\": comer lo que da la huerta propia, sin químicos. La receta cambia con la vereda, la cosecha y el \"amor\" de quien cocina.", p: "p. 23" },
        { h: "Una geografía más grande", t: "Según el documento, el plato guarda la memoria de un territorio mayor que el Boyacá actual, porque Tunja fue capital de tierras que incluían Casanare y parte de la Amazonía. Cita las cebollas de Aquitania como ejemplo.", p: "p. 23" },
        { h: "En riesgo", t: "Chugas, rubas, longaniza y gallina de campo auténtica son cada vez más difíciles de conseguir y costosas de producir. Líderes locales promueven volver a las huertas caseras.", p: "p. 24" }
      ],
      toggle: { title: "Dos formas del mismo plato", a: { k: "Cocido", items: ["Todo se guisa y se cocina junto en una olla, para integrar tubérculos y carnes (p. 25)", "Guiso de ajo, cebolla cabezona y larga, calabaza (p. 25)", "Se sirve con ají de rubas: rubas cocidas, zanahoria, calabaza, cebolla roja y ají (p. 25)"] }, b: { k: "Puntal", items: ["Papa, mazorca, habas y arveja con guiso simple (pp. 24-25)", "Merienda que se llevaba a los obreros al campo a las 10:30 a. m. (pp. 24-25)", "El documento registra dos nombres: \"putal\" y \"puntal\" (pp. 24-25)"] } },
      think: "Si los ingredientes que definen un plato se vuelven difíciles de conseguir, ¿sigue siendo el mismo plato?",
      gaps: ["\"Chugas\" y \"rubas\" son nombres locales de tubérculos: falta un glosario confirmado con la comunidad.", "El documento no da una receta única a propósito. Aquí tampoco se inventa una."],
      links: ["jutes", "amasijos", "sopas", "papa", "lideres"]
    },
    {
      id: "amasijos", domain: "cocina", title: "Amasijos", short: "Amasijos", pages: "pp. 26-28",
      hook: "Arepas, envueltos de mazorca y de maíz pelado: el maíz molido todos los días y cocido en piedra y leña.",
      blocks: [
        { h: "Qué son", t: "Preparaciones de maíz, trigo u otros ingredientes del territorio, centrales en la dieta campesina: acompañan el desayuno y las onces. Los más mencionados son las arepas boyacenses, los envueltos de mazorca y los de maíz pelado.", p: "p. 26" },
        { h: "Técnica", t: "El maíz de la huerta se molía para las masas de cada día (\"uno todos los días molía y hacía arepitas\"). Una entrevistada recuerda las arepas \"en tres piedras y en lajas, con leña\". El documento enlaza la técnica con prácticas de los pueblos originarios: moler granos y envolver masas en hojas.", p: "pp. 27-28" },
        { h: "Riesgo", t: "Estudios citados advierten que el oficio puede desaparecer por cambios en la producción agrícola, en los hábitos de comida y en la transmisión entre generaciones.", p: "p. 28" }
      ],
      placeholder: { t: "Fotografía de panadería local (p. 28)", why: "Muestra un negocio nombrado. Nombre reservado temporalmente." },
      think: "El documento señala un pan de huevo con 40 años de fundación como \"tradicional\". ¿Cuántos años necesita algo para volverse tradición?",
      gaps: ["\"Las cucarachas\" aparece en la lista de amasijos del inventario, pero el documento no explica qué son.", "La cita de \"diversos estudios\" no trae ficha precisa en el texto (pp. 51-52)."],
      links: ["jutes", "cocido", "sopas"]
    },
    {
      id: "sopas", domain: "cocina", title: "Sopas", short: "Sopas", pages: "pp. 29-30",
      hook: "\"Aquí el almuerzo siempre empieza con sopita.\" La olla grande al fogón desde temprano.",
      blocks: [
        { h: "El almuerzo empieza caliente", t: "Sopa de papa, arveja, habas, cebolla larga, cilantro y a veces res o gallina criolla, con productos de la huerta y las tierras de pan. \"Eso es lo que le da fuerza a uno para seguir trabajando\", dice una portadora citada.", p: "p. 29" },
        { h: "Lenta, de leña", t: "Fogón de leña, olla grande desde temprano, cocción lenta mientras se hacen los oficios de la casa. El documento la conecta con el cuchuco de trigo o de maíz, la changua y los mutes del altiplano.", p: "p. 30" },
        { h: "Cocinar entre muchos", t: "En reuniones y celebraciones la preparación es colectiva: limpiar, picar, cuidar el fogón. Es también una forma de transmitir saberes entre generaciones.", p: "p. 30" }
      ],
      think: "Cocinar lento exige estar cerca de la casa. ¿Qué tiempo social desaparece cuando la cocina se acelera?",
      gaps: ["El índice anuncia \"sopa de maíz pintado\" como plato propio. La sección es general y \"sopa de pintado\" solo aparece en una cita (p. 26)."],
      links: ["jutes", "cocido", "amasijos"]
    },
    {
      id: "papa", domain: "oficios", title: "Cultivo de papa", short: "Papa", pages: "p. 34",
      hook: "Un cultivo que el documento llama patrimonio vivo: semillas custodiadas, mano de obra intercambiada, y mujeres \"a menudo invisibilizadas\".",
      blocks: [
        { h: "Más que agricultura", t: "Eje cultural, social y económico de las comunidades rurales. Garantiza autonomía alimentaria y cohesión comunitaria.", p: "p. 34" },
        { h: "Lo que se transmite", t: "De abuelos a nietos. Pequeños agricultores como custodios de semillas y técnicas, con variedades antiguas y papa criolla. Ayuda mutua o \"trueque\" de mano de obra entre familias. Y el papel de la mujer rural: selección de semillas, clasificación, comercialización, sostén emocional.", p: "p. 34" },
        { h: "Tensiones", t: "Agroquímicos, presión del mercado, monocultivo y despoblamiento por el desinterés de los jóvenes. El documento pide políticas públicas que protejan la dimensión cultural y no solo la rentabilidad.", p: "p. 34" }
      ],
      think: "Si un saber se mide solo por rentabilidad, ¿qué parte del saber no cabe en esa medida?",
      gaps: ["Cita el concepto de \"nueva ruralidad\" y bibliografía académica (p. 51) sin ficha precisa en el cuerpo del texto."],
      links: ["zanahoria", "cocido"]
    },
    {
      id: "zanahoria", domain: "oficios", title: "Cultivo de zanahoria", short: "Zanahoria", pages: "p. 35",
      hook: "Se siembra después de la papa para aprovechar el abono que dejó. Desde 2002, las lavadoras la mandan a Bogotá el mismo día.",
      blocks: [
        { h: "Rotación", t: "Se siembra zanahoria después de la papa para aprovechar los residuos de fertilización: conocimiento empírico de manejo de la tierra, transmitido entre generaciones.", p: "p. 35" },
        { h: "Las lavadoras", t: "Hito económico desde 2002: infraestructuras donde cuadrillas recolectan, limpian y clasifican. Permitieron pasar de economía de subsistencia a mercados nacionales, con despacho a Bogotá el mismo día de la cosecha.", p: "p. 35" },
        { h: "Ofrenda", t: "La zanahoria es central en las \"huertas\" (ofrendas) de San Isidro Labrador, como gratitud por la fertilidad del campo.", p: "p. 35" }
      ],
      stepper: { title: "Una rotación", steps: [
        { k: "Primero, la papa", t: "Se siembra papa. Al cosecharla, el terreno conserva residuos de fertilización.", p: "p. 35" },
        { k: "Después, la zanahoria", t: "Se siembra zanahoria en el mismo terreno para aprovechar los residuos de fertilización que dejó la papa.", p: "p. 35" },
        { k: "Lavado y despacho", t: "Las lavadoras organizan cuadrillas de cosecha, limpieza y clasificación, y despachan a Bogotá el mismo día.", p: "p. 35" },
        { k: "Una parte, a la fiesta", t: "La zanahoria forma parte de las huertas de ofrenda de San Isidro.", p: "pp. 35, 48" }
      ]},
      think: "Las lavadoras abrieron un mercado nacional. ¿Qué se gana y qué se arriesga cuando un saber de huerta se vuelve cadena de despacho?",
      gaps: ["El documento nombra a varios portadores de este saber. Sus nombres están reservados temporalmente en este prototipo."],
      links: ["papa", "lana", "sanisidro"]
    },
    {
      id: "lana", domain: "oficios", title: "Hilado de lana", short: "Lana", pages: "p. 33",
      hook: "Convertir la oveja en ruana. Un huso con una zanahoria de contrapeso.",
      blocks: [
        { h: "Qué es", t: "Saber que une producción y vida doméstica: transformar la lana de las ovejas en hilo para ruanas, cobijas y prendas del campo. Labor casera y familiar, hecha mientras se atendían otras tareas.", p: "p. 33" },
        { h: "Ingenio", t: "Las mujeres aprendían de jóvenes mirando a madres y abuelas. Una portadora usa una zanahoria como base del huso para darle peso y facilitar el giro.", p: "p. 33" },
        { h: "Estado actual", t: "En disminución fuerte por los textiles industriales y la menor producción de lana en las fincas. La comunidad lo reconoce como pilar de su memoria y símbolo de autonomía campesina.", p: "p. 33" }
      ],
      stepper: { title: "De la oveja al hilo", steps: [
        { k: "Esquilado", t: "Se esquilan las ovejas.", p: "p. 33" },
        { k: "Limpieza", t: "Se limpia la lana.", p: "p. 33" },
        { k: "Escarmenado", t: "Se desenreda la fibra.", p: "p. 33" },
        { k: "Cardado", t: "Se carda para alinear las fibras.", p: "p. 33" },
        { k: "Torsión", t: "Se tuercen las fibras para formar el hilo, con el huso.", p: "p. 33" }
      ]},
      think: "La ruana aparece también en la procesión de San Isidro. ¿Qué objeto de tu casa guarda un oficio que ya nadie practica?",
      gaps: ["La portadora del testimonio del huso tiene el nombre reservado temporalmente."],
      links: ["zanahoria", "sanisidro"]
    },
    {
      id: "alumbrado", domain: "oficios", title: "El alumbrado navideño", short: "Alumbrado", pages: "p. 36",
      hook: "Empezó en 2004 con una empresa externa. Hoy lo hacen empresas de la vereda, y lo llaman un arte.",
      blocks: [
        { h: "Origen", t: "Según el documento, inició en 2004 con fin turístico, ejecutado al comienzo por una empresa externa que involucró a jóvenes locales. Ahí empezó la transferencia de conocimientos técnicos.", p: "p. 36" },
        { h: "Apropiación", t: "Los habitantes aprendieron iluminación, diseño y herrería, y fundaron empresas propias. El repertorio pasó de figuras históricas (Bolívar, la Batalla) a motivos campesinos, fauna, flora y cuidado ambiental.", p: "p. 36" },
        { h: "Economía y cuidado", t: "Genera economía temporal con venta de alimentos y servicios. El flujo de visitantes exige organizarse para mantener y cuidar el espacio público.", p: "p. 36" }
      ],
      placeholder: { t: "Fotografía de una fábrica de alumbrado (p. 36)", why: "Aparecen personas y un negocio con nombre propio. Reservada temporalmente." },
      think: "El monumento que recuerda una batalla se vuelve cada diciembre un escenario de luz hecho por la vereda. ¿Quién cuenta ahora la historia del lugar?",
      gaps: ["La fecha de 2004 sale solo del documento y no se ha contrastado con otra fuente.", "El índice lo anuncia como \"Fabricación iluminación\"; la sección habla del alumbrado en general."],
      links: ["monumento"]
    },
    {
      id: "hierbas", domain: "oficios", title: "Hervir las hierbas", short: "Hierbas", pages: "pp. 39-40",
      hook: "\"Para cualquier dolor uno hierve las hierbas.\" Un saber que se aprende de los abuelos y que no está escrito.",
      blocks: [
        { h: "Qué es", t: "Uso de plantas medicinales para dolencias comunes: recolectar, escoger, hacer infusión. \"Eso viene de los abuelos, ellos le enseñaban a uno qué hierba servía para cada cosa.\"", p: "p. 39" },
        { h: "Más que curar", t: "Un rito cotidiano que une conocimiento, experiencia y relación con la naturaleza. Las hierbas aromáticas juntan lo alimenticio, lo curativo, lo simbólico y lo ritual.", p: "p. 39" },
        { h: "Riesgo y potencial", t: "El documento advierte riesgo por globalización y por la tensión con los modelos de salud institucionales. También propone las hierbas como potencial de turismo cultural.", p: "pp. 39-40" }
      ],
      think: "Un saber que se transmite hablando se pierde cuando se deja de hablar. ¿Qué cuidado merece un conocimiento que solo existe en la voz de los mayores?",
      gaps: ["El documento no lista especies, preparaciones ni dosis. Este sitio no las inventa: es un tema de salud."],
      links: ["cocido"]
    },
    {
      id: "monumento", domain: "territorio", title: "El monumento y el caserío", short: "Monumento", pages: "pp. 6-13",
      hook: "Antes de 1969 había un pueblo alrededor del puente. Después hubo un parque y potreros.",
      blocks: [
        { h: "El lugar", t: "Según el documento, en la época de la independencia no existía el puente de piedra actual: había un planchón de varas de madera y tierra sobre cimiento de roca. Allí convergían caminos a Tunja, Samacá, Ventaquemada y Boyacá. En 1930, dice, el puente de piedra fue una donación de España \"como gesto de reconciliación\".", p: "p. 9" },
        { h: "La remodelación de 1969", t: "Bajo Carlos Lleras Restrepo, por el sesquicentenario, se demolieron 19 casas del caserío, el Casino, la escuela original y el cuartel, y se trasladaron el obelisco y la estatua de Bolívar a la colina actual. Los testimonios dicen que se perdieron o robaron piezas, como las cadenas originales del obelisco.", p: "pp. 10-12" },
        { h: "Voces", q: "Quedó todo separado, cuando antes estaba todo integrado en un solo sitio.", qa: "Testimonio, anónimo en el documento", p: "p. 12" },
        { h: "Voces", q: "Todo el mundo terminó vendiendo sus propiedades al Estado. Y se formó lo que hoy en día vemos: potreros.", qa: "Testimonio, anónimo en el documento", p: "p. 12" }
      ],
      toggle: { title: "Antes y después de 1969", a: { k: "Antes", items: ["Un pueblo de unas 20 casas con iglesia, escuela y cuartel (p. 10)", "La Escuela Bolivariana a la orilla del río, el Casino del Ejército, una estación de policía (p. 9)", "Parques con pinos podados, azucenas, rosas y gladiolos en los años cincuenta (p. 11)"] }, b: { k: "Después", items: ["19 casas demolidas (p. 11)", "Casino, escuela original y cuartel demolidos (p. 11)", "Obelisco y estatua de Bolívar trasladados a la colina actual (pp. 10-12)"] } },
      public: [
        { t: "Según Wikipedia, el puente se construyó a principios del siglo XVIII y está protegido como monumento nacional desde 1920.", u: "https://es.wikipedia.org/wiki/Puente_de_Boyac%C3%A1" },
        { t: "La batalla fue el 7 de agosto de 1819, entre los cerros de El Tobal y El Moral, sobre el río Teatinos.", u: "https://enciclopedia.banrepcultural.org/Puente_de_Boyac%C3%A1" }
      ],
      tension: "El documento dice que en 1819 no existía el puente de piedra actual (p. 9). Wikipedia dice que el puente se construyó a principios del siglo XVIII. Pueden hablar de estructuras distintas, y el archivo no lo aclara. El documento también atribuye el puente de piedra actual a una donación de España en 1930 (p. 9). No la encontramos en las dos fuentes públicas que consultamos, lo cual no la contradice: simplemente sigue sin corroborar.",
      think: "¿Es lo mismo preservar un monumento que preservar el lugar donde vivía gente?",
      gaps: ["Un testimonio (p. 12) dice \"en la celebración del bicentenario\" para 1969. El propio documento (p. 11) llama a 1969 el sesquicentenario.", "Las fotos del monumento (pp. 8 y 13) no están catalogadas."],
      links: ["resistencia", "oro", "alumbrado", "lideres"]
    },
    {
      id: "loma", domain: "territorio", title: "La Loma de las Tres Piedras", short: "Tres Piedras", pages: "p. 43",
      hook: "Un túnel en la montaña, dos hombres fumando tabaco y una advertencia: \"mandarían la perra\".",
      blocks: [
        { h: "El relato", t: "Recogido en cartografía social. En la Loma de las Tres Piedras o Alto del Toval había un túnel en la montaña, cerca del río Alto. Allí solían aparecer dos hombres mayores fumando tabaco que advertían no seguir adelante, pues \"mandarían la perra\".", p: "p. 43" },
        { h: "Qué es la perra", t: "En la interpretación local no es un animal doméstico sino una serpiente que habitaba una fuente de agua dentro de la montaña.", p: "p. 43" },
        { h: "Para qué sirve", t: "Explica los misterios del lugar y marca espacios del territorio que deben respetarse: el paisaje mezcla elementos naturales con relatos simbólicos que orientan la conducta.", p: "p. 43" }
      ],
      think: "Un relato puede ser un mapa de prohibiciones. ¿Qué lugares de tu territorio se cuidan por una historia y no por una ley?",
      gaps: ["El índice habla de \"el túnel del río Teatinos\"; el relato nombra al río Alto. Posible diferencia de nombre, sin confirmar.", "El documento señala dos portadores de estas historias. Sus nombres están reservados temporalmente."],
      links: ["oro", "monumento"]
    },
    {
      id: "oro", domain: "territorio", title: "Historias del oro", short: "Oro", pages: "pp. 44-45",
      hook: "Músicos dorados que bajan por la quebrada sin sonido, bueyes de oro en la Loma del Cuche, un tesoro bajo el obelisco.",
      blocks: [
        { h: "Cuatro relatos", t: "La gallina de los huevos de oro, ligada a las piedras de la Batalla (p. 44). Los músicos de oro, que bajan por la quebrada en el sector del Puentón: se ven pero no se oyen (p. 44). Los machos de oro, yuntas de bueyes dorados en la Loma del Cuche tras los derrumbes (p. 44). Y el tesoro del obelisco, que según versiones locales fue retirado o robado en las remodelaciones (p. 45).", p: "pp. 44-45" },
        { h: "Para qué", t: "Compartidos sobre todo por personas mayores, mezclan lo cotidiano con figuras extraordinarias y reinterpretan la historia y el territorio mediante imaginarios simbólicos.", p: "p. 44" }
      ],
      think: "El tesoro del obelisco se cuenta como algo que desapareció durante las remodelaciones. ¿Qué relata esa historia sobre la remodelación misma?",
      gaps: ["Los nombres históricos asociados a las piedras de la Batalla aparecen sin más contexto en el documento.", "Son relatos orales: se presentan como memoria colectiva, no como hechos verificados."],
      links: ["loma", "monumento"]
    },
    {
      id: "lideres", domain: "comunidad", title: "Quién levantó la vereda", short: "Líderes", pages: "pp. 15-17",
      hook: "Acueductos, escuela, colegio y vías hechos \"a pica y pala\". Y un liderazgo que hoy siente que solo le avisan.",
      blocks: [
        { h: "Autogestión", t: "Obras comunitarias levantadas por la propia gente: acueductos, escuela, colegio, vías. Los bazares financiaron escuela e iglesia y eran lugar de encuentro: \"todo era con la comunidad, todos ayudaban, unos con comida, otros con trabajo\".", p: "pp. 15-16" },
        { h: "Hoy", q: "Ya no nos dejan participar, sino que solo nos avisan qué van a hacer.", qa: "Testimonio, anónimo en el documento", p: "pp. 15-16" },
        { h: "Quiénes aparecen", t: "El documento lista, con nombre, a dirigentes de la Junta de Acción Comunal, fundadores y benefactores (terrenos para iglesia, cementerio, colegio y escuela), líderes religiosos y culturales: priostes, un director de música, una \"cocinera estrella\". En este prototipo todos aparecen como [reservado].", p: "p. 17" }
      ],
      placeholder: { t: "Fotografías de líderes y fundadores (sección pp. 14-18)", why: "Personas identificables. Reservadas temporalmente." },
      think: "Antes la comunidad hacía la obra. Ahora la obra llega y la comunidad se entera. ¿En qué momento cambió quién decide?",
      gaps: ["Fechas como \"se rescató la Junta en 1998\" o \"2015\" son memoria comunitaria: faltan por verificar.", "Cada persona nombrada necesita consentimiento antes de publicarse. Por eso, [reservado]."],
      links: ["resistencia", "sanisidro", "carmen", "cocido"]
    },
    {
      id: "resistencia", domain: "comunidad", title: "La que no vendió", short: "No vendió", pages: "pp. 11-12, 16-17",
      hook: "En 1969, entre la presión y la desinformación, una fundadora de la primera Junta se negó a vender sus tierras al Estado.",
      blocks: [
        { h: "Quién es", t: "Fundadora de la primera Junta de Acción Comunal. El documento la presenta como \"figura emblemática de la resistencia civil\": una de las pocas personas que se negó a vender al Estado en 1969. Su nombre está reservado temporalmente en este prototipo.", p: "pp. 16-17" },
        { h: "El contexto", t: "La remodelación demolió 19 casas y estuvo acompañada, según testimonios, de presión social y desinformación para comprar tierras.", p: "pp. 11-12" },
        { h: "Cómo leerlo", t: "Son relatos de memoria comunitaria sobre una compra de tierras. El archivo los conserva como voces, no como acusación a nadie.", p: "pp. 11-12" }
      ],
      placeholder: { t: "Fotografía con pie de foto con el nombre de la fundadora (p. 16)", why: "Persona identificable. Reservada temporalmente." },
      think: "Negarse a vender dejó una casa en pie en un lugar convertido en parque. ¿Qué cuesta no moverse, y quién lo recuerda?",
      gaps: ["El documento no da fechas de vida ni más datos biográficos.", "Qué puede publicarse sobre una persona nombrada se confirma con la comunidad."],
      links: ["monumento", "lideres"]
    },
    {
      id: "sanisidro", domain: "comunidad", title: "San Isidro Labrador", short: "San Isidro", pages: "p. 48",
      hook: "Una procesión con un santo vestido de ruana y una huerta en miniatura, y un remate de gallinas, conejos y patos vivos.",
      blocks: [
        { h: "La fiesta", t: "Une la fe católica y las prácticas agrícolas: San Isidro es patrono de los labriegos y mediador para el éxito de las cosechas. Se vinculó a la abundancia de maíz, arracacha y papa, y a la ofrenda de gallinas y conejos. El documento nota que perdió intensidad con la caída de la producción tradicional.", p: "p. 48" },
        { h: "El ritual", t: "Procesión por el caserío: la imagen va vestida con ruana y sombrero y lleva una pequeña \"huerta\" simbólica con pan, maíz y frutas. Música, oraciones y pólvora anuncian el recorrido. Después, misa con rogativas por lluvia o prosperidad.", p: "p. 48" },
        { h: "El remate", t: "Cada sector presenta ofrendas de productos y animales vivos (gallinas, conejos, patos), que se subastan en puja colectiva. Lo recogido va al sostenimiento de la iglesia y a proyectos comunitarios.", p: "p. 48" }
      ],
      think: "Una fiesta que agradece la cosecha pierde fuerza cuando se cosecha menos. ¿Qué agradece una comunidad cuando ya no cultiva como antes?",
      gaps: ["Las fechas y el programa actual no constan en el documento."],
      links: ["zanahoria", "lana", "lideres", "carmen"]
    },
    {
      id: "carmen", domain: "comunidad", title: "Virgen del Carmen", short: "Carmen", pages: "p. 49",
      hook: "Cuatrocientos a quinientos vehículos decorados viajan del Puente de Boyacá a Ventaquemada y regresan.",
      blocks: [
        { h: "Qué es", t: "Fiesta que une devoción y gremio de transportadores: la Virgen del Carmen protege a conductores y viajeros. El documento da más de 40 años de trayectoria local.", p: "p. 49" },
        { h: "Cómo se sostiene", t: "La organizan los priostos, habitantes y transportistas, con trabajo voluntario que pasa de familia en familia. Planean 4 o 5 meses antes y no tienen presupuesto institucional fijo: se financian con rifas y boletas.", p: "p. 49" },
        { h: "La caravana", t: "La imagen viaja del Puente de Boyacá a Ventaquemada y regresa, con entre 400 y 500 vehículos decorados. El documento llama al automotor \"espacio sagrado de manifestación de fe\".", p: "p. 49" },
        { h: "Y también", t: "Concursos de tractores, ciclismo, carreras de carros de balineras y el \"concurso del carro recalentado\", en el que equipos compiten empujando un vehículo.", p: "p. 49" }
      ],
      think: "Un carro puede ser un lugar sagrado. ¿Qué otros objetos cotidianos se vuelven altar por un día?",
      gaps: ["\"Carro recalentado\" merece una ficha propia si la comunidad aporta detalle: hoy solo hay menciones.", "Las fechas y el programa actual no constan."],
      links: ["lideres", "sanisidro", "monumento"]
    }
  ],
  edges: [
    ["jutes","cocido","doc"],
    ["jutes","amasijos","doc"],
    ["jutes","sopas","doc"],
    ["cocido","amasijos","doc"],
    ["cocido","sopas","doc"],
    ["amasijos","sopas","doc"],
    ["cocido","papa","doc"],
    ["cocido","hierbas","doc"],
    ["papa","zanahoria","doc"],
    ["zanahoria","lana","doc"],
    ["zanahoria","sanisidro","doc"],
    ["lana","sanisidro","doc"],
    ["monumento","alumbrado","doc"],
    ["monumento","oro","doc"],
    ["monumento","loma","ed"],
    ["oro","loma","doc"],
    ["monumento","resistencia","doc"],
    ["monumento","lideres","doc"],
    ["resistencia","lideres","doc"],
    ["lideres","sanisidro","doc"],
    ["lideres","carmen","doc"],
    ["sanisidro","carmen","ed"],
    ["cocido","lideres","doc"],
    ["carmen","monumento","ed"]
  ],
  timeline: [
    { y: "Siglo XVIII", t: "Según fuentes públicas, el puente se construye a principios del siglo XVIII sobre el río Teatinos.", src: "public", u: "https://es.wikipedia.org/wiki/Puente_de_Boyac%C3%A1" },
    { y: "1819", t: "7 de agosto: batalla de Boyacá, entre los cerros de El Tobal y El Moral. Allí convergían caminos a Tunja, Samacá, Ventaquemada y Boyacá (p. 9 del documento).", src: "both", u: "https://enciclopedia.banrepcultural.org/Puente_de_Boyac%C3%A1" },
    { y: "1920", t: "El sitio se declara monumento nacional de la independencia.", src: "public", u: "https://es.wikipedia.org/wiki/Puente_de_Boyac%C3%A1" },
    { y: "1930", t: "El documento dice que el puente de piedra actual fue una donación de España. Sin corroborar.", src: "doc", p: "p. 9" },
    { y: "1950s", t: "Esplendor paisajístico con parques, pinos podados, azucenas, rosas y gladiolos. En 1956 se construye la calzada superior, \"el puente grande\".", src: "doc", p: "p. 11" },
    { y: "1963", t: "8 de diciembre: se inaugura la parroquia San Miguel Arcángel Puente de Boyacá.", src: "public", u: "https://es.wikipedia.org/wiki/Puente_de_Boyac%C3%A1" },
    { y: "1969", t: "Sesquicentenario: se demuelen 19 casas, el Casino, la escuela original y el cuartel, y se trasladan el obelisco y la estatua de Bolívar.", src: "doc", p: "pp. 10-12" },
    { y: "1998", t: "Según el documento, la Junta de Acción Comunal se \"rescata\" este año. Memoria comunitaria, sin verificar.", src: "doc", p: "p. 17" },
    { y: "2002", t: "Hito de las lavadoras de zanahoria: del autoconsumo a los mercados nacionales.", src: "doc", p: "p. 35" },
    { y: "2004", t: "Empieza el alumbrado navideño, con una empresa externa y jóvenes locales.", src: "doc", p: "p. 36" },
    { y: "2026", t: "Marzo: se produce el inventario \"Memorias Vivas del Puente de Boyacá\", de 54 páginas, con la Junta de Acción Comunal.", src: "doc", p: "pp. 1-5" }
  ],
  voices: [
    { q: "Para ese entonces, 1969, en la celebración del bicentenario, destruyeron, no es otro término, destruyeron el Puente de Boyacá.", a: "Testimonio, anónimo", p: "p. 12", n: "El propio documento llama a 1969 el sesquicentenario." },
    { q: "Quedó todo separado, cuando antes estaba todo integrado en un solo sitio.", a: "Testimonio, anónimo", p: "p. 12" },
    { q: "Todo el mundo terminó vendiendo sus propiedades al Estado. Y se formó lo que hoy en día vemos: potreros.", a: "Testimonio, anónimo", p: "p. 12" },
    { q: "Se echa el maicito en un hoyo en la tierra con agua limpia, limpia, limpia el agua, y se deja un mes el bulto de maíz ahí.", a: "Persona entrevistada, anónima", p: "p. 21" },
    { q: "Aquí el almuerzo siempre empieza con sopita, porque eso es lo que le da fuerza a uno para seguir trabajando.", a: "Portadora de saberes culinarios [nombre reservado]", p: "p. 29" },
    { q: "Eso viene de los abuelos, ellos le enseñaban a uno qué hierba servía para cada cosa.", a: "Testimonio, anónimo", p: "p. 39" },
    { q: "Todo era con la comunidad, todos ayudaban, unos con comida, otros con trabajo.", a: "Testimonio, anónimo", p: "pp. 15-16" },
    { q: "Ya no nos dejan participar, sino que solo nos avisan qué van a hacer.", a: "Testimonio, anónimo", p: "pp. 15-16" }
  ],
  gaps: [
    { h: "Anunciado, no contenido", items: ["Chicha y guarapo: el índice (p. 4) los anuncia en cocina; el documento no los trae.", "Cultivo de la alverja: anunciado en el índice, sin sección propia.", "Sopa de maíz pintado: anunciada como plato propio; solo aparece en una cita (p. 26)."] },
    { h: "Páginas que son solo imagen", items: ["Las páginas 5, 8, 13, 18, 31, 37, 41, 46, 50, 53 y 54 son imagen, divisor o están en blanco. Sus fotos y pies de foto aún no están catalogados."] },
    { h: "Contradicciones registradas", items: ["Bicentenario o sesquicentenario para 1969 (pp. 11-12).", "\"Boyacá Boyacá\" al listar los caminos que convergían en el puente (p. 9): probable duplicación.", "Río Alto o río Teatinos en el relato del túnel (p. 43).", "Puente de piedra: 1930 según el documento, siglo XVIII según fuentes públicas."] },
    { h: "Por verificar fuera del documento", items: ["Donación de España en 1930 (p. 9).", "Calzada superior de 1956 y demolición de 1969 (p. 11).", "Inicio del alumbrado en 2004 (p. 36)."] },
    { h: "Reservado temporalmente", items: ["Nombres de personas y negocios.", "Fotografías donde aparecen personas.", "El PDF original completo."] }
  ]
};
