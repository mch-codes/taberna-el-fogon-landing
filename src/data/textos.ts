export type Lang = 'es' | 'en'

export interface Plato {
  nombre: string
  precio: string
}

export interface CategoriaCarta {
  nombre: string
  platos: Plato[]
}

interface Textos {
  header: {
    reservar: string
    navInicio: string
    navMenu: string
    navUbicacion: string
    navContacto: string
  }
  hero: {
    eyebrow: string
    badge: string
    titulo: string
    tituloAcento: string
    desc: string
    ctaReservar: string
    ctaWhatsapp: string
    ctaCarta: string
  }
  carta: {
    eyebrow: string
    titulo: string
    subtitulo: string
    categorias: CategoriaCarta[]
  }
  historia: {
    eyebrow: string
    titulo: string
    parrafo: string
    pie: string
  }
  ubicacion: {
    eyebrow: string
    titulo: string
    direccionLabel: string
    direccion: string
    horarioLabel: string
    horario: { dias: string; horas: string }[]
    abrirMapa: string
  }
  reservas: {
    eyebrow: string
    titulo: string
    texto: string
    cta: string
    tambienFork: string
  }
  footer: {
    aviso: string
  }
  sticky: {
    reservar: string
  }
}

/**
 * Datos de contacto del negocio, única fuente de verdad (ver DATOS.md).
 * No hardcodear teléfono ni enlaces de WhatsApp/reserva en componentes.
 */
