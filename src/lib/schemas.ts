import { SITE } from './config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.siteUrl,
    logo: `${SITE.siteUrl}/logo.png`,
    description: SITE.brand.description,
    sameAs: [
      'https://twitter.com/corporateoffsite',
      'https://www.linkedin.com/company/corporate-offsite-experts',
      'https://www.facebook.com/corporateoffsiteexperts',
    ],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.siteUrl,
    description: SITE.meta.defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getVenueSchema(venue: {
  name: string;
  description: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  priceRange: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: venue.name,
    description: venue.description,
    image: venue.image,
    address: {
      '@type': 'PostalAddress',
      ...venue.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: venue.geo.latitude,
      longitude: venue.geo.longitude,
    },
    telephone: venue.telephone,
    priceRange: venue.priceRange,
  };
}

export function getActivitySchema(activity: {
  name: string;
  description: string;
  image: string;
  duration: string;
  provider: string;
  price: number;
  priceCurrency: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: activity.name,
    description: activity.description,
    image: activity.image,
    duration: activity.duration,
    organizer: {
      '@type': 'Organization',
      name: activity.provider,
    },
    offers: {
      '@type': 'Offer',
      price: activity.price,
      priceCurrency: activity.priceCurrency,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}
