'use client'

import Image from 'next/image'
import { CalendarCheck, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-end md:items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-taberna.jpg"
          alt="Interior y platos de Taberna El Fogón en La Latina (imagen de muestra)"
          fill
          unoptimized
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-primary-900/10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pb-14 pt-24 md:pb-24 w-full text-crema">
        <p className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm text-crema/70 mb-4">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
          {t.hero.titulo}
          <br />
          <span className="text-primary-200">{t.hero.tituloAcento}</span>
        </h1>

        <p className="mt-4 text-crema/90 text-base md:text-lg max-w-xl">
          {t.hero.desc}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <a
            href={NEGOCIO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg shadow-black/20"
          >
            <CalendarCheck size={20} />
            {t.hero.ctaReservar}
          </a>
          <a
            href={NEGOCIO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-crema/10 hover:bg-crema/20 transition-colors text-crema font-semibold px-6 py-4 rounded-xl text-lg border border-crema/40 backdrop-blur-sm"
          >
            <MessageCircle size={20} />
            {t.hero.ctaWhatsapp}
          </a>
          <a
            href="#carta"
            className="flex items-center justify-center gap-2 bg-crema/10 hover:bg-crema/20 transition-colors text-crema font-semibold px-6 py-4 rounded-xl text-lg border border-crema/40 backdrop-blur-sm"
          >
            {t.hero.ctaCarta}
          </a>
        </div>
      </div>
    </section>
  )
}
