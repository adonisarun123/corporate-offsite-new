import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import VenueCard from '../components/VenueCard.jsx'
import { Filter, Search, MapPin, Users, Star } from 'lucide-react'

const venues = [
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
  },
  {
    name: "Marina Bay Sands Singapore",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
    rating: 4.7,
    capacity: "500",
    priceRange: "Luxury",
    amenities: ["wifi", "parking", "catering"],
    description: "Iconic venue with world-class facilities and stunning city views.",
    badge: "Iconic",
    pros: ["Iconic location", "Large capacity", "Premium facilities"]
  },
  {
    name: "ITC Grand Chola Chennai",
    location: "Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    rating: 4.5,
    capacity: "250",
    priceRange: "Premium",
    amenities: ["wifi", "parking", "catering"],
    description: "Palatial hotel with grand architecture and excellent conference facilities.",
    badge: "Heritage",
    pros: ["Grand architecture", "Excellent service", "Multiple venues"]
  },
  {
    name: "The Oberoi Mumbai",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    rating: 4.8,
    capacity: "180",
    priceRange: "Luxury",
    amenities: ["wifi", "parking", "catering"],
    description: "Luxury hotel overlooking the Arabian Sea with premium meeting spaces.",
    badge: "Sea View",
    pros: ["Ocean views", "Luxury amenities", "Central location"]
  }
]

export default function VenuesPage() {
  const [filteredVenues, setFilteredVenues] = useState(venues)
  const [filters, setFilters] = useState({
    location: 'all',
    priceRange: 'all',
    capacity: 'all'
  })

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    
    let filtered = venues
    
    if (newFilters.location !== 'all') {
      filtered = filtered.filter(venue => 
        venue.location.toLowerCase().includes(newFilters.location.toLowerCase())
      )
    }
    
    if (newFilters.priceRange !== 'all') {
      filtered = filtered.filter(venue => 
        venue.priceRange.toLowerCase() === newFilters.priceRange.toLowerCase()
      )
    }
    
    if (newFilters.capacity !== 'all') {
      filtered = filtered.filter(venue => {
        const capacity = parseInt(venue.capacity)
        switch (newFilters.capacity) {
          case 'small': return capacity <= 100
          case 'medium': return capacity > 100 && capacity <= 200
          case 'large': return capacity > 200
          default: return true
        }
      })
    }
    
    setFilteredVenues(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Offsite Venues
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover handpicked venues that offer the perfect blend of comfort, functionality, and inspiration for your team.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="goa">Goa</option>
                  <option value="singapore">Singapore</option>
                  <option value="dubai">Dubai</option>
                  <option value="chennai">Chennai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                  <option value="all">All Ranges</option>
                  <option value="mid-range">Mid-range</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                >
                  <option value="all">All Sizes</option>
                  <option value="small">Up to 100</option>
                  <option value="medium">100-200</option>
                  <option value="large">200+</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                  <Search className="h-4 w-4 mr-2" />
                  Search Venues
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredVenues.length} Venues Found
              </h2>
              <p className="text-gray-600">
                Showing venues matching your criteria
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Sort by Rating</option>
                <option>Sort by Price</option>
                <option>Sort by Capacity</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No venues found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <Button onClick={() => {
                setFilters({ location: 'all', priceRange: 'all', capacity: 'all' })
                setFilteredVenues(venues)
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Venue?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our venue experts can help you find the perfect location based on your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Venue Recommendations
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

