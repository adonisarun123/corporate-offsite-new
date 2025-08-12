// src/pages/contact/+Page.jsx
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { whatsappActions, phoneActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar, Users, Building } from 'lucide-react'

export { Page }

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    action: "Call Now",
    details: "+91 98765 43210",
    onClick: () => {
      trackCTAClick('call_contact_page')
      phoneActions.general()
    }
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses, easy communication",
    action: "Chat on WhatsApp",
    details: "Available 24/7",
    onClick: () => {
      trackCTAClick('whatsapp_contact_page')
      whatsappActions.general()
    }
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries",
    action: "Send Email",
    details: "hello@corporateoffsite.com",
    onClick: () => {
      trackCTAClick('email_contact_page')
      window.location.href = 'mailto:hello@corporateoffsite.com'
    }
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation slot",
    action: "Book Time",
    details: "30-min consultation",
    onClick: () => {
      trackCTAClick('schedule_meeting_contact')
      phoneActions.scheduleCall()
    }
  }
]

const offices = [
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    phone: "+91 22 1234 5678"
  },
  {
    city: "Bangalore",
    address: "Koramangala, Bangalore, Karnataka 560034",
    phone: "+91 80 1234 5678"
  },
  {
    city: "Delhi NCR",
    address: "Cyber City, Gurugram, Haryana 122002",
    phone: "+91 124 1234 5678"
  }
]

const faqs = [
  {
    question: "How far in advance should I plan my corporate offsite?",
    answer: "We recommend planning at least 6-8 weeks in advance for the best venue availability and rates. However, we can accommodate urgent requests with as little as 2 weeks notice."
  },
  {
    question: "What's included in your offsite planning services?",
    answer: "Our comprehensive service includes venue selection, activity planning, logistics coordination, vendor management, on-ground support, and post-event reporting."
  },
  {
    question: "Do you handle international offsites?",
    answer: "Yes! We organize offsites in Singapore, Dubai, Thailand, Bali, Vietnam, and other popular international destinations."
  },
  {
    question: "What's your typical pricing structure?",
    answer: "We offer transparent pricing with no hidden costs. Our fees are typically 10-15% of the total offsite budget, or we can work on a fixed-fee basis."
  }
]

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title="Contact Us - Corporate Offsite Experts"
        description="Get in touch with Corporate Offsite Experts. Call, WhatsApp, or fill out our form for a free consultation. Available 24/7 to help plan your perfect corporate retreat."
        canonical="/contact"
        keywords="contact corporate offsite experts, offsite planning inquiry, corporate retreat consultation, contact us"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Corporate Offsite Experts",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": ["IN", "SG", "AE", "TH", "ID", "VN"]
            },
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400051",
                "addressCountry": "IN"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Plan Your Perfect Offsite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is ready to help you create an exceptional experience. 
            Reach out through your preferred channel - we typically respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={method.onClick}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                    <p className="text-sm font-medium text-primary mb-3">{method.details}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us Your Requirements</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you with a customized proposal 
                within 24 hours.
              </p>
              
              {/* Quick Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-sm text-gray-600">Average response within 2 hours during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Expert Team</p>
                    <p className="text-sm text-gray-600">50+ event specialists ready to assist you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Pan-India Presence</p>
                    <p className="text-sm text-gray-600">Local teams in major cities for on-ground support</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available Now</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>500+ Companies Served</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>4.8★ Rating</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at any of our locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-sm text-primary font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common queries</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <Button 
              onClick={() => {
                trackCTAClick('more_questions_faq')
                whatsappActions.general('I have some questions about your services')
              }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your offsite requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-green-600 hover:bg-white/90"
              onClick={() => {
                trackCTAClick('get_proposal_contact_cta')
                whatsappActions.proposal()
              }}
            >
              Get Free Proposal
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => {
                trackCTAClick('instant_support_contact')
                whatsappActions.general()
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Instant Support
            </Button>
          </div>
        </div>
      </section>
    </LayoutDefault>
  )
}
