import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Clock, Users, MapPin, Target, Shield, Zap } from 'lucide-react'

export function ActivityCard({ activity }) {
  const {
    name,
    type,
    duration,
    teamSize,
    image,
    description,
    learningOutcomes = [],
    difficulty,
    indoor = true,
    weatherDependent = false
  } = activity

  const typeColors = {
    leadership: 'bg-blue-100 text-blue-800',
    collaboration: 'bg-green-100 text-green-800',
    wellness: 'bg-purple-100 text-purple-800',
    adventure: 'bg-orange-100 text-orange-800',
    csr: 'bg-teal-100 text-teal-800',
    onboarding: 'bg-indigo-100 text-indigo-800'
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
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={typeColors[type] || 'bg-gray-100 text-gray-800'}>
            {type}
          </Badge>
          {difficulty && (
            <Badge className={difficultyColors[difficulty] || 'bg-gray-100 text-gray-800'}>
              {difficulty}
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          {indoor && (
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              Indoor
            </Badge>
          )}
          {weatherDependent && (
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              Weather Dependent
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="h-4 w-4" />
            <span>{teamSize}</span>
          </div>
        </div>
        
        {learningOutcomes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Learning Outcomes:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {learningOutcomes.slice(0, 2).map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Add to Itinerary
          </Button>
          <Button variant="outline" className="flex-1">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ActivityCard

