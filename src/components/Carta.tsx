'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Carta() {
  const { t } = useLanguage()

  return (
    <section id="carta" className="max-w-3xl mx-auto px-4 py-14 md:py-20 scroll-mt-16">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-acento-600">
        {t.carta.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-primary-900">
        {t.carta.titulo}
      </h2>
      <p className="mt-2 text-gray-500">{t.carta.subtitulo}</p>

      <div className="mt-12 flex flex-col gap-12">
        {t.carta.categorias.map((categoria) => (
          <div key={categoria.nombre}>
            <h3 className="text-xl md:text-2xl font-bold text-primary-900 border-b border-primary-200 pb-3">
              {categoria.nombre}
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {categoria.platos.map((plato) => (
                <li key={plato.nombre} className="flex items-end gap-2">
                  <span className="text-primary-900">{plato.nombre}</span>
                  <span className="flex-1 border-b border-dotted border-primary-300 mb-1.5" />
                  <span className="font-mono text-sm text-primary-900 tabular-nums">
                    {plato.precio}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
