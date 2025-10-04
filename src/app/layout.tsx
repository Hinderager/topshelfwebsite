import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'

// Harmonia Sans is not available on Google Fonts, using Montserrat as closest alternative
// For production, license Harmonia Sans or use Adobe Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

// Oswald for tall, condensed headers
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Georgia is a system font, no need to import from Google Fonts

export const metadata: Metadata = {
  title: {
    default: 'Top Shelf Moving and Junk Removal | Boise, ID',
    template: '%s | Top Shelf Moving and Junk Removal',
  },
  description: 'Professional junk removal, moving, and demolition services in Boise and Treasure Valley area. Licensed, insured, and eco-friendly. Same-day service available. Call (612) 123-4567 for a free quote.',
  keywords: ['junk removal Boise', 'moving services Treasure Valley', 'demolition services Idaho', 'furniture removal Boise', 'appliance removal Meridian', 'estate cleanout Nampa', 'commercial junk removal Boise', 'eco-friendly disposal'],
  authors: [{ name: 'Top Shelf Moving and Junk Removal' }],
  openGraph: {
    title: 'Top Shelf Moving and Junk Removal | Boise, ID',
    description: 'Professional junk removal, moving, and demolition services in Boise and Treasure Valley. Licensed, insured, and eco-friendly. Same-day service available.',
    url: 'https://topshelfmoving.com',
    siteName: 'Top Shelf Moving and Junk Removal',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

import { StructuredData } from '@/components/StructuredData'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        {/* Preload critical hero image with fetchpriority */}
        <link
          rel="preload"
          href="/images/best-of-all/hero.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Preload logo for header */}
        <link
          rel="preload"
          href="/logos/Asset 5@4x-white.png"
          as="image"
          type="image/png"
        />
        {/* Preconnect to external domains for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}


