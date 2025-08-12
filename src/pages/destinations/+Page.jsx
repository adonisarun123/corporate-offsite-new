// src/pages/destinations/+Page.jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { MapPin, Star, Users, Calendar, Thermometer, Plane } from 'lucide-react'
import { destinations } from '../../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Link } from 'react-router-dom'

export { Page }

function Page() {
  return (
    <LayoutDefault>
      <Seo
        title="Corporate Offsite Destinations - India & Southeast Asia"
        description="Explore premium corporate offsite destinations across India & Southeast Asia. From Bangalore's tech hub to Bali's serene landscapes, find the perfect location for your team retreat."
        canonical="/destinations"
        keywords="corporate offsite destinations, team retreat locations, India offsite venues, Southeast Asia corporate travel, Bangalore offsite, Mumbai retreat, Goa team building, Singapore corporate events, Bali offsite, Thailand retreat"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Corporate Offsite Destinations",
          "description": "Explore premium corporate offsite destinations across India & Southeast Asia",
          "url": "https://corporate-offsite-experts.com/destinations",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": destinations.map((dest, index) => ({
              "@type": "Place",
              "position": index + 1,
              "name": dest.name,
              "description": dest.description,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": dest.country || "IN"
              }
            }))
          }
        }}
      />
      
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

      {/* Quick Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
              🇮🇳 India
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
              🌴 Beach Destinations
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
              🏔️ Hill Stations
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
              🌏 International
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
              🏙️ City Locations
            </Badge>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link 
                key={destination.id} 
                to={`/destinations/${destination.slug}`}
                className="block hover:no-underline"
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {destination.featured && (
                      <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{destination.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {destination.region}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{destination.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{destination.venues.length}+</p>
                        <p className="text-sm text-gray-600">Venues</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{destination.activities.length}+</p>
                        <p className="text-sm text-gray-600">Activities</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Users className="h-4 w-4" />
                      <span>{destination.teamSizeRange}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline">{highlight}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-gray-600">From</span>
                        <p className="text-lg font-semibold">{destination.priceRange}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Plane className="h-4 w-4" />
                        <span>{destination.connectivity}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Can't Find Your Perfect Destination?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts suggest the best locations based on your team size, budget, and objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                trackCTAClick('get_recommendations_destinations')
                whatsappActions.planner('I need help choosing the perfect destination for my corporate offsite')
              }}
            >
              Get Recommendations
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('speak_expert_destinations')
                whatsappActions.general('I want to discuss destination options with an expert')
              }}
            >
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>
    </LayoutDefault>
  )
}
