'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Clock, Recycle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/best-of-all/hero.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="flex justify-end">
          <div className="max-w-2xl bg-white/95 backdrop-blur-sm border-2 border-white/80 rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Boise&apos;s Premier <br />
              <span className="text-[#4a90e2]">Junk Removal & Moving Service</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Professional, Fast, and Eco-Friendly Solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black text-lg px-8 py-6 font-bold">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-polar-blue text-polar-blue hover:bg-polar-blue hover:text-white text-lg px-8 py-6 font-bold"
              >
                <a href="tel:6121234567">(612) 123-4567</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ub-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-[#1e3a5f]">Licensed & Insured</div>
                  <div className="text-sm text-gray-600">Fully Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ub-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-[#1e3a5f]">Same Day Service</div>
                  <div className="text-sm text-gray-600">Fast Response</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ub-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Recycle className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-[#1e3a5f]">Eco-Friendly Disposal</div>
                  <div className="text-sm text-gray-600">We Recycle & Donate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
