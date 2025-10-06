import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react'

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
]

const serviceLinks = [
  { name: 'Junk Removal', href: '/services/junk-removal' },
  { name: 'Moving Services', href: '/services/moving' },
  { name: 'Demolition', href: '/services/demolition' },
  { name: 'Commercial Services', href: '/services/commercial' },
  { name: 'Residential Services', href: '/services/residential' },
]

const serviceAreaLinks = [
  { name: 'Boise', href: '/areas/boise' },
  { name: 'Meridian', href: '/areas/meridian' },
  { name: 'Nampa', href: '/areas/nampa' },
  { name: 'Caldwell', href: '/areas/caldwell' },
  { name: 'Eagle', href: '/areas/eagle' },
  { name: 'Kuna', href: '/areas/kuna' },
  { name: 'Star', href: '/areas/star' },
  { name: 'Garden City', href: '/areas/garden-city' },
  { name: 'Middleton', href: '/areas/middleton' },
  { name: 'Hidden Springs', href: '/areas/hidden-springs' },
]

export function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="mb-6 text-white/90">Subscribe to get special offers and tips</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-[#ff6b35] hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreaLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:2085932877"
                    className="text-white/80 hover:text-white transition-colors font-semibold"
                  >
                    (208) 593-2877
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@topshelfpros.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@topshelfpros.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    1755 N Westgate Dr, Suite 110<br />
                    Boise, ID 83704
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    Mon-Sat: 8am - 9pm<br />
                    Sunday: 12pm - 9pm
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Top Shelf Moving and Junk Removal. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
