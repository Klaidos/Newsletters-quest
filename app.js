
// ─── DATOS DE NEWSLETTERS ────────────────────────────────────────────────────
const RAW_DATA_PLACEHOLDER = "DATA_GOES_HERE";
const CATEGORIES = {
  "Crypto & Bitcoin": {
    emoji: "₿",
    color: "#F7931A",
    bg: "#1A0F00"
  },
  "Finanzas Personales": {
    emoji: "💸",
    color: "#10B981",
    bg: "#001A10"
  },
  "Inversión & Bolsa": {
    emoji: "📈",
    color: "#6366F1",
    bg: "#0A0020"
  },
  "Emprendimiento": {
    emoji: "🚀",
    color: "#EC4899",
    bg: "#1A0010"
  },
  "Negocios & Marketing": {
    emoji: "📊",
    color: "#8B5CF6",
    bg: "#100020"
  },
  "Creatividad & Video": {
    emoji: "🎬",
    color: "#EF4444",
    bg: "#1A0000"
  },
  "Libros & Aprendizaje": {
    emoji: "📚",
    color: "#F59E0B",
    bg: "#1A1000"
  },
  "Comunicación & Personal": {
    emoji: "🗣️",
    color: "#14B8A6",
    bg: "#001A18"
  },
  "Autónomo & Legal": {
    emoji: "⚙️",
    color: "#94A3B8",
    bg: "#0A0F18"
  }
};
const NEWSLETTER_DATA = {
  "categories": {
    "Crypto & Bitcoin": {
      "emoji": "₿",
      "color": "#F7931A",
      "newsletters": ["Omar lopez BTC", "Crypto Noticias"]
    },
    "Finanzas Personales": {
      "emoji": "💸",
      "color": "#10B981",
      "newsletters": ["Nudista inversor", "Dinero y bolsa", "Galicia investor"]
    },
    "Inversión & Bolsa": {
      "emoji": "📈",
      "color": "#6366F1",
      "newsletters": ["Invierte Joven", "Galician investor", "Bai Javier"]
    },
    "Emprendimiento": {
      "emoji": "🚀",
      "color": "#EC4899",
      "newsletters": ["Movidas de emprender", "Emprende Aprendiendo", "Bookstraping", "Anyelo rico"]
    },
    "Negocios & Marketing": {
      "emoji": "📊",
      "color": "#8B5CF6",
      "newsletters": ["Bigseo", "Javi Rueda", "Celia Rubio", "Rafa caston", "Ayuda T pymes"]
    },
    "Creatividad & Video": {
      "emoji": "🎬",
      "color": "#EF4444",
      "newsletters": ["Javi ortega", "Aura pods", "Animation magazine"]
    },
    "Libros & Aprendizaje": {
      "emoji": "📚",
      "color": "#F59E0B",
      "newsletters": ["Libro al dia", "Eladio mendoza", "Zumitow"]
    },
    "Comunicación & Personal": {
      "emoji": "🗣️",
      "color": "#14B8A6",
      "newsletters": ["Adria lopez pastor", "Jon Hernandez"]
    },
    "Autónomo & Legal": {
      "emoji": "⚙️",
      "color": "#64748B",
      "newsletters": ["Autonomos"]
    }
  },
  "newsletters": {
    "Omar lopez BTC": {
      "categoria": "Crypto & Bitcoin",
      "lecciones": [{
        "titulo": "Bitcoin no es un activo refugio",
        "contenido": "Bitcoin es simplemente un objeto de valor que es mas pensado a largo plazo un activo refugio serian el oro o los bonos del gobiernos que a pesar de lo volatil que es el mercado se mantiene mucho mejor que otras cosas"
      }, {
        "titulo": "Bitcoin como reserva de valor",
        "contenido": "Dado a lo inestable que son las monedas y que las acciones y bonos están un poco a la izquierda, bitcoin al no estar ligado pues es un activo para la inflación 238.6 millones en iShares Bitcoin Trust (6,991,248 acciones)- 79.5 millones en Fidelity Bitcoin ETF (1,516,302 acciones)- 35.1 millones en Grayscale BTC"
      }, {
        "titulo": "Pensar en la solución",
        "contenido": "A veces nos centramos tanto en los que pasarán que buscar una solución a ello, hay que dejar el miedo sobre lo que pase en el futuro de bitcoin y mas bien aprovechar esta herramienta lo que nos ofrece"
      }, {
        "titulo": "La espiral de la muerte de la mineria de Bitcoin",
        "contenido": "La espiral de la muerte es un escenario teórico: precio cae, minar no es rentable, mineros se van, red se debilita. Pero hay un error: cada 10 minutos Bitcoin paga 3.125 BTC. Si unos se van, la competencia baja y los que quedan son más rentables. El sistema se autorregula con teoría de juegos."
      }, {
        "titulo": "Bitcoin me enseño a ahorrar",
        "contenido": "Entrar en Bitcoin es como meterte en una madriguera. Empiezas por curiosidad y acabas entendiendo cosas que nunca te habían explicado. Bitcoin te enseña a no gastar impulsivamente y a pensar en el valor a largo plazo."
      }, {
        "titulo": "El director del banco no es tu amigo",
        "contenido": "Los bancos ganan dinero con tu dinero. Lo primero que tienes que hacer es entender que el banco no está de tu lado. Te van a ofrecer productos que les benefician a ellos, no a ti. Edúcate financieramente antes de pedir consejo a un banco."
      }]
    },
    "Nudista inversor": {
      "categoria": "Finanzas Personales",
      "lecciones": [{
        "titulo": "No te harás rico ahorrando",
        "contenido": "Por mas que ahorres de los gastos hormiga y vivir debajo de tus posibilidades no vale la pena ya que el ahorro es mínimo. Tampoco ayuda mucho el utilizar ese dinero para invertirlo sea acciones, etfs, crypto etc. Esto debe de cambiar. Lo mejor que puedes hacer es aumentar tus ingresos."
      }, {
        "titulo": "Dura realidad del dinero",
        "contenido": "La sociedad nos enseña que el que ser millonario es malo, que el dinero es sucio. Eso es mentira. El dinero es una herramienta y como tal debes aprender a usarla. No pienses que la gente rica es mala por tener dinero."
      }, {
        "titulo": "Ser rico",
        "contenido": "Ser rico no es tener mucho dinero, es tener tiempo libre. La riqueza real es poder hacer lo que quieras cuando quieras. Construye activos que trabajen por ti mientras duermes."
      }, {
        "titulo": "La independencia financiera",
        "contenido": "La independencia financiera no es un número, es un estilo de vida. No necesitas millones para ser libre, necesitas que tus ingresos pasivos superen tus gastos. Empieza pequeño pero empieza ya."
      }, {
        "titulo": "Cosas necesarias para un negocio online",
        "contenido": "Para un negocio online necesitas: producto o servicio claro, audiencia definida, sistema de captación de clientes, sistema de entrega del producto. Sin estos 4 elementos no tienes negocio, tienes un hobby."
      }, {
        "titulo": "Mil eurista y la libertad financiera",
        "contenido": "Si ganas 1000 euros al mes y gastas 800, tienes 200 para invertir. Esos 200 euros al mes durante 20 años en un índice al 8% anual son más de 100.000 euros. El tiempo es tu mayor aliado cuando inviertes joven."
      }, {
        "titulo": "No seas la puta de nadie",
        "contenido": "No trabajes solo por dinero. Negocia tu valor. Si no te pagan lo que mereces, o te formas para valer más o buscas a alguien que te pague lo que mereces. Nunca aceptes menos de lo que vales por miedo."
      }, {
        "titulo": "Escalar un negocio",
        "contenido": "Para escalar un negocio necesitas sistemas y delegación. Mientras tú seas el cuello de botella, no puedes crecer. Documenta todo, crea procesos, y encuentra personas que hagan mejor que tú las cosas que no se te dan bien."
      }]
    },
    "Invierte Joven": {
      "categoria": "Inversión & Bolsa",
      "lecciones": [{
        "titulo": "Errores al invertir en bolsa",
        "contenido": "Invertir una vez todo de golpe, es mejor invertir poco a poco con el tiempo porque puede que la bolsa baje y perdiste dinero del que metiste. Vender cuando la bolsa baje como las Crypto No pierdes hasta que vendes. La bolsa siempre ha subido a largo plazo, mantén la calma."
      }, {
        "titulo": "El largo plazo es como un telescopio",
        "contenido": "Si miras el corto plazo ves ruido y volatilidad. Si miras el largo plazo ves tendencia. El S&P 500 ha subido de media un 10% anual durante décadas. La clave es no mirar la cartera cada día y dejar que el tiempo haga su trabajo."
      }, {
        "titulo": "Estudios sobre inversión",
        "contenido": "Estudia antes de invertir. Lee libros como El inversor inteligente de Benjamin Graham. Entiende la diferencia entre valor y precio. No inviertas en lo que no entiendes. Warren Buffett dice: si no puedes explicar tu inversión en 5 minutos, no la hagas."
      }, {
        "titulo": "Inversiones diversificadas",
        "contenido": "No pongas todos los huevos en la misma cesta. Diversifica entre: renta variable (acciones, ETFs), renta fija (bonos), activos reales (inmuebles, oro), crypto. La diversificación reduce el riesgo sin reducir mucho el retorno."
      }, {
        "titulo": "Como ser libre antes de que tu hijo sea mayor",
        "contenido": "Si empiezas a invertir a los 20 con 100 euros al mes, a los 40 puedes tener más de 60.000 euros. La magia del interés compuesto: el dinero que ganas, también gana dinero. Cuanto antes empieces, menos necesitas invertir."
      }, {
        "titulo": "Como invertir dependiendo del nivel",
        "contenido": "Nivel 0: cuenta remunerada o depósito. Nivel 1: ETFs indexados (S&P 500, MSCI World). Nivel 2: acciones individuales. Nivel 3: bienes raíces, private equity. Empieza por el nivel 1 y avanza cuando entiendas bien cada nivel."
      }, {
        "titulo": "Vivir de las inversiones",
        "contenido": "Para vivir de las inversiones necesitas un patrimonio tal que el 4% anual cubra tus gastos. Si gastas 1500 euros al mes (18.000 al año), necesitas 450.000 euros invertidos. Eso parece mucho, pero con tiempo y consistencia es alcanzable."
      }, {
        "titulo": "Oro como activo",
        "contenido": "El oro no genera ingresos pero protege contra la inflación y las crisis. Es recomendable tener entre un 5 y 10% de la cartera en oro. Puedes comprarlo físico o través de ETFs. No es para hacerse rico, es para protegerse."
      }]
    },
    "Celia Rubio": {
      "categoria": "Negocios & Marketing",
      "lecciones": [{
        "titulo": "Sin esto no aumentarás tus ventas",
        "contenido": "Sin conocer a tu cliente ideal no puedes vender nada. Define quién es, qué problema tiene, qué solución busca, cuánto puede pagar. Habla su idioma, usa sus palabras, resuelve su dolor específico."
      }, {
        "titulo": "Cinco sesgos psicológicos para aumentar tus ventas",
        "contenido": "1. Escasez: si hay poco, se quiere más. 2. Urgencia: si se acaba pronto, actúo ya. 3. Prueba social: si otros lo compran, debe ser bueno. 4. Autoridad: si lo dice un experto, lo creo. 5. Reciprocidad: si me das algo gratis, me siento obligado a devolver."
      }, {
        "titulo": "Ofrecer servicios",
        "contenido": "Para ofrecer servicios bien: define claramente qué incluye y qué no, pon precio justo (ni el más barato ni el más caro), muestra resultados anteriores, ten proceso claro de onboarding, y sobrepasa las expectativas del cliente."
      }, {
        "titulo": "Contratar gente",
        "contenido": "Antes de contratar, documenta el proceso que quieres delegar. Si no puedes explicarlo, no puedes delegarlo. Contrata por actitud, entrena por habilidad. Y paga bien: la gente mal pagada trabaja mal o se va."
      }, {
        "titulo": "Errores de editores de video",
        "contenido": "Los editores de video cometen estos errores: no mostrar su trabajo online, no especializarse en un nicho, cobrar por horas en lugar de por valor, no hacer seguimiento a los clientes, no pedir referidos a clientes satisfechos."
      }, {
        "titulo": "Errores de contenido",
        "contenido": "Errores frecuentes en contenido: hablar de ti en lugar de hablar de tu cliente, crear sin estrategia, no tener llamada a la acción, no ser consistente, copiar a la competencia en lugar de diferenciarte."
      }]
    },
    "Movidas de emprender": {
      "categoria": "Emprendimiento",
      "lecciones": [{
        "titulo": "¿QUE DEBO DE HACER PARA GANAR MAS DINERO EN MI CAMPO?",
        "contenido": "1. Especialízate: cobra más por saber más de un nicho específico. 2. Sube precios poco a poco. 3. Crea productos escalables (cursos, templates, herramientas). 4. Construye audiencia que confíe en ti. 5. Ofrece servicios de mayor valor (consultoría vs ejecución)."
      }, {
        "titulo": "Consejos para una vida financiera bien",
        "contenido": "Gasta menos de lo que ganas. Invierte la diferencia. Aumenta ingresos activamente. Crea al menos una fuente de ingresos pasivos. Aprende de finanzas continuamente. Rodéate de personas con mentalidad financiera sana."
      }, {
        "titulo": "Consejo util para ganar dinero",
        "contenido": "El dinero más fácil es el que ya tienes. Antes de buscar nuevos clientes, optimiza los que ya tienes: vende más a los clientes actuales, sube precios a clientes que no te regateen, elimina los clientes que te dan más problemas que dinero."
      }, {
        "titulo": "Las parejas y el dinero",
        "contenido": "El dinero es uno de los principales problemas en las parejas. Habla de dinero con tu pareja desde el principio. Define cómo gestionáis los gastos. Tengan metas financieras comunes. La transparencia económica es fundamental para una relación sana."
      }, {
        "titulo": "La libertad y el dinero",
        "contenido": "La libertad real viene de no depender de una sola fuente de ingresos. Si pierdes tu único cliente o trabajo, ¿cuánto tiempo aguantas? Construye múltiples fuentes de ingreso aunque sean pequeñas. Diversifica igual que con las inversiones."
      }, {
        "titulo": "Lecciones financieras",
        "contenido": "1. El tiempo es el activo más valioso. 2. La educación financiera no se enseña en la escuela. 3. El interés compuesto funciona para ti o contra ti. 4. La inflación devora el dinero parado. 5. Los ricos compran activos, los pobres compran pasivos."
      }, {
        "titulo": "Vivir al 80%",
        "contenido": "Vive con el 80% de lo que ganas. El 20% restante: 10% para inversiones a largo plazo, 5% para fondo de emergencia, 5% para educación y formación. Este sistema simple, si lo sigues durante años, cambia tu situación financiera completamente."
      }, {
        "titulo": "La extraña relación entre dinero y próstata",
        "contenido": "El estrés financiero afecta tu salud. Las deudas y la escasez elevan el cortisol. Solucionar tu situación económica es también cuidar tu salud. No es solo dinero, es calidad de vida."
      }]
    },
    "Emprende Aprendiendo": {
      "categoria": "Emprendimiento",
      "lecciones": [{
        "titulo": "Habilidades digitales y marca personal",
        "contenido": "Para realizar una buena marca personal es realizar un contenido que se mantengan con el tiempo. No sigas las tendencias efímeras. Construye contenido evergreen que siga siendo útil años después. Tu marca personal es tu activo más valioso como freelancer."
      }, {
        "titulo": "Monetizar tu hobbie",
        "contenido": "Pensar en tu hobbie. Buscar la red social que más alcance pueda llegar con tu hobbie. Crear contenido de ese hobbie. Si te apasiona la edición de video, enseña a otros cómo editar. Si te gusta el anime, crea contenido sobre anime. El dinero sigue a la audiencia."
      }, {
        "titulo": "El valor de YouTube",
        "contenido": "Siempre recuerda que una buena historia y que conecte con tu audiencia es más importante que algo bien producido. YouTube valora la retención y el engagement. Un video con cámara de móvil pero buena historia supera a uno muy producido pero aburrido."
      }, {
        "titulo": "Cómo conseguir clientes",
        "contenido": "Así jugué sucio cuando empecé: 1. Haz un trabajo gratis o muy barato para conseguir tu primer caso de éxito. 2. Pide testimonios y permiso para usar el trabajo en tu portfolio. 3. Con ese portfolio consigue clientes de pago. 4. Sube precios cuando tengas demanda."
      }, {
        "titulo": "El tipo más arrogante de España",
        "contenido": "Los mejores vendedores no venden, enseñan. Comparte tu conocimiento generosamente. Crea contenido que demuestre que sabes lo que haces. Los clientes compran a quien conocen, confían y les gusta. La visibilidad genera credibilidad."
      }, {
        "titulo": "Habilidades para emprender",
        "contenido": "Las habilidades más rentables para un emprendedor digital: copywriting (vender con palabras), ventas (cerrar deals), marketing digital, gestión de proyectos, y comunicación. Domina al menos dos de estas y siempre tendrás trabajo."
      }, {
        "titulo": "Método para crear sistemas",
        "contenido": "Documenta todo lo que haces. Crea checklists. Automatiza lo repetitivo. Delega lo que no aporta valor. Los sistemas liberan tu tiempo y permiten escalar. Sin sistemas, eres esclavo de tu negocio."
      }, {
        "titulo": "La vía negativa",
        "contenido": "A veces crecer no es añadir cosas sino eliminarlas. Elimina clientes malos. Elimina servicios poco rentables. Elimina tareas que no generan ingresos. Simplifica tu oferta. Menos opciones, más claridad, más ventas."
      }]
    },
    "Libro al dia": {
      "categoria": "Libros & Aprendizaje",
      "lecciones": [{
        "titulo": "Haz realidad tus ideas",
        "contenido": "Las ideas sin ejecución no valen nada. El 99% de las personas tiene buenas ideas. El 1% las ejecuta. La diferencia está en empezar antes de estar listo, iterar rápido, y no buscar la perfección al principio."
      }, {
        "titulo": "Bookstraping",
        "contenido": "Bootstrapping significa hacer crecer tu negocio sin inversión externa. Empieza con lo que tienes. Reinvierte las ganancias. Crece orgánicamente. Es más lento pero mantienes el control total de tu empresa."
      }, {
        "titulo": "Llevar un negocio",
        "contenido": "Las claves para llevar un negocio: cashflow positivo siempre, conoce tus números, mantén los costes fijos bajos, cobra antes de gastar, y nunca dejes de vender aunque tengas clientes."
      }, {
        "titulo": "Solucionar errores",
        "contenido": "Los errores son datos. Cuando algo sale mal, analiza qué falló, por qué falló, y qué cambiarías. El fracaso es el precio del aprendizaje. Los emprendedores exitosos han fracasado más veces que los no exitosos, porque han intentado más."
      }, {
        "titulo": "Consejos para emprender",
        "contenido": "1. Empieza con un servicio antes que con un producto. 2. Tu primer cliente es el más difícil. 3. El nicho que da miedo es el que más paga. 4. Precio alto + pocos clientes > precio bajo + muchos clientes. 5. Tu red es tu net worth."
      }, {
        "titulo": "Adversidades",
        "contenido": "Las adversidades forjan el carácter emprendedor. Cada NO que recibes te acerca más al SÍ. Cada problema que resuelves hace tu negocio más fuerte. La resiliencia es la habilidad más importante para emprender."
      }, {
        "titulo": "Amazon",
        "contenido": "Amazon FBA y Kindle publishing son formas de generar ingresos pasivos usando la infraestructura de Amazon. No necesitas mucho capital inicial. La clave está en elegir bien el nicho y el producto."
      }, {
        "titulo": "F*ck You Money",
        "contenido": "El F*ck You Money es tener suficiente dinero guardado para poder decirle no a cualquier trabajo o cliente que no te guste sin que te afecte económicamente. Es el nivel máximo de libertad financiera. Empieza pequeño: 3 meses de gastos ahorrados."
      }]
    },
    "Crypto Noticias": {
      "categoria": "Crypto & Bitcoin",
      "lecciones": [{
        "titulo": "La IA no es el fin del mundo (todavía)",
        "contenido": "La IA está transformando todos los sectores pero no va a reemplazar a todos los trabajos de golpe. Los trabajos creativos, de relación humana y de toma de decisiones complejas son los más seguros. Aprende a usar IA como herramienta, no como sustituto."
      }, {
        "titulo": "Nvidia y los chips de IA",
        "contenido": "Nvidia lidera el mercado de chips para IA. El boom de la IA ha disparado su valoración. Invertir en infraestructura de IA (chips, centros de datos, cloud) puede ser más rentable que invertir en las empresas de IA directamente. La infraestructura siempre gana."
      }]
    },
    "Bigseo": {
      "categoria": "Negocios & Marketing",
      "lecciones": [{
        "titulo": "Newsletters como canal de marketing",
        "contenido": "5 beneficios de tener una newsletter: Audiencia real a diferencia de la visibilidad en redes. Comunicación directa sin algoritmos. Alta tasa de conversión. Construyes un activo tuyo. Relación más cercana con tu audiencia. Una newsletter es el mejor canal de marketing a largo plazo."
      }, {
        "titulo": "Landing page efectiva",
        "contenido": "10 elementos clave en una landing page: Título claro y directo que capta la atención. Propuesta de valor en 3 segundos. Prueba social (testimonios, logos de clientes). Llamada a la acción clara. Sin distracciones. Mobile first. Velocidad de carga rápida."
      }, {
        "titulo": "Crear videos largos para YouTube",
        "contenido": "Consejos para videos largos atractivos en YouTube: Estructura con introducción, desarrollo y conclusión. Ganchos cada 2-3 minutos para retener. Edición dinámica sin tiempos muertos. Thumbnails y títulos optimizados. Responde preguntas que tu audiencia busca en Google."
      }, {
        "titulo": "SEO básico",
        "contenido": "El SEO sigue siendo la fuente de tráfico más rentable a largo plazo. Principios básicos: investiga palabras clave, crea contenido de calidad que responda la intención de búsqueda, consigue backlinks de sitios relevantes, optimiza la velocidad de tu web."
      }, {
        "titulo": "Email marketing",
        "contenido": "El email marketing tiene un ROI de 42 a 1. Por cada euro invertido en email marketing se recuperan 42. Construye tu lista desde el día 1. Da valor antes de pedir. Segmenta tu lista. Automatiza secuencias de bienvenida."
      }, {
        "titulo": "Redes sociales orgánico",
        "contenido": "Para crecer orgánico en redes: publica con consistencia, usa los formatos que premia el algoritmo (reels, shorts), interactúa con tu comunidad, colabora con otros creadores de tu nicho, y repropósito el contenido en múltiples plataformas."
      }, {
        "titulo": "Copywriting que vende",
        "contenido": "La fórmula PAS para escribir copy que vende: Problema (nombra el problema que tiene tu cliente), Agitación (hazle sentir el dolor del problema), Solución (presenta tu servicio como la solución). Simple pero efectivo."
      }, {
        "titulo": "Marca personal online",
        "contenido": "Tu marca personal online debe responder estas preguntas: ¿A quién ayudas? ¿Con qué problema? ¿Por qué tú y no otro? ¿Qué resultados has conseguido? Si no puedes responder estas 4 preguntas claramente, tu marca personal no está definida."
      }]
    },
    "Zumitow": {
      "categoria": "Libros & Aprendizaje",
      "lecciones": [{
        "titulo": "No seas multitarea",
        "contenido": "El multitasking reduce la productividad hasta un 40%. Tu cerebro no puede hacer dos cosas a la vez, solo alterna entre ellas perdiendo tiempo en cada cambio. Una tarea a la vez, hecha bien, es siempre más eficiente."
      }, {
        "titulo": "Simplemente has pequeños logros",
        "contenido": "Los grandes objetivos se consiguen acumulando pequeñas victorias diarias. No te obsesiones con el resultado final, céntrate en el proceso diario. Un 1% mejor cada día es 37 veces mejor en un año. La consistencia supera a la intensidad."
      }, {
        "titulo": "No todo tiene que ser perfecto",
        "contenido": "El perfeccionismo es el enemigo del progreso. Publicar un video del 80% es infinitamente mejor que no publicar el video del 100%. Itera rápido, mejora con el feedback real, y no esperes a que esté perfecto para lanzarlo."
      }, {
        "titulo": "Empieza poco",
        "contenido": "Para construir hábitos: empieza con versiones ridículamente pequeñas. 2 minutos de ejercicio. Una frase de escritura. Un subtítulo de idioma. La fricción inicial es lo que mata los hábitos. Hazlo tan pequeño que sea imposible no hacerlo."
      }]
    },
    "Javi Rueda": {
      "categoria": "Negocios & Marketing",
      "lecciones": [{
        "titulo": "Contabilidad básica para negocios",
        "contenido": "Hacienda va a interpretar lo que entienda de tu contabilidad y va a buscar la forma de cobrarte más. Lleva tu contabilidad al día. Guarda todas las facturas. Diferencia ingresos de gastos. Entiende la diferencia entre beneficio y cashflow."
      }, {
        "titulo": "4 fases para delegar tu trabajo",
        "contenido": "Fase 1: Yo hago, tú miras. Fase 2: Yo hago, tú haces. Fase 3: Tú haces, yo miro. Fase 4: Tú haces. La delegación es un proceso que requiere tiempo e inversión inicial. Pero es la única manera de escalar."
      }, {
        "titulo": "Método Kaizen",
        "contenido": "Kaizen significa hacer pequeños cambios que mejoren tu vida a futuro. No necesitas una revolución. Necesitas mejorar un 1% cada día en las áreas importantes: salud, dinero, relaciones, habilidades. En un año los resultados son exponenciales."
      }, {
        "titulo": "Primer cliente sin portfolio",
        "contenido": "Para conseguir el primer cliente sin portfolio: ofrece hacer el trabajo gratis o a precio de coste a cambio de testimonio y permiso para usar el trabajo. Elige empresas con las que te gustaría trabajar y envíales una propuesta de valor específica."
      }, {
        "titulo": "Subir precios sin perder clientes",
        "contenido": "La estrategia para subir precios: avisa con antelación, justifica el aumento con el valor que aportas, sube primero a nuevos clientes y luego a los actuales, los clientes que se van por el precio no eran tus clientes ideales."
      }, {
        "titulo": "Gestión del tiempo para freelancers",
        "contenido": "Los freelancers mezclan trabajo de producción (hacer el trabajo) con trabajo de negocio (conseguir clientes, administrar). Dedica al menos el 20% de tu tiempo al trabajo de negocio, aunque tengas proyectos. Sino en cuanto termines un proyecto te quedas sin nada."
      }, {
        "titulo": "Productividad real",
        "contenido": "Productividad no es hacer muchas cosas, es hacer las cosas que importan. Define tus 3 tareas más importantes del día la noche anterior. Hazlas primero en el día. El resto es secundario."
      }, {
        "titulo": "Networking para freelancers",
        "contenido": "Tu red es tu mejor fuente de clientes. Conecta con personas de tu sector, con potenciales clientes, y con freelancers complementarios (un editor de video puede asociarse con un diseñador gráfico o un copywriter). Cada relación es una oportunidad."
      }]
    },
    "Rafa caston": {
      "categoria": "Negocios & Marketing",
      "lecciones": [{
        "titulo": "Conseguir clientes por DM",
        "contenido": "Para conseguir clientes por mensajes directos: investiga bien a la empresa antes de escribir, personaliza el mensaje totalmente, habla de su problema no de tus servicios, ofrece algo de valor gratis primero, y haz seguimiento sin ser pesado."
      }, {
        "titulo": "Propuesta de valor",
        "contenido": "Una buena propuesta de valor responde: ¿Qué haces? ¿Para quién? ¿Qué resultado consiguen? ¿Por qué tú? En una sola frase. Ejemplo: Ayudo a empresas de hostelería a crear videos de formación que reducen el tiempo de onboarding de empleados en un 50%."
      }, {
        "titulo": "Precio por valor no por horas",
        "contenido": "Cobrar por horas es el peor modelo para un freelancer. El cliente paga por el resultado, no por tu tiempo. Si en 2 horas consigues lo que otro tarda 10, no deberías cobrar menos. Cobra por el valor que aportas, no por el tiempo que tardas."
      }, {
        "titulo": "Aura pods",
        "contenido": "Los auriculares y el equipo de trabajo son inversiones, no gastos. Un buen setup te permite trabajar mejor y transmite profesionalidad a los clientes. Pero no esperes a tener el equipo perfecto para empezar."
      }, {
        "titulo": "Elegir el precio del cliente",
        "contenido": "No todos los clientes merecen tu tiempo. Los mejores clientes: pagan bien y en plazo, respetan tu trabajo, son claros con lo que quieren, y te recomiendan. Los peores clientes te roban tiempo, energía y dinero. Aprende a detectarlos y a decirles no."
      }, {
        "titulo": "El truco alemán para vender más vídeos",
        "contenido": "Muestra el proceso, no solo el resultado. Los clientes compran más fácil cuando ven cómo trabajas. Comparte behind the scenes, explica tus decisiones creativas, muestra las herramientas que usas. La transparencia genera confianza."
      }, {
        "titulo": "La pregunta para negociar",
        "contenido": "La pregunta más poderosa en una negociación: ¿Qué necesitaría pasar para que esto funcione? Esta pregunta abre la conversación hacia soluciones en lugar de posiciones. Te ayuda a entender qué es lo que realmente valora el cliente."
      }]
    },
    "Aura pods": {
      "categoria": "Creatividad & Video",
      "lecciones": [{
        "titulo": "Errores de editores de video",
        "contenido": "Los errores más comunes de editores de video que empiezan: No tener portfolio online, no especializarse, cobrar demasiado barato (devalúa el sector), no comunicar bien el proceso al cliente, no pedir feedback ni referidos."
      }, {
        "titulo": "Como grabar sin incomodar",
        "contenido": "Para grabar sin incomodar: crea rapport primero, explica qué vas a hacer, usa equipo discreto cuando sea necesario, dale espacio a la persona, no te obsesiones con la perfección técnica en situaciones sociales."
      }]
    },
    "Eladio mendoza": {
      "categoria": "Libros & Aprendizaje",
      "lecciones": [{
        "titulo": "No seas multitarea",
        "contenido": "El multitasking es un mito moderno. Nuestro cerebro no puede enfocarse en dos cosas cognitivas al mismo tiempo. Cuando haces multitasking, en realidad alternas entre tareas perdiendo hasta el 40% de eficiencia en cada cambio."
      }, {
        "titulo": "Simplemente haz pequeños logros",
        "contenido": "El secreto de la productividad sostenible es acumular pequeñas victorias. Completa tareas pequeñas antes de las grandes. El momentum que crea terminar cosas pequeñas te da energía para las grandes."
      }, {
        "titulo": "A la hora de dar información",
        "contenido": "Cuando comuniques o enseñes: sé específico, usa ejemplos concretos, relaciona con la experiencia del receptor, repite los conceptos clave de diferentes formas. La información sin contexto no se retiene."
      }, {
        "titulo": "Exito",
        "contenido": "El éxito no es un destino, es un conjunto de hábitos diarios. Las personas exitosas no tienen días perfectos, tienen sistemas que les permiten ser consistentes incluso en los días malos."
      }, {
        "titulo": "Clickbait ético",
        "contenido": "El clickbait existe porque funciona. Pero puedes usarlo éticamente: crea títulos que generen curiosidad pero que cumplan lo que prometen. El clickbait que defrauda destruye la confianza; el que entrega lo prometido construye audiencia."
      }, {
        "titulo": "Manera de crear contenido",
        "contenido": "Formula para crear contenido que funciona: 1. Elige un problema que tiene tu audiencia. 2. Explica la solución de forma simple. 3. Muestra el resultado. 4. Llama a la acción. Repite esto consistentemente y tu audiencia crecerá."
      }]
    },
    "Dinero y bolsa": {
      "categoria": "Finanzas Personales",
      "lecciones": [{
        "titulo": "Recomendación de Warren Buffett",
        "contenido": "Warren Buffett recomienda para el inversor promedio: comprar un fondo índice del S&P 500 de bajo coste y mantenerlo para siempre. No intentes batir al mercado. No escuches a los analistas. Invierte regularmente y deja que el tiempo haga el trabajo."
      }]
    },
    "Bookstraping": {
      "categoria": "Emprendimiento",
      "lecciones": [{
        "titulo": "Llevar un negocio sin inversión",
        "contenido": "El bootstrapping es iniciar y hacer crecer un negocio con recursos propios sin financiación externa. Ventajas: control total, sin deudas, aprendes a ser eficiente. Desventajas: crecimiento más lento. Para servicios digitales como edición de video, es la mejor opción inicial."
      }, {
        "titulo": "Solucionar errores",
        "contenido": "Cuando cometas un error en un proyecto de cliente: reconócelo inmediatamente, ofrece solución concreta y plazo, hazlo sin excusas. Los clientes recuerdan más cómo gestionas los errores que los propios errores."
      }, {
        "titulo": "Consejos para emprender",
        "contenido": "Los consejos más subestimados para emprender: 1. Empieza antes de estar listo. 2. Cobra desde el primer día. 3. No necesitas una empresa para facturar. 4. Tu primer cliente es el más difícil, el segundo es mucho más fácil. 5. Pide ayuda, los emprendedores se ayudan."
      }, {
        "titulo": "Amazon Kindle",
        "contenido": "Publicar libros en Kindle es una forma de ingreso pasivo. Puedes escribir sobre tu especialidad (edición de video, por ejemplo) y recibir royalties. No es para hacerse rico rápido, pero suma como ingreso adicional."
      }, {
        "titulo": "Haz realidad tus ideas",
        "contenido": "La diferencia entre los que tienen ideas y los que construyen negocios: la ejecución imperfecta. Saca una versión básica de tu idea al mercado lo antes posible. El feedback real vale más que meses de planificación."
      }, {
        "titulo": "Fuck You Money",
        "contenido": "El F*ck You Money es tener suficiente ahorrado para poder rechazar trabajos o clientes que no te gustan. Para conseguirlo: controla gastos, aumenta ingresos, invierte sistemáticamente. No es una cantidad fija, es libertad de elección."
      }, {
        "titulo": "Adversidades",
        "contenido": "Las adversidades en los negocios no son excepciones, son la norma. Los clientes que no pagan, los proyectos que se cancelan, los socios que fallan. Quien aguanta estas situaciones sin rendirse, termina construyendo algo sólido."
      }]
    },
    "Javi ortega": {
      "categoria": "Creatividad & Video",
      "lecciones": [{
        "titulo": "Como hacer buenos videos",
        "contenido": "Los 3 pilares de un buen video: Historia (el guion y la narrativa), Imagen (fotografía, composición, luz), Sonido (el audio mal grabado arruina cualquier video). De estos tres, el sonido es el más subestimado y el que más molesta cuando falla."
      }, {
        "titulo": "Entrevistas",
        "contenido": "Para hacer buenas entrevistas: prepara las preguntas pero no te ciñas al guion, crea un ambiente cómodo para el entrevistado, escucha activamente y profundiza en lo interesante, graba siempre más de lo que necesitas, el mejor material suele salir cuando la persona se olvida de la cámara."
      }, {
        "titulo": "Iluminación",
        "contenido": "La iluminación es el 70% de la imagen. Con luz natural bien usada puedes conseguir imágenes preciosas sin equipamiento caro. Evita la luz directa de sol en verano, busca ventanas grandes, usa la hora dorada para exteriores."
      }, {
        "titulo": "Editar un video",
        "contenido": "El proceso de edición: 1. Ingesta y organización del material. 2. Selección de las mejores tomas (assembly cut). 3. Edición gruesa (rough cut). 4. Edición fina (fine cut). 5. Color grading. 6. Mezcla de audio. 7. Export. Sigue siempre este orden."
      }, {
        "titulo": "A la hora de grabar eventos",
        "contenido": "Para grabar eventos: llega antes para conocer el espacio, habla con el organizador para conocer el programa, identifica los momentos clave, graba más cutaway del que crees que necesitas, prioriza el audio en los momentos importantes."
      }, {
        "titulo": "Enviar correo a clientes",
        "contenido": "El email de propuesta a un cliente de video debe incluir: resumen del proyecto, tu propuesta de valor específica, precio claro, timeline, siguientes pasos. Sé breve y directo. Los clientes no leen emails largos."
      }, {
        "titulo": "Consejo para filmmakers",
        "contenido": "El consejo más importante para un filmmaker freelance: no esperes a tener el mejor equipo. Un iPhone con buena luz y audio decente produce videos mejores que una cámara profesional mal usada. La técnica supera al equipamiento."
      }]
    },
    "Galician investor": {
      "categoria": "Inversión & Bolsa",
      "lecciones": [{
        "titulo": "Podcast de inversión",
        "contenido": "Los podcasts son uno de los mejores formatos para aprender de inversión porque puedes escucharlos mientras haces otras cosas. Los mejores inversores son los que más aprenden continuamente. Dedica al menos 30 minutos al día a educarte."
      }, {
        "titulo": "Invertir en una empresa",
        "contenido": "Antes de invertir en una empresa analiza: el negocio (¿lo entiendes?), el equipo directivo (¿son honestos y capaces?), las finanzas (¿genera caja?), la valoración (¿está cara o barata?). Si no entiendes alguno de estos cuatro puntos, no inviertas."
      }, {
        "titulo": "Libros de inversión",
        "contenido": "Libros imprescindibles para aprender a invertir: El inversor inteligente (Benjamin Graham), Padre Rico Padre Pobre (Kiyosaki), Un paseo aleatorio por Wall Street (Malkiel), La psicología del dinero (Morgan Housel)."
      }, {
        "titulo": "Frase de Warren Buffett",
        "contenido": "El riesgo viene de no saber lo que estás haciendo. La educación financiera es la mejor inversión que puedes hacer. Antes de poner un euro en cualquier activo, entiende perfectamente qué es, cómo funciona y qué puede salir mal."
      }, {
        "titulo": "Preguntas para invertir",
        "contenido": "Antes de cualquier inversión pregúntate: ¿Puedo perder todo esto sin que afecte a mi vida? ¿Entiendo completamente en qué estoy invirtiendo? ¿Cuál es mi horizonte temporal? ¿Es consistente con mi estrategia general? Si no puedes responder, no inviertas."
      }]
    },
    "Animation magazine": {
      "categoria": "Creatividad & Video",
      "lecciones": [{
        "titulo": "11 consejos de animación",
        "contenido": "Los principios fundamentales de la animación de Disney son aplicables al video: squash and stretch (los objetos se comprimen y estiran), anticipación (prepara la acción), staging (composición clara), follow through (el movimiento continúa después de la acción principal)."
      }]
    },
    "Anyelo rico": {
      "categoria": "Emprendimiento",
      "lecciones": [{
        "titulo": "Cómo salir de pobre",
        "contenido": "Para salir de la pobreza: 1. Acepta que tu situación actual es resultado de tus decisiones pasadas. 2. Edúcate financieramente (gratis en YouTube y podcasts). 3. Aumenta tus ingresos antes que reducir gastos. 4. Invierte aunque sea poco. 5. Cambia tu entorno y mentalidad."
      }]
    },
    "Autonomos": {
      "categoria": "Autónomo & Legal",
      "lecciones": [{
        "titulo": "Seguirás recaudando IVA",
        "contenido": "Como autónomo en España recaudas IVA para Hacienda, no es tuyo. El IVA que cobras (21% en servicios) lo declaras trimestralmente. Si cobras 1000 euros + IVA, recibes 1210 pero 210 son de Hacienda. Nunca toques ese dinero."
      }, {
        "titulo": "IA en el trabajo de autónomos",
        "contenido": "La IA está transformando el trabajo freelance. Úsala para: automatizar tareas repetitivas, mejorar la calidad de entregables, reducir tiempo de producción, ofrecer servicios que antes requerían equipo. El freelancer que domina IA vale más que el que no."
      }, {
        "titulo": "Montar una S.L.",
        "contenido": "Para montar una S.L. en España necesitas: capital mínimo de 3000 euros (antes 3006), estatutos sociales, inscripción en el registro mercantil, y un gestor que lo tramite. Para empezar, ser autónomo es más sencillo y barato. La S.L. tiene sentido cuando facturas más de 40.000 euros al año."
      }]
    },
    "Adria lopez pastor": {
      "categoria": "Comunicación & Personal",
      "lecciones": [{
        "titulo": "De acoso escolar a la TED Talk más viral",
        "contenido": "Las experiencias difíciles pueden convertirse en tu mayor fortaleza si aprendes a articularlas. La vulnerabilidad bien gestionada conecta emocionalmente con la audiencia. Tu historia personal, incluso la más dolorosa, es tu activo más diferencial."
      }, {
        "titulo": "Hablas mucho. Conectas poco.",
        "contenido": "Hablar mucho no es comunicar bien. La comunicación efectiva es: escuchar más que hablar, hacer preguntas poderosas, adaptar el mensaje al receptor, y crear espacio para la respuesta. Menos palabras, más impacto."
      }, {
        "titulo": "Cómo comunicarte mejor",
        "contenido": "Los elementos de la comunicación efectiva: claridad (di lo que quieres decir sin rodeos), brevedad (elimina lo que no suma), relevancia (habla de lo que le importa a quien escucha), emoción (conecta antes de convencer)."
      }, {
        "titulo": "Tu presencia es importante",
        "contenido": "El lenguaje no verbal comunica más que las palabras. La postura, el contacto visual, el tono de voz y los gestos transmiten seguridad o inseguridad. Practica hablar en público aunque sea solo. La confianza se construye con exposición."
      }, {
        "titulo": "El verdadero enemigo",
        "contenido": "El verdadero enemigo de tu comunicación eres tú mismo. El miedo al juicio, el perfeccionismo, la autocensura. Nadie te presta tanta atención como tú crees. Lánzate y habla, la mayoría de los miedos son percepciones tuyas."
      }, {
        "titulo": "Fui a una cita a ciegas y le pedí matrimonio",
        "contenido": "Las mejores historias conectan porque tienen vulnerabilidad, humor y aprendizaje. No tengas miedo de contar tu historia real, con sus partes incómodas. La autenticidad es el ingrediente más escaso y más valioso en la comunicación actual."
      }]
    },
    "Galicia investor": {
      "categoria": "Finanzas Personales",
      "lecciones": [{
        "titulo": "Un banco dirigido por un CEO extraordinario",
        "contenido": "Cuando evalúes en qué banco tener tu dinero o en qué empresa invertir, el equipo directivo es más importante que los números actuales. Un CEO honesto y capaz puede transformar una empresa mediocre. Uno deshonesto puede hundir una empresa excelente."
      }]
    },
    "Bai Javier": {
      "categoria": "Inversión & Bolsa",
      "lecciones": [{
        "titulo": "Tus primeros 100.000 euros",
        "contenido": "Los primeros 100.000 euros son los más difíciles de conseguir. No porque sea imposible, sino porque el interés compuesto aún no actúa con fuerza. Una vez llegas a 100K, el dinero empieza a trabajar de verdad. Persevera en esa primera fase."
      }, {
        "titulo": "No se invierten millones por nada",
        "contenido": "Los fondos institucionales mueven millones siguiendo estrategias probadas. Estudia sus movimientos. Invierte en índices que repliquen su comportamiento. No compitas contra ellos, únete a ellos invirtiendo en los mismos activos."
      }, {
        "titulo": "Haz del banco tu aliado",
        "contenido": "El banco puede ser tu aliado si sabes usarlo: negocia las comisiones, usa cuentas remuneradas para el dinero que no inviertes, aprovecha los productos de inversión de bajo coste, y entiende bien los productos antes de contratarlos."
      }, {
        "titulo": "La excusa más cara",
        "contenido": "La excusa más cara que puedes tener es esperar el momento perfecto para invertir. El mejor momento para invertir fue hace 10 años. El segundo mejor momento es hoy. La inacción tiene un coste enorme: la inflación devora tu dinero parado."
      }, {
        "titulo": "Así no vas a invertir nunca",
        "contenido": "Las excusas que te impiden invertir: No tengo suficiente dinero (puedes empezar con 50 euros). No sé cómo (hay recursos gratuitos infinitos). No es el momento (nunca lo es). Es muy arriesgado (no invertir también es arriesgado). Deja de esperar y empieza."
      }, {
        "titulo": "No es para cualquiera",
        "contenido": "Invertir a largo plazo requiere una mentalidad específica: tolerancia a la incertidumbre, paciencia para no vender cuando el mercado cae, y disciplina para seguir comprando regularmente. No es fácil emocionalmente, pero es simple en su estrategia."
      }]
    },
    "Jon Hernandez": {
      "categoria": "Comunicación & Personal",
      "lecciones": [{
        "titulo": "Así conseguí mis primeros clientes",
        "contenido": "Los primeros clientes no vienen de los anuncios. Vienen de tu red personal, de mostrar tu trabajo online, de contactar directamente a empresas que te gustaría tener como clientes, y de pedir referidos a las personas que conoces."
      }, {
        "titulo": "El síndrome del tupper",
        "contenido": "El síndrome del tupper es cuando llevas el trabajo a casa mentalmente. Para freelancers esto es especialmente peligroso porque el trabajo y la vida personal se mezclan. Define horarios, crea rituales de inicio y fin del trabajo, y aprende a desconectar."
      }, {
        "titulo": "Buen sueldo, cero activos",
        "contenido": "Puedes tener un buen sueldo y no tener activos si gastas todo lo que ganas. El ingreso alto no crea riqueza, el ahorro e inversión sistemáticos sí. Empieza a construir activos desde el primer euro que ganes."
      }, {
        "titulo": "Lo que cambian 12 meses",
        "contenido": "En 12 meses puedes transformar completamente tu situación si actúas consistentemente. Define qué quieres conseguir en los próximos 12 meses, divide en acciones mensuales y semanales, y ejecuta sin excusas. El tiempo pasa igual actúes o no."
      }]
    },
    "Ayuda T pymes": {
      "categoria": "Autónomo & Legal",
      "lecciones": [{
        "titulo": "Consejo de acuaservice",
        "contenido": "Para autónomos que empiezan: lo más importante es generar ingresos antes de optimizar costes. No pierdas tiempo eligiendo el software de facturación perfecto, el logo ideal, o la web perfecta. Primero consigue clientes, luego optimizas."
      }, {
        "titulo": "IA en el trabajo",
        "contenido": "La IA aplicada al trabajo de autónomos: ChatGPT y Claude para redactar propuestas y emails, Midjourney para crear imágenes para clientes, Sora y herramientas similares para video. El autónomo que usa IA bien puede hacer el trabajo de un equipo."
      }, {
        "titulo": "Seguirás recaudando IVA",
        "contenido": "El IVA que cobras no es ingreso, es dinero que custodias para Hacienda. Crea una cuenta separada y transfiere el IVA de cada factura nada más cobrarla. Así nunca tendrás sorpresas en la declaración trimestral."
      }]
    }
  }
}; // eslint-disable-line

