import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Moving Services',
    description: 'At Top Shelf, our name sets the expectation, and our Boise moving services deliver it—meticulously and reliably. Our professional movers in Boise are handpicked and fully insured, distinguished not only by their skill but also their exceptional customer service. From packing and boxing to the careful disassembly and reassembly of your furniture, we wrap every detail in quality. Our proficient loading and unloading mean your belongings are in safe hands throughout Boise and the Treasure Valley, ensuring a secure transition to your next chapter.',
    image: '/images/moving/residential-moves/Asset-73@4x-1.webp',
    link: '/services/moving',
    buttonText: 'Book Now',
  },
  {
    title: 'Junk Removal',
    description: 'Our Boise junk removal service is designed to efficiently clear out unwanted items, providing relief for homes and businesses throughout the Treasure Valley in a variety of scenarios. From post-renovation debris to estate cleanouts and office space decluttering across Boise, Meridian, and Eagle, we handle a comprehensive range of items, including bulky furniture, electronic waste, and yard refuse. With Top Shelf, discarding the old becomes a hassle-free process, and making room for the new becomes an effortless experience.',
    image: '/images/junk-removal/household-junk-removal/Asset-5-50-1.webp',
    link: '/services/junk-removal',
    buttonText: 'Book Now',
  },
  {
    title: 'Cleanouts',
    description: 'Our Boise cleanout service extends the capabilities of standard junk removal to encompass large-scale projects that require entire spaces to be thoroughly cleared. Ideal for whole home cleanouts in Boise, apartment turnovers, property management needs across the Treasure Valley, and even expansive warehouse clearances, we tackle every nook and cranny to ensure no unwanted item remains. Whether simplifying a move, preparing a Boise property for sale, or restoring order to commercial spaces, our team is equipped to handle cleanouts of any size and scope.',
    image: '/images/junk-removal/cleanout-services/Asset-4-50-1.webp',
    link: '/services/cleanouts',
    buttonText: 'Book Now',
  },
  {
    title: 'Demolition',
    description: 'Our Boise demolition service goes beyond simple teardown by offering safe, targeted removal of structures and features no longer serving your space. From small sheds and decks to concrete pads, patios, playgrounds and entire mobile homes throughout the Treasure Valley, we handle the end-to-end process of utility disconnections, permits, inspections and disposal. Whether you\'re prepping for a renovation in Boise, clearing land for new development, or removing outdated features, our crew is equipped to dismantle and haul away what you no longer need—efficiently and responsibly.',
    image: '/images/demolition/Asset 74@4x.png',
    link: '/services/demolition',
    buttonText: 'Book Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a90e2] uppercase tracking-wider text-sm font-semibold mb-2">
            Solutions Above The Rest
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a5f] mb-4 uppercase drop-shadow-lg">
            Services We Offer The Treasure Valley
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of Southwest Idaho, we provide expert cleanouts, local moving services, and junk removal!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
