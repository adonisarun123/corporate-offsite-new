// src/pages/about/+Page.jsx
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { whatsappActions, phoneActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Users, Target, Award, Shield, Globe, Heart, Clock, Briefcase, TrendingUp, Star } from 'lucide-react'

export { Page }

const stats = [
  { number: "500+", label: "Companies Served", icon: Briefcase },
  { number: "10,000+", label: "Participants", icon: Users },
  { number: "50+", label: "Destinations", icon: Globe },
  { number: "4.8/5", label: "Client Rating", icon: Star }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every offsite is designed with clear objectives and measurable outcomes"
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our priority. We go above and beyond for every client"
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Verified venues, insured events, and comprehensive safety protocols"
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly evolving our offerings with latest trends and technologies"
  }
]

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    experience: "15+ years in corporate events"
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    experience: "12+ years in hospitality"
  },
  {
    name: "Anita Desai",
    role: "Chief Experience Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    experience: "10+ years in team building"
  },
  {
    name: "Vikram Singh",
    role: "Director of Partnerships",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "8+ years in business development"
  }
]

const milestones = [
  { year: "2015", event: "Company founded with a vision to transform corporate offsites" },
  { year: "2017", event: "Expanded to 10 destinations across India" },
  { year: "2019", event: "Launched international destinations in SE Asia" },
  { year: "2021", event: "Served 100th corporate client milestone" },
  { year: "2023", event: "Introduced AI-powered venue matching" },
  { year: "2024", event: "500+ companies served across 50+ destinations" }
]

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title="About Us - Corporate Offsite Experts"
        description="Learn about Corporate Offsite Experts - India's leading corporate retreat planning company. 500+ companies served, 50+ destinations, and a team dedicated to creating exceptional offsite experiences."
        canonical="/about"
        keywords="about corporate offsite experts, team retreat company, corporate event planners, offsite planning company, about us"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Corporate Offsite Experts",
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
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Teams Through 
              <span className="block text-yellow-300">Exceptional Offsites</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Since 2015, we've been India's trusted partner for corporate retreats, 
              helping companies create meaningful experiences that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => {
                  trackCTAClick('our_story_hero')
                  document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Our Story
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => {
                  trackCTAClick('meet_team_hero')
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-gray-600 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <Badge className="text-sm">Founded in 2015</Badge>
          </div>

          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Corporate Offsite Experts was born from a simple observation: most corporate retreats 
              fail to deliver meaningful results. Our founder, Priya Sharma, experienced this firsthand 
              during her tenure at leading tech companies.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              What started as a mission to create better offsite experiences for a handful of companies 
              has grown into India's most trusted corporate retreat planning service. Today, we work 
              with Fortune 500 companies, fast-growing startups, and everything in between.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our success comes from a simple philosophy: every offsite should be transformational, 
              not transactional. We don't just book venues and activities – we craft experiences 
              that align with your business objectives and create lasting impact.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-gray-700">
              "We believe that when teams step away from their daily routine and come together 
              in inspiring settings, magic happens. Our role is to create the perfect environment 
              for that magic."
              <cite className="block text-sm mt-2 not-italic">– Priya Sharma, Founder & CEO</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your exceptional offsites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-8 -ml-6">
                  <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies who trust us with their most important team experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                trackCTAClick('start_planning_about')
                whatsappActions.proposal()
              }}
            >
              Start Planning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('schedule_call_about')
                phoneActions.scheduleCall()
              }}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </LayoutDefault>
  )
}
