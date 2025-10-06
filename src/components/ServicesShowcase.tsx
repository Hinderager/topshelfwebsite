import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Moving Services',
    description: 'Professional Boise moving services delivering exceptional care throughout the Treasure Valley. Our fully insured movers handle packing, furniture disassembly and reassembly, loading, and unloading with precision. Trust Top Shelf for reliable residential and commercial moves across Boise, Meridian, and Eagle.',
    image: '/images/moving/residential-moves/Asset-73@4x-1.webp',
    link: 'tel:2085932877',
    buttonText: 'Call Now',
  },
  {
    title: 'Junk Removal',
    description: 'Fast, reliable Boise junk removal for homes and businesses across the Treasure Valley. We haul furniture, appliances, electronics, construction debris, and yard waste from Boise, Meridian, and Eagle. From post-renovation cleanup to estate cleanouts, Top Shelf makes disposal hassle-free.',
    image: '/images/junk-removal/household-junk-removal/Asset-5-50-1.webp',
    link: '/services/junk-removal',
    buttonText: 'Book Now',
  },
  {
    title: 'Cleanouts',
    description: 'Complete Boise cleanout services for homes, apartments, warehouses, and commercial properties throughout the Treasure Valley. Our team handles estate cleanouts, property management turnovers, foreclosures, and hoarding situations with compassion and thoroughness. Perfect for moves or property sales in Boise and surrounding areas.',
    image: '/images/junk-removal/cleanout-services/Asset-4-50-1.webp',
    link: 'tel:2085932877',
    buttonText: 'Call Now',
  },
  {
    title: 'Demolition',
    description: 'Professional Boise demolition services for sheds, decks, concrete pads, patios, mobile homes, and complete structures across the Treasure Valley. We manage permits, utility disconnections, inspections, and responsible disposal. Whether prepping for renovation or clearing land in Boise, our crew delivers safe, efficient demolition.',
    image: '/images/demolition/Asset 74@4x.png',
    link: '/services/demolition',
    buttonText: 'Book Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a5f] mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of Southwest Idaho, we provide expert cleanouts, local moving services, demolition and junk removal!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                {service.link.startsWith('tel:') ? (
                  <a
                    href={service.link}
                    className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                  >
                    {service.buttonText}
                  </a>
                ) : (
                  <Link
                    href={service.link}
                    className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                  >
                    {service.buttonText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <Link href="/quote">Book Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-bold text-lg px-10 py-6 rounded-lg border-4 border-ub-yellow uppercase"
          >
            <a href="tel:2085932877">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 593-2877</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
