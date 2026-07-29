'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Historia() {
  const { t } = useLanguage()

  return (
    <section className="max-w-3xl mx-auto px-4 py-14 md:py-20 text-center">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
        {t.historia.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra">
        {t.historia.titulo}
      </h2>
      <p className="mt-6 text-pizarra/70 text-base md:text-lg leading-relaxed">
        {t.historia.parrafo}
      </p>
    </section>
  )
}
