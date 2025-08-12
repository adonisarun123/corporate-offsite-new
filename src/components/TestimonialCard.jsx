import { Card, CardContent } from '@/components/ui/card.jsx'
import { Star, Quote } from 'lucide-react'

export function TestimonialCard({ testimonial }) {
  const {
    quote,
    personName,
    role,
    company,
    rating = 5,
    companyLogo,
    image
  } = testimonial

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
          <blockquote className="text-gray-700 italic leading-relaxed pl-6">
            "{quote}"
          </blockquote>
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t">
          {image && (
            <img 
              src={image} 
              alt={personName}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div className="flex-1">
            <div className="font-semibold text-gray-900">{personName}</div>
            <div className="text-sm text-gray-600">{role}</div>
            <div className="text-sm text-primary font-medium">{company}</div>
          </div>
          {companyLogo && (
            <img 
              src={companyLogo} 
              alt={`${company} logo`}
              className="w-12 h-8 object-contain opacity-60"
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard

