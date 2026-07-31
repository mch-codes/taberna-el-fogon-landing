'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section>
      <div className="w-full">
        <div className="relative overflow-hidden bg-pizarra min-h-[600px] md:min-h-[700px] flex items-end">
          <Image
            src="/images/hero-taberna.jpg"
            alt="Interior de Taberna El Fogón: mesas de madera y jamones colgando (imagen de muestra)"
            fill
            unoptimized
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pizarra via-pizarra/60 to-pizarra/20" />

          <div className="relative w-full max-w-2xl p-6 md:p-12 lg:px-20 lg:py-16 text-papel">
            <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-papel/70 mb-5">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
              {t.hero.titulo}
              <span className="block text-papel/80">{t.hero.tituloAcento}</span>
            </h1>
            <p className="mt-5 text-papel/90 text-base md:text-lg max-w-lg">
              {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={NEGOCIO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-verde hover:bg-verde-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl"
              >
                {t.reservas.cta} <span aria-hidden>→</span>
              </a>
              <a
                href="#carta"
                className="inline-flex items-center justify-center text-papel font-semibold underline underline-offset-4 decoration-papel/40 hover:decoration-papel px-2 py-2"
              >
                {t.hero.ctaCarta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
