import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { MapPin, Star, Users, Calendar, Thermometer, Plane } from 'lucide-react'
import { destinations } from '../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../utils/ctaActions.js'
import { Link } from 'react-router-dom'

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
            Discover amazing locations across India, Southeast Asia, and GCC for your next corporate offsite. 
            Each destination offers unique experiences tailored for team building and business growth.
          </p>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From India's diverse landscapes to Southeast Asia's tropical beauty and GCC's luxury offerings
            </p>
          </div>

          {/* India Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              India
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.filter(dest => dest.country === 'India').map((destination, index) => (
                <DestinationCard key={index} destination={destination} />
              ))}
            </div>
          </div>

          {/* Southeast Asia Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Southeast Asia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.filter(dest => dest.region === 'Southeast Asia').map((destination, index) => (
                <DestinationCard key={index} destination={destination} />
              ))}
            </div>
          </div>

          {/* GCC Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              GCC Region
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.filter(dest => dest.region === 'GCC').map((destination, index) => (
                <DestinationCard key={index} destination={destination} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose These Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why These Destinations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each destination is carefully selected for its unique advantages in corporate team building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Curated Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Each location offers unique cultural, adventure, and business experiences that create 
                  lasting team memories and stronger bonds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All destinations are well-connected with major airports and offer convenient transportation 
                  to venues, minimizing travel complexity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  These destinations have hosted successful corporate offsites for 500+ companies, 
                  with consistently high satisfaction ratings.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Choose Your Destination?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our destination experts help you select the perfect location based on your team's objectives, 
            budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                trackCTAClick('destination_consultation')
                whatsappActions.general('I need help choosing the perfect destination for our corporate offsite. Can you provide recommendations based on our requirements?')
              }}
            >
              Get Destination Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('compare_destinations')
                whatsappActions.general('I\'d like to compare different destinations for our team offsite. Can you help me understand the pros and cons of each location?')
              }}
            >
              Compare Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function DestinationCard({ destination }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {destination.badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {destination.badge}
          </Badge>
        )}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="text-sm font-semibold text-gray-900">
            {destination.venues?.length || 0}+ venues
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {destination.name}
            </CardTitle>
            <div className="flex items-center gap-1 text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{destination.country}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600">
          {destination.description}
        </CardDescription>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Best time: {destination.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>Budget: {destination.budget}</span>
          </div>
        </div>
        
        {destination.highlights && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">Highlights:</h4>
            <div className="flex flex-wrap gap-1">
              {destination.highlights.slice(0, 3).map((highlight, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Link to={`/destinations/${destination.slug}`} className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Explore {destination.name}
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {
              trackCTAClick('get_destination_quote', destination.name)
              whatsappActions.quote(`${destination.name} destination for our corporate offsite`)
            }}
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}