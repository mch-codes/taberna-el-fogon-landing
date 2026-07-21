import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Historia from '@/components/Historia'
import Galeria from '@/components/Galeria'
import Carta from '@/components/Carta'
import Ubicacion from '@/components/Ubicacion'
import Reservas from '@/components/Reservas'
import Footer from '@/components/Footer'
import StickyReservaButton from '@/components/StickyReservaButton'

export default function Home() {
  return (
    <LanguageProvider>
      <div id="top" className="pb-16 md:pb-0">
        <Header />
        <Hero />
        <Historia />
        <Galeria />
        <Carta />
        <Ubicacion />
        <Reservas />
        <Footer />
      </div>
      <StickyReservaButton />
    </LanguageProvider>
  )
}
