'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="px-4 pt-6 md:pt-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-primary-900 min-h-[600px] md:min-h-[700px] flex items-end">
          <Image
            src="/images/hero-taberna.jpg"
            alt="Interior de Taberna El Fogón: mesas de madera y jamones colgando (imagen de muestra)"
            fill
            unoptimized
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-primary-900/20" />

          <div className="relative w-full max-w-2xl p-6 md:p-12 lg:p-16 text-crema">
            <p className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm text-crema/70 mb-5">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.95]">
              Taberna El Fogón
            </h1>
            <p className="mt-5 text-crema/90 text-base md:text-lg max-w-lg">
              {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={NEGOCIO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl"
              >
                {t.reservas.cta} <span aria-hidden>→</span>
              </a>
              <a
                href="#carta"
                className="inline-flex items-center justify-center text-crema font-semibold underline underline-offset-4 decoration-crema/40 hover:decoration-crema px-2 py-2"
              >
                {t.hero.ctaCarta}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-5 aspect-[16/7] rounded-3xl overflow-hidden">
          <Image
            src="/images/principales3.jpg"
            alt="Chuletillas y carne a la brasa de leña (imagen de muestra)"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
