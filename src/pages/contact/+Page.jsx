// src/pages/contact/+Page.jsx
import { SITE } from '../../lib/config'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '../../components/ContactForm.jsx'
import { whatsappActions, phoneActions } from '../../utils/ctaActions.js'

export { Page }

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": SITE.name,
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": ["IN", "SG", "AE"],
      "availableLanguage": ["English", "Hindi"]
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka",
      "addressLocality": "Bangalore"
    }
  }
}

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title={SITE.meta.pages.contact.title}
        description={SITE.meta.pages.contact.description}
        canonical="/contact"
        image={SITE.meta.defaultImage}
        keywords="contact corporate offsite experts, offsite planning contact, event planning inquiry"
        schemaMarkup={contactStructuredData}
      />
      
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <FAQSection />
        <MapSection />
      </main>
    </LayoutDefault>
  )
}