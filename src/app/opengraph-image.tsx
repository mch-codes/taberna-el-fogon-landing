import { ImageResponse } from 'next/og'

export const alt = 'Taberna El Fogón — Cocina castellana en La Latina, Madrid'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

const NOMBRE = 'Taberna El Fogón'
const TAGLINE = 'Cocina castellana en La Latina, Madrid'

async function loadPlayfairFont() {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&text=${encodeURIComponent(
        NOMBRE + TAGLINE
      )}`
    )
  ).text()

  const fontUrl = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/)?.[1]
  if (!fontUrl) {
    throw new Error('No se pudo resolver la URL de la fuente Playfair Display')
  }

  const fontRes = await fetch(fontUrl)
  return fontRes.arrayBuffer()
}

export default async function Image() {
  const playfair = await loadPlayfairFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf1de',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: 104,
            color: '#592d1c',
            textAlign: 'center',
          }}
        >
          {NOMBRE}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: 36,
            color: '#82232c',
            textAlign: 'center',
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            width: 140,
            height: 5,
            backgroundColor: '#a8532a',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Playfair Display',
          data: playfair,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )
}
