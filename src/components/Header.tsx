'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const junkRemovalItems = [
  { name: 'Appliance Removal', items: ['Refrigerator', 'Freezer', 'Washer/Dryer', 'Dishwasher', 'Microwave', 'Oven'] },
  { name: 'Furniture Removal', items: ['Dresser', 'Entertainment Center', 'Bed Frame', 'Mattress', 'Bookshelf', 'Table', 'Couch', 'Chair', 'Patio Furniture', 'Desk'] },
  { name: 'Exercise Equipment', items: ['Treadmill', 'Elliptical', 'Rowing Machine', 'Home Gym', 'Exercise Bike'] },
  { name: 'Electronics Removal', items: ['Computer', 'Television', 'Fax Machine', 'Monitor', 'Printer'] },
  { name: 'Heavy Items', items: ['Gun Safe', 'Hot Tub', 'Piano', 'Safe Removal'] },
  { name: 'Bulk Material', items: ['Rock', 'Dirt', 'Sand', 'Sod', 'Asphalt', 'Gravel'] },
  { name: 'Household Junk', items: ['Cardboard', 'Clothing', 'BBQ', 'Clutter', 'Fire Pit'] },
  { name: 'Construction Cleanup', items: ['Drywall', 'Shingles', 'Brick', 'Construction Debris'] },
]

const movingItems = [
  { name: 'Residential Moves', items: ['Residential Movers', 'Labor Only', 'Moving Supplies', 'Piano Moving', 'Furniture Movers', 'Movers and Packers', 'Senior Moving', 'Apartment Movers'] },
  { name: 'Commercial Moves', items: ['Business Movers', 'Office Moving', 'Storage Auction Move', 'Packout'] },
  { name: 'Loading/Unloading', items: ['Loading Help', 'Unloading Help', 'Moving and Storage'] },
]

const demolitionItems = [
  'Shed Demolition', 'House Demolition', 'Fence Removal', 'Pool Demolition', 'Concrete Removal',
  'Deck Removal', 'Mobile Home Demolition', 'Driveway Removal', 'Carport Demolition', 'Land Clearing'
]

const serviceAreas = [
  'Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle',
  'Kuna', 'Star', 'Garden City', 'Middleton', 'Hidden Springs'
]

const resources = [
  'Free Quote', 'Pricing Guide', 'Service Process', 'FAQ', 'Blog', 'About Us', 'Careers', 'Reviews'
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Asset 5@4x.png"
              alt="Top Shelf Moving and Junk Removal"
              width={200}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Junk Removal Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('junk')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
                <span>Junk Removal</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'junk' && (
                <div className="absolute left-0 top-full mt-2 w-[800px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-6">
                  {junkRemovalItems.map((category) => (
                    <div key={category.name}>
                      <h3 className="font-semibold text-[#1e3a5f] mb-2">{category.name}</h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <Link href="#" className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Moving Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('moving')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
                <span>Moving</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'moving' && (
                <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6">
                  {movingItems.map((category) => (
                    <div key={category.name}>
                      <h3 className="font-semibold text-[#1e3a5f] mb-2">{category.name}</h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <Link href="#" className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Demolition Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('demolition')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
                <span>Demolition</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'demolition' && (
                <div className="absolute left-0 top-full mt-2 w-[400px] bg-white shadow-lg rounded-lg p-6">
                  <ul className="grid grid-cols-2 gap-2">
                    {demolitionItems.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('areas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
                <span>Service Areas</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'areas' && (
                <div className="absolute left-0 top-full mt-2 w-[400px] bg-white shadow-lg rounded-lg p-6">
                  <ul className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area) => (
                      <li key={area}>
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                          {area}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
              Contact
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1e3a5f] transition-colors font-bold">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="space-y-2">
                    {resources.map((resource) => (
                      <li key={resource}>
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                          {resource}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg">
              <a href="tel:6121234567">(612) 123-4567</a>
            </Button>
          </div>

          {/* Mobile CTA Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Button asChild className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-base px-6 py-3">
              <a href="tel:6121234567">Call Now</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-700 hover:text-[#1e3a5f]">Junk Removal</Link>
              <Link href="#" className="text-gray-700 hover:text-[#1e3a5f]">Moving</Link>
              <Link href="#" className="text-gray-700 hover:text-[#1e3a5f]">Demolition</Link>
              <Link href="#" className="text-gray-700 hover:text-[#1e3a5f]">Service Areas</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f]">Contact</Link>
              <Link href="#" className="text-gray-700 hover:text-[#1e3a5f]">Resources</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold w-full">
                  <a href="tel:6121234567">Call Now (612) 123-4567</a>
                </Button>
                <Button asChild className="bg-polar-blue hover:bg-polar-blue/90 text-white font-bold w-full">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
