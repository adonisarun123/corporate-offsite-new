// src/pages/packages/+Page.jsx
import { SITE } from '../../lib/config'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Package, Users, Calendar, Clock } from 'lucide-react'
import { packages } from '../../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'

export { Page }

const packagesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": packages.map((pkg, index) => ({
    "@type": "Product",
    "position": index + 1,
    "name": pkg.name,
    "description": pkg.description,
    "image": pkg.image,
    "offers": {
      "@type": "Offer",
      "price": pkg.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "brand": {
      "@type": "Brand",
      "name": SITE.name
    }
  }))
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title="Corporate Offsite Packages & Team Building Programs"
        description="All-inclusive corporate offsite packages with accommodation, activities, and logistics. Customizable programs for teams of all sizes."
        canonical="/packages"
        image={SITE.meta.defaultImage}
        keywords="corporate packages, team building programs, offsite packages, all-inclusive retreats"
        schemaMarkup={packagesStructuredData}
      />
      
      <main>
        <PackagesHero />
        <PackageCategories />
        <PackageList />
        <CustomPackages />
        <CTASection />
      </main>
    </LayoutDefault>
  )
}