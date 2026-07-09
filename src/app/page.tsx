import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Carta from '@/components/Carta'
import Historia from '@/components/Historia'
import Resenas from '@/components/Resenas'
import Ubicacion from '@/components/Ubicacion'
import Footer from '@/components/Footer'
import StickyReservaButton from '@/components/StickyReservaButton'

export default function Home() {
  return (
    <LanguageProvider>
      <div id="top" className="pb-16 md:pb-0">
        <Header />
        <Hero />
        <Carta />
        <Historia />
        <Resenas />
        <Ubicacion />
        <Footer />
      </div>
      <StickyReservaButton />
    </LanguageProvider>
  )
}
