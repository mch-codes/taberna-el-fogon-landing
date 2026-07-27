'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Carta() {
  const { t } = useLanguage()

  return (
    <section
      id="carta"
      className="bg-pizarra bg-cover bg-center text-papel scroll-mt-16"
      // ponytail: overlay keeps the effective bg at ~pizarra, so oro prices stay at 6.5:1
      style={{
        backgroundImage:
          'linear-gradient(rgba(38,35,33,0.72), rgba(38,35,33,0.72)), url(/images/pizarra.jpg)',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-oro">
        {t.carta.eyebrow}
      </p>
      <h2 className="chalk mt-2 font-display text-3xl md:text-4xl">
        {t.carta.titulo}
      </h2>
      <p className="chalk-dim mt-2">{t.carta.subtitulo}</p>

      <div className="mt-12 flex flex-col gap-12">
        {t.carta.categorias.map((categoria) => (
          <div key={categoria.nombre}>
            <h3 className="chalk font-hand text-2xl md:text-3xl font-bold border-b border-barra/30 pb-3">
              {categoria.nombre}
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {categoria.platos.map((plato) => (
                <li key={plato.nombre} className="flex items-end gap-2">
                  <span className="chalk font-hand text-lg">{plato.nombre}</span>
                  <span className="flex-1 border-b border-dotted border-barra/40 mb-1.5" />
                  <span className="font-mono text-sm text-oro tabular-nums mb-1.5">
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
