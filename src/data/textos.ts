export type Lang = 'es' | 'en'

export interface Plato {
  nombre: string
  desc: string
  precio: string
  imagen: string
}

export interface CategoriaCarta {
  nombre: string
  platos: Plato[]
}

export interface Resena {
  nombre: string
  texto: string
  plato: string
  estrellas: number
}

interface Textos {
  header: {
    reservar: string
  }
  hero: {
    badge: string
    titulo: string
    tituloAcento: string
    desc: string
    ctaReservar: string
    ctaCarta: string
  }
  carta: {
    titulo: string
    subtitulo: string
    categorias: CategoriaCarta[]
  }
  historia: {
    titulo: string
    parrafo: string
    pie: string
  }
  resenas: {
    titulo: string
    subtitulo: string
    items: Resena[]
  }
  ubicacion: {
    titulo: string
    subtitulo: string
    direccionLabel: string
    direccion: string
    metroLabel: string
    metro: string
    horarioLabel: string
    horario: string[]
    terrazaLabel: string
    terraza: string
  }
  footer: {
    desc: string
    telefono: string
    email: string
    instagram: string
    horarioTitulo: string
    horario: string[]
    aviso: string
  }
  sticky: {
    reservar: string
  }
}

export const RESERVA_URL = 'https://covermanager.com/placeholder'

