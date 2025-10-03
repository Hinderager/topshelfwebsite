import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, Truck, Hammer, ArrowRight } from 'lucide-react'

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
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk removal, moving, and demolition solutions for the Treasure Valley area
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#4a90e2]"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1e3a5f] mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#ff6b35] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