// ─── CONTEXT DE SEBASTIÁN ─────────────────────────────────────────────────────
const SEBASTIAN_CONTEXT = `Soy Sebastian (Klaid), 24 años, editor de video freelance en Palma de Mallorca, España. Empecé como autónomo sin dinero, 0€ en cuenta bancaria. Tengo: 380€ en Trade Republic (2% anual), 390€ en S&P 500/MSCI World/Private Equity, 50€ en BTC/SOL/DOGE/ETH en Trezor. Trabajo como editor y filmmaker. Mi sueño es Studio Fridyx: estudio audiovisual y artístico con animación, música, videojuegos y IA. Quiero ser YouTuber, streamer, cantante y productor musical. Me interesa el anime, videojuegos, dibujo e inteligencia artificial.`;

// ─── RETOS PRE-GENERADOS POR CATEGORÍA ────────────────────────────────────────
const RETOS_BASE = {
  "Crypto & Bitcoin": ["Calcula cuánto valdrían tus 50€ en crypto si Bitcoin llega a 500.000$. ¿Cambia eso tu estrategia?", "Investiga la diferencia entre tu Trezor (cold wallet) y una exchange. ¿Por qué es más seguro?", "Escribe 3 razones por las que NO venderías tu Bitcoin aunque bajara un 50%.", "Compara tu 2% de Trade Republic vs el historial de rendimiento de Bitcoin a 4 años."],
  "Finanzas Personales": ["Crea un presupuesto para el próximo mes con 0€ de base. ¿Qué gastos eliminarías primero?", "Define tu 'F*ck You Money': ¿cuántos meses de gastos básicos necesitarías tener ahorrados para sentirte libre?", "Escribe 5 cosas que gastarías si ganaras 2000€ el próximo mes. ¿Alguna es un activo?", "Calcula cuánto dinero perderías en 10 años si no inviertes los 50€ que ahorres al mes (inflación 3%)."],
  "Inversión & Bolsa": ["Revisa tu cartera actual (390€ en ETFs). ¿Qué porcentaje tienes en cada activo? ¿Está bien diversificado?", "Investiga qué comisiones cobra Trade Republic en los ETFs que tienes. ¿Son competitivas?", "Calcula cuánto tendrías en 10 años si añades 50€/mes a tu S&P 500 con un 8% anual.", "Define tu estrategia de inversión en una frase: cuándo compras, cuándo vendes, y cuánto arriesgas."],
  "Emprendimiento": ["Define tu propuesta de valor como editor freelance en una sola frase. ¿Para quién? ¿Qué resultado?", "Lista 5 empresas en Palma de Mallorca que podrían necesitar videos. Encuentra el contacto del decisor.", "Crea una oferta de 'trabajo gratis' para conseguir tu primer caso de éxito documentado.", "Escribe tu primer script de DM para contactar a un posible cliente en Instagram."],
  "Negocios & Marketing": ["Crea tu perfil de cliente ideal como editor de video: ¿qué tipo de empresa, qué presupuesto, qué dolor?", "Escribe el headline de tu portfolio en formato PAS: Problema + Agitación + Solución.", "Diseña una estrategia de contenido para 30 días en Instagram dirigida a empresas locales.", "Analiza 3 perfiles de editores de video exitosos en Instagram. ¿Qué hacen diferente a ti?"],
  "Creatividad & Video": ["Graba un vídeo de 60 segundos mostrando tu proceso de edición. Sin guion, espontáneo.", "Crea un portfolio de 3 proyectos de video: el que más te gusta, el más difícil, el que mejor demuestra tus skills.", "Escribe un guion básico para un reel de 30 segundos mostrando antes/después de una edición.", "Lista 10 nichos de video en los que podrías especializarte relacionados con tus intereses (anime, gaming, música)."],
  "Libros & Aprendizaje": ["Aplica el método Kaizen: elige 1 habilidad y define qué mejorarías solo un 1% esta semana.", "Durante 1 día, elimina el multitasking completamente. Una tarea a la vez. ¿Cómo te fue?", "Escribe 3 cosas que aprendiste esta semana. ¿Cómo las puedes aplicar a tu negocio o inversiones?", "Define tu sistema de aprendizaje: ¿cuánto tiempo dedicas cada día a aprender cosas nuevas?"],
  "Comunicación & Personal": ["Grábate hablando 2 minutos sobre tu historia y por qué quieres construir Studio Fridyx. Escúchate.", "Practica el elevator pitch de tus servicios de edición de video en 30 segundos.", "Escribe tu historia de origen como emprendedor: de Colombia a Palma, de 0€ a construir tu estudio.", "Identifica tu patrón de comunicación: ¿hablas más de ti o de los problemas de tu cliente?"],
  "Autónomo & Legal": ["Crea una hoja de Excel con columnas: Fecha, Cliente, Concepto, Importe, IVA (21%), Base imponible.", "Investiga exactamente cuánto deberás pagar de cuota de autónomo el primer año (tarifa plana).", "Crea una carpeta organizada para guardar todas tus facturas de gastos deducibles.", "Define qué gastos son deducibles como editor de video: software, equipo, internet, formación."]
};

