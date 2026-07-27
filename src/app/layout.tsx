import type { Metadata } from 'next'
import { Inter, Archivo_Black, Kalam, Space_Mono } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// ponytail: Archivo Black ships one weight only — never pair it with font-bold (faux bolding)
const archivo = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-hand',
})

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
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
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
    <html
      lang="es"
      className={`${inter.variable} ${archivo.variable} ${kalam.variable} ${mono.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
