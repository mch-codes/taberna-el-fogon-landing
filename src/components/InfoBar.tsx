'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

const CERRADO = ['Cerrado', 'Closed']

export default function InfoBar() {
  const { t } = useLanguage()

  return (
    <section id="ubicacion" className="border-b border-pizarra/10 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {/* dirección · horario · contacto, las tres de un vistazo bajo el hero */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-3 md:divide-x md:divide-pizarra/10">
          <div className="md:pr-10">
            <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
              {t.ubicacion.direccionLabel}
            </p>
            <p className="mt-3 text-pizarra">{t.ubicacion.direccion}</p>
            <a
              href={NEGOCIO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-verde font-semibold text-sm hover:text-almagre transition-colors"
            >
              {t.ubicacion.abrirMapa} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:px-10">
            <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
              {t.ubicacion.horarioLabel}
            </p>
            <dl className="mt-3 font-mono text-sm">
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

          <div className="md:pl-10">
            <p className="font-mono uppercase tracking-[0.2em] text-xs text-almagre">
              {t.ubicacion.contactoLabel}
            </p>
            <a
              href={NEGOCIO.telUrl}
              className="mt-3 block text-pizarra hover:text-almagre transition-colors"
            >
              {NEGOCIO.telefonoDisplay}
            </a>
            <a
              href={`mailto:${NEGOCIO.email}`}
              className="mt-1 block text-pizarra hover:text-almagre transition-colors break-all"
            >
              {NEGOCIO.email}
            </a>
          </div>
        </div>

        <a
          href={NEGOCIO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 block relative w-full aspect-[16/6] rounded-2xl overflow-hidden border border-barra"
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
    </section>
  )
}
