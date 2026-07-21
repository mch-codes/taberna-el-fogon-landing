'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Historia() {
  const { t } = useLanguage()

  return (
    <section className="max-w-3xl mx-auto px-4 py-14 md:py-20">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-acento-600">
        {t.historia.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-primary-900 max-w-xl">
        {t.historia.titulo}
      </h2>
      <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
        {t.historia.parrafo}
      </p>
    </section>
  )
}
