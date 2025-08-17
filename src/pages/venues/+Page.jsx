// src/pages/venues/+Page.jsx
import { SITE } from '../../lib/config'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { MapPin, Star, Users, Calendar, Building } from 'lucide-react'
import { venues } from '../../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Link } from 'react-router-dom'

export { Page }

const venuesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": venues.map((venue, index) => ({
    "@type": "Hotel",
    "position": index + 1,
    "name": venue.name,
    "description": venue.description,
    "image": venue.image,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": venue.country,
      "addressRegion": venue.region,
      "addressLocality": venue.city
    },
    "amenityFeature": venue.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity
    }))
  }))
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.venues.title}
        description={SITE.meta.pages.venues.description}
        canonical="/venues"
        image={SITE.meta.defaultImage}
        keywords="corporate venues, offsite locations, business hotels, retreat centers, conference venues"
        schemaMarkup={venuesStructuredData}
      />
      
      <main>
        <VenuesHero />
        <VenueFilters />
        <VenuesList />
        <VenueAmenities />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}