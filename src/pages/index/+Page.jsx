// src/pages/index/+Page.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Phone, MessageCircle, Star, Users, Calendar, Shield, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react'
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
  "name": "Corporate Offsite Experts",
  "url": "https://corporate-offsite-experts.com",
  "logo": "https://corporate-offsite-experts.com/logo.png",
  "description": "Expert corporate team offsite planning across India, Southeast Asia, and GCC regions",
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

// Sample Data
const sampleVenues = [
  {
    name: "The Leela Palace Bangalore",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 4.8,
    capacity: "200",
    priceRange: "Premium",
    amenities: ["wifi", "parking", "catering"],
    description: "Luxury hotel with world-class conference facilities and stunning city views.",
    badge: "Premium",
    pros: ["Excellent service", "Modern AV equipment", "Central location"]
  },
  {
    name: "Club Mahindra Goa",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.6,
    capacity: "150",
    priceRange: "Mid-range",
    amenities: ["wifi", "parking", "catering", "coffee"],
    description: "Beachside resort perfect for team bonding and relaxation activities.",
    badge: "Beach Resort",
    pros: ["Beach access", "Team building spaces", "Outdoor activities"]
  },
  {
    name: "The Taj Mahal Palace Mumbai",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    rating: 4.9,
    capacity: "300",
    priceRange: "Premium",
    amenities: ["wifi", "parking", "catering"],
    description: "Iconic luxury hotel with heritage charm and modern business facilities.",
    badge: "Heritage",
    pros: ["Historic venue", "Premium location", "Exceptional service"]
  }
]

const sampleActivities = [
  {
    name: "Leadership Challenge Course",
    type: "Team Building",
    duration: "4 hours",
    teamSize: "10-50",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "High-impact outdoor challenges designed to develop leadership skills and team cohesion.",
    difficulty: "Medium",
    indoor: false,
    weatherDependent: true
  },
  {
    name: "Innovation Workshop",
    type: "Skill Development",
    duration: "6 hours",
    teamSize: "15-30",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
    description: "Interactive sessions focused on creative thinking and innovation methodologies.",
    difficulty: "Easy",
    indoor: true,
    weatherDependent: false
  },
  {
    name: "Adventure Leadership",
    type: "Outdoor",
    duration: "8 hours",
    teamSize: "20-40",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    description: "Outdoor adventure activities combined with leadership development exercises.",
    difficulty: "High",
    indoor: false,
    weatherDependent: true
  }
]