export const textos: Record<Lang, Textos> = {
  es: {
    header: {
      reservar: 'Reservar',
    },
    hero: {
      badge: 'Taberna castellana en La Latina',
      titulo: 'Cocina castellana',
      tituloAcento: 'en el corazón de La Latina',
      desc: 'Doce años sirviendo guisos, asados y torreznos como los de casa, en una taberna con solera en pleno barrio de La Latina.',
      ctaReservar: 'Reservar mesa',
      ctaCarta: 'Ver la carta',
    },
    carta: {
      titulo: 'Nuestra carta',
      subtitulo:
        'Cocina de toda la vida, con producto de temporada y raciones para compartir.',
      categorias: [
        {
          nombre: 'Entrantes',
          platos: [
            {
              nombre: 'Torreznos de Soria',
              desc: 'Crujientes por fuera, tiernos por dentro; se sirven bien calientes con un chorrito de limón.',
              precio: '9,50 €',
              imagen: '/images/carta/entrante-1.svg',
            },
            {
              nombre: 'Croquetas de rabo de toro',
              desc: 'Bechamel cremosa y carne de rabo de toro guisada ocho horas; el plato que nos hizo famosos en el barrio.',
              precio: '10,50 €',
              imagen: '/images/carta/entrante-2.svg',
            },
            {
              nombre: 'Pimientos de Padrón',
              desc: 'Fritos en aceite de oliva virgen y espolvoreados con sal gorda; unos pican, otros no.',
              precio: '7,00 €',
              imagen: '/images/carta/entrante-3.svg',
            },
            {
              nombre: 'Morcilla de Burgos con piñones',
              desc: 'A la plancha, jugosa por dentro, con un puñado de piñones tostados por encima.',
              precio: '8,50 €',
              imagen: '/images/carta/entrante-4.svg',
            },
            {
              nombre: 'Ensalada de perdiz escabechada',
              desc: 'Perdiz de caza en escabeche casero sobre lecho de lechugas y cebolla morada.',
              precio: '11,00 €',
              imagen: '/images/carta/entrante-5.svg',
            },
          ],
        },
        {
          nombre: 'Principales',
          platos: [
            {
              nombre: 'Cochinillo asado (solo domingos)',
              desc: 'Asado lento durante horas hasta que la piel queda crujiente y la carne se deshace sola.',
              precio: '26,00 €',
              imagen: '/images/carta/principal-1.svg',
            },
            {
              nombre: 'Rabo de toro estofado al vino tinto',
              desc: 'Guiso de toda la vida, con una salsa que se rebaña hasta el último trozo de pan.',
              precio: '19,50 €',
              imagen: '/images/carta/principal-2.svg',
            },
            {
              nombre: 'Cordero lechal al horno de leña',
              desc: 'Media ración o ración entera, con patatas panadera y su jugo.',
              precio: '22,00 €',
              imagen: '/images/carta/principal-3.svg',
            },
            {
              nombre: 'Bacalao confitado con migas',
              desc: 'Lomo de bacalao a baja temperatura sobre migas crujientes de pan de pueblo.',
              precio: '18,00 €',
              imagen: '/images/carta/principal-4.svg',
            },
            {
              nombre: 'Solomillo de ternera a la parrilla',
              desc: 'Con salsa de Cabrales y patatas asadas al romero.',
              precio: '21,00 €',
              imagen: '/images/carta/principal-5.svg',
            },
          ],
        },
        {
          nombre: 'Postres',
          platos: [
            {
              nombre: 'Tarta de queso al horno',
              desc: 'Cremosa por dentro, tostada por encima; receta propia de Jaime desde el primer día.',
              precio: '6,50 €',
              imagen: '/images/carta/postre-1.svg',
            },
            {
              nombre: 'Torrija caramelizada',
              desc: 'Empapada en leche con canela y flambeada con azúcar justo antes de servir.',
              precio: '6,00 €',
              imagen: '/images/carta/postre-2.svg',
            },
            {
              nombre: 'Arroz con leche a la antigua',
              desc: 'Cocido despacio, con su punto de canela en rama y piel de limón.',
              precio: '5,50 €',
              imagen: '/images/carta/postre-3.svg',
            },
            {
              nombre: 'Leche frita crujiente',
              desc: 'Crujiente por fuera, cremosa por dentro; el postre de toda la vida de la casa.',
              precio: '5,50 €',
              imagen: '/images/carta/postre-4.svg',
            },
          ],
        },
      ],
    },
    historia: {
      titulo: 'Nuestra historia',
      parrafo:
        'Rocío y Jaime abrieron El Fogón hace doce años con una idea sencilla: cocinar como se cocinaba en las casas de Castilla, sin atajos. Ella lleva la sala y conoce a la mitad del barrio por su nombre; él no ha salido de la cocina desde el primer día. Entre los dos han convertido recetas de sus abuelas en la carta que ves hoy, con algún toque propio que nunca dejan de pulir. Para ellos, una taberna castellana de verdad se reconoce por el guiso, no por la decoración.',
      pie: 'Rocío y Jaime, en la puerta de El Fogón',
    },
    resenas: {
      titulo: 'Lo que dicen de nosotros',
      subtitulo: 'Reseñas reales de clientes en Google',
      items: [
        {
          nombre: 'Marisa G.',
          texto:
            'Las croquetas de rabo de toro son un peligro público, no puedes parar de comer. Ambiente acogedor y trato cercano, como si llevaras yendo toda la vida.',
          plato: 'Croquetas de rabo de toro',
          estrellas: 5,
        },
        {
          nombre: 'Álvaro T.',
          texto:
            'Reservamos el cochinillo de domingo con una semana de antelación y mereció la pena cada minuto de espera. Jaime salió a saludar a la mesa, un detallazo.',
          plato: 'Cochinillo asado',
          estrellas: 5,
        },
        {
          nombre: 'Nuria P.',
          texto:
            'La tarta de queso al horno es de las mejores que he probado en Madrid. La terraza en pleno La Latina es perfecta para una sobremesa larga.',
          plato: 'Tarta de queso al horno',
          estrellas: 4,
        },
      ],
    },
    ubicacion: {
      titulo: 'Dónde estamos',
      subtitulo: 'En pleno La Latina, a un paso del metro y con terraza en la calle.',
      direccionLabel: 'Dirección',
      direccion: 'Calle de la Cava Baja, 22, 28005 Madrid (La Latina)',
      metroLabel: 'Cómo llegar',
      metro: 'Metro La Latina (Línea 5), a 3 min andando',
      horarioLabel: 'Horario',
      horario: [
        'Martes a domingo: 12:30 - 16:30',
        'Martes a domingo: 20:00 - 23:30',
        'Lunes cerrado',
      ],
      terrazaLabel: 'Terraza',
      terraza:
        'Contamos con terraza en la calle, ideal para comer o cenar al aire libre en temporada.',
    },
    footer: {
      desc: 'Taberna castellana en La Latina, Madrid.',
      telefono: '911 22 33 44',
      email: 'hola@tabernaelfogon.es',
      instagram: '@tabernaelfogon',
      horarioTitulo: 'Horario',
      horario: ['M-D 12:30-16:30 y 20:00-23:30', 'Lunes cerrado'],
      aviso:
        'Sitio ficticio de portfolio, negocio ficticio con fines de demostración.',
    },
    sticky: {
      reservar: 'Reservar mesa',
    },
  },
  en: {
    header: {
      reservar: 'Book',
    },
    hero: {
      badge: 'Castilian tavern in La Latina',
      titulo: 'Castilian cooking',
      tituloAcento: 'in the heart of La Latina',
      desc: 'Twelve years serving stews, roasts and torreznos just like home, in a tavern with real character in the heart of La Latina.',
      ctaReservar: 'Book a table',
      ctaCarta: 'See the menu',
    },
    carta: {
      titulo: 'Our menu',
      subtitulo:
        'Traditional home cooking, with seasonal produce and dishes to share.',
      categorias: [
        {
          nombre: 'Starters',
          platos: [
            {
              nombre: 'Torreznos de Soria',
              desc: 'Crispy Castilian-style pork belly, served piping hot with a squeeze of lemon.',
              precio: '€9.50',
              imagen: '/images/carta/entrante-1.svg',
            },
            {
              nombre: 'Oxtail croquettes',
              desc: 'Creamy béchamel with oxtail braised for eight hours; the dish that made us famous in the neighborhood.',
              precio: '€10.50',
              imagen: '/images/carta/entrante-2.svg',
            },
            {
              nombre: 'Padrón peppers',
              desc: 'Fried in virgin olive oil and sprinkled with coarse salt; some are mild, some are not.',
              precio: '€7.00',
              imagen: '/images/carta/entrante-3.svg',
            },
            {
              nombre: 'Burgos blood sausage with pine nuts',
              desc: 'Pan-seared, juicy inside, topped with a handful of toasted pine nuts.',
              precio: '€8.50',
              imagen: '/images/carta/entrante-4.svg',
            },
            {
              nombre: 'Cured partridge salad',
              desc: 'Game partridge in homemade marinade over lettuce and red onion.',
              precio: '€11.00',
              imagen: '/images/carta/entrante-5.svg',
            },
          ],
        },
        {
          nombre: 'Main courses',
          platos: [
            {
              nombre: 'Roast suckling pig (Sundays only)',
              desc: 'Slow-roasted for hours until the skin turns crackling and the meat falls apart on its own.',
              precio: '€26.00',
              imagen: '/images/carta/principal-1.svg',
            },
            {
              nombre: 'Oxtail stew in red wine',
              desc: 'A traditional slow stew, with a sauce worth mopping up to the last piece of bread.',
              precio: '€19.50',
              imagen: '/images/carta/principal-2.svg',
            },
            {
              nombre: 'Wood-oven roast lamb',
              desc: 'Half or full portion, served with pan-roasted potatoes and its own juices.',
              precio: '€22.00',
              imagen: '/images/carta/principal-3.svg',
            },
            {
              nombre: 'Confit cod with migas',
              desc: 'Cod loin cooked at low temperature over crispy country bread migas.',
              precio: '€18.00',
              imagen: '/images/carta/principal-4.svg',
            },
            {
              nombre: 'Grilled beef sirloin',
              desc: 'With Cabrales blue cheese sauce and rosemary roast potatoes.',
              precio: '€21.00',
              imagen: '/images/carta/principal-5.svg',
            },
          ],
        },
        {
          nombre: 'Desserts',
          platos: [
            {
              nombre: 'Baked cheesecake',
              desc: "Creamy inside, toasted on top; Jaime's own recipe since day one.",
              precio: '€6.50',
              imagen: '/images/carta/postre-1.svg',
            },
            {
              nombre: 'Caramelized torrija',
              desc: 'Soaked in cinnamon milk and flambéed with sugar right before serving.',
              precio: '€6.00',
              imagen: '/images/carta/postre-2.svg',
            },
            {
              nombre: 'Old-style rice pudding',
              desc: 'Slow-cooked with a touch of cinnamon stick and lemon peel.',
              precio: '€5.50',
              imagen: '/images/carta/postre-3.svg',
            },
            {
              nombre: 'Crispy fried milk custard',
              desc: "Crunchy outside, creamy inside; the house's classic dessert.",
              precio: '€5.50',
              imagen: '/images/carta/postre-4.svg',
            },
          ],
        },
      ],
    },
    historia: {
      titulo: 'Our story',
      parrafo:
        "Rocío and Jaime opened El Fogón twelve years ago with a simple idea: cook the way it was cooked in Castilian homes, no shortcuts. She runs the dining room and knows half the neighborhood by name; he hasn't left the kitchen since day one. Together they've turned their grandmothers' recipes into the menu you see today, adding their own touches they never stop refining. For them, a real Castilian tavern is judged by its stew, not its decor.",
      pie: 'Rocío and Jaime, at the door of El Fogón',
    },
    resenas: {
      titulo: 'What people say about us',
      subtitulo: 'Real customer reviews on Google',
      items: [
        {
          nombre: 'Marisa G.',
          texto:
            "The oxtail croquettes are dangerously good, you can't stop eating them. Cozy atmosphere and warm service, like you've been coming here for years.",
          plato: 'Oxtail croquettes',
          estrellas: 5,
        },
        {
          nombre: 'Álvaro T.',
          texto:
            'We booked the Sunday suckling pig a week ahead and every minute of the wait was worth it. Jaime even came out to say hello at the table, a nice touch.',
          plato: 'Roast suckling pig',
          estrellas: 5,
        },
        {
          nombre: 'Nuria P.',
          texto:
            "The baked cheesecake is one of the best I've had in Madrid. The terrace right in La Latina is perfect for a long, lazy lunch.",
          plato: 'Baked cheesecake',
          estrellas: 4,
        },
      ],
    },
    ubicacion: {
      titulo: 'Find us',
      subtitulo: 'Right in La Latina, steps from the metro, with a street terrace.',
      direccionLabel: 'Address',
      direccion: 'Calle de la Cava Baja, 22, 28005 Madrid (La Latina)',
      metroLabel: 'Getting here',
      metro: 'La Latina metro station (Line 5), 3 min walk',
      horarioLabel: 'Opening hours',
      horario: [
        'Tuesday to Sunday: 12:30pm - 4:30pm',
        'Tuesday to Sunday: 8:00pm - 11:30pm',
        'Closed on Mondays',
      ],
      terrazaLabel: 'Terrace',
      terraza:
        'We have a street terrace, perfect for lunch or dinner outdoors in season.',
    },
    footer: {
      desc: 'Castilian tavern in La Latina, Madrid.',
      telefono: '911 22 33 44',
      email: 'hola@tabernaelfogon.es',
      instagram: '@tabernaelfogon',
      horarioTitulo: 'Opening hours',
      horario: ['Tue-Sun 12:30pm-4:30pm & 8:00pm-11:30pm', 'Closed on Mondays'],
      aviso:
        'Fictional portfolio site, fictional business for demonstration purposes only.',
    },
    sticky: {
      reservar: 'Book a table',
    },
  },
}
