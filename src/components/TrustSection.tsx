'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Award, Users, Clock } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Boise, ID',
    rating: 5,
    text: 'Top Shelf was amazing! They removed all the junk from my basement in under 2 hours. Professional, fast, and eco-friendly. Highly recommend!',
  },
  {
    name: 'Mike Anderson',
    location: 'Meridian, ID',
    rating: 5,
    text: 'We used Top Shelf for our office move and they were fantastic. Everything was handled with care and the price was very reasonable.',
  },
  {
    name: 'Jennifer Lee',
    location: 'Eagle, ID',
    rating: 5,
    text: 'After my mother passed, Top Shelf helped with the estate cleanout. They were respectful, efficient, and made a difficult time much easier.',
  },
]

const stats = [
  { icon: Award, label: 'BBB Accredited', value: 'A+ Rating' },
  { icon: Users, label: 'Veteran Owned', value: 'Proudly Serving ID' },
  { icon: Clock, label: 'Experience', value: '10+ Years' },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Google Reviews Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-polar-blue to-horizon-blue text-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-1">4.9</div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm opacity-90">Google Rating</div>
            </div>
            <div className="h-16 w-px bg-white/30" />
            <div className="text-left">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Customer Reviews</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-ub-yellow rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-polar-blue mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-4xl font-bold text-center text-[#1e3a5f] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-[#1e3a5f]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
