import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Filter, Users, MapPin, Calendar, TrendingUp, Award, Download, ExternalLink, Quote } from 'lucide-react'

const industryFilters = [
  { id: 'all', name: 'All Industries', count: 15 },
  { id: 'technology', name: 'Technology', count: 6 },
  { id: 'finance', name: 'Finance', count: 4 },
  { id: 'healthcare', name: 'Healthcare', count: 3 },
  { id: 'manufacturing', name: 'Manufacturing', count: 2 }
]

const objectiveFilters = [
  { id: 'all', name: 'All Objectives' },
  { id: 'leadership', name: 'Leadership Development' },
  { id: 'collaboration', name: 'Team Building' },
  { id: 'innovation', name: 'Innovation' },
  { id: 'culture', name: 'Culture Building' }
]

const caseStudies = [
  {
    id: 1,
    title: "TechCorp India's Digital Transformation Journey",
    company: "TechCorp India",
    industry: "technology",
    objective: "leadership",
    teamSize: 120,
    location: "Bangalore & Coorg",
    duration: "3 days",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    challenge: "TechCorp India was undergoing a major digital transformation and needed to align their leadership team while building change management capabilities across the organization.",
    solution: "We designed a 3-day leadership intensive combining strategic workshops, change management simulations, and team alignment activities in a tech-focused environment.",
    results: [
      "95% leadership alignment on transformation roadmap",
      "40% improvement in cross-functional collaboration scores",
      "85% of participants reported increased confidence in leading change",
      "Successful implementation of 3 major digital initiatives within 6 months"
    ],
    testimonial: {
      quote: "The offsite was a turning point for our transformation journey. The activities were perfectly aligned with our business objectives, and the team came back energized and aligned.",
      author: "Priya Sharma",
      position: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    metrics: {
      satisfaction: 4.8,
      engagement: 92,
      roi: "320%"
    },
    downloadUrl: "/case-studies/techcorp-india.pdf"
  },
  {
    id: 2,
    title: "Global Finance Corp's Leadership Pipeline Development",
    company: "Global Finance Corp",
    industry: "finance",
    objective: "leadership",
    teamSize: 85,
    location: "Singapore",
    duration: "4 days",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    challenge: "A multinational finance company needed to develop their next generation of leaders while fostering cross-cultural collaboration across their Asian operations.",
    solution: "International leadership summit in Singapore with executive coaching, cultural intelligence workshops, and strategic business simulations.",
    results: [
      "100% of participants promoted within 12 months",
      "60% improvement in cross-cultural collaboration metrics",
      "Development of standardized leadership competency framework",
      "Establishment of mentorship program across 5 countries"
    ],
    testimonial: {
      quote: "The Singapore summit exceeded our expectations. Our emerging leaders gained invaluable insights and built lasting relationships that continue to drive our business forward.",
      author: "Michael Chen",
      position: "Regional HR Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    metrics: {
      satisfaction: 4.9,
      engagement: 96,
      roi: "450%"
    },
    downloadUrl: "/case-studies/global-finance-corp.pdf"
  },
  {
    id: 3,
    title: "HealthTech Solutions' Innovation Culture Building",
    company: "HealthTech Solutions",
    industry: "healthcare",
    objective: "innovation",
    teamSize: 65,
    location: "Goa",
    duration: "2 days",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    challenge: "A healthcare technology startup needed to foster innovation culture and break down silos between their technical and business teams.",
    solution: "Innovation-focused retreat with design thinking workshops, cross-functional team challenges, and creative problem-solving activities in a relaxed beach setting.",
    results: [
      "Launch of 5 new product features within 3 months",
      "50% increase in cross-team collaboration projects",
      "Implementation of monthly innovation challenges",
      "25% improvement in employee satisfaction scores"
    ],
    testimonial: {
      quote: "The Goa retreat transformed how our teams work together. The innovation mindset we developed there has become part of our DNA and drives everything we do.",
      author: "Dr. Sarah Patel",
      position: "Chief Innovation Officer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    metrics: {
      satisfaction: 4.7,
      engagement: 89,
      roi: "280%"
    },
    downloadUrl: "/case-studies/healthtech-solutions.pdf"
  },
  {
    id: 4,
    title: "Manufacturing Giant's Safety Culture Transformation",
    company: "Industrial Manufacturing Ltd",
    industry: "manufacturing",
    objective: "culture",
    teamSize: 150,
    location: "Mumbai",
    duration: "2 days",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    challenge: "A large manufacturing company needed to transform their safety culture and improve communication between floor workers and management.",
    solution: "Multi-level engagement program with safety leadership workshops, communication training, and team-building activities designed for diverse workforce.",
    results: [
      "Zero safety incidents for 8 consecutive months",
      "70% improvement in safety reporting rates",
      "Enhanced communication between all organizational levels",
      "Implementation of peer safety mentorship program"
    ],
    testimonial: {
      quote: "The transformation in our safety culture has been remarkable. Our teams now proactively identify and address safety concerns, creating a truly collaborative environment.",
      author: "Rajesh Kumar",
      position: "Plant Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    metrics: {
      satisfaction: 4.6,
      engagement: 87,
      roi: "520%"
    },
    downloadUrl: "/case-studies/industrial-manufacturing.pdf"
  }
]

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedObjective, setSelectedObjective] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry
    const matchesObjective = selectedObjective === 'all' || study.objective === selectedObjective
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesIndustry && matchesObjective && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how leading companies across industries have transformed their teams 
            and achieved measurable business outcomes through our expertly designed offsites.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search case studies by company, industry, or challenge..."
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
            {/* Industry Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industryFilters.map((industry) => (
                  <Button
                    key={industry.id}
                    variant={selectedIndustry === industry.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry.id)}
                    className="flex items-center gap-2"
                  >
                    {industry.name}
                    <Badge variant="secondary" className="text-xs">
                      {industry.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Objective Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Objective</h3>
              <div className="flex flex-wrap gap-2">
                {objectiveFilters.map((objective) => (
                  <Button
                    key={objective.id}
                    variant={selectedObjective === objective.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedObjective(objective.id)}
                  >
                    {objective.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCaseStudies.length} Success Stories
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              Showing case studies matching your criteria
            </div>
          </div>

          <div className="space-y-12">
            {filteredCaseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-primary text-white">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="bg-white">
                        {study.objective}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-lg text-primary font-medium">{study.company}</p>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span>{study.teamSize} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{study.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-gray-400" />
                          <span>{study.date}</span>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                        <div className="space-y-2">
                          {study.results.slice(0, 3).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start gap-2 text-sm">
                              <Award className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{study.metrics.satisfaction}</div>
                          <div className="text-xs text-gray-500">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{study.metrics.engagement}%</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{study.metrics.roi}</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download Full Case Study
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 border-t">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <img 
                          src={study.testimonial.avatar} 
                          alt={study.testimonial.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of companies that have transformed their teams and achieved 
            measurable business outcomes through our expertly designed offsites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">350%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Participants Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

