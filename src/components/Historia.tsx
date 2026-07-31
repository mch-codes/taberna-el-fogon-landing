'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Historia() {
  const { t } = useLanguage()

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20">
      <div className="grid gap-10 md:gap-14 md:grid-cols-2 md:items-center">
        <figure>
          {/* ponytail: 3/2 = aspecto original de la foto, así no recorta las caras */}
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/historia.jpg"
              alt="Rocío y Jaime, dueños de Taberna El Fogón (imagen de muestra)"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-hand text-lg text-pizarra/60">
            {t.historia.pie}
          </figcaption>
        </figure>

        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-almagre">
            {t.historia.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra">
            {t.historia.titulo}
          </h2>
          <p className="mt-6 text-pizarra/70 text-base md:text-lg leading-relaxed">
            {t.historia.parrafo}
          </p>
        </div>
      </div>
    </section>
  )
}
