// src/pages/about/+Page.jsx
import { SITE } from '../../lib/config'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { whatsappActions, phoneActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Users, Target, Award, Shield, Globe, Heart, Clock, Briefcase, TrendingUp, Star } from 'lucide-react'

export { Page }

const aboutStructuredData = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
    "name": SITE.name,
            "description": "India's leading corporate retreat planning company",
            "foundingDate": "2015",
            "founders": [{
              "@type": "Person",
              "name": "Priya Sharma"
            }],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 50
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500"
            }
          }
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.about.title}
        description={SITE.meta.pages.about.description}
        canonical="/about"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop"
        keywords="about corporate offsite experts, team retreat company, corporate event planners, offsite planning company, about us"
        schemaMarkup={aboutStructuredData}
      />
      
      <main>
        <AboutHeroSection />
        <StatsSection />
        <ValuesSection />
        <TeamSection />
        <TimelineSection />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}