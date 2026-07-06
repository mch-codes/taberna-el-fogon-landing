'use client'

import { Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Resenas() {
  const { t } = useLanguage()

  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-primary-900">
        {t.resenas.titulo}
      </h2>
      <p className="mt-2 text-center text-gray-500">{t.resenas.subtitulo}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.resenas.items.map((resena) => (
          <div
            key={resena.nombre}
            className="rounded-2xl border border-gray-200 p-6 bg-white"
          >
            <div className="flex gap-0.5 text-acento-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < resena.estrellas ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              &ldquo;{resena.texto}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-primary-900">
              {resena.nombre}
            </p>
            <p className="text-xs text-gray-400">{resena.plato}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
