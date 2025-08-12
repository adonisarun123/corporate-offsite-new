// src/pages/activities/+Page.jsx
import { useState } from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { activities } from '../../data/activities.js'
import ActivityCard from '../../components/ActivityCard.jsx'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Link } from 'react-router-dom'
import { Filter, Users, Clock, Target, Brain, Heart, Lightbulb, Users2 } from 'lucide-react'

export { Page }

const activityCategories = [
  { id: 'all', name: 'All Activities', icon: Filter },
  { id: 'team-building', name: 'Team Building', icon: Users2 },
  { id: 'leadership', name: 'Leadership', icon: Target },
  { id: 'skill-development', name: 'Skill Development', icon: Brain },
  { id: 'wellness', name: 'Wellness', icon: Heart },
  { id: 'innovation', name: 'Innovation', icon: Lightbulb },
  { id: 'outdoor', name: 'Outdoor', icon: Users },
]

function Page() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredActivities = activities.filter(activity => {
    const categoryMatch = selectedCategory === 'all' || 
      activity.type.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'outdoor' && !activity.indoor)
    
    const difficultyMatch = selectedDifficulty === 'all' || 
      activity.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    
    return categoryMatch && difficultyMatch
  })

  return (
    <LayoutDefault>
      <Seo
        title="Team Building Activities - Corporate Offsite Programs"
        description="Explore 30+ engaging team building activities for your corporate offsite. From leadership challenges to innovation workshops, find activities that boost team performance and morale."
        canonical="/activities"
        keywords="team building activities, corporate activities, leadership development, team workshops, outdoor activities, skill development, wellness programs, innovation workshops, team bonding"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Team Building Activities",
          "description": "Corporate team building activities and programs",
          "url": "https://corporate-offsite-experts.com/activities",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": activities.map((activity, index) => ({
              "@type": "Event",
              "position": index + 1,
              "name": activity.name,
              "description": activity.description,
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "name": "Corporate Offsite Experts"
              }
            }))
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Team Building Activities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your team with engaging activities designed to boost collaboration, 
            communication, and performance. All activities are facilitated by certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => {
                trackCTAClick('browse_all_activities')
              }}
            >
              Browse All Activities
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                trackCTAClick('custom_activity_plan')
                whatsappActions.planner('I need help creating a custom activity plan for my team')
              }}
            >
              Create Custom Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{activities.length}+</p>
              <p className="text-gray-600">Activities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-gray-600">Teams Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-gray-600">Certified Facilitators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {activityCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Icon className="h-4 w-4 mr-1" />
                    {category.name}
                  </Badge>
                )
              })}
            </div>

            {/* Difficulty Filters */}
            <div className="flex gap-2 justify-center">
              <Badge
                variant={selectedDifficulty === 'all' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('all')}
              >
                All Levels
              </Badge>
              <Badge
                variant={selectedDifficulty === 'easy' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('easy')}
              >
                Easy
              </Badge>
              <Badge
                variant={selectedDifficulty === 'medium' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('medium')}
              >
                Medium
              </Badge>
              <Badge
                variant={selectedDifficulty === 'high' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('high')}
              >
                Challenging
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredActivities.length} activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <Link 
                key={activity.id || activity.name} 
                to={`/activities/${activity.slug}`}
                className="block hover:no-underline"
              >
                <ActivityCard activity={activity} />
              </Link>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No activities found matching your criteria.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedDifficulty('all')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help Choosing Activities?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our activity specialists will create a custom program based on your team's goals and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90"
              onClick={() => {
                trackCTAClick('get_activity_recommendations')
                whatsappActions.planner('I need recommendations for team activities')
              }}
            >
              Get Recommendations
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => {
                trackCTAClick('activity_consultation')
                whatsappActions.general('I want to discuss activity options with a specialist')
              }}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </LayoutDefault>
  )
}
