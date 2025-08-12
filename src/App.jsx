import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Phone, MessageCircle, Star, Users, Calendar, Shield, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import VenueCard from './components/VenueCard.jsx'
import ActivityCard from './components/ActivityCard.jsx'
import PackageCard from './components/PackageCard.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
import DestinationsPage from './pages-old/DestinationsPage.jsx'
import DestinationDetailPage from './pages-old/DestinationDetailPage.jsx'
import VenueDetailPage from './pages-old/VenueDetailPage.jsx'
import VenuesPage from './pages-old/VenuesPage.jsx'
import ActivitiesPage from './pages-old/ActivitiesPage.jsx'
import ActivityDetailPage from './pages-old/ActivityDetailPage.jsx'
import PackagesPage from './pages-old/PackagesPage.jsx'
import CaseStudiesPage from './pages-old/CaseStudiesPage.jsx'
import BlogPage from './pages-old/BlogPage.jsx'
import AboutPage from './pages-old/AboutPage.jsx'
import ContactPage from './pages-old/ContactPage.jsx'
import SEO from './components/SEO.jsx'
import { whatsappActions, phoneActions, formActions, trackCTAClick } from './utils/ctaActions.js'
import './App.css'

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
    pros: ["Beach access", "Multiple activity options", "Great food"]
  },
  {
    name: "Taj Dubai",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    rating: 4.9,
    capacity: "300",
    priceRange: "Luxury",
    amenities: ["wifi", "parking", "catering"],
    description: "Iconic luxury hotel with breathtaking views and premium facilities.",
    badge: "Luxury",
    pros: ["World-class facilities", "Iconic location", "Exceptional service"]
  }
]

const sampleActivities = [
  {
    name: "Leadership Challenge Course",
    type: "leadership",
    duration: "4 hours",
    teamSize: "20-50 people",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "Outdoor leadership development program with problem-solving challenges.",
    learningOutcomes: ["Enhanced leadership skills", "Improved decision making", "Team collaboration"],
    difficulty: "medium",
    indoor: false,
    weatherDependent: true
  },
  {
    name: "Innovation Workshop",
    type: "collaboration",
    duration: "6 hours",
    teamSize: "15-30 people",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    description: "Interactive workshop focused on creative thinking and innovation.",
    learningOutcomes: ["Creative problem solving", "Innovation mindset", "Collaborative ideation"],
    difficulty: "easy",
    indoor: true,
    weatherDependent: false
  },
  {
    name: "Wellness Retreat",
    type: "wellness",
    duration: "8 hours",
    teamSize: "10-40 people",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    description: "Comprehensive wellness program including yoga, meditation, and mindfulness.",
    learningOutcomes: ["Stress management", "Work-life balance", "Mindfulness practices"],
    difficulty: "easy",
    indoor: true,
    weatherDependent: false
  }
]

