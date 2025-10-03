'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Star, MapPin, ShieldCheck, FileCheck, Clock } from 'lucide-react'

interface ReviewsData {
  rating: number
  totalReviews: number
}

export function HeroSection() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (response.ok) {
          const data = await response.json()
          setReviewsData({
            rating: data.rating,
            totalReviews: data.totalReviews
          })
        }
      } catch (err) {
        console.error('Error fetching reviews:', err)
      }
    }

    fetchReviews()
  }, [])
  return (
    <section className="relative h-[750px] md:h-[850px] lg:h-[950px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/best-of-all/hero.webp)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-32 pb-12">
        <div className="max-w-md md:max-w-lg lg:max-w-xl ml-auto">
          <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-sm rounded-lg border-[6px] border-[#4a90e2]/30 p-6 md:p-8 pb-16 md:pb-20 text-white text-center relative">
            {/* Main Headline - White on dark background */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-none uppercase tracking-tight">
              <span className="text-[#4a90e2]">Boise</span> Moving and <br />Junk Removal
            </h1>

            {/* Small Header */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 italic">
              Delivering Fresh Starts
            </h2>

            {/* Tagline */}
            <div className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#4a90e2]" />
                <span>Locally owned</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 flex-shrink-0 text-[#4a90e2]" />
                <span>Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#4a90e2]" />
                <span>Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 flex-shrink-0 text-[#4a90e2]" />
                <span>Same Day Service</span>
              </div>
            </div>

            {/* Schedule Section */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-wider mb-3 md:mb-4">
              Schedule an Appointment
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 justify-center">
              <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg md:text-xl px-8 md:px-10 py-6 md:py-8 rounded-lg uppercase w-full sm:w-48 border-4 border-ub-yellow">
                <Link href="/quote">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-bold text-lg md:text-xl px-8 md:px-10 py-6 md:py-8 rounded-lg border-4 border-ub-yellow w-full sm:w-48"
              >
                <a href="tel:2085932877">(208) 593-2877</a>
              </Button>
            </div>

            {/* Google Rating Badge - Positioned to overlap bottom border */}
            <div className="absolute -bottom-10 md:-bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-2xl px-3.5 py-2.5 md:px-4 md:py-3 shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  {/* Google Logo */}
                  <div className="flex-shrink-0 bg-white rounded-full shadow-md p-1">
                    <svg width="72" height="72" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                  </div>

                  {/* Rating Content */}
                  <div className="flex flex-col items-start">
                    <div className="text-base md:text-lg font-bold text-gray-900 mb-0.5">Google Rating</div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-2xl md:text-3xl font-bold text-[#FFC845]">
                        {reviewsData ? reviewsData.rating.toFixed(1) : '5.0'}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-[#FFC845] text-[#FFC845]" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-900">
                      <span className="font-bold text-sm md:text-base">
                        {reviewsData ? `${reviewsData.totalReviews}+` : '300+'} Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
