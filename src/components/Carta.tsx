'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Carta() {
  const { t } = useLanguage()

  return (
    <section id="carta" className="px-4 md:px-8 py-14 md:py-20 scroll-mt-16">
      <div
        className="max-w-5xl mx-auto rounded-3xl bg-pizarra bg-cover bg-center text-papel px-6 md:px-10 py-12 md:py-14"
        // ponytail: overlay keeps the effective bg at ~pizarra, so oro prices stay at 6.5:1
        style={{
          backgroundImage:
            'linear-gradient(rgba(38,35,33,0.72), rgba(38,35,33,0.72)), url(/images/pizarra.jpg)',
        }}
      >
      <p className="uppercase tracking-[0.2em] text-xs text-oro">
        {t.carta.eyebrow}
      </p>
      <h2 className="chalk mt-2 font-display text-3xl md:text-4xl">
        {t.carta.titulo}
      </h2>
      <p className="chalk-dim mt-2">{t.carta.subtitulo}</p>

      {/* ponytail: CSS multi-column, not a grid — categories flow and keep their
          own height instead of being forced into equal rows */}
      <div className="mt-10 md:columns-2 md:gap-10">
        {t.carta.categorias.map((categoria) => (
          <div key={categoria.nombre} className="break-inside-avoid mb-9">
            <h3 className="chalk font-hand text-2xl md:text-3xl font-bold border-b border-barra/30 pb-3">
              {categoria.nombre}
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {categoria.platos.map((plato) => (
                <li key={plato.nombre} className="flex items-end gap-2">
                  <span className="chalk font-hand text-lg">{plato.nombre}</span>
                  <span className="flex-1 border-b border-dotted border-barra/40 mb-1.5" />
                  <span className="text-sm text-oro tabular-nums mb-1.5">
                    {plato.precio}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
