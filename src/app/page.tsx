import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SectionDivider } from '@/components/SectionDivider'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesShowcase } from '@/components/ServicesShowcase'
import { TrustSection } from '@/components/TrustSection'
import { GoogleReviews } from '@/components/GoogleReviews'
import { ItemsWeTake } from '@/components/ItemsWeTake'
import { Footer } from '@/components/Footer'
import { StickyCallButton } from '@/components/StickyCallButton'

// Lazy load below-fold components for better initial load performance
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="py-20 bg-white"><div className="container mx-auto px-4 text-center text-gray-600">Loading FAQ...</div></div>
})

const MapSection = dynamic(() => import('@/components/MapSection').then(mod => ({ default: mod.MapSection })), {
  loading: () => <div className="py-20 bg-gray-50"><div className="container mx-auto px-4 text-center text-gray-600">Loading map...</div></div>
})

function ReviewsSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-slate-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-8 animate-pulse" />
          <div className="h-24 bg-gray-200 rounded-2xl w-80 mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 h-64 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <ServicesGrid />
        {/* <ServicesShowcase /> */}
        <TrustSection />
        <Suspense fallback={<ReviewsSkeleton />}>
          <GoogleReviews />
        </Suspense>
        <ItemsWeTake />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}


