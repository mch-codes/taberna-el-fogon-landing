'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Historia() {
  const { t } = useLanguage()

  return (
    <section className="bg-crema">
      <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm order-2 md:order-1">
          <Image
            src="/images/historia.jpg"
            alt="Rocío y Jaime, propietarios de Taberna El Fogón (imagen de muestra)"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="font-mono uppercase tracking-[0.2em] text-xs text-acento-600 mb-2">
            {t.historia.eyebrow}
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-900">
            {t.historia.titulo}
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            {t.historia.parrafo}
          </p>
          <p className="mt-4 text-sm text-gray-400 italic">{t.historia.pie}</p>
        </div>
      </div>
    </section>
  )
}
