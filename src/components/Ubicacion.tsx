'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

const CERRADO = ['Cerrado', 'Closed']

export default function Ubicacion() {
  const { t } = useLanguage()

  return (
    <section id="ubicacion" className="max-w-5xl mx-auto px-4 py-14 md:py-20 scroll-mt-16">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
        {t.ubicacion.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl text-pizarra">
        {t.ubicacion.titulo}
      </h2>

      <div className="mt-8 grid gap-8 md:gap-10 md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <p className="font-mono uppercase tracking-widest text-xs text-pizarra/70">
              {t.ubicacion.direccionLabel}
            </p>
            <p className="mt-2 text-pizarra">{t.ubicacion.direccion}</p>
            <a
              href={NEGOCIO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-verde font-semibold text-sm hover:text-almagre transition-colors"
            >
              {t.ubicacion.abrirMapa} <span aria-hidden>→</span>
            </a>
          </div>

          <div>
            <p className="font-mono uppercase tracking-widest text-xs text-almagre">
              {t.ubicacion.horarioLabel}
            </p>
            <dl className="mt-2 font-mono text-sm">
              {t.ubicacion.horario.map((row) => (
                <div
                  key={row.dias}
                  className="flex justify-between gap-6 py-1.5 border-b border-pizarra/10"
                >
                  <dt className="text-pizarra">{row.dias}</dt>
                  <dd className={CERRADO.includes(row.horas) ? 'text-pizarra/50' : 'text-pizarra'}>
                    {row.horas}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* hairline divider lives on the wrapper — the map's own border would clash */}
        <div className="flex md:border-l md:border-pizarra/15 md:pl-10">
          <a
            href={NEGOCIO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full aspect-[4/3] md:aspect-auto md:min-h-[260px] rounded-2xl overflow-hidden border border-barra"
          >
            <Image
              src="/images/mapa-taberna.svg"
              alt="Mapa de la ubicación de Taberna El Fogón en La Latina, Madrid"
              fill
              unoptimized
              className="object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
