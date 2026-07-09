'use client'

import { Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Header() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 bg-crema/95 backdrop-blur border-b border-primary-200/60">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl md:text-2xl font-bold text-primary-900"
        >
          El Fogón
        </a>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-primary-300 p-0.5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === 'es'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-700 hover:bg-primary-100'
              }`}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === 'en'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-700 hover:bg-primary-100'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <a
            href={NEGOCIO.telUrl}
            className="hidden sm:flex items-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-4 py-2 rounded-xl text-sm"
          >
            <Phone size={16} />
            {t.header.reservar}
          </a>
        </div>
      </div>
    </header>
  )
}
