import { textos, NEGOCIO } from '@/data/textos'

const DIAS_APERTURA = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function precioNumerico(precio: string): string {
  return precio.replace('€', '').trim().replace(',', '.')
}

export default function JsonLd() {
  const { carta } = textos.es

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: NEGOCIO.nombre,
    servesCuisine: 'Cocina castellana',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NEGOCIO.direccion.calle,
      addressLocality: NEGOCIO.direccion.ciudad,
      postalCode: NEGOCIO.direccion.codigoPostal,
      addressCountry: NEGOCIO.direccion.pais,
    },
    telephone: NEGOCIO.telefonoSchema,
    email: NEGOCIO.email,
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DIAS_APERTURA,
        opens: '12:30',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DIAS_APERTURA,
        opens: '20:00',
        closes: '23:30',
      },
    ],
    acceptsReservations: true,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: carta.categorias.map((categoria) => ({
        '@type': 'MenuSection',
        name: categoria.nombre,
        hasMenuItem: categoria.platos.map((plato) => ({
          '@type': 'MenuItem',
          name: plato.nombre,
          offers: {
            '@type': 'Offer',
            price: precioNumerico(plato.precio),
            priceCurrency: 'EUR',
          },
        })),
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  )
}
