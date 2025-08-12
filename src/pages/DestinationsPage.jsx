import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { MapPin, Star, Users, Calendar, Thermometer, Plane } from 'lucide-react'

const destinations = [
  {
    name: "Bangalore",
    country: "India",
    region: "South India",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&h=400&fit=crop",
    venues: 45,
    description: "India's Silicon Valley offers modern conference facilities, tech-savvy venues, and excellent connectivity.",
    highlights: ["Tech hub atmosphere", "Modern facilities", "Great connectivity", "Pleasant weather"],
    bestTime: "Oct-Mar",
    gettingThere: "2 hours from airport to venues",
    budget: "₹5-15K pp",
    teamSizes: ["20-200"],
    activities: ["Leadership workshops", "Innovation labs", "City tours", "Team challenges"],
    badge: "Most Popular"
  },
  {
    name: "Goa",
    country: "India", 
    region: "West India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
    venues: 30,
    description: "Beach paradise perfect for relaxation-focused offsites with water sports and cultural experiences.",
    highlights: ["Beach venues", "Water activities", "Relaxed atmosphere", "Cultural experiences"],
    bestTime: "Nov-Mar",
    gettingThere: "1 hour from airport to venues",
    budget: "₹6-12K pp",
    teamSizes: ["15-150"],
    activities: ["Beach sports", "Cultural tours", "Wellness sessions", "Water activities"],
    badge: "Beach Paradise"
  },
  {
    name: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop",
    venues: 25,
    description: "World-class facilities in Asia's business hub with multicultural experiences and innovation focus.",
    highlights: ["World-class venues", "Multicultural", "Innovation hub", "Easy accessibility"],
    bestTime: "Year-round",
    gettingThere: "30 mins from airport to venues",
    budget: "₹25-40K pp",
    teamSizes: ["20-100"],
    activities: ["Innovation workshops", "Cultural immersion", "Business networking", "City exploration"],
    badge: "Premium"
  },
  {
    name: "Dubai",
    country: "UAE",
    region: "GCC",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    venues: 20,
    description: "Luxury venues with stunning architecture and world-class hospitality in the heart of the Middle East.",
    highlights: ["Luxury venues", "Iconic architecture", "World-class service", "Strategic location"],
    bestTime: "Nov-Apr",
    gettingThere: "45 mins from airport to venues",
    budget: "₹30-50K pp",
    teamSizes: ["25-200"],
    activities: ["Leadership retreats", "Luxury experiences", "Cultural tours", "Desert adventures"],
    badge: "Luxury"
  },
  {
    name: "Mumbai",
    country: "India",
    region: "West India", 
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
    venues: 35,
    description: "Financial capital with business-focused venues and vibrant city energy for dynamic team experiences.",
    highlights: ["Business hub", "Vibrant energy", "Excellent venues", "Great connectivity"],
    bestTime: "Oct-Mar",
    gettingThere: "1.5 hours from airport to venues",
    budget: "₹7-18K pp",
    teamSizes: ["30-250"],
    activities: ["Business simulations", "City experiences", "Networking events", "Cultural immersion"],
    badge: "Business Hub"
  },
  {
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
    venues: 18,
    description: "Tropical paradise combining wellness, culture, and team bonding in stunning natural settings.",
    highlights: ["Tropical setting", "Wellness focus", "Cultural richness", "Unique experiences"],
    bestTime: "Apr-Oct",
    gettingThere: "1 hour from airport to venues",
    budget: "₹20-35K pp",
    teamSizes: ["15-80"],
    activities: ["Wellness retreats", "Cultural workshops", "Adventure activities", "Team bonding"],
    badge: "Wellness Paradise"
  }
]

function DestinationCard({ destination }) {
  const badgeColors = {
    "Most Popular": "bg-blue-100 text-blue-800",
    "Beach Paradise": "bg-teal-100 text-teal-800", 
    "Premium": "bg-purple-100 text-purple-800",
    "Luxury": "bg-amber-100 text-amber-800",
    "Business Hub": "bg-gray-100 text-gray-800",
    "Wellness Paradise": "bg-green-100 text-green-800"
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-4 left-4 ${badgeColors[destination.badge] || 'bg-gray-100 text-gray-800'}`}>
          {destination.badge}
        </Badge>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">{destination.venues} venues</span>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              {destination.name}
            </CardTitle>
            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{destination.region}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-primary border-primary">
            {destination.budget}
          </Badge>
        </div>
        <CardDescription className="text-gray-600 mt-3">
          {destination.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Best: {destination.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="h-4 w-4" />
            <span>{destination.teamSizes.join(', ')} people</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Plane className="h-4 w-4" />
            <span>{destination.gettingThere}</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Popular Activities:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {destination.activities.slice(0, 3).map((activity, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Explore {destination.name}
          </Button>
          <Button variant="outline" className="flex-1">
            View Venues
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Offsite Destinations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover amazing locations across India, Southeast Asia, and GCC regions perfect for your next corporate offsite.
          </p>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="bg-white">All Destinations</Button>
            <Button variant="outline" className="bg-white">India</Button>
            <Button variant="outline" className="bg-white">Southeast Asia</Button>
            <Button variant="outline" className="bg-white">GCC</Button>
            <Button variant="outline" className="bg-white">Beach</Button>
            <Button variant="outline" className="bg-white">City</Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find Your Ideal Destination?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We work with venues across 50+ destinations. Let us know your requirements and we'll find the perfect location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Custom Location
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

