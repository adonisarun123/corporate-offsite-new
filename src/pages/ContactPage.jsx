import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Mon-Sat, 9 AM - 8 PM IST"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: ["hello@corporate-offsite.com", "support@corporate-offsite.com"],
    description: "We respond within 2 hours"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    details: ["+91 98765 43210"],
    description: "Instant responses, 24/7"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office",
    details: ["Bangalore, India", "Singapore"],
    description: "Multiple locations across regions"
  }
]

const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 4-6 weeks in advance for domestic destinations and 8-12 weeks for international locations to ensure the best venue availability and rates."
  },
  {
    question: "What's included in your service?",
    answer: "Our end-to-end service includes venue selection, activity planning, transportation, catering coordination, safety protocols, and on-ground facilitation. We handle everything so you can focus on your team."
  },
  {
    question: "Do you handle international offsites?",
    answer: "Yes, we specialize in corporate offsites across India, Southeast Asia (Singapore, Thailand, Indonesia), and GCC regions (Dubai, Abu Dhabi). We have local partnerships in all these destinations."
  },
  {
    question: "What safety measures do you have?",
    answer: "We have comprehensive safety protocols including venue safety audits, activity risk assessments, insurance coverage, emergency response plans, and trained safety coordinators on-site."
  },
  {
    question: "Can you work with our budget?",
    answer: "Absolutely! We work with budgets ranging from ₹3K to ₹50K+ per person. Our negotiated rates with venues typically save clients 15-20% compared to direct bookings."
  },
  {
    question: "How do you measure offsite success?",
    answer: "We provide pre and post-offsite surveys, engagement analytics, team dynamics assessments, and ROI reports to measure the impact of your offsite on team performance and satisfaction."
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to plan an unforgettable offsite? Our experts are here to help you create 
            the perfect team experience. Get a custom proposal in 24 hours.
          </p>
          
          {/* Quick Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Now
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call Us
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-medium text-gray-900">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm 
              title="Get Your Custom Proposal"
              description="Tell us about your team and requirements. We'll create a personalized proposal with venue options, activities, and pricing within 24 hours."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our offsite planning services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Expert
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">24/7 Emergency Support</h3>
          </div>
          <p className="text-xl mb-6 opacity-90">
            During your offsite, our emergency support team is available round-the-clock 
            to handle any urgent situations or last-minute changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Emergency Hotline: +91 98765 00000
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              WhatsApp Emergency: +91 98765 00001
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

