'use client'

import Image from 'next/image'

// ponytail: static gallery, no captions/lightbox — PDF is just three photos
const fotos = [
  { src: '/images/entrante2.jpg', alt: 'Croquetas caseras (imagen de muestra)', wide: false },
  { src: '/images/historia.jpg', alt: 'Sala de la taberna con clientes habituales (imagen de muestra)', wide: false },
  { src: '/images/principales1.jpg', alt: 'Asado a la brasa de leña (imagen de muestra)', wide: true },
]

export default function Galeria() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        {fotos.map((foto) => (
          <div
            key={foto.src}
            className={`relative rounded-3xl overflow-hidden ${
              foto.wide ? 'col-span-2 aspect-[16/8]' : 'aspect-square'
            }`}
          >
            <Image src={foto.src} alt={foto.alt} fill unoptimized className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
