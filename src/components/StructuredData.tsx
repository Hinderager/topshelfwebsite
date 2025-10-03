export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Top Shelf Moving and Junk Removal',
    image: 'https://topshelfmoving.com/logos/full.png',
    '@id': 'https://topshelfmoving.com',
    url: 'https://topshelfmoving.com',
    telephone: '+16121234567',
    priceRange: '$129-$599',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boise',
      addressLocality: 'Boise',
      addressRegion: 'ID',
      postalCode: '83702',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6150,
      longitude: -116.2023,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/topshelfmoving',
      'https://www.instagram.com/topshelfmoving',
      'https://www.linkedin.com/company/topshelfmoving',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Boise',
      },
      {
        '@type': 'City',
        name: 'Meridian',
      },
      {
        '@type': 'City',
        name: 'Nampa',
      },
      {
        '@type': 'City',
        name: 'Caldwell',
      },
      {
        '@type': 'City',
        name: 'Eagle',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
    service: [
      {
        '@type': 'Service',
        name: 'Junk Removal',
        description: 'Professional junk removal services for residential and commercial properties',
      },
      {
        '@type': 'Service',
        name: 'Moving Services',
        description: 'Full-service moving for residential and commercial relocations',
      },
      {
        '@type': 'Service',
        name: 'Demolition',
        description: 'Safe and efficient demolition services',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
