'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function MapSection() {
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
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-[#1e3a5f]">Find Us</span>
        </h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-700">1755 N Westgate Dr, Suite 110</p>
                <p className="text-gray-700">Boise, ID 83704</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a href="tel:2085932877" className="text-[#4a90e2] hover:text-[#1e3a5f] font-semibold text-lg transition-colors">
                  (208) 593-2877
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a href="mailto:info@topshelfpros.com" className="text-[#4a90e2] hover:text-[#1e3a5f] transition-colors">
                  info@topshelfpros.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                <p className="text-gray-700">Monday - Saturday: 8:00 AM - 9:00 PM</p>
                <p className="text-gray-700">Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p>• Boise</p>
                <p>• Meridian</p>
                <p>• Nampa</p>
                <p>• Caldwell</p>
                <p>• Eagle</p>
                <p>• Kuna</p>
                <p>• Star</p>
                <p>• Garden City</p>
                <p>• Middleton</p>
                <p>• Hidden Springs</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92647.77707890917!2d-116.35150742089844!3d43.61587089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54afb743a3dbadcf%3A0x49294a82f4d6f1b9!2sTop%20Shelf%20Moving%20and%20Junk%20Removal!5e0!3m2!1sen!2sus!4v1696000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Top Shelf Moving and Junk Removal Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
