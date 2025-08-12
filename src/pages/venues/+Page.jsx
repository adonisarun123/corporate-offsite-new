// src/pages/venues/+Page.jsx
import { useState } from 'react'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import VenueCard from '../../components/VenueCard.jsx'
import { destinations } from '../../data/destinations.js'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { MapPin, Hotel, Users, DollarSign, Filter } from 'lucide-react'

export { Page }

// Extract all venues from destinations
const allVenues = destinations.flatMap(destination => 
  destination.venues.map(venue => ({
    ...venue,
    destinationName: destination.name,
    destinationSlug: destination.slug
  }))
)

const venueTypes = ['All', 'Hotels', 'Resorts', 'Conference Centers', 'Retreats']
const priceRanges = ['All', 'Budget', 'Mid-range', 'Premium', 'Luxury']
const capacityRanges = ['All', 'Small (10-50)', 'Medium (50-150)', 'Large (150-300)', 'Very Large (300+)']

function Page() {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedCapacity, setSelectedCapacity] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  const locations = ['All', ...new Set(destinations.map(d => d.name))]

  const filteredVenues = allVenues.filter(venue => {
    const typeMatch = selectedType === 'All' || venue.type === selectedType
    const priceMatch = selectedPrice === 'All' || venue.priceRange === selectedPrice
    const locationMatch = selectedLocation === 'All' || venue.destinationName === selectedLocation
    
    const capacityMatch = selectedCapacity === 'All' || (() => {
      const capacity = parseInt(venue.capacity)
      switch(selectedCapacity) {
        case 'Small (10-50)': return capacity >= 10 && capacity <= 50
        case 'Medium (50-150)': return capacity > 50 && capacity <= 150
        case 'Large (150-300)': return capacity > 150 && capacity <= 300
        case 'Very Large (300+)': return capacity > 300
        default: return true
      }
    })()
    
    return typeMatch && priceMatch && capacityMatch && locationMatch
  })

  return (
    <LayoutDefault>
      <Seo
        title="Corporate Offsite Venues - Hotels & Resorts for Team Retreats"
        description="Browse 100+ curated venues for corporate offsites. From luxury hotels to beach resorts, find the perfect venue with meeting facilities, team activities, and accommodation."
        canonical="/venues"
        keywords="corporate offsite venues, team retreat hotels, conference resorts, business hotels, meeting venues, corporate event spaces, team building venues, offsite locations"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Corporate Offsite Venues",
          "description": "Curated venues for corporate offsites and team retreats",
          "url": "https://corporate-offsite-experts.com/venues",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": allVenues.slice(0, 10).map((venue, index) => ({
              "@type": "LodgingBusiness",
              "position": index + 1,
              "name": venue.name,
              "address": venue.location,
              "priceRange": venue.priceRange,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": venue.rating,
                "bestRating": "5"
              }
            }))
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Corporate Offsite Venues
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hand-picked venues perfect for productive team retreats. Every venue is verified 
            for quality, facilities, and corporate readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => {
                trackCTAClick('explore_venues')
              }}
            >
              Explore All Venues
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                trackCTAClick('venue_recommendation')
                whatsappActions.planner('I need help finding the perfect venue for my offsite')
              }}
            >
              Get Recommendations
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{allVenues.length}+</p>
              <p className="text-gray-600">Verified Venues</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{destinations.length}</p>
              <p className="text-gray-600">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Hotel className="inline h-4 w-4 mr-1" />
                Type
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {venueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Capacity Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Capacity
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
              >
                {capacityRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <DollarSign className="inline h-4 w-4 mr-1" />
                Price Range
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {filteredVenues.length} of {allVenues.length} venues
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSelectedType('All')
                setSelectedPrice('All')
                setSelectedCapacity('All')
                setSelectedLocation('All')
              }}
            >
              <Filter className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, index) => (
              <VenueCard 
                key={`${venue.name}-${index}`} 
                venue={venue} 
                destinationSlug={venue.destinationSlug}
              />
            ))}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No venues found matching your criteria.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedType('All')
                  setSelectedPrice('All')
                  setSelectedCapacity('All')
                  setSelectedLocation('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Can't Find the Right Venue?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our venue specialists have access to exclusive properties and can find 
            exactly what you're looking for
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-white/90"
              onClick={() => {
                trackCTAClick('custom_venue_search')
                whatsappActions.planner('I need help finding a specific type of venue')
              }}
            >
              Custom Venue Search
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
              onClick={() => {
                trackCTAClick('venue_expert_call')
                phoneActions.scheduleCall('venue selection')
              }}
            >
              Talk to Venue Expert
            </Button>
          </div>
        </div>
      </section>
    </LayoutDefault>
  )
}
