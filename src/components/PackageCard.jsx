import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, Users, MapPin, CheckCircle, Download, Phone } from 'lucide-react'

export function PackageCard({ package: pkg }) {
  const {
    title,
    theme,
    duration,
    cities = [],
    image,
    description,
    inclusions = [],
    priceRange,
    groupSizes = [],
    highlights = [],
    popular = false
  } = pkg

  const themeColors = {
    leadership: 'bg-blue-100 text-blue-800',
    collaboration: 'bg-green-100 text-green-800',
    wellness: 'bg-purple-100 text-purple-800',
    adventure: 'bg-orange-100 text-orange-800',
    csr: 'bg-teal-100 text-teal-800',
    onboarding: 'bg-indigo-100 text-indigo-800',
    'sales-kickoff': 'bg-red-100 text-red-800'
  }

  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group relative ${popular ? 'ring-2 ring-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-primary text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={themeColors[theme] || 'bg-gray-100 text-gray-800'}>
            {theme.replace('-', ' ')}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">{priceRange}</span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{duration} days</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{cities.slice(0, 2).join(', ')}{cities.length > 2 ? '...' : ''}</span>
          </div>
        </div>
        
        {groupSizes.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>Ideal for {groupSizes.join(', ')} people</span>
          </div>
        )}
        
        {highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">Package Highlights:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {inclusions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">Inclusions:</h4>
            <div className="flex flex-wrap gap-1">
              {inclusions.slice(0, 4).map((inclusion, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {inclusion}
                </Badge>
              ))}
              {inclusions.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{inclusions.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Get Proposal
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PackageCard

