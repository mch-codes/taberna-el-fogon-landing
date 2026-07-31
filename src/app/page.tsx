import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InfoBar from '@/components/InfoBar'
import Historia from '@/components/Historia'
import Reservas from '@/components/Reservas'
import Destacados from '@/components/Destacados'
import Carta from '@/components/Carta'
import Footer from '@/components/Footer'
import StickyReservaButton from '@/components/StickyReservaButton'

export default function Home() {
  return (
    <LanguageProvider>
      <div id="top" className="pb-16 md:pb-0">
        <Header />
        <Hero />
        <InfoBar />
        <Historia />
        <Destacados />
        <Carta />
        <Reservas />
        <Footer />
      </div>
      <StickyReservaButton />
    </LanguageProvider>
  )
}
