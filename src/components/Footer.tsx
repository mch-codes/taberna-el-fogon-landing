'use client'

import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Footer() {
  const { t } = useLanguage()
  const { calle, ciudad } = NEGOCIO.direccion

  return (
    <footer className="bg-primary-900 text-primary-300">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span>
          Taberna El Fogón · {calle} · {ciudad}
        </span>
        <span>© {new Date().getFullYear()} Taberna El Fogón</span>
      </div>
      <p className="px-4 pb-6 text-center text-[11px] text-primary-400/70">{t.footer.aviso}</p>
    </footer>
  )
}
