import { ImageResponse } from 'next/og'

export const alt = 'Taberna El Fogón — Cocina castellana en La Latina, Madrid'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

const NOMBRE = 'Taberna El Fogón'
const TAGLINE = 'Cocina castellana en La Latina, Madrid'

async function loadDisplayFont() {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo+Black:wght@400&text=${encodeURIComponent(
        NOMBRE + TAGLINE
      )}`
    )
  ).text()

  const fontUrl = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/)?.[1]
  if (!fontUrl) {
    throw new Error('No se pudo resolver la URL de la fuente Archivo Black')
  }

  const fontRes = await fetch(fontUrl)
  return fontRes.arrayBuffer()
}

export default async function Image() {
  const displayFont = await loadDisplayFont()

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
          backgroundColor: '#EDE6D6',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Archivo Black',
            fontWeight: 400,
            fontSize: 104,
            color: '#262321',
            textAlign: 'center',
          }}
        >
          {NOMBRE}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontFamily: 'Archivo Black',
            fontWeight: 400,
            fontSize: 36,
            color: '#A13D2B',
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
            backgroundColor: '#C9A227',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Archivo Black',
          data: displayFont,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )
}