const samplePackages = [
  {
    name: "Executive Retreat",
    duration: "2-3 days",
    teamSize: "15-25",
    price: "₹15,000 per person",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    includes: ["Luxury accommodation", "All meals", "Team activities", "Transportation"],
    description: "Premium offsite experience for senior leadership teams.",
    popular: true
  },
  {
    name: "Team Building Special",
    duration: "1-2 days",
    teamSize: "20-50",
    price: "₹8,000 per person",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    includes: ["Resort stay", "Team activities", "Meals", "Facilitation"],
    description: "Perfect for building stronger team relationships and communication.",
    popular: false
  },
  {
    name: "Innovation Summit",
    duration: "2-4 days",
    teamSize: "30-100",
    price: "₹12,000 per person",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    includes: ["Conference facilities", "Innovation workshops", "Networking", "Tech setup"],
    description: "Focus on creativity, innovation, and future planning.",
    popular: true
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Tech Solutions Inc",
    role: "HR Director",
    content: "Outstanding service! The team handled every detail of our 50-person offsite in Goa. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b13c?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rajesh Kumar",
    company: "Financial Services Ltd",
    role: "Team Lead",
    content: "Professional approach and excellent venue selection. Our team loved the activities in Bangalore.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Anita Desai",
    company: "Marketing Agency",
    role: "CEO",
    content: "Seamless planning and execution. The Singapore offsite exceeded all our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title="Corporate Offsite Experts - Premium Team Building & Retreat Solutions"
        description="Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia. Get your custom proposal today!"
        canonical="/"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop"
        keywords="corporate offsite, team building, corporate retreat, venue booking, event planning, team activities, leadership training, corporate events, India, Southeast Asia, Bangalore, Mumbai, Goa, Singapore"
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

function HeroSection() {
  const [formData, setFormData] = useState({
    teamSize: '20-50 people',
    budget: 'Value (₹3-5K pp)',
    location: 'Bangalore'
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFindVenues = () => {
    trackCTAClick('find_venues_hero', `${formData.teamSize}, ${formData.budget}, ${formData.location}`)
    formActions.handleVenueFinder(formData)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plan <span className="text-primary">Unforgettable</span> Corporate Offsites
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Expert team offsite planning across India, Southeast Asia, and GCC regions. 
              End-to-end logistics, negotiated rates, safety protocols, and measurable outcomes.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">500+ companies served</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">4.8★</span>
                <span className="text-sm text-gray-600">rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                onClick={() => {
                  trackCTAClick('get_proposal_hero')
                  whatsappActions.proposal()
                }}
              >
                Get Free Proposal
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 text-lg px-8 py-4"
                onClick={() => {
                  trackCTAClick('call_expert_hero')
                  phoneActions.scheduleCall()
                }}
              >
                <Phone className="h-5 w-5" />
                Call Expert
              </Button>
            </div>
          </div>

          {/* Quick Venue Finder */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Perfect Venues</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                >
                  <option>10-20 people</option>
                  <option>20-50 people</option>
                  <option>50-100 people</option>
                  <option>100+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                >
                  <option>Budget (₹2-3K pp)</option>
                  <option>Value (₹3-5K pp)</option>
                  <option>Premium (₹5-8K pp)</option>
                  <option>Luxury (₹8K+ pp)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                  <option>Goa</option>
                  <option>Kerala</option>
                  <option>Singapore</option>
                  <option>Dubai</option>
                </select>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 mt-6"
                onClick={handleFindVenues}
              >
                Find Venues & Get Quotes
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              Get instant venue recommendations and pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Safe & Secure",
      description: "Comprehensive safety protocols and fully insured events"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Planning Team",
      description: "Dedicated event managers with 10+ years experience"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Best Price Guarantee",
      description: "Negotiated rates and transparent pricing with no hidden costs"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "End-to-End Service",
      description: "From venue selection to post-event analytics"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why 500+ Companies Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've perfected the art of corporate offsite planning through years of experience 
            and thousands of successful events across multiple countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedDestinations() {
  const destinations = [
    {
      name: "Bangalore",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop",
      venues: "25+ venues",
      distance: "Tech Hub",
      description: "Perfect for tech companies with world-class venues"
    },
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      venues: "30+ venues", 
      distance: "Beach Paradise",
      description: "Beachside locations ideal for relaxation and team bonding"
    },
    {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&h=300&fit=crop",
      venues: "15+ venues",
      distance: "International",
      description: "Premium international destination for global teams"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover amazing locations for your next corporate offsite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link key={index} to={`/destinations/${destination.name.toLowerCase()}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                    <Badge variant="secondary">{destination.distance}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{destination.venues}</p>
                  <p className="text-gray-700">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" size="lg" className="bg-white">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeaturedVenues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Venues
          </h2>
          <p className="text-xl text-gray-600">
            Hand-picked venues that guarantee an exceptional offsite experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleVenues.map((venue, index) => (
            <VenueCard key={index} venue={venue} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/venues">
            <Button variant="outline" size="lg">
              Explore All Venues
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeaturedActivities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Team Building Activities
          </h2>
          <p className="text-xl text-gray-600">
            Engaging activities designed to strengthen your team and boost performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/activities">
            <Button variant="outline" size="lg" className="bg-white">
              View All Activities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeaturedPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Curated Packages
          </h2>
          <p className="text-xl text-gray-600">
            Ready-to-book packages designed for different team goals and budgets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samplePackages.map((package_, index) => (
            <PackageCard key={index} package_={package_} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages">
            <Button variant="outline" size="lg">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from companies that trust us with their corporate events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoTestimonialSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          See What Our Clients Are Saying
        </h2>
        
        <div className="relative aspect-video bg-black/20 rounded-2xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=450&fit=crop" 
            alt="Video testimonial" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full w-20 h-20 p-0"
              onClick={() => {
                trackCTAClick('play_video_testimonial')
                // Handle video play
              }}
            >
              <Play className="h-8 w-8 ml-1" />
            </Button>
          </div>
        </div>
        
        <p className="text-xl opacity-90">
          Watch how we transformed team dynamics for a 200+ person tech company
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Plan Your Next Offsite?
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Get a custom proposal with venues, activities, and pricing tailored to your team
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => {
              trackCTAClick('get_proposal_cta')
              whatsappActions.proposal()
            }}
          >
            Get Free Proposal
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            onClick={() => {
              trackCTAClick('call_now_cta')
              phoneActions.general()
            }}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </Button>
        </div>
        
        <p className="text-sm opacity-75 mt-6">
          Response within 2 hours • No commitment required
        </p>
      </div>
    </section>
  )
}
