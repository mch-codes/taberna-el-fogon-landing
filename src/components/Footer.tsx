'use client'

import { Phone, Mail, AtSign, MapPin, MessageCircle, CalendarCheck } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { NEGOCIO } from '@/data/textos'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-white font-bold text-lg">
              Taberna El Fogón
            </h2>
            <p className="mt-1 text-sm text-primary-300">{t.footer.desc}</p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={NEGOCIO.telUrl} className="flex items-center gap-2 hover:text-white">
                <Phone size={16} />
                {t.footer.telefono}
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} />
                {t.footer.email}
              </a>
              <span className="flex items-center gap-2">
                <AtSign size={16} />
                {t.footer.instagram}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Calle de la Cava Baja, 22, 28005 Madrid
              </span>
            </div>

            <div className="mt-4 text-xs text-primary-400">
              {t.footer.horarioTitulo}:{' '}
              {t.footer.horario.map((linea, i) => (
                <span key={i}>
                  {linea}
                  {i < t.footer.horario.length - 1 && ' · '}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:text-right flex flex-col sm:items-end gap-3">
            <a
              href={NEGOCIO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-5 py-3 rounded-xl"
            >
              <CalendarCheck size={18} />
              {t.footer.ctaReservar}
            </a>
            <a
              href={NEGOCIO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold px-5 py-3 rounded-xl"
            >
              <MessageCircle size={18} />
              {t.footer.ctaWhatsapp}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-primary-400 text-center">
          © {new Date().getFullYear()} Taberna El Fogón — {t.footer.aviso}
        </div>
      </div>
    </footer>
  )
}