const samplePackages = [
  {
    title: "Bangalore Leadership Intensive",
    theme: "leadership",
    duration: 3,
    cities: ["Bangalore", "Coorg"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    description: "3-day intensive leadership development program in tech capital.",
    inclusions: ["Accommodation", "Meals", "Activities", "Transportation"],
    priceRange: "₹8-12K pp",
    groupSizes: ["50-100"],
    highlights: ["Executive coaching", "Leadership assessments", "Networking sessions"],
    popular: true
  },
  {
    title: "Goa Team Bonding Escape",
    theme: "collaboration",
    duration: 2,
    cities: ["Goa"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Beach-side team building with fun activities and relaxation.",
    inclusions: ["Beach resort", "Water sports", "Team activities", "Meals"],
    priceRange: "₹6-9K pp",
    groupSizes: ["30-80"],
    highlights: ["Beach activities", "Cultural experiences", "Sunset cruise"]
  },
  {
    title: "Singapore Innovation Summit",
    theme: "collaboration",
    duration: 4,
    cities: ["Singapore"],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
    description: "International offsite focused on innovation and global perspectives.",
    inclusions: ["5-star hotel", "Innovation labs", "City tours", "Networking"],
    priceRange: "₹25-35K pp",
    groupSizes: ["20-50"],
    highlights: ["Innovation labs", "Global networking", "Cultural immersion"]
  }
]

const sampleTestimonials = [
  {
    quote: "Corporate-Offsite transformed our annual retreat. The attention to detail and seamless execution exceeded our expectations. Our team came back more motivated than ever.",
    personName: "Priya Sharma",
    role: "HR Director",
    company: "TechCorp India",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
  },
  {
    quote: "The Goa offsite was perfectly planned. Every activity was engaging, and the logistics were flawless. Highly recommend for any company looking for quality team experiences.",
    personName: "Rajesh Kumar",
    role: "CEO",
    company: "StartupXYZ",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "Outstanding service and incredible value. The team handled everything from venue selection to activity coordination. Our Singapore offsite was a huge success.",
    personName: "Sarah Chen",
    role: "Operations Manager",
    company: "Global Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
]

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">Corporate-Offsite</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/destinations" className="text-gray-700 hover:text-primary transition-colors">Destinations</Link>
            <Link to="/venues" className="text-gray-700 hover:text-primary transition-colors">Venues</Link>
            <Link to="/activities" className="text-gray-700 hover:text-primary transition-colors">Activities</Link>
            <Link to="/packages" className="text-gray-700 hover:text-primary transition-colors">Packages</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-primary transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => {
                trackCTAClick('whatsapp_header')
                whatsappActions.general()
              }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => {
                trackCTAClick('call_header')
                phoneActions.general()
              }}
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                trackCTAClick('plan_offsite_header')
                whatsappActions.proposal()
              }}
            >
              Plan My Offsite
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/destinations" className="text-gray-700 hover:text-primary transition-colors">Destinations</Link>
              <Link to="/venues" className="text-gray-700 hover:text-primary transition-colors">Venues</Link>
              <Link to="/activities" className="text-gray-700 hover:text-primary transition-colors">Activities</Link>
              <Link to="/packages" className="text-gray-700 hover:text-primary transition-colors">Packages</Link>
              <Link to="/case-studies" className="text-gray-700 hover:text-primary transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 justify-center"
                  onClick={() => {
                    trackCTAClick('whatsapp_mobile_menu')
                    whatsappActions.general()
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 justify-center"
                  onClick={() => {
                    trackCTAClick('call_mobile_menu')
                    phoneActions.general()
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    trackCTAClick('plan_offsite_mobile_menu')
                    whatsappActions.proposal()
                  }}
                >
                  Plan My Offsite
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section Component
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
    trackCTAClick('find_venues', `${formData.location}-${formData.teamSize}-${formData.budget}`)
    formActions.handleVenueFinder(formData)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Corporate Team Offsites in<br />
            India & SE Asia—Planned End-to-End
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            From venue shortlist to facilitation and safety—your offsite, fully handled. 
            Expert planning across India, Southeast Asia, and GCC regions with 500+ companies served, 
            4.8★ rating, and average 18% savings on venue costs.
          </p>
          
          {/* Inline Planner */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                >
                  <option>20-50 people</option>
                  <option>50-100 people</option>
                  <option>100-200 people</option>
                  <option>200+ people</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                >
                  <option>Value (₹3-5K pp)</option>
                  <option>Mid (₹5-10K pp)</option>
                  <option>Premium (₹10K+ pp)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi/Gurgaon</option>
                  <option>Goa</option>
                  <option>Singapore</option>
                  <option>Dubai</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 h-12"
                  onClick={handleFindVenues}
                >
                  Find Venues
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Avg. 18% saving vs. rack rates</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>1,000+ participants managed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span>4.8★ NPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Corporate-Offsite Section
function WhySection() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "End-to-End Logistics",
      description: "From venue selection to transportation, catering, and activities—we handle every detail so you can focus on your team."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Negotiated Rates",
      description: "Access to exclusive venue rates and packages. Average 18% savings compared to direct bookings."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety & Risk Management",
      description: "Comprehensive safety protocols, insurance coverage, and risk assessment for all activities and venues."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Measurable Outcomes",
      description: "Track engagement, satisfaction, and team dynamics with our post-offsite analytics and feedback systems."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Corporate-Offsite?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a booking platform—we're your strategic partner in creating transformative team experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Venues Section
function FeaturedVenues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Venues
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked venues that offer the perfect blend of comfort, functionality, and inspiration for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleVenues.map((venue, index) => (
            <VenueCard key={index} venue={venue} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Venues
          </Button>
        </div>
      </div>
    </section>
  )
}

// Featured Activities Section
function FeaturedActivities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Team Building Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engaging activities designed to strengthen team bonds, develop leadership skills, and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore All Activities
          </Button>
        </div>
      </div>
    </section>
  )
}

// Featured Packages Section
function FeaturedPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curated Offsite Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-go packages that combine the best venues, activities, and experiences for different team objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePackages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what companies across India and SE Asia say about their offsite experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>500+ Companies Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>95% Client Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Video Testimonial Section
function VideoTestimonialSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          See How We Transform Teams
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Watch how Corporate-Offsite helped TechCorp India create their most successful team retreat ever.
        </p>
        
        <div className="relative bg-black/20 rounded-2xl overflow-hidden aspect-video max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop" 
            alt="Video testimonial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full p-6">
              <Play className="h-8 w-8" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Download Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Plan Your Next Offsite?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get a custom proposal in 24 hours. Our experts will handle everything from venue selection to activity planning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              trackCTAClick('get_custom_proposal_main')
              whatsappActions.proposal()
            }}
          >
            Get Custom Proposal
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2"
            onClick={() => {
              trackCTAClick('whatsapp_planner_main')
              whatsappActions.planner()
            }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp a Planner
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2"
            onClick={() => {
              trackCTAClick('schedule_call_main')
              phoneActions.scheduleCall()
            }}
          >
            <Phone className="h-5 w-5" />
            Schedule a Call
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-600">
          <p>Free consultation • No commitment • Response within 2 hours</p>
        </div>
      </div>
    </section>
  )
}
function FeaturedDestinations() {
  const destinations = [
    {
      name: "Bangalore",
      country: "India",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop",
      venues: "45+ venues",
      description: "Tech hub with modern resorts and conference facilities",
      badge: "Most Popular"
    },
    {
      name: "Goa",
      country: "India", 
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      venues: "30+ venues",
      description: "Beach resorts perfect for relaxation and team bonding",
      badge: "Beach Paradise"
    },
    {
      name: "Singapore",
      country: "Southeast Asia",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
      venues: "25+ venues",
      description: "World-class facilities in the heart of Asia",
      badge: "Premium"
    },
    {
      name: "Dubai",
      country: "GCC",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      venues: "20+ venues",
      description: "Luxury venues with stunning architecture",
      badge: "Luxury"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing locations across India, Southeast Asia, and GCC for your next corporate offsite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-white">
                  {destination.badge}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{destination.name}</CardTitle>
                    <p className="text-sm text-gray-500">{destination.country}</p>
                  </div>
                  <Badge variant="outline">{destination.venues}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {destination.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}

// Sticky Mobile CTA Bar
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => {
            trackCTAClick('whatsapp_sticky_mobile')
            whatsappActions.general()
          }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => {
            trackCTAClick('call_sticky_mobile')
            phoneActions.general()
          }}
        >
          <Phone className="h-4 w-4" />
          Call
        </Button>
        <Button 
          size="sm" 
          className="flex-1 bg-primary hover:bg-primary/90"
          onClick={() => {
            trackCTAClick('plan_sticky_mobile')
            whatsappActions.proposal()
          }}
        >
          Plan
        </Button>
      </div>
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Corporate-Offsite</h3>
            <p className="text-gray-400 mb-4">
              Corporate team offsites planned end-to-end across India, Southeast Asia, and GCC regions.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">India</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Southeast Asia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GCC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">All Destinations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Venue Selection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Activity Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Corporate-Offsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Homepage Structured Data
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Corporate Offsite Experts",
  "description": "Premium corporate offsite planning and team building solutions across India & Southeast Asia",
  "url": "https://corporate-offsite-experts.com",
  "logo": "https://corporate-offsite-experts.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "customer service",
    "areaServed": ["IN", "SG", "MY", "TH", "AE"],
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/corporateoffsiteexperts",
    "https://www.linkedin.com/company/corporate-offsite-experts",
    "https://www.instagram.com/corporateoffsiteexperts"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MG Road",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "description": "Corporate offsite planning and team building services",
    "priceRange": "₹₹₹"
  }
}

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <Routes>
            <Route path="/" element={
              <main>
                <SEO
                  title="Corporate Offsite Experts - Premium Team Building & Retreat Solutions"
                  description="Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia. Get your custom proposal today!"
                  keywords="corporate offsite, team building, corporate retreat, venue booking, event planning, team activities, leadership training, corporate events, India, Southeast Asia, Bangalore, Mumbai, Goa, Singapore"
                  image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop"
                  url="/"
                  structuredData={homepageStructuredData}
                />
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
            } />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/destinations/:destinationSlug/venues/:venueSlug" element={<VenueDetailPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:slug" element={<ActivityDetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App

