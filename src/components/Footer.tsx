'use client'

import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Footer() {
  const { t } = useLanguage()
  const { calle, ciudad } = NEGOCIO.direccion
  // ponytail: solo la fila de apertura; el "Lunes cerrado" ya está en InfoBar
  const [horario] = t.ubicacion.horario

  return (
    <footer className="bg-pizarra text-barra">
      <div className="w-full px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
        <span>
          Taberna El Fogón · {calle} · {ciudad}
        </span>
        <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="tabular-nums">
            {horario.dias}: {horario.horas}
          </span>
          <a href={NEGOCIO.telUrl} className="tabular-nums hover:text-papel transition-colors">
            {NEGOCIO.telefonoDisplay}
          </a>
        </span>
        <span>© {new Date().getFullYear()} Taberna El Fogón</span>
      </div>
      <p className="px-4 pb-6 text-center text-[11px] text-barra">{t.footer.aviso}</p>
    </footer>
  )
}
