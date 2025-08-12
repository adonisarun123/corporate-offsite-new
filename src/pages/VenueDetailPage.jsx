import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Users, Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, Phone, MessageCircle, Calendar, CheckCircle, X } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { destinations } from '../data/destinations'
import { whatsappActions, phoneActions, trackCTAClick } from '../utils/ctaActions'

const amenityIcons = {
  wifi: <Wifi className="h-5 w-5" />,
  parking: <Car className="h-5 w-5" />,
  catering: <Utensils className="h-5 w-5" />,
  spa: <Waves className="h-5 w-5" />,
  gym: <Dumbbell className="h-5 w-5" />,
  'business center': <Coffee className="h-5 w-5" />,
  golf: <CheckCircle className="h-5 w-5" />
}

const VenueDetailPage = () => {
  const { destinationSlug, venueSlug } = useParams()
  const navigate = useNavigate()

  // Find the destination
  const destination = destinations.find(dest => dest.slug === destinationSlug)
  
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-primary hover:underline">
            ← Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  // Find the venue (create slug from venue name)
  const venue = destination.venues.find(v => {
    const slug = v.name.toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/ +/g, '-')
    return slug === venueSlug
  })

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Venue Not Found</h1>
          <Link to={`/destinations/${destinationSlug}`} className="text-primary hover:underline">
            ← Back to {destination.name}
          </Link>
        </div>
      </div>
    )
  }

  const getPriceRangeDetails = (priceRange) => {
    switch(priceRange) {
      case 'Premium':
        return { range: '₹12,000 - ₹25,000', description: 'per person per day' }
      case 'Mid-range':
        return { range: '₹6,000 - ₹15,000', description: 'per person per day' }
      case 'Budget':
        return { range: '₹3,000 - ₹8,000', description: 'per person per day' }
      default:
        return { range: 'Contact for pricing', description: '' }
    }
  }

  const priceDetails = getPriceRangeDetails(venue.priceRange)

  const venueFeatures = [
    "Professional conference rooms with state-of-the-art AV equipment",
    "Dedicated event coordinator for seamless execution",
    "Flexible meeting spaces that can accommodate various group sizes",
    "High-speed Wi-Fi throughout the property",
    "On-site catering with customizable menu options",
    "Break-out areas for informal discussions and networking",
    "Professional lighting and climate control",
    "24/7 technical support during events"
  ]

  const samplePackages = [
    {
      name: "Half-Day Corporate Package",
      duration: "4 hours",
      inclusions: ["Conference room", "AV equipment", "Wi-Fi", "Tea/coffee breaks"],
      price: "₹2,500 per person"
    },
    {
      name: "Full-Day Offsite Package", 
      duration: "8 hours",
      inclusions: ["Conference room", "AV equipment", "Welcome lunch", "2 tea breaks", "Activity session"],
      price: "₹4,500 per person"
    },
    {
      name: "2-Day Retreat Package",
      duration: "2 days, 1 night",
      inclusions: ["Accommodation", "All meals", "Conference facilities", "Team building activities", "Evening entertainment"],
      price: "₹8,500 per person"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <nav className="text-sm">
              <Link to="/destinations" className="text-gray-500 hover:text-gray-700">Destinations</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link to={`/destinations/${destinationSlug}`} className="text-gray-500 hover:text-gray-700">{destination.name}</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">{venue.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${venue.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {venue.type}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{venue.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {venue.name}
            </h1>
            <div className="flex items-center gap-4 mb-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{venue.location}, {destination.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Up to {venue.capacity} people</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {venue.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  trackCTAClick('get_venue_quote', venue.name)
                  whatsappActions.quote(`${venue.name} in ${destination.name}`)
                }}
              >
                Get Venue Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => {
                  trackCTAClick('call_venue_expert', venue.name)
                  phoneActions.general()
                }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Venue Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">About {venue.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {venue.name} stands as one of {destination.name}'s premier corporate event venues, 
                    offering world-class facilities and exceptional service for business gatherings of all sizes. 
                    Our venue combines sophisticated ambiance with cutting-edge technology to create the perfect 
                    environment for productive meetings, strategic planning sessions, and team building activities.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {venueFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                  <div className="flex flex-wrap gap-3">
                    {venue.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                        {amenityIcons[amenity] || <CheckCircle className="h-5 w-5" />}
                        <span className="capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Venue Type:</span>
                      <span className="font-medium">{venue.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-medium">Up to {venue.capacity} people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{venue.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{venue.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-medium">{venue.priceRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">{priceDetails.range}</div>
                    <div className="text-sm text-gray-600">{priceDetails.description}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    *Pricing varies based on group size, duration, and specific requirements. 
                    Contact us for a customized quote.
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      trackCTAClick('get_custom_quote_sidebar', venue.name)
                      whatsappActions.quote(`${venue.name} in ${destination.name} for our corporate offsite`)
                    }}
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        trackCTAClick('whatsapp_venue_help', venue.name)
                        whatsappActions.general(`I need help with ${venue.name} in ${destination.name} for our corporate event`)
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Expert
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        trackCTAClick('call_venue_help', venue.name)
                        phoneActions.scheduleCall()
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        trackCTAClick('book_site_visit', venue.name)
                        whatsappActions.general(`I'd like to schedule a site visit to ${venue.name} in ${destination.name}`)
                      }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Packages</h2>
            <p className="text-xl text-gray-600">
              Choose from our curated packages or create a custom solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samplePackages.map((pkg, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-sm text-gray-600 mb-4">{pkg.duration}</div>
                  <div className="text-2xl font-bold text-primary mb-4">{pkg.price}</div>
                  
                  <h4 className="font-semibold mb-3">Inclusions:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      trackCTAClick('select_package', `${venue.name}_${pkg.name}`)
                      whatsappActions.proposal(`${pkg.name} at ${venue.name} in ${destination.name}`)
                    }}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Venues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Other Venues in {destination.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.venues
              .filter(v => v.name !== venue.name)
              .slice(0, 3)
              .map((relatedVenue, index) => {
                const relatedVenueSlug = relatedVenue.name.toLowerCase()
                  .replace(/[^a-z0-9 ]/g, '')
                  .replace(/ +/g, '-')
                
                return (
                  <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                    <Link to={`/destinations/${destinationSlug}/venues/${relatedVenueSlug}`}>
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={relatedVenue.image} 
                          alt={relatedVenue.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{relatedVenue.type}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{relatedVenue.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedVenue.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{relatedVenue.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Up to {relatedVenue.capacity} people</span>
                          <span className="font-medium text-primary">{relatedVenue.priceRange}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
          </div>
          
          {destination.venues.length > 4 && (
            <div className="text-center mt-8">
              <Link to={`/destinations/${destinationSlug}`}>
                <Button variant="outline">
                  View All {destination.name} Venues
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book {venue.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our venue experts help you plan the perfect event at this exceptional location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:text-primary"
              onClick={() => {
                trackCTAClick('book_venue_now', venue.name)
                whatsappActions.proposal(`${venue.name} in ${destination.name} for our corporate offsite`)
              }}
            >
              Book This Venue
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('compare_venues', venue.name)
                whatsappActions.general(`I'd like to compare ${venue.name} with other venues in ${destination.name}`)
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Compare Venues
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>Free consultation • Site visits available • Custom packages • 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VenueDetailPage