// ─── UTILIDADES ───────────────────────────────────────────────────────────────
function getDateSeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
function getTodayNewsletter() {
  const newsletters = Object.keys(NEWSLETTER_DATA.newsletters);
  const seed = getDateSeed();
  const idx = Math.floor(seededRandom(seed) * newsletters.length);
  return newsletters[idx];
}
function getTodayLesson(newsletter) {
  const lessons = NEWSLETTER_DATA.newsletters[newsletter]?.lecciones || [];
  if (!lessons.length) return null;
  const seed = getDateSeed() + 1;
  const idx = Math.floor(seededRandom(seed) * lessons.length);
  return lessons[idx];
}
function getCategoryColor(cat) {
  return CATEGORIES[cat]?.color || "#8B5CF6";
}
function getCategoryEmoji(cat) {
  return CATEGORIES[cat]?.emoji || "📰";
}
function getNewsletterCategory(name) {
  return NEWSLETTER_DATA.newsletters[name]?.categoria || "Otros";
}
function loadStorage(key, def) {
  try {
    const v = window.__appStore?.[key];
    return v !== undefined ? v : def;
  } catch {
    return def;
  }
}
function saveStorage(key, val) {
  if (!window.__appStore) window.__appStore = {};
  window.__appStore[key] = val;
}

