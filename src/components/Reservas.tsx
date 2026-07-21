'use client'

import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Reservas() {
  const { t } = useLanguage()

  return (
    <section id="reservas" className="px-4 pb-14 md:pb-20 scroll-mt-16">
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary-900 text-crema px-6 py-14 md:py-20 text-center">
        <p className="font-mono uppercase tracking-[0.2em] text-xs text-crema/60">
          {t.reservas.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
          {t.reservas.titulo}
        </h2>
        <p className="mt-4 text-crema/80 max-w-md mx-auto">{t.reservas.texto}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={NEGOCIO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl"
          >
            {t.reservas.cta} <span aria-hidden>→</span>
          </a>
          <a
            href={NEGOCIO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-crema font-semibold underline underline-offset-4 decoration-crema/40 hover:decoration-crema"
          >
            {t.reservas.tambienFork}
          </a>
        </div>

        <p className="mt-8 font-mono text-sm text-crema/60">Tel. {NEGOCIO.telefonoDisplay}</p>
      </div>
    </section>
  )
}
