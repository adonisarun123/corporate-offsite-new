// src/pages/packages/+Page.jsx
import { useState } from 'react'
import Seo from '../../components/Seo.jsx'
import { LayoutDefault } from '../../layouts/LayoutDefault.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import PackageCard from '../../components/PackageCard.jsx'
import { whatsappActions, trackCTAClick } from '../../utils/ctaActions.js'
import { Package, Clock, Users, TrendingUp, Sparkles } from 'lucide-react'

export { Page }

const packages = [
  {
    name: "Executive Leadership Retreat",
    duration: "3 days, 2 nights",
    teamSize: "10-20 executives",
    price: "₹25,000 per person",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
    includes: [
      "5-star luxury accommodation",
      "Executive meeting rooms",
      "Leadership workshops",
      "Strategic planning sessions",
      "Fine dining experience",
      "Airport transfers"
    ],
    description: "Premium offsite experience designed for C-suite and senior leadership teams focusing on strategy and vision.",
    popular: true,
    theme: "Leadership"
  },
  {
    name: "Team Bonding Special",
    duration: "2 days, 1 night",
    teamSize: "20-50 people",
    price: "₹8,500 per person",
    image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=400&h=300&fit=crop",
    includes: [
      "Resort accommodation",
      "Team building activities",
      "Conference facilities",
      "All meals included",
      "Evening entertainment",
      "Activity equipment"
    ],
    description: "Perfect for building stronger relationships and improving team communication through fun activities.",
    popular: true,
    theme: "Team Building"
  },
  {
    name: "Innovation Summit",
    duration: "2 days, 1 night",
    teamSize: "30-100 people",
    price: "₹12,000 per person",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    includes: [
      "Modern conference venue",
      "Innovation workshops",
      "Design thinking sessions",
      "Tech demo spaces",
      "Networking zones",
      "Coffee & refreshments"
    ],
    description: "Focused on creativity, innovation, and future planning with cutting-edge facilities.",
    popular: false,
    theme: "Innovation"
  },
  {
    name: "Wellness & Mindfulness Retreat",
    duration: "3 days, 2 nights",
    teamSize: "15-30 people",
    price: "₹15,000 per person",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
    includes: [
      "Wellness resort stay",
      "Yoga & meditation sessions",
      "Stress management workshops",
      "Spa treatments",
      "Healthy cuisine",
      "Nature activities"
    ],
    description: "Rejuvenate your team with wellness activities and mindfulness practices in serene locations.",
    popular: false,
    theme: "Wellness"
  },
  {
    name: "Adventure & Leadership",
    duration: "4 days, 3 nights",
    teamSize: "20-40 people",
    price: "₹18,000 per person",
    image: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=400&h=300&fit=crop",
    includes: [
      "Adventure resort accommodation",
      "Outdoor leadership challenges",
      "Trekking & camping",
      "Team survival activities",
      "Campfire sessions",
      "Safety equipment & guides"
    ],
    description: "Combine adventure sports with leadership development in scenic outdoor locations.",
    popular: false,
    theme: "Adventure"
  },
  {
    name: "Sales Kickoff Package",
    duration: "2 days, 1 night",
    teamSize: "50-200 people",
    price: "₹10,000 per person",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    includes: [
      "Large conference venue",
      "Breakout rooms",
      "Awards ceremony setup",
      "Motivational speakers",
      "Gala dinner",
      "Team competitions"
    ],
    description: "Energize your sales team with motivational sessions, recognition, and strategic planning.",
    popular: true,
    theme: "Sales"
  }
]

const themes = ['All', 'Leadership', 'Team Building', 'Innovation', 'Wellness', 'Adventure', 'Sales']
const durations = ['All', '2 days', '3 days', '4 days']
const teamSizes = ['All', 'Small (10-30)', 'Medium (30-50)', 'Large (50-100)', 'Very Large (100+)']

function Page() {
  const [selectedTheme, setSelectedTheme] = useState('All')
  const [selectedDuration, setSelectedDuration] = useState('All')
  const [selectedTeamSize, setSelectedTeamSize] = useState('All')

  const filteredPackages = packages.filter(pkg => {
    const themeMatch = selectedTheme === 'All' || pkg.theme === selectedTheme
    
    const durationMatch = selectedDuration === 'All' || (() => {
      const days = parseInt(pkg.duration.split(' ')[0])
      return selectedDuration === `${days} days`
    })()
    
    const teamSizeMatch = selectedTeamSize === 'All' || (() => {
      const minSize = parseInt(pkg.teamSize.split('-')[0])
      const maxSize = parseInt(pkg.teamSize.split('-')[1])
      
      switch(selectedTeamSize) {
        case 'Small (10-30)': return minSize >= 10 && maxSize <= 30
        case 'Medium (30-50)': return minSize >= 30 && maxSize <= 50
        case 'Large (50-100)': return minSize >= 50 && maxSize <= 100
        case 'Very Large (100+)': return minSize >= 100
        default: return true
      }
    })()
    
    return themeMatch && durationMatch && teamSizeMatch
  })

  return (
    <LayoutDefault>
      <Seo
        title="Corporate Offsite Packages - All-Inclusive Team Retreat Solutions"
        description="Ready-to-book corporate offsite packages with venues, activities, and meals included. From 2-day team building to week-long leadership retreats. Get instant quotes."
        canonical="/packages"
        keywords="corporate offsite packages, team retreat packages, all inclusive offsites, corporate packages, team building packages, leadership retreat packages, company offsite deals"
        image="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1200&h=630&fit=crop"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "Corporate Offsite Packages",
          "description": "All-inclusive corporate offsite packages",
          "url": "https://corporate-offsite-experts.com/packages",
          "itemListElement": packages.map((pkg, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "name": pkg.name,
            "description": pkg.description,
            "price": pkg.price,
            "priceCurrency": "INR",
            "itemOffered": {
              "@type": "TravelAction",
              "name": pkg.name,
              "duration": pkg.duration
            }
          }))
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            All-Inclusive Offsite Packages
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Carefully curated packages that take the stress out of planning. 
            Everything you need for a successful offsite in one complete solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => {
                trackCTAClick('browse_packages')
              }}
            >
              <Package className="h-5 w-5 mr-2" />
              Browse Packages
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                trackCTAClick('custom_package_request')
                whatsappActions.proposal('I need a custom package for my corporate offsite')
              }}
            >
              Request Custom Package
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-1">All-Inclusive</h3>
              <p className="text-sm text-gray-600">Venue, activities, meals & more</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">Best Value</h3>
              <p className="text-sm text-gray-600">Save 20-30% vs booking separately</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Time-Saving</h3>
              <p className="text-sm text-gray-600">Pre-planned itineraries ready to go</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Customizable</h3>
              <p className="text-sm text-gray-600">Adapt any package to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Theme Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
              >
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Team Size Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={selectedTeamSize}
                onChange={(e) => setSelectedTeamSize(e.target.value)}
              >
                {teamSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Showing {filteredPackages.length} packages
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <PackageCard key={index} package_={pkg} />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No packages found matching your criteria.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedTheme('All')
                  setSelectedDuration('All')
                  setSelectedTeamSize('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every team is unique. Let us create a package tailored to your specific goals, 
            budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-white/90"
              onClick={() => {
                trackCTAClick('create_custom_package')
                whatsappActions.proposal('I want to create a custom offsite package')
              }}
            >
              Create Custom Package
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => {
                trackCTAClick('package_consultation')
                phoneActions.scheduleCall('package consultation')
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
