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
      <div className="grid gap-10 md:gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
            {t.historia.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra">
            {t.historia.titulo}
          </h2>
          <p className="mt-6 text-pizarra/70 text-base md:text-lg leading-relaxed">
            {t.historia.parrafo}
          </p>
        </div>

        {/* collage keeps 2 columns of its own inside the right half */}
        <div className="grid grid-cols-2 auto-rows-[130px] md:auto-rows-[150px] gap-3">
          {fotos.map((foto, i) => (
            <figure
              key={foto.src}
              className={`group relative overflow-hidden rounded-2xl ${
                // the lamb leads: full width of the collage, the rest pair up
                i === 0 ? 'col-span-2' : ''
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pizarra/85 to-transparent pt-8 pb-2.5 px-3">
                <figcaption className="font-hand text-papel text-sm md:text-base leading-tight">
                  {t.galeria.platos[i]}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
