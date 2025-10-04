import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SectionDivider } from '@/components/SectionDivider'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesShowcase } from '@/components/ServicesShowcase'
import { TrustSection } from '@/components/TrustSection'
import { GoogleReviews } from '@/components/GoogleReviews'
import { ItemsWeTake } from '@/components/ItemsWeTake'
import { FAQ } from '@/components/FAQ'
import { MapSection } from '@/components/MapSection'
import { Footer } from '@/components/Footer'
import { StickyCallButton } from '@/components/StickyCallButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <ServicesGrid />
        <ServicesShowcase />
        <TrustSection />
        <GoogleReviews />
        {/* <ItemsWeTake /> */}
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}


