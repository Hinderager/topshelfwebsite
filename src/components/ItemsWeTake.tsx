'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const itemsData = {
  general: {
    name: 'GENERAL',
    items: [
      { name: 'Attics: Old Boxes and Storage', link: '#' },
      { name: 'Containers', link: '#' },
      { name: 'Garages: Seasonal Decorations', link: '#' },
      { name: 'Old stuff: Sporting Equipment', link: '#' },
      { name: 'Old Toys and Games', link: '#' },
      { name: 'Books and Magazine boxes', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  furniture: {
    name: 'FURNITURE',
    items: [
      { name: 'Sofas and Couches', link: '#' },
      { name: 'Mattresses and Bed Frames', link: '#' },
      { name: 'Tables and Chairs', link: '#' },
      { name: 'Dressers and Wardrobes', link: '#' },
      { name: 'Entertainment Centers', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  electronics: {
    name: 'ELECTRONICS',
    items: [
      { name: 'Televisions', link: '#' },
      { name: 'Computers and Laptops', link: '#' },
      { name: 'Printers and Scanners', link: '#' },
      { name: 'Monitors', link: '#' },
      { name: 'Gaming Consoles', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  construction: {
    name: 'CONSTRUCTION',
    items: [
      { name: 'Wood Scraps and Lumber', link: '#' },
      { name: 'Roofing Shingles', link: '#' },
      { name: 'Drywall and Plaster', link: '#' },
      { name: 'Concrete and Bricks', link: '#' },
      { name: 'Metal and Aluminum Scraps', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  outdoor: {
    name: 'OUTDOOR',
    items: [
      { name: 'Yard Waste and Clippings', link: '#' },
      { name: 'Old Fencing', link: '#' },
      { name: 'Patio Furniture', link: '#' },
      { name: 'BBQ Grills', link: '#' },
      { name: 'Garden Tools and Equipment', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  office: {
    name: 'OFFICE',
    items: [
      { name: 'Desks and Office Chairs', link: '#' },
      { name: 'Filing Cabinets', link: '#' },
      { name: 'Office Electronics (fax machines, copiers)', link: '#' },
      { name: 'Cubicle Partitions', link: '#' },
      { name: 'Conference Tables', link: '#' },
    ],
    link: '/services/junk-removal',
  },
  appliances: {
    name: 'APPLIANCES',
    items: [
      { name: 'Refrigerators and Freezers', link: '#' },
      { name: 'Washers and Dryers', link: '#' },
      { name: 'Stoves and Ovens', link: '#' },
      { name: 'Microwaves', link: '#' },
      { name: 'Dishwashers', link: '#' },
    ],
    link: '/services/junk-removal',
  },
}

// Placeholder images - using the same 6 images in a grid
const images = [
  '/images/junk-removal/placeholder-1.jpg',
  '/images/junk-removal/placeholder-2.jpg',
  '/images/junk-removal/placeholder-3.jpg',
  '/images/junk-removal/placeholder-4.jpg',
  '/images/junk-removal/placeholder-5.jpg',
  '/images/junk-removal/placeholder-6.jpg',
]

export function ItemsWeTake() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  return (
    <section className="py-20 bg-[#F4F5F6]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-[#1e3a5f]">Main Items We Collect</span>
        </h2>

        {/* Main Content Container with Border */}
        <div className="max-w-7xl mx-auto border-4 border-[#1F201D] rounded-2xl overflow-hidden bg-white">
          <div className="grid lg:grid-cols-2 gap-0 items-start">
            {/* Left Side: Image Grid */}
            <div className="grid grid-cols-2 gap-0 order-2 lg:order-1 lg:sticky lg:top-0">
              {images.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] bg-slate-200 border border-slate-300">
                  {/* Placeholder for now - will add actual images */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Image {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Category Accordion */}
            <div className="flex flex-col order-1 lg:order-2 relative overflow-hidden">
              {Object.entries(itemsData).map(([key, category]) => (
                <div key={key} className="border-b border-white/20 last:border-b-0">
                  {/* Category Header Button */}
                  <button
                    onClick={() => toggleCategory(key)}
                    className={`w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left transition-all duration-200 ${
                      activeCategory === key
                        ? 'bg-[#4589A6] text-white'
                        : 'bg-[#FFC845] text-[#1F201D] hover:bg-[#e5b13d]'
                    }`}
                  >
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {category.name}
                    </span>
                    <span className="text-3xl md:text-4xl font-light">
                      {activeCategory === key ? '−' : '+'}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeCategory === key ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-white p-6 md:p-8">
                        <ul className="space-y-3 mb-6">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.link}
                                className="text-gray-700 hover:text-[#ff6b35] transition-colors text-base md:text-lg"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={category.link}
                          className="inline-block text-[#4a90e2] hover:text-[#1e3a5f] font-semibold text-base md:text-lg transition-colors"
                        >
                          See More..
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