// ─── XP / NIVELES ─────────────────────────────────────────────────────────────
const LEVELS = [{
  level: 1,
  name: "Aprendiz",
  xpNeeded: 0,
  emoji: "🌱"
}, {
  level: 2,
  name: "Estudiante",
  xpNeeded: 100,
  emoji: "📖"
}, {
  level: 3,
  name: "Practicante",
  xpNeeded: 250,
  emoji: "⚡"
}, {
  level: 4,
  name: "Ejecutor",
  xpNeeded: 500,
  emoji: "🔥"
}, {
  level: 5,
  name: "Estratega",
  xpNeeded: 1000,
  emoji: "🎯"
}, {
  level: 6,
  name: "Maestro",
  xpNeeded: 2000,
  emoji: "👑"
}, {
  level: 7,
  name: "Visionario",
  xpNeeded: 3500,
  emoji: "🚀"
}, {
  level: 8,
  name: "Fundador",
  xpNeeded: 5000,
  emoji: "🏛️"
}];
function getLevelInfo(xp) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].xpNeeded) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  const progress = next ? (xp - current.xpNeeded) / (next.xpNeeded - current.xpNeeded) * 100 : 100;
  return {
    current,
    next,
    progress
  };
}

// ─── COMPONENTES ──────────────────────────────────────────────────────────────
function XPBar({
  xp
}) {
  const {
    current,
    next,
    progress
  } = getLevelInfo(xp);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#94A3B8"
    }
  }, current.emoji, " ", current.name, " \xB7 Nivel ", current.level), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#F59E0B",
      fontWeight: 700
    }
  }, xp, " XP")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1E293B",
      borderRadius: 8,
      height: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${progress}%`,
      background: "linear-gradient(90deg, #6366F1, #EC4899)",
      borderRadius: 8,
      transition: "width 0.8s ease"
    }
  })), next && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#475569",
      marginTop: 2,
      textAlign: "right"
    }
  }, next.xpNeeded - xp, " XP para ", next.name));
}
function Toast({
  msg,
  visible
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 90,
      left: "50%",
      transform: `translateX(-50%) translateY(${visible ? 0 : 20}px)`,
      opacity: visible ? 1 : 0,
      transition: "all 0.3s",
      background: "linear-gradient(135deg, #6366F1, #EC4899)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: 20,
      fontSize: 14,
      fontWeight: 600,
      zIndex: 1000,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      boxShadow: "0 8px 32px rgba(99,102,241,0.4)"
    }
  }, msg);
}
function CategoryBadge({
  cat,
  small
}) {
  const color = getCategoryColor(cat);
  const emoji = getCategoryEmoji(cat);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: color + "22",
      color: color,
      border: `1px solid ${color}44`,
      borderRadius: 20,
      padding: small ? "2px 8px" : "4px 12px",
      fontSize: small ? 11 : 12,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, emoji, " ", cat);
}

// ─── PANTALLA: HOY ────────────────────────────────────────────────────────────
function HoyScreen({
  completed,
  onComplete,
  xp,
  toast
}) {
  const [reto, setReto] = useState(null);
  const [loadingReto, setLoadingReto] = useState(false);
  const [aiReto, setAiReto] = useState(null);
  const [reflection, setReflection] = useState(loadStorage("reflection_today", ""));
  const [saved, setSaved] = useState(false);
  const todayNL = getTodayNewsletter();
  const todayLesson = getTodayLesson(todayNL);
  const cat = getNewsletterCategory(todayNL);
  const catColor = getCategoryColor(cat);
  const todayKey = new Date().toISOString().slice(0, 10);
  const isCompleted = completed[todayKey];
  const baseRetos = RETOS_BASE[cat] || [];
  const seed = getDateSeed();
  const retoIdx = Math.floor(seededRandom(seed + 2) * baseRetos.length);
  const dailyReto = baseRetos[retoIdx] || "Define 1 acción concreta que puedes tomar hoy basándote en lo aprendido.";
  async function generateAIReto() {
    setLoadingReto(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Eres un coach de vida para ${SEBASTIAN_CONTEXT}. Genera retos prácticos, específicos y gamificados para aplicar lo aprendido en newsletters. Los retos deben ser accionables HOY, realistas para alguien sin dinero pero con talento como editor de video y aspirante a emprendedor. Responde SOLO con JSON: {"reto": "descripción del reto (max 150 chars)", "xp_reward": número entre 25-75, "dificultad": "Fácil|Medio|Difícil", "tiempo": "15min|30min|1h|Hoy"}.`,
          messages: [{
            role: "user",
            content: `Newsletter de hoy: ${todayNL} (${cat})\nLección: "${todayLesson?.titulo}"\nContenido: "${todayLesson?.contenido?.slice(0, 300)}"\n\nGenera un reto específico y personalizado para mi situación actual.`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "{}";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAiReto(parsed);
    } catch (e) {
      setAiReto({
        reto: dailyReto,
        xp_reward: 40,
        dificultad: "Medio",
        tiempo: "30min"
      });
    }
    setLoadingReto(false);
  }
  function handleComplete() {
    if (isCompleted) return;
    onComplete(todayKey, isCompleted ? 0 : aiReto?.xp_reward || 30);
    setSaved(true);
    saveStorage("reflection_today", reflection);
    toast("🎉 +XP ganado! Reto completado");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg, ${catColor}22, ${catColor}11)`,
      border: `1px solid ${catColor}44`,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: catColor,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83D\uDCC5 NEWSLETTER DE HOY")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "#F1F5F9",
      marginBottom: 4,
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: 1
    }
  }, todayNL), /*#__PURE__*/React.createElement(CategoryBadge, {
    cat: cat,
    small: true
  })), todayLesson && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F172A",
      border: "1px solid #1E293B",
      borderRadius: 16,
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6366F1",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 8
    }
  }, "\uD83D\uDCA1 LECCI\xD3N DEL D\xCDA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "#F1F5F9",
      marginBottom: 8
    }
  }, todayLesson.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#94A3B8",
      lineHeight: 1.6
    }
  }, todayLesson.contenido.slice(0, 350), todayLesson.contenido.length > 350 ? "..." : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F172A",
      border: `1px solid ${isCompleted ? "#10B981" : "#1E293B"}`,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#EC4899",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83C\uDFAF RETO DEL D\xCDA"), !aiReto && /*#__PURE__*/React.createElement("button", {
    onClick: generateAIReto,
    disabled: loadingReto,
    style: {
      background: "linear-gradient(135deg, #6366F1, #EC4899)",
      border: "none",
      color: "#fff",
      borderRadius: 12,
      padding: "4px 12px",
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      opacity: loadingReto ? 0.6 : 1
    }
  }, loadingReto ? "⏳ Generando..." : "✨ Reto IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#E2E8F0",
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, aiReto ? aiReto.reto : dailyReto), aiReto && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#F59E0B22",
      color: "#F59E0B",
      border: "1px solid #F59E0B44",
      borderRadius: 8,
      padding: "2px 8px",
      fontSize: 11
    }
  }, "\u23F1 ", aiReto.tiempo), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#6366F122",
      color: "#818CF8",
      border: "1px solid #6366F144",
      borderRadius: 8,
      padding: "2px 8px",
      fontSize: 11
    }
  }, aiReto.dificultad), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#10B98122",
      color: "#10B981",
      border: "1px solid #10B98144",
      borderRadius: 8,
      padding: "2px 8px",
      fontSize: 11,
      fontWeight: 700
    }
  }, "+", aiReto.xp_reward, " XP")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#64748B",
      marginBottom: 6
    }
  }, "\u270D\uFE0F \xBFC\xF3mo lo aplicaste? (escr\xEDbelo para completar el reto)"), /*#__PURE__*/React.createElement("textarea", {
    value: reflection,
    onChange: e => {
      setReflection(e.target.value);
      saveStorage("reflection_today", e.target.value);
    },
    disabled: isCompleted,
    placeholder: "Escribe aqu\xED lo que hiciste, aprendiste o aplicaste hoy...",
    style: {
      width: "100%",
      background: "#1E293B",
      border: "1px solid #334155",
      borderRadius: 10,
      color: "#E2E8F0",
      padding: "10px 12px",
      fontSize: 13,
      resize: "none",
      height: 80,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleComplete,
    disabled: isCompleted || !reflection.trim(),
    style: {
      width: "100%",
      padding: "12px",
      background: isCompleted ? "linear-gradient(135deg, #10B981, #059669)" : reflection.trim() ? "linear-gradient(135deg, #6366F1, #EC4899)" : "#1E293B",
      border: "none",
      borderRadius: 12,
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
      cursor: isCompleted || !reflection.trim() ? "default" : "pointer",
      opacity: !reflection.trim() && !isCompleted ? 0.5 : 1
    }
  }, isCompleted ? "✅ Reto Completado" : "🚀 Marcar como Completado")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F172A",
      border: "1px solid #1E293B",
      borderRadius: 12,
      padding: "10px 14px",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#94A3B8"
    }
  }, "Consejo del d\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#E2E8F0"
    }
  }, "Completa el reto de hoy para mantener tu racha y subir de nivel m\xE1s r\xE1pido"))));
}

// ─── PANTALLA: BIBLIOTECA ─────────────────────────────────────────────────────
function BibliotecaScreen({
  unlocked,
  toast
}) {
  const [selCat, setSelCat] = useState(null);
  const [selNL, setSelNL] = useState(null);
  const [selLesson, setSelLesson] = useState(null);
  const [aiSummary, setAiSummary] = useState({});
  const [loadingAI, setLoadingAI] = useState(null);
  const cats = Object.keys(CATEGORIES);
  async function getAISummary(lesson, nlName, catName) {
    const key = `${nlName}_${lesson.titulo}`;
    if (aiSummary[key]) return;
    setLoadingAI(key);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Eres un coach para Sebastian/Klaid: ${SEBASTIAN_CONTEXT}. Dado el contenido de una lección de newsletter, genera una respuesta JSON con: {"resumen": "resumen claro en 2-3 frases", "aplicacion": "cómo aplicar esto específicamente a la situación de Sebastian en 2-3 frases", "reto_inmediato": "una acción que puede hacer HOY en menos de 1 hora"}. Solo JSON, sin markdown.`,
          messages: [{
            role: "user",
            content: `Newsletter: ${nlName} (${catName})\nLección: "${lesson.titulo}"\nContenido: "${lesson.contenido.slice(0, 500)}"`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "{}";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAiSummary(prev => ({
        ...prev,
        [key]: parsed
      }));
    } catch (e) {
      setAiSummary(prev => ({
        ...prev,
        [key]: {
          resumen: lesson.contenido.slice(0, 200),
          aplicacion: "Reflexiona sobre cómo aplica esto a tu situación actual como editor freelance.",
          reto_inmediato: "Toma 15 minutos para escribir cómo implementarías este concepto en tu negocio."
        }
      }));
    }
    setLoadingAI(null);
  }
  if (selLesson && selNL) {
    const cat = getNewsletterCategory(selNL);
    const color = getCategoryColor(cat);
    const key = `${selNL}_${selLesson.titulo}`;
    const summary = aiSummary[key];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 100px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSelLesson(null),
      style: {
        background: "none",
        border: "none",
        color: "#6366F1",
        fontSize: 14,
        padding: "8px 0",
        cursor: "pointer",
        fontWeight: 700
      }
    }, "\u2190 Volver"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: `${color}22`,
        border: `1px solid ${color}44`,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(CategoryBadge, {
      cat: cat,
      small: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#64748B",
        marginTop: 6
      }
    }, selNL), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: "#F1F5F9",
        marginTop: 8,
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: 0.5
      }
    }, selLesson.titulo)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0F172A",
        border: "1px solid #1E293B",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#94A3B8",
        fontWeight: 700,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83D\uDCDD Contenido Original"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#CBD5E1",
        lineHeight: 1.7
      }
    }, selLesson.contenido)), !summary ? /*#__PURE__*/React.createElement("button", {
      onClick: () => getAISummary(selLesson, selNL, cat),
      disabled: loadingAI === key,
      style: {
        width: "100%",
        padding: "14px",
        background: loadingAI === key ? "#1E293B" : "linear-gradient(135deg, #6366F1, #EC4899)",
        border: "none",
        borderRadius: 14,
        color: "#fff",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
        marginBottom: 12
      }
    }, loadingAI === key ? "⏳ Analizando con IA..." : "✨ Analizar con IA para mi situación") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0F172A",
        border: "1px solid #6366F144",
        borderRadius: 14,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#6366F1",
        fontWeight: 700,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83E\uDDE0 Resumen"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#CBD5E1",
        lineHeight: 1.7
      }
    }, summary.resumen)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0F172A",
        border: "1px solid #EC489944",
        borderRadius: 14,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#EC4899",
        fontWeight: 700,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83C\uDFAF C\xF3mo aplica a tu situaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#CBD5E1",
        lineHeight: 1.7
      }
    }, summary.aplicacion)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0F172A",
        border: "1px solid #F59E0B44",
        borderRadius: 14,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#F59E0B",
        fontWeight: 700,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\u26A1 Reto Inmediato"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#CBD5E1",
        lineHeight: 1.7
      }
    }, summary.reto_inmediato))));
  }
  if (selNL) {
    const nlData = NEWSLETTER_DATA.newsletters[selNL];
    const cat = nlData?.categoria;
    const color = getCategoryColor(cat);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 100px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSelNL(null),
      style: {
        background: "none",
        border: "none",
        color: "#6366F1",
        fontSize: 14,
        padding: "8px 0",
        cursor: "pointer",
        fontWeight: 700
      }
    }, "\u2190 Volver"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        color: "#F1F5F9",
        marginBottom: 4,
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: 1
      }
    }, selNL), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(CategoryBadge, {
      cat: cat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, nlData?.lecciones.map((l, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setSelLesson(l),
      style: {
        background: "#0F172A",
        border: "1px solid #1E293B",
        borderRadius: 14,
        padding: "14px 16px",
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        background: `${color}22`,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        flexShrink: 0
      }
    }, getCategoryEmoji(cat)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#E2E8F0",
        marginBottom: 3
      }
    }, l.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#64748B",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, l.contenido.slice(0, 80), "...")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#334155",
        fontSize: 18,
        flexShrink: 0
      }
    }, "\u203A")))));
  }
  if (selCat) {
    const catData = NEWSLETTER_DATA.categories[selCat];
    const color = getCategoryColor(selCat);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 100px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSelCat(null),
      style: {
        background: "none",
        border: "none",
        color: "#6366F1",
        fontSize: 14,
        padding: "8px 0",
        cursor: "pointer",
        fontWeight: 700
      }
    }, "\u2190 Volver"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        marginBottom: 4
      }
    }, catData.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        color: "#F1F5F9",
        marginBottom: 16,
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: 1
      }
    }, selCat), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, catData.newsletters.map(nlName => {
      const nlData = NEWSLETTER_DATA.newsletters[nlName];
      return /*#__PURE__*/React.createElement("button", {
        key: nlName,
        onClick: () => setSelNL(nlName),
        style: {
          background: "#0F172A",
          border: `1px solid ${color}33`,
          borderRadius: 14,
          padding: "14px 16px",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 40,
          height: 40,
          background: `${color}22`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0
        }
      }, catData.emoji), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          fontWeight: 700,
          color: "#F1F5F9"
        }
      }, nlName), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "#64748B"
        }
      }, nlData?.lecciones?.length || 0, " lecciones")), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#334155",
          fontSize: 18
        }
      }, "\u203A"));
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#64748B",
      marginBottom: 16
    }
  }, Object.keys(NEWSLETTER_DATA.newsletters).length, " newsletters \xB7 ", Object.values(NEWSLETTER_DATA.newsletters).reduce((a, n) => a + n.lecciones.length, 0), " lecciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, cats.map(cat => {
    const data = NEWSLETTER_DATA.categories[cat];
    if (!data) return null;
    const color = getCategoryColor(cat);
    const totalLessons = data.newsletters.reduce((a, nl) => a + (NEWSLETTER_DATA.newsletters[nl]?.lecciones?.length || 0), 0);
    return /*#__PURE__*/React.createElement("button", {
      key: cat,
      onClick: () => setSelCat(cat),
      style: {
        background: `linear-gradient(135deg, ${color}18, ${color}08)`,
        border: `1px solid ${color}33`,
        borderRadius: 16,
        padding: "16px 14px",
        textAlign: "left",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        marginBottom: 8
      }
    }, data.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#E2E8F0",
        marginBottom: 3,
        lineHeight: 1.3
      }
    }, cat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: color
      }
    }, data.newsletters.length, " newsletters \xB7 ", totalLessons, " lecciones"));
  })));
}

