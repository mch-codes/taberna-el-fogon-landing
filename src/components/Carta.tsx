'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Carta() {
  const { t } = useLanguage()

  return (
    <section id="carta" className="max-w-5xl mx-auto px-4 py-14 md:py-20 scroll-mt-16">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-acento-600 text-center">
        {t.carta.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-center text-primary-900">
        {t.carta.titulo}
      </h2>
      <p className="mt-2 text-center text-gray-500 max-w-xl mx-auto">
        {t.carta.subtitulo}
      </p>

      <div className="mt-12 flex flex-col gap-14">
        {t.carta.categorias.map((categoria) => (
          <div key={categoria.nombre}>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-acento-700 border-b border-primary-200 pb-2 mb-6">
              {categoria.nombre}
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoria.platos.map((plato) => (
                <div
                  key={plato.nombre}
                  className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={plato.imagen}
                      alt={`${plato.nombre} (imagen de muestra)`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-primary-900 leading-snug">
                        {plato.nombre}
                      </h4>
                      <span className="shrink-0 font-display font-semibold text-acento-700">
                        {plato.precio}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                      {plato.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
