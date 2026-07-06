'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { textos, Lang } from '@/data/textos'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof textos)['es']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: textos[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  }
  return ctx
}