export const NEGOCIO = {
  nombre: 'Taberna El Fogón',
  telefonoDisplay: '911 22 33 44',
  telUrl: 'tel:911223344',
  whatsappUrl: 'https://wa.me/34911223344',
  telefonoSchema: '+34 911 22 33 44',
  email: 'hola@tabernaelfogon.es',
  direccion: {
    calle: 'Calle de la Cava Baja, 22',
    codigoPostal: '28005',
    ciudad: 'Madrid',
    pais: 'ES',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Cava+Baja+22%2C+28005+Madrid',
  bookingUrl: 'https://www.thefork.es/',
}

export const textos: Record<Lang, Textos> = {
  es: {
    header: {
      reservar: 'Reservar mesa',
      navInicio: 'Inicio',
      navMenu: 'Menú',
      navUbicacion: 'Ubicación',
      navContacto: 'Contacto',
    },
    hero: {
      eyebrow: 'La Latina · Madrid · Desde 2014',
      badge: 'Taberna castellana en La Latina',
      titulo: 'Cocina castellana',
      tituloAcento: 'en el corazón de La Latina',
      desc: 'Doce años sirviendo guisos, asados y torreznos como los de casa, en una taberna con solera en pleno barrio de La Latina.',
      ctaReservar: 'Reservar mesa',
      ctaWhatsapp: 'Escríbenos por WhatsApp',
      ctaCarta: 'Ver la carta',
    },
    carta: {
      eyebrow: 'La carta',
      titulo: 'Qué comemos hoy',
      subtitulo: 'Carta de temporada · precios en euros, IVA incluido',
      categorias: [
        {
          nombre: 'Para Picar',
          platos: [
            { nombre: 'Croquetas de jamón ibérico', precio: '8,50€' },
            { nombre: 'Pimientos de Padrón', precio: '6,00€' },
            { nombre: 'Patatas bravas de la casa', precio: '5,50€' },
            { nombre: 'Tabla de quesos y embutidos', precio: '14,00€' },
          ],
        },
        {
          nombre: 'De la Brasa',
          platos: [
            { nombre: 'Chuletillas de cordero', precio: '16,00€' },
            { nombre: 'Secreto ibérico', precio: '15,00€' },
            { nombre: 'Pulpo a la brasa', precio: '18,00€' },
          ],
        },
        {
          nombre: 'Raciones',
          platos: [
            { nombre: 'Tortilla de patatas', precio: '7,00€' },
            { nombre: 'Rabo de toro estofado', precio: '15,50€' },
            { nombre: 'Boquerones en vinagre', precio: '6,50€' },
          ],
        },
        {
          nombre: 'Postres',
          platos: [
            { nombre: 'Torrija caramelizada', precio: '5,00€' },
            { nombre: 'Tarta de queso', precio: '5,50€' },
          ],
        },
        {
          nombre: 'Para Beber',
          platos: [
            { nombre: 'Vino de la casa (copa)', precio: '3,50€' },
            { nombre: 'Vermut de grifo', precio: '3,00€' },
            { nombre: 'Cerveza artesana', precio: '3,50€' },
          ],
        },
      ],
    },
    historia: {
      eyebrow: 'Doce años en el barrio',
      titulo: 'Nuestra historia',
      parrafo:
        'Rocío y Jaime abrieron El Fogón hace doce años con una idea sencilla: cocinar como se cocinaba en las casas de Castilla, sin atajos. Ella lleva la sala y conoce a la mitad del barrio por su nombre; él no ha salido de la cocina desde el primer día. Entre los dos han convertido recetas de sus abuelas en la carta que ves hoy, con algún toque propio que nunca dejan de pulir. Para ellos, una taberna castellana de verdad se reconoce por el guiso, no por la decoración.',
      pie: 'Rocío y Jaime, en la puerta de El Fogón',
    },
    ubicacion: {
      eyebrow: 'Cómo llegar',
      titulo: 'Ubicación y horario',
      direccionLabel: 'Dirección',
      direccion: 'Calle de la Cava Baja, 22 · 28005 Madrid',
      horarioLabel: 'Horario',
      horario: [
        { dias: 'Martes – Domingo', horas: '12:30–16:30, 20:00–23:30' },
        { dias: 'Lunes', horas: 'Cerrado' },
      ],
      abrirMapa: 'Abrir en Google Maps',
    },
    reservas: {
      eyebrow: 'Reservas',
      titulo: 'Escríbenos por WhatsApp',
      texto:
        'No usamos sistema de reservas online — un mensaje directo y te confirmamos la mesa.',
      cta: 'Reservar por WhatsApp',
      tambienFork: 'También en TheFork',
    },
    footer: {
      aviso:
        'Sitio ficticio de portfolio, negocio ficticio con fines de demostración.',
    },
    sticky: {
      reservar: 'Reservar mesa',
    },
  },
  en: {
    header: {
      reservar: 'Book a table',
      navInicio: 'Home',
      navMenu: 'Menu',
      navUbicacion: 'Location',
      navContacto: 'Contact',
    },
    hero: {
      eyebrow: 'La Latina · Madrid · Since 2014',
      badge: 'Castilian tavern in La Latina',
      titulo: 'Castilian cooking',
      tituloAcento: 'in the heart of La Latina',
      desc: 'Twelve years serving stews, roasts and torreznos just like home, in a tavern with real character in the heart of La Latina.',
      ctaReservar: 'Book a table',
      ctaWhatsapp: 'Message us on WhatsApp',
      ctaCarta: 'See the menu',
    },
    carta: {
      eyebrow: 'The menu',
      titulo: 'What we’re serving today',
      subtitulo: 'Seasonal menu · prices in euros, VAT included',
      categorias: [
        {
          nombre: 'To Share',
          platos: [
            { nombre: 'Iberian ham croquettes', precio: '€8.50' },
            { nombre: 'Padrón peppers', precio: '€6.00' },
            { nombre: 'House patatas bravas', precio: '€5.50' },
            { nombre: 'Cheese & charcuterie board', precio: '€14.00' },
          ],
        },
        {
          nombre: 'From the Grill',
          platos: [
            { nombre: 'Lamb chops', precio: '€16.00' },
            { nombre: 'Iberian secreto pork', precio: '€15.00' },
            { nombre: 'Grilled octopus', precio: '€18.00' },
          ],
        },
        {
          nombre: 'Portions',
          platos: [
            { nombre: 'Spanish potato omelette', precio: '€7.00' },
            { nombre: 'Braised oxtail', precio: '€15.50' },
            { nombre: 'Anchovies in vinegar', precio: '€6.50' },
          ],
        },
        {
          nombre: 'Desserts',
          platos: [
            { nombre: 'Caramelized torrija', precio: '€5.00' },
            { nombre: 'Cheesecake', precio: '€5.50' },
          ],
        },
        {
          nombre: 'To Drink',
          platos: [
            { nombre: 'House wine (glass)', precio: '€3.50' },
            { nombre: 'Vermouth on tap', precio: '€3.00' },
            { nombre: 'Craft beer', precio: '€3.50' },
          ],
        },
      ],
    },
    historia: {
      eyebrow: 'Twelve years in the neighborhood',
      titulo: 'Our story',
      parrafo:
        "Rocío and Jaime opened El Fogón twelve years ago with a simple idea: cook the way it was cooked in Castilian homes, no shortcuts. She runs the dining room and knows half the neighborhood by name; he hasn't left the kitchen since day one. Together they've turned their grandmothers' recipes into the menu you see today, adding their own touches they never stop refining. For them, a real Castilian tavern is judged by its stew, not its decor.",
      pie: 'Rocío and Jaime, at the door of El Fogón',
    },
    ubicacion: {
      eyebrow: 'How to find us',
      titulo: 'Location & hours',
      direccionLabel: 'Address',
      direccion: 'Calle de la Cava Baja, 22 · 28005 Madrid',
      horarioLabel: 'Opening hours',
      horario: [
        { dias: 'Tuesday – Sunday', horas: '12:30–16:30, 20:00–23:30' },
        { dias: 'Monday', horas: 'Closed' },
      ],
      abrirMapa: 'Open in Google Maps',
    },
    reservas: {
      eyebrow: 'Reservations',
      titulo: 'Message us on WhatsApp',
      texto:
        "We don't take online bookings — send us a direct message and we'll confirm your table.",
      cta: 'Book via WhatsApp',
      tambienFork: 'Also on TheFork',
    },
    footer: {
      aviso:
        'Fictional portfolio site, fictional business for demonstration purposes only.',
    },
    sticky: {
      reservar: 'Book a table',
    },
  },
}
