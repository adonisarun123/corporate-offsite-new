import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Clock, Users, DollarSign, CheckCircle, Target, BookOpen, Award, MessageCircle, Phone, Calendar, MapPin, Shield } from 'lucide-react'
import { getActivityBySlug } from '../data/activities.js'
import { whatsappActions, phoneActions, trackCTAClick } from '../utils/ctaActions.js'

export default function ActivityDetailPage() {
  const { slug } = useParams()
  const activity = getActivityBySlug(slug)

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activity Not Found</h2>
            <p className="text-gray-600 mb-6">The activity you're looking for doesn't exist.</p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const typeColors = {
    leadership: 'bg-blue-100 text-blue-800',
    collaboration: 'bg-green-100 text-green-800',
    wellness: 'bg-purple-100 text-purple-800',
    communication: 'bg-orange-100 text-orange-800',
    adventure: 'bg-red-100 text-red-800',
    sales: 'bg-indigo-100 text-indigo-800'
  }

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800', 
    hard: 'bg-red-100 text-red-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={activity.heroImage} 
          alt={activity.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <div className="flex gap-2 mb-4">
                <Badge className={typeColors[activity.type] || 'bg-gray-100 text-gray-800'}>
                  {activity.type}
                </Badge>
                <Badge className={difficultyColors[activity.difficulty] || 'bg-gray-100 text-gray-800'}>
                  {activity.difficulty} level
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {activity.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {activity.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    trackCTAClick('add_activity_to_offsite', activity.name)
                    whatsappActions.general(`I'd like to include ${activity.name} in our corporate offsite. Can you help me with details and pricing?`)
                  }}
                >
                  Add to Our Offsite
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={() => {
                    trackCTAClick('call_activity_expert', activity.name)
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
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Duration</div>
              <div className="text-sm text-gray-600">{activity.duration}</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Team Size</div>
              <div className="text-sm text-gray-600">{activity.teamSize}</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Investment</div>
              <div className="text-sm text-gray-600">{activity.price}</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Locations</div>
              <div className="text-sm text-gray-600">{activity.locations?.slice(0, 2).join(', ')}{activity.locations?.length > 2 ? '...' : ''}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Activity Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {activity.longDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 gap-3">
                  {activity.includes?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {activity.idealFor?.map((group, index) => (
                    <Badge key={index} variant="outline">
                      {group}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {activity.indoor && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Indoor Activity
                  </Badge>
                )}
                {activity.weatherDependent && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Weather Dependent
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={activity.image} 
                alt={activity.name}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This activity is built on proven learning and development methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">{activity.framework}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {activity.frameworkDescription}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Key Competencies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {activity.keyCompetencies?.map((competency, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{competency}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participants will develop these specific skills and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activity.learningOutcomes?.map((outcome, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      {activity.agenda && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Activity Agenda
              </h2>
              <p className="text-xl text-gray-600">
                Structured flow designed for maximum learning impact
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {activity.agenda.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Available Locations */}
      {activity.locations && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available Locations
              </h2>
              <p className="text-xl text-gray-600">
                This activity can be conducted at these destinations
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {activity.locations.map((location, index) => (
                <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                  {location}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Include This Activity?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts help you integrate {activity.name} into your corporate offsite program 
            for maximum impact and learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                trackCTAClick('get_activity_proposal', activity.name)
                whatsappActions.proposal(`${activity.name} activity for our corporate offsite`)
              }}
            >
              Get Activity Proposal
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('whatsapp_activity_expert', activity.name)
                whatsappActions.general(`I'd like to learn more about ${activity.name} and how it can be customized for our team.`)
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Activity Expert
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>Custom facilitation • Professional instructors • All materials included • Flexible scheduling</p>
          </div>
        </div>
      </section>
    </div>
  )
}
