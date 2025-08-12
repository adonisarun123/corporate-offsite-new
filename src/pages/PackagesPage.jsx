import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import PackageCard from '../components/PackageCard.jsx'
import { Search, Filter, MapPin, Users, Calendar, Star, Check, Wifi, Car, Coffee, Utensils } from 'lucide-react'
import { whatsappActions, trackCTAClick } from '../utils/ctaActions.js'

const packageCategories = [
  { id: 'all', name: 'All Packages', count: 12 },
  { id: 'leadership', name: 'Leadership', count: 4 },
  { id: 'collaboration', name: 'Team Building', count: 5 },
  { id: 'wellness', name: 'Wellness', count: 3 }
]

const budgetRanges = [
  { id: 'all', name: 'All Budgets' },
  { id: 'budget', name: '₹3-8K pp' },
  { id: 'mid', name: '₹8-15K pp' },
  { id: 'premium', name: '₹15K+ pp' }
]

const samplePackages = [
  {
    id: 1,
    title: "Bangalore Leadership Intensive",
    category: "leadership",
    budget: "mid",
    priceRange: "₹8-12K pp",
    duration: "3 days",
    location: "Bangalore, Coorg",
    participants: "50-100 people",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    description: "3-day intensive leadership development program in tech capital with executive coaching and strategic workshops.",
    highlights: ["Executive coaching", "Leadership assessments", "Networking sessions", "Strategic planning"],
    inclusions: ["Accommodation", "Meals", "Activities", "Transportation"],
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "Goa Team Bonding Escape",
    category: "collaboration",
    budget: "budget",
    priceRange: "₹6-9K pp",
    duration: "2 days",
    location: "Goa",
    participants: "30-80 people",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Beach-side team building with fun activities, cultural experiences, and relaxation in beautiful Goa.",
    highlights: ["Beach activities", "Cultural experiences", "Sunset cruise", "Team challenges"],
    inclusions: ["Beach resort", "Water sports", "Team activities", "Meals"],
    badge: null
  },
  {
    id: 3,
    title: "Singapore Innovation Summit",
    category: "collaboration",
    budget: "premium",
    priceRange: "₹25-35K pp",
    duration: "4 days",
    location: "Singapore",
    participants: "20-50 people",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
    description: "International offsite focused on innovation, global perspectives, and cutting-edge business practices.",
    highlights: ["Innovation labs", "Global networking", "Cultural immersion", "Tech tours"],
    inclusions: ["5-star hotel", "Innovation labs", "City tours", "Networking"],
    badge: "Premium"
  },
  {
    id: 4,
    title: "Mumbai Business Accelerator",
    category: "leadership",
    budget: "mid",
    priceRange: "₹10-15K pp",
    duration: "3 days",
    location: "Mumbai",
    participants: "40-120 people",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop",
    description: "Business-focused program in India's financial capital with industry networking and strategic sessions.",
    highlights: ["Industry networking", "Business simulations", "Market insights", "Leadership workshops"],
    inclusions: ["Premium hotel", "Business center", "Networking events", "City experiences"],
    badge: null
  },
  {
    id: 5,
    title: "Wellness Retreat Rishikesh",
    category: "wellness",
    budget: "budget",
    priceRange: "₹5-8K pp",
    duration: "3 days",
    location: "Rishikesh",
    participants: "20-60 people",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    description: "Spiritual wellness retreat in the yoga capital of the world with meditation, yoga, and mindfulness sessions.",
    highlights: ["Yoga sessions", "Meditation workshops", "Spiritual guidance", "Nature walks"],
    inclusions: ["Ashram stay", "Vegetarian meals", "Yoga classes", "Spiritual sessions"],
    badge: "Wellness Focus"
  },
  {
    id: 6,
    title: "Dubai Luxury Experience",
    category: "leadership",
    budget: "premium",
    priceRange: "₹30-45K pp",
    duration: "4 days",
    location: "Dubai",
    participants: "25-75 people",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    description: "Luxury leadership retreat in Dubai with world-class facilities, exclusive experiences, and premium networking.",
    highlights: ["Luxury venues", "Executive experiences", "Desert safari", "Premium networking"],
    inclusions: ["5-star luxury hotel", "Premium experiences", "Fine dining", "Luxury transport"],
    badge: "Luxury"
  }
]

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBudget, setSelectedBudget] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPackages = samplePackages.filter(pkg => {
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory
    const matchesBudget = selectedBudget === 'all' || pkg.budget === selectedBudget
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesBudget && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Curated Offsite Packages
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready-to-go packages that combine the best venues, activities, and experiences 
            for different team objectives. Expertly curated for maximum impact and engagement.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search packages by location, type, or objective..."
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
              <h3 className="text-sm font-medium text-gray-700 mb-3">Package Type</h3>
              <div className="flex flex-wrap gap-2">
                {packageCategories.map((category) => (
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

            {/* Budget Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Budget Range</h3>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((budget) => (
                  <Button
                    key={budget.id}
                    variant={selectedBudget === budget.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBudget(budget.id)}
                  >
                    {budget.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredPackages.length} Packages Available
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              Showing packages matching your criteria
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {pkg.badge && (
                      <Badge className={`${
                        pkg.badge === 'Most Popular' ? 'bg-orange-100 text-orange-800' :
                        pkg.badge === 'Premium' || pkg.badge === 'Luxury' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {pkg.badge}
                      </Badge>
                    )}
                    <Badge className={`${
                      pkg.category === 'leadership' ? 'bg-purple-100 text-purple-800' :
                      pkg.category === 'collaboration' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {pkg.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded font-bold text-primary">
                    {pkg.priceRange}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Package Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>Ideal for {pkg.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{pkg.location}</span>
                      </div>
                    </div>

                    {/* Package Highlights */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Package Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {pkg.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-3 w-3 text-green-500" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Inclusions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.inclusions.map((inclusion, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {inclusion}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        Get Proposal
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can create a bespoke package tailored to your specific objectives, budget, and team requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                trackCTAClick('request_custom_package')
                whatsappActions.proposal('custom package tailored to our specific requirements')
              }}
            >
              Request Custom Package
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                trackCTAClick('speak_package_expert')
                whatsappActions.general('I\'d like to speak with a package expert to discuss our team offsite requirements.')
              }}
            >
              Speak with Package Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Curated Packages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our packages are designed by experts with years of experience in corporate team building and leadership development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                All packages have been tested with multiple teams and consistently deliver measurable outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Curation</h3>
              <p className="text-gray-600">
                Carefully selected venues, activities, and experiences that work synergistically for maximum impact.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Options</h3>
              <p className="text-gray-600">
                Packages can be customized to fit your team size, budget, and specific learning objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

