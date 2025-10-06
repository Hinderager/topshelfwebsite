'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: 'What types of items can you haul away with your junk removal service?',
    answer: 'We remove just about anything—furniture, appliances, yard debris, construction waste, old mattresses, hot tubs, pianos, and more. If it\'s non-hazardous and you want it gone, we can take care of it.'
  },
  {
    question: 'How quickly can you show up for a job?',
    answer: 'Often within 24–48 hours! Whether it\'s a move, cleanout, or demo, we do our best to accommodate your timeline—sometimes even same-day.'
  },
  {
    question: 'What does your junk removal service include?',
    answer: 'Our crew does all the heavy lifting—wherever the junk is located. We\'ll haul items from inside the home, yard, garage, attic, or basement and sweep up before we go.'
  },
  {
    question: 'Can you assist with both packing and moving?',
    answer: 'Yes! We offer full-service moving that includes packing, loading, transport, and unloading. You can choose just what you need—whether it\'s help with packing, moving large items, or managing the whole move.'
  },
  {
    question: 'What areas do you serve for moving or junk removal?',
    answer: 'We serve Metro Boise and surrounding areas throughout Southwest Idaho. If you\'re outside that area, just ask—we\'re flexible and happy to discuss.'
  },
  {
    question: 'How do you charge for oversized or particularly heavy items?',
    answer: 'Heavier or hard-to-access items—like pianos, gun safes, and hot tubs—may come with additional charges due to the labor and equipment involved. We always provide clear pricing up front.'
  },
  {
    question: 'What precautions do you take when moving or demolishing inside a home?',
    answer: 'We use protective blankets, dollies and specialized equipment, and plan every move to avoid damage. For demolition, we keep work areas clean and safe and handle debris removal ourselves.'
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
