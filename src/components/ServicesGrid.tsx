import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Truck, Hammer, Home, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: 'Full-service junk removal for homes and businesses. We handle everything from furniture to construction debris.',
    link: '/services/junk-removal',
  },
  {
    icon: Truck,
    title: 'Moving Services',
    description: 'Professional movers for residential and commercial relocations. Packing, loading, and storage solutions.',
    link: '/services/moving',
  },
  {
    icon: Hammer,
    title: 'Demolition',
    description: 'Safe and efficient demolition services. From sheds to complete structures, we handle it all.',
    link: '/services/demolition',
  },
  {
    icon: Home,
    title: 'Cleanouts',
    description: 'Complete property cleanout services for estates, foreclosures, and hoarding situations. Compassionate and thorough.',
    link: '/services/cleanouts',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-slate-100/50 relative overflow-hidden">
      {/* Gradient dot pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #1e3a5f 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a5f] mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk removal, moving, and demolition solutions for the Boise area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#4a90e2] flex flex-col"
                style={{
                  boxShadow: '0 10px 30px rgba(30, 58, 95, 0.3), 0 5px 15px rgba(30, 58, 95, 0.2)'
                }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1e3a5f] mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <CardDescription className="text-base text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#ff6b35] font-semibold hover:gap-3 transition-all duration-300 justify-center mt-auto"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <Link href="/quote">Book Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-bold text-lg px-10 py-6 rounded-lg border-4 border-ub-yellow uppercase"
          >
            <a href="tel:2085932877">Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
