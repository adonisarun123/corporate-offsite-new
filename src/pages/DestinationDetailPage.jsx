import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import VenueCard from '../components/VenueCard.jsx'
import { MapPin, Clock, Users, DollarSign, Star, Plane, Calendar, CheckCircle, MessageCircle, Phone } from 'lucide-react'
import { getDestinationBySlug } from '../data/destinations.js'
import { whatsappActions, phoneActions, trackCTAClick } from '../utils/ctaActions.js'

export default function DestinationDetailPage() {
  const { slug } = useParams()
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h2>
            <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={destination.heroImage} 
          alt={destination.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              {destination.badge && (
                <Badge className="mb-4 bg-primary text-white">
                  {destination.badge}
                </Badge>
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {destination.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {destination.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90"
                  onClick={() => {
                    trackCTAClick('get_proposal_destination', destination.name)
                    whatsappActions.proposal(`${destination.name} offsite`)
                  }}
                >
                  Get Proposal for {destination.name}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={() => {
                    trackCTAClick('call_destination', destination.name)
                    phoneActions.general()
                  }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Best Time</div>
              <div className="text-sm text-gray-600">{destination.bestTime}</div>
            </div>
            <div className="text-center">
              <Plane className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Getting There</div>
              <div className="text-sm text-gray-600">{destination.gettingThere}</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Budget Range</div>
              <div className="text-sm text-gray-600">{destination.budget}</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Team Sizes</div>
              <div className="text-sm text-gray-600">{destination.teamSizes.join(', ')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {destination.name}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {destination.longDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Destination Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Activities</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <Badge key={index} variant="outline">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{destination.venues?.length || 0}+</div>
                  <div className="text-sm text-gray-600">Curated Venues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      {destination.venues && destination.venues.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Venues in {destination.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handpicked venues that perfectly capture the essence of {destination.name} while providing 
                world-class facilities for your corporate offsite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.venues.map((venue, index) => (
                <VenueCard 
                  key={index} 
                  venue={{
                    ...venue,
                    pros: ["Premium location", "Excellent service", "Modern facilities"]
                  }} 
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  trackCTAClick('view_all_venues_destination', destination.name)
                  whatsappActions.general(`I'd like to see all available venues in ${destination.name} for our corporate offsite.`)
                }}
              >
                View All Venues in {destination.name}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose This Destination */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose {destination.name} for Your Offsite?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Strategic Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {destination.name} offers excellent connectivity and accessibility, making it easy for teams 
                  to travel and focus on their objectives without logistical hassles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Premium Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From world-class venues to unique local experiences, {destination.name} provides 
                  memorable moments that strengthen team bonds and inspire innovation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Team Building Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The environment and activities available in {destination.name} are specifically 
                  chosen to enhance team collaboration, communication, and shared experiences.
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
            Ready to Plan Your {destination.name} Offsite?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts create a custom {destination.name} experience tailored to your team's needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:text-primary"
              onClick={() => {
                trackCTAClick('get_custom_proposal_destination', destination.name)
                whatsappActions.proposal(`${destination.name} offsite for our team`)
              }}
            >
              Get Custom {destination.name} Proposal
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('whatsapp_destination_expert', destination.name)
                whatsappActions.general(`I'd like to speak with a ${destination.name} destination expert about planning our corporate offsite.`)
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp {destination.name} Expert
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>Free consultation • Custom itinerary • Local expertise • 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  )
}
