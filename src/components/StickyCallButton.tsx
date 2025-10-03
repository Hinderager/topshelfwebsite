'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <a
      href="tel:6121234567"
      className={`lg:hidden fixed bottom-6 right-6 z-50 bg-[#ff6b35] hover:bg-[#e55a2b] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="Call Now"
    >
      <Phone className="h-7 w-7" />
    </a>
  )
}
