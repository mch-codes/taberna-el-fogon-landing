import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const title = 'Taberna El Fogón — Cocina castellana en La Latina, Madrid'
const description =
  'Taberna castellana en La Latina, Madrid. Torreznos, croquetas de rabo de toro y cochinillo asado los domingos. Reserva tu mesa.'

export const metadata: Metadata = {
  metadataBase: new URL('https://taberna-el-fogon-landing.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero-taberna.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
