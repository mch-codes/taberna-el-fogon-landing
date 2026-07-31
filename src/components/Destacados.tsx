'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// ponytail: orden = t.destacados.items; cada foto muestra realmente ese plato
// y el plato está en la carta (ver IMAGE_CREDITS.md).
const fotos = [
  { src: '/images/principales2.jpg', alt: 'Rabo de toro estofado (imagen de muestra)' },
  { src: '/images/principales3.jpg', alt: 'Chuletillas de cordero a la brasa (imagen de muestra)' },
  { src: '/images/postre2.jpg', alt: 'Torrija caramelizada (imagen de muestra)' },
]

export default function Destacados() {
  const { t } = useLanguage()

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20">
      <p className="uppercase tracking-[0.2em] text-xs text-almagre">
        {t.destacados.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra">
        {t.destacados.titulo}
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {t.destacados.items.map((item, i) => (
          <article key={item.titulo} className="group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={fotos[i].src}
                alt={fotos[i].alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-hand text-2xl text-pizarra">{item.titulo}</h3>
            <p className="mt-2 text-pizarra/70 text-sm leading-relaxed">{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
