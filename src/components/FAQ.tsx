'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, Middleton, and Hidden Springs. Contact us if you\'re outside these areas - we may still be able to help!'
  },
  {
    question: 'How do you price your services?',
    answer: 'Our pricing is based on the volume of items and the complexity of the job. We provide free, no-obligation quotes and transparent pricing with no hidden fees. For junk removal, we charge based on how much space your items take up in our truck. For moving services, pricing depends on the size of your move and distance.'
  },
  {
    question: 'Do I need to be present during the service?',
    answer: 'While we prefer you to be present for the initial walkthrough and approval, you don\'t need to stay for the entire job. Many of our customers provide access instructions and go about their day while we handle everything.'
  },
  {
    question: 'What items can\'t you take?',
    answer: 'We cannot accept hazardous materials including paint, chemicals, asbestos, medical waste, or biohazards. We also cannot take items that are illegal to dispose of or transport. If you\'re unsure about specific items, give us a call and we\'ll let you know!'
  },
  {
    question: 'How quickly can you schedule a service?',
    answer: 'We often have same-day or next-day availability! Call us at (208) 593-2877 to check our current schedule. We understand that junk removal and moving needs can be urgent, and we do our best to accommodate your timeline.'
  },
  {
    question: 'Do you recycle or donate items?',
    answer: 'Yes! We\'re committed to responsible disposal. We donate usable items to local charities and recycle everything we can. Our goal is to keep as much as possible out of landfills while supporting our community.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Top Shelf Moving and Junk Removal is fully licensed and insured for your protection and peace of mind. Our professional crew is trained to handle your belongings with care.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards, and digital payment methods. Payment is due upon completion of the service. We\'ll provide a detailed invoice for your records.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
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
