import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ProcessSection } from '@/components/ProcessSection'
import { TrustSection } from '@/components/TrustSection'
import { PricingSection } from '@/components/PricingSection'
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
        <PricingSection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}


