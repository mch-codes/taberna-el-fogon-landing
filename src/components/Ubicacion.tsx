'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

const CERRADO = ['Cerrado', 'Closed']

export default function Ubicacion() {
  const { t } = useLanguage()

  return (
    <section id="ubicacion" className="max-w-3xl mx-auto px-4 py-14 md:py-20 scroll-mt-16">
      <p className="font-mono uppercase tracking-[0.2em] text-xs text-acento-600">
        {t.ubicacion.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-primary-900">
        {t.ubicacion.titulo}
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-mono uppercase tracking-widest text-xs text-gray-400">
            {t.ubicacion.direccionLabel}
          </p>
          <p className="mt-2 text-primary-900">{t.ubicacion.direccion}</p>
          <a
            href={NEGOCIO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-acento-600 font-semibold text-sm hover:text-acento-700"
          >
            {t.ubicacion.abrirMapa} <span aria-hidden>→</span>
          </a>
        </div>

        <div>
          <p className="font-mono uppercase tracking-widest text-xs text-gray-400">
            {t.ubicacion.horarioLabel}
          </p>
          <dl className="mt-2 font-mono text-sm">
            {t.ubicacion.horario.map((row) => (
              <div
                key={row.dias}
                className="flex justify-between gap-6 py-1.5 border-b border-primary-900/10"
              >
                <dt className="text-primary-900">{row.dias}</dt>
                <dd className={CERRADO.includes(row.horas) ? 'text-gray-400' : 'text-primary-900'}>
                  {row.horas}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href={NEGOCIO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mt-10 block aspect-[16/7] rounded-3xl overflow-hidden border border-primary-200"
      >
        <Image
          src="/images/mapa-taberna.svg"
          alt="Mapa de la ubicación de Taberna El Fogón en La Latina, Madrid"
          fill
          unoptimized
          className="object-cover"
        />
      </a>
    </section>
  )
}
