import { Calendar, DollarSign, Truck, Recycle } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Schedule Online or Call',
    description: 'Book your appointment online or give us a call. We work around your schedule for maximum convenience.',
    number: 1,
  },
  {
    icon: DollarSign,
    title: 'Get Free Quote',
    description: 'Our team arrives on-site and provides you with a transparent, no-obligation quote based on volume.',
    number: 2,
  },
  {
    icon: Truck,
    title: 'We Remove Everything',
    description: 'Sit back and relax while our professional crew loads and hauls away all your unwanted items.',
    number: 3,
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Disposal',
    description: 'We recycle and donate whenever possible, ensuring responsible disposal and minimal environmental impact.',
    number: 4,
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Junk Removal Process
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Easy, Fast, and Stress-Free from Start to Finish!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-1 bg-gradient-to-r from-[#4a90e2] to-[#4a90e2]/30" />
                )}

                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full mb-6 shadow-xl">
                    <span className="text-4xl font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#4a90e2]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-semibold mb-6">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
            <a
              href="tel:2085932877"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
            >
              (208) 593-2877
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
