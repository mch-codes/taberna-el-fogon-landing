'use client'

import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Header() {
  const { lang, setLang, t } = useLanguage()

  const nav = [
    { href: '#top', label: t.header.navInicio },
    { href: '#carta', label: t.header.navMenu },
    { href: '#ubicacion', label: t.header.navUbicacion },
    { href: '#reservas', label: t.header.navContacto },
  ]

  return (
    <header className="sticky top-0 z-40 bg-crema/90 backdrop-blur-md border-b border-primary-900/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="w-9 h-9 rounded-full border border-primary-900/40 flex items-center justify-center font-display text-sm text-primary-900">
            EF
          </span>
          <span className="font-display text-lg md:text-xl font-bold text-primary-900 leading-none">
            Taberna El Fogón
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-primary-900">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-acento-600 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-primary-900/20 p-0.5 text-sm font-semibold">
            {(['es', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === l
                    ? 'bg-acento-600 text-white'
                    : 'text-primary-900 hover:bg-primary-900/10'
                }`}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href={NEGOCIO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-4 py-2 rounded-xl text-sm"
          >
            WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
