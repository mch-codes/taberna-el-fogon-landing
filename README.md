# Taberna El Fogón

Landing page estática para un cliente ficticio: una taberna castellana en La
Latina, Madrid. Proyecto de portfolio freelance — negocio y datos ficticios,
sin fines comerciales reales.

## Objetivo

Conseguir reservas de mesa para una taberna de 12 años llevada por el
matrimonio Rocío (sala) y Jaime (cocina). La carta es la sección
protagonista: cocina castellana tradicional con toque moderno, con especial
peso visual en fotos de plato. Página bilingüe ES/EN pensada mobile-first,
ya que gran parte de las visitas llegan desde Google Maps con el móvil en
mano, decidiendo dónde comer.

## Stack

- [Next.js](https://nextjs.org/) 14+ (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para iconos
- Exportación 100% estática (`output: 'export'`), sin backend
- Imágenes con `next/image` (`unoptimized: true`)
- Deploy en [Vercel](https://vercel.com/)

## Bilingüe ES/EN

Toggle de idioma en el header, sin librerías de i18n ni rutas separadas:
los textos de ambos idiomas viven en `src/data/textos.ts` y el idioma
activo se gestiona con un contexto de React (`src/context/LanguageContext.tsx`)
que envuelve la página en `page.tsx`. Español por defecto.

## Estructura

```
src/
  app/
    layout.tsx      # Metadata (SEO, OG) y fuentes Inter + Playfair Display
    page.tsx         # LanguageProvider + orden de secciones
  context/
    LanguageContext.tsx
  data/
    textos.ts        # Todos los textos ES/EN y datos de la carta
  components/
    Header.tsx
    Hero.tsx
    Carta.tsx
    Historia.tsx
    Resenas.tsx
    Ubicacion.tsx
    Footer.tsx
    StickyReservaButton.tsx
```

Los textos y datos del negocio ficticio (carta, horario, dirección,
reseñas, etc.) están centralizados en [DATOS.md](./DATOS.md) y en
`src/data/textos.ts`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Genera el sitio estático en `out/`.

## Deploy

```bash
npx vercel --prod
```

---

*Proyecto ficticio de portfolio. Ninguno de los datos (taberna, personas,
dirección, teléfono) corresponde a un negocio real.*