// ─── PANTALLA: RETOS ──────────────────────────────────────────────────────────
function RetosScreen({
  completed,
  onComplete,
  toast
}) {
  const [selCat, setSelCat] = useState(null);
  const [aiRetos, setAiRetos] = useState(loadStorage("ai_retos", {}));
  const [loadingCat, setLoadingCat] = useState(null);
  async function generateCatRetos(cat) {
    setLoadingCat(cat);
    const catColor = getCategoryColor(cat);
    const nlsInCat = NEWSLETTER_DATA.categories[cat]?.newsletters || [];
    const lessonsSnippet = nlsInCat.slice(0, 3).map(nl => {
      const l = NEWSLETTER_DATA.newsletters[nl]?.lecciones?.[0];
      return l ? `${nl}: ${l.titulo} - ${l.contenido.slice(0, 100)}` : "";
    }).filter(Boolean).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Eres un coach gamificado para ${SEBASTIAN_CONTEXT}. Genera 4 retos específicos para la categoría indicada. Responde SOLO con JSON válido: {"retos": [{"titulo": "nombre corto", "descripcion": "qué hacer exactamente (max 120 chars)", "xp": número 20-80, "dificultad": "Fácil|Medio|Difícil", "tiempo": "15min|30min|1h|Todo el día"}]}`,
          messages: [{
            role: "user",
            content: `Categoría: ${cat}\nContenido de newsletters relacionadas:\n${lessonsSnippet}\n\nGenera 4 retos prácticos y específicos para Sebastian.`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "{}";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      const newRetos = {
        ...aiRetos,
        [cat]: parsed.retos
      };
      setAiRetos(newRetos);
      saveStorage("ai_retos", newRetos);
    } catch (e) {
      const baseR = RETOS_BASE[cat] || [];
      const fallback = baseR.map((r, i) => ({
        titulo: `Reto ${i + 1}`,
        descripcion: r,
        xp: 30 + i * 10,
        dificultad: ["Fácil", "Medio", "Difícil"][i % 3],
        tiempo: "30min"
      }));
      const newRetos = {
        ...aiRetos,
        [cat]: fallback
      };
      setAiRetos(newRetos);
      saveStorage("ai_retos", newRetos);
    }
    setLoadingCat(null);
  }
  function handleCompleteReto(retoId) {
    if (completed[retoId]) return;
    const xp = parseInt(retoId.split("_xp_")[1] || "30");
    onComplete(retoId, xp);
    toast(`⚡ +${xp} XP ¡Reto completado!`);
  }
  const cats = Object.keys(CATEGORIES);
  if (selCat) {
    const catRetos = aiRetos[selCat] || RETOS_BASE[selCat]?.map((r, i) => ({
      titulo: `Reto ${i + 1}`,
      descripcion: r,
      xp: 30,
      dificultad: "Medio",
      tiempo: "30min"
    })) || [];
    const color = getCategoryColor(selCat);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 100px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSelCat(null),
      style: {
        background: "none",
        border: "none",
        color: "#6366F1",
        fontSize: 14,
        padding: "8px 0",
        cursor: "pointer",
        fontWeight: 700
      }
    }, "\u2190 Volver"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: "#F1F5F9",
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: 1
      }
    }, selCat), /*#__PURE__*/React.createElement("button", {
      onClick: () => generateCatRetos(selCat),
      disabled: loadingCat === selCat,
      style: {
        background: "linear-gradient(135deg, #6366F1, #EC4899)",
        border: "none",
        color: "#fff",
        borderRadius: 12,
        padding: "6px 14px",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, loadingCat === selCat ? "⏳..." : "✨ IA Retos")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, catRetos.map((reto, i) => {
      const retoId = `${selCat}_${i}_xp_${reto.xp}`;
      const isComp = completed[retoId];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: "#0F172A",
          border: `1px solid ${isComp ? "#10B981" : color + "33"}`,
          borderRadius: 16,
          padding: 16,
          opacity: isComp ? 0.7 : 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: "#F1F5F9",
          flex: 1,
          paddingRight: 8
        }
      }, reto.titulo), /*#__PURE__*/React.createElement("span", {
        style: {
          background: "#10B98122",
          color: "#10B981",
          border: "1px solid #10B98144",
          borderRadius: 8,
          padding: "2px 8px",
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap"
        }
      }, "+", reto.xp, " XP")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#94A3B8",
          marginBottom: 12,
          lineHeight: 1.5
        }
      }, reto.descripcion), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          marginBottom: 12,
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          background: "#1E293B",
          color: "#94A3B8",
          borderRadius: 6,
          padding: "2px 8px",
          fontSize: 11
        }
      }, "\u23F1 ", reto.tiempo), /*#__PURE__*/React.createElement("span", {
        style: {
          background: "#1E293B",
          color: "#94A3B8",
          borderRadius: 6,
          padding: "2px 8px",
          fontSize: 11
        }
      }, reto.dificultad)), /*#__PURE__*/React.createElement("button", {
        onClick: () => handleCompleteReto(retoId),
        disabled: isComp,
        style: {
          width: "100%",
          padding: "10px",
          background: isComp ? "#1E293B" : `linear-gradient(135deg, ${color}, ${color}88)`,
          border: "none",
          borderRadius: 10,
          color: isComp ? "#475569" : "#fff",
          fontSize: 13,
          fontWeight: 700,
          cursor: isComp ? "default" : "pointer"
        }
      }, isComp ? "✅ Completado" : "🎯 Completar Reto"));
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#64748B",
      marginBottom: 16
    }
  }, "Selecciona una categor\xEDa para ver y generar retos personalizados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, cats.map(cat => {
    const data = NEWSLETTER_DATA.categories[cat];
    if (!data) return null;
    const color = getCategoryColor(cat);
    const totalRetos = aiRetos[cat]?.length || RETOS_BASE[cat]?.length || 0;
    const completedCount = Object.keys(completed).filter(k => k.startsWith(cat)).length;
    return /*#__PURE__*/React.createElement("button", {
      key: cat,
      onClick: () => setSelCat(cat),
      style: {
        background: "#0F172A",
        border: `1px solid ${color}33`,
        borderRadius: 14,
        padding: "14px 16px",
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        background: `${color}22`,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        flexShrink: 0
      }
    }, data.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#E2E8F0"
      }
    }, cat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#64748B"
      }
    }, completedCount, "/", totalRetos, " completados")), completedCount > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#10B98122",
        color: "#10B981",
        border: "1px solid #10B98144",
        borderRadius: 8,
        padding: "2px 8px",
        fontSize: 11,
        fontWeight: 700
      }
    }, completedCount, " \u2713"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#334155",
        fontSize: 18
      }
    }, "\u203A"));
  })));
}

// ─── PANTALLA: PROGRESO ───────────────────────────────────────────────────────
function ProgresoScreen({
  xp,
  completed,
  streak
}) {
  const {
    current,
    next,
    progress
  } = getLevelInfo(xp);
  const totalCompleted = Object.keys(completed).length;
  const cats = Object.keys(CATEGORIES);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #6366F122, #EC489922)",
      border: "1px solid #6366F144",
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48
    }
  }, current.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: "#F1F5F9",
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: 2
    }
  }, current.name.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#94A3B8"
    }
  }, "Nivel ", current.level, " \xB7 ", xp, " XP total"), next && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1E293B",
      borderRadius: 8,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${progress}%`,
      background: "linear-gradient(90deg, #6366F1, #EC4899)",
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#64748B",
      marginTop: 4
    }
  }, next.xpNeeded - xp, " XP para ", next.emoji, " ", next.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    label: "Retos\ncompletados",
    value: totalCompleted,
    emoji: "🎯",
    color: "#EC4899"
  }, {
    label: "Racha\nactual",
    value: `${streak}d`,
    emoji: "🔥",
    color: "#F59E0B"
  }, {
    label: "XP\ntotal",
    value: xp,
    emoji: "⚡",
    color: "#6366F1"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#0F172A",
      border: `1px solid ${s.color}33`,
      borderRadius: 14,
      padding: "14px 10px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22
    }
  }, s.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: s.color,
      fontFamily: "'Bebas Neue', sans-serif"
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#64748B",
      whiteSpace: "pre-line"
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F172A",
      border: "1px solid #1E293B",
      borderRadius: 16,
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#64748B",
      fontWeight: 700,
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83C\uDFC6 Camino de niveles"), LEVELS.map((lvl, i) => {
    const isReached = xp >= lvl.xpNeeded;
    const isCurrent = lvl.level === current.level;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: i < LEVELS.length - 1 ? "1px solid #1E293B" : "none",
        opacity: isReached ? 1 : 0.4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20
      }
    }, lvl.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: isCurrent ? "#6366F1" : "#E2E8F0"
      }
    }, "Nivel ", lvl.level, " \xB7 ", lvl.name, isCurrent && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontSize: 11,
        color: "#EC4899"
      }
    }, "\u2190 T\xFA aqu\xED")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#475569"
      }
    }, lvl.xpNeeded, " XP")), isReached && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#10B981",
        fontSize: 16
      }
    }, "\u2713"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F172A",
      border: "1px solid #1E293B",
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#64748B",
      fontWeight: 700,
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83D\uDCCA Progreso por categor\xEDa"), cats.map(cat => {
    const color = getCategoryColor(cat);
    const emoji = getCategoryEmoji(cat);
    const catCompleted = Object.keys(completed).filter(k => k.startsWith(cat)).length;
    const maxRetos = RETOS_BASE[cat]?.length || 4;
    const pct = Math.min(100, catCompleted / maxRetos * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: cat,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
        color: "#94A3B8",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, emoji, " ", cat), /*#__PURE__*/React.createElement("span", {
      style: {
        color
      }
    }, catCompleted, "/", maxRetos)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#1E293B",
        borderRadius: 4,
        height: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${pct}%`,
        background: color,
        borderRadius: 4,
        transition: "width 0.5s"
      }
    })));
  })));
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
function App() {
  const [tab, setTab] = useState("hoy");
  const [xp, setXp] = useState(() => loadStorage("xp", 0));
  const [completed, setCompleted] = useState(() => loadStorage("completed", {}));
  const [streak, setStreak] = useState(() => loadStorage("streak", 0));
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  function showToast(msg) {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  }
  function handleComplete(key, gainXp) {
    if (completed[key]) return;
    const newCompleted = {
      ...completed,
      [key]: true
    };
    const newXp = xp + gainXp;
    setCompleted(newCompleted);
    setXp(newXp);
    saveStorage("completed", newCompleted);
    saveStorage("xp", newXp);
  }
  const tabs = [{
    id: "hoy",
    label: "Hoy",
    emoji: "📅"
  }, {
    id: "retos",
    label: "Retos",
    emoji: "🎯"
  }, {
    id: "biblioteca",
    label: "Biblioteca",
    emoji: "📚"
  }, {
    id: "progreso",
    label: "Progreso",
    emoji: "📊"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#020817",
      minHeight: "100vh",
      color: "#F1F5F9",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      maxWidth: 430,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, #0A0F1E 0%, #020817 100%)",
      borderBottom: "1px solid #1E293B",
      padding: "16px 16px 0",
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6366F1",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 2
    }
  }, "NEWSLETTER QUEST"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: "#F1F5F9",
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: 1
    }
  }, "Bienvenido, Klaid \uD83D\uDC7E")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#64748B"
    }
  }, "Nivel ", getLevelInfo(xp).current.level), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: "#F59E0B"
    }
  }, xp, " XP"))), /*#__PURE__*/React.createElement(XPBar, {
    xp: xp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 8,
      borderTop: "1px solid #1E293B"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      flex: 1,
      background: "none",
      border: "none",
      color: tab === t.id ? "#6366F1" : "#64748B",
      padding: "10px 4px",
      fontSize: 11,
      fontWeight: tab === t.id ? 700 : 500,
      cursor: "pointer",
      borderBottom: `2px solid ${tab === t.id ? "#6366F1" : "transparent"}`,
      transition: "all 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18
    }
  }, t.emoji), /*#__PURE__*/React.createElement("div", null, t.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, tab === "hoy" && /*#__PURE__*/React.createElement(HoyScreen, {
    completed: completed,
    onComplete: handleComplete,
    xp: xp,
    toast: showToast
  }), tab === "retos" && /*#__PURE__*/React.createElement(RetosScreen, {
    completed: completed,
    onComplete: handleComplete,
    toast: showToast
  }), tab === "biblioteca" && /*#__PURE__*/React.createElement(BibliotecaScreen, {
    unlocked: completed,
    toast: showToast
  }), tab === "progreso" && /*#__PURE__*/React.createElement(ProgresoScreen, {
    xp: xp,
    completed: completed,
    streak: streak
  })), /*#__PURE__*/React.createElement(Toast, {
    msg: toastMsg,
    visible: toastVisible
  }));
}


// Mount the app
const { useState, useEffect, useCallback } = React;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
