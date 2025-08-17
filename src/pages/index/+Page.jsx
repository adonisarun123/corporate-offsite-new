// src/pages/index/+Page.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../../lib/config'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Phone, MessageCircle, Star, Users, Calendar, Shield, Award, Play } from 'lucide-react'
import VenueCard from '../../components/VenueCard.jsx'
import ActivityCard from '../../components/ActivityCard.jsx'
import PackageCard from '../../components/PackageCard.jsx'
import TestimonialCard from '../../components/TestimonialCard.jsx'
import { whatsappActions, phoneActions, formActions, trackCTAClick } from '../../utils/ctaActions.js'

export { Page }

// Structured data for homepage
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE.name,
  "url": SITE.siteUrl,
  "logo": `${SITE.siteUrl}/logo.png`,
  "description": SITE.brand.description,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/corporate-offsite-experts",
    "https://twitter.com/corporateoffsite"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  },
  "areaServed": [
    {"@type": "Country", "name": "India"},
    {"@type": "Country", "name": "Singapore"}, 
    {"@type": "Country", "name": "United Arab Emirates"}
  ],
  "serviceType": "Corporate Event Planning",
  "priceRange": "₹₹₹"
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.home.title}
        description={SITE.meta.pages.home.description}
        canonical="/"
        image={SITE.meta.defaultImage}
        keywords={SITE.meta.defaultKeywords}
        schemaMarkup={homepageStructuredData}
      />
      
      <main>
        <HeroSection />
        <WhySection />
        <FeaturedDestinations />
        <FeaturedVenues />
        <FeaturedActivities />
        <FeaturedPackages />
        <TestimonialsSection />
        <VideoTestimonialSection />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}