// src/pages/activities/+Page.jsx
import { SITE } from '../../lib/config'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Users, Target, Clock, Award } from 'lucide-react'
import { activities } from '../../data/activities.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Link } from 'react-router-dom'

export { Page }

const activitiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": activities.map((activity, index) => ({
    "@type": "Event",
    "position": index + 1,
    "name": activity.name,
    "description": activity.description,
    "image": activity.image,
    "duration": activity.duration,
    "organizer": {
      "@type": "Organization",
      "name": SITE.name
    },
    "offers": {
      "@type": "Offer",
      "price": activity.price,
      "priceCurrency": "INR"
    }
  }))
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.activities.title}
        description={SITE.meta.pages.activities.description}
        canonical="/activities"
        image={SITE.meta.defaultImage}
        keywords="team building activities, corporate training, leadership workshops, adventure activities, team bonding"
        schemaMarkup={activitiesStructuredData}
      />
      
      <main>
        <ActivitiesHero />
        <ActivityCategories />
        <ActivityList />
        <ActivityOutcomes />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}