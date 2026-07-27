'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// ponytail: order matches t.galeria.platos — dishes that are actually on the carta,
// and each photo genuinely shows that dish (see IMAGE_CREDITS.md).
const fotos = [
  { src: '/images/principales3.jpg', alt: 'Chuletillas de cordero a la brasa (imagen de muestra)' },
  { src: '/images/entrante2.jpg', alt: 'Croquetas caseras de jamón (imagen de muestra)' },
  { src: '/images/entrante3.jpg', alt: 'Pimientos de Padrón fritos (imagen de muestra)' },
  { src: '/images/principales2.jpg', alt: 'Rabo de toro estofado (imagen de muestra)' },
  { src: '/images/postre2.jpg', alt: 'Torrija caramelizada (imagen de muestra)' },
]

export default function Historia() {
  const { t } = useLanguage()

  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
        {t.historia.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra max-w-xl">
        {t.historia.titulo}
      </h2>
      <p className="mt-6 max-w-3xl text-pizarra/70 text-base md:text-lg leading-relaxed">
        {t.historia.parrafo}
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[210px] gap-3 md:gap-4">
        {fotos.map((foto, i) => (
          <figure
            key={foto.src}
            className={`group relative overflow-hidden rounded-2xl ${
              // the lamb leads: 2x2 on desktop, full-width banner on mobile
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              unoptimized
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pizarra/85 to-transparent pt-10 pb-3 px-4">
              <figcaption className="font-hand text-papel text-base md:text-lg leading-tight">
                {t.galeria.platos[i]}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
