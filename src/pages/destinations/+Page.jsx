// src/pages/destinations/+Page.jsx
import { SITE } from '../../lib/config'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { MapPin, Star, Users, Calendar, Thermometer, Plane } from 'lucide-react'
import { destinations } from '../../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Link } from 'react-router-dom'

export { Page }

const destinationsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": destinations.map((destination, index) => ({
    "@type": "Place",
    "position": index + 1,
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": destination.country
    }
  }))
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.destinations.title}
        description={SITE.meta.pages.destinations.description}
        canonical="/destinations"
        image={SITE.meta.defaultImage}
        keywords="corporate offsite destinations, team retreat locations, India offsite venues, Southeast Asia corporate travel"
        schemaMarkup={destinationsStructuredData}
      />
      
      <main>
        <DestinationsHero />
        <DestinationsList />
        <PopularVenues />
        <DestinationGuide />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}