'use client'

import { MapPin, Clock, Train, Sun } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Ubicacion() {
  const { t } = useLanguage()

  return (
    <section className="bg-crema">
      <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-primary-900">
          {t.ubicacion.titulo}
        </h2>
        <p className="mt-2 text-center text-gray-500">{t.ubicacion.subtitulo}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded-2xl overflow-hidden border border-primary-200 aspect-[4/3]">
            <iframe
              title="Ubicación de Taberna El Fogón en La Latina, Madrid"
              src="https://maps.google.com/maps?q=Calle%20de%20la%20Cava%20Baja%2022%2C%2028005%20Madrid&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-primary-700 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t.ubicacion.direccionLabel}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{t.ubicacion.direccion}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-primary-700 flex items-center justify-center shrink-0">
                <Train size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t.ubicacion.metroLabel}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{t.ubicacion.metro}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-primary-700 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t.ubicacion.horarioLabel}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t.ubicacion.horario.map((linea, i) => (
                    <span key={i}>
                      {linea}
                      {i < t.ubicacion.horario.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-primary-700 flex items-center justify-center shrink-0">
                <Sun size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t.ubicacion.terrazaLabel}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{t.ubicacion.terraza}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
