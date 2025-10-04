import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ProcessSection } from '@/components/ProcessSection'
import { TrustSection } from '@/components/TrustSection'
import { GoogleReviews } from '@/components/GoogleReviews'
import { ItemsWeTake } from '@/components/ItemsWeTake'
import { Footer } from '@/components/Footer'
import { StickyCallButton } from '@/components/StickyCallButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <TrustSection />
        <GoogleReviews />
        <ItemsWeTake />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}


