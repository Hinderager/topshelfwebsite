import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Basic',
    price: '$129-199',
    description: 'Small Load',
    features: [
      'Up to 1/4 truck load',
      'Single room items',
      'Quick pickup service',
      'Eco-friendly disposal',
      'Same day service available',
    ],
  },
  {
    name: 'Standard',
    price: '$249-349',
    description: 'Half Truck',
    features: [
      'Up to 1/2 truck load',
      'Multiple room items',
      'Professional crew',
      'Recycling & donation',
      'Same day service available',
      'Heavy item removal',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$449-599',
    description: 'Full Truck',
    features: [
      'Full truck load',
      'Whole house cleanouts',
      'Estate & foreclosure cleanouts',
      'Construction debris',
      'Demolition services',
      'Priority scheduling',
      'Commercial services',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. You only pay for the space your items take up in our truck.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                tier.featured
                  ? 'border-4 border-ub-yellow scale-105 shadow-xl'
                  : 'border-2 border-gray-200'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ub-yellow text-black px-6 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-[#1e3a5f] mb-2">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-4">
                  {tier.description}
                </CardDescription>
                <div className="text-5xl font-bold text-[#1e3a5f] mb-2">
                  {tier.price}
                </div>
                <div className="text-sm text-gray-500">Volume-based pricing</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full font-bold ${
                    tier.featured
                      ? 'bg-ub-yellow hover:bg-ub-yellow/90 text-black'
                      : 'bg-polar-blue hover:bg-polar-blue/90 text-white'
                  }`}
                >
                  <Link href="/quote">Get Custom Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which option is right for you?
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-polar-blue text-polar-blue hover:bg-polar-blue hover:text-white font-bold"
          >
            <a href="tel:2085932877">Call for Free Estimate: (208) 593-2877</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
