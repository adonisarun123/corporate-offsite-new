import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { MapPin, Users, Star, Wifi, Car, Coffee, Utensils } from 'lucide-react'

export function VenueCard({ venue }) {
  const {
    name,
    location,
    image,
    rating,
    capacity,
    priceRange,
    amenities = [],
    description,
    badge,
    pros = [],
    cons = []
  } = venue

  const amenityIcons = {
    wifi: <Wifi className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
    catering: <Utensils className="h-4 w-4" />,
    coffee: <Coffee className="h-4 w-4" />
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <div className="flex items-center gap-1 text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-primary border-primary">
            {priceRange}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity} people</span>
          </div>
        </div>
        
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 text-xs">
                {amenityIcons[amenity] || <div className="h-4 w-4" />}
                <span className="capitalize">{amenity}</span>
              </div>
            ))}
          </div>
        )}
        
        {pros.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-green-700">Highlights:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {pros.slice(0, 2).map((pro, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Get Quote
          </Button>
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default VenueCard

