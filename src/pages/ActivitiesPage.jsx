import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import { Search, Filter, Clock, Users, Target, Award, BookOpen, MessageCircle, Phone } from 'lucide-react'
import { activities, getActivitiesByType } from '../data/activities.js'
import { whatsappActions, trackCTAClick } from '../utils/ctaActions.js'
import { Link } from 'react-router-dom'

const activityCategories = [
  { id: 'all', name: 'All Activities', count: activities.length },
  { id: 'leadership', name: 'Leadership', count: getActivitiesByType('leadership').length },
  { id: 'collaboration', name: 'Team Building', count: getActivitiesByType('collaboration').length },
  { id: 'wellness', name: 'Wellness', count: getActivitiesByType('wellness').length },
  { id: 'communication', name: 'Communication', count: getActivitiesByType('communication').length },
  { id: 'adventure', name: 'Adventure', count: getActivitiesByType('adventure').length },
  { id: 'sales', name: 'Sales', count: getActivitiesByType('sales').length }
]

const difficultyLevels = [
  { id: 'all', name: 'All Levels' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Challenging' }
]

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.type === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || activity.difficulty === selectedDifficulty
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.framework?.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesDifficulty && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Team Building Activities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Engaging activities designed to strengthen team bonds, develop leadership skills, and create lasting memories.
            Each activity is mapped to proven learning frameworks for maximum impact.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search activities by name, type, or learning framework..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Activity Type</h3>
              <div className="flex flex-wrap gap-2">
                {activityCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty Level</h3>
              <div className="flex flex-wrap gap-2">
                {difficultyLevels.map((level) => (
                  <Button
                    key={level.id}
                    variant={selectedDifficulty === level.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(level.id)}
                  >
                    {level.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredActivities.length} Activities Available
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              Showing activities matching your criteria
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <EnhancedActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No activities found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning Framework Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Science-Based Learning Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our activities are designed around proven learning and development frameworks from leading experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Each activity is built on established L&D frameworks like GROW coaching model, 
                  Design Thinking, and Emotional Intelligence principles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Measurable Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear learning objectives and competency development mapped to specific 
                  business skills and leadership capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Facilitation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional facilitators certified in their respective methodologies 
                  ensure optimal learning transfer and application.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Activity Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Activity?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can design bespoke activities tailored to your specific learning objectives, 
            team dynamics, and business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                trackCTAClick('request_custom_activity')
                whatsappActions.general('I\'d like to design a custom team building activity for our specific learning objectives. Can you help us create something unique?')
              }}
            >
              Design Custom Activity
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                trackCTAClick('speak_learning_expert')
                whatsappActions.general('I\'d like to speak with a learning and development expert about our team\'s specific needs and activity recommendations.')
              }}
            >
              Speak with L&D Expert
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our activity experts help you select and customize the perfect combination 
            of activities for your team's development goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                trackCTAClick('activity_consultation')
                whatsappActions.general('I need help selecting the right team building activities for our corporate offsite. Can you provide expert recommendations?')
              }}
            >
              Get Activity Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => {
                trackCTAClick('call_activity_expert')
                phoneActions.general()
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Activity Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function EnhancedActivityCard({ activity }) {
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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <img 
          src={activity.image} 
          alt={activity.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={typeColors[activity.type] || 'bg-gray-100 text-gray-800'}>
            {activity.type}
          </Badge>
          <Badge className={difficultyColors[activity.difficulty] || 'bg-gray-100 text-gray-800'}>
            {activity.difficulty}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="text-sm font-semibold text-gray-900">{activity.duration}</div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {activity.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {activity.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{activity.teamSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="h-4 w-4" />
            <span className="font-medium">Framework:</span>
            <span>{activity.framework}</span>
          </div>
        </div>
        
        {activity.learningOutcomes && activity.learningOutcomes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Key Outcomes:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {activity.learningOutcomes.slice(0, 2).map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Link to={`/activities/${activity.slug}`} className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {
              trackCTAClick('add_activity', activity.name)
              whatsappActions.general(`I'd like to include ${activity.name} in our offsite. Can you provide details and pricing?`)
            }}
          >
            Add to Offsite
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}