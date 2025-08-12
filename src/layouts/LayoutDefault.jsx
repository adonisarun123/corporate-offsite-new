// src/layouts/LayoutDefault.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { MapPin, Phone, MessageCircle, Star, Users, Calendar, Shield, Award } from 'lucide-react'
import { whatsappActions, phoneActions, formActions, trackCTAClick } from '../utils/ctaActions.js'

export { LayoutDefault }

function LayoutDefault({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Corporate Offsite</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/destinations" className="text-gray-700 hover:text-primary transition-colors">Destinations</Link>
            <Link to="/venues" className="text-gray-700 hover:text-primary transition-colors">Venues</Link>
            <Link to="/activities" className="text-gray-700 hover:text-primary transition-colors">Activities</Link>
            <Link to="/packages" className="text-gray-700 hover:text-primary transition-colors">Packages</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-primary transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => {
                trackCTAClick('whatsapp_header')
                whatsappActions.general()
              }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => {
                trackCTAClick('call_header')
                phoneActions.general()
              }}
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                trackCTAClick('plan_offsite_header')
                whatsappActions.proposal()
              }}
            >
              Plan My Offsite
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/destinations" className="text-gray-700 hover:text-primary transition-colors">Destinations</Link>
              <Link to="/venues" className="text-gray-700 hover:text-primary transition-colors">Venues</Link>
              <Link to="/activities" className="text-gray-700 hover:text-primary transition-colors">Activities</Link>
              <Link to="/packages" className="text-gray-700 hover:text-primary transition-colors">Packages</Link>
              <Link to="/case-studies" className="text-gray-700 hover:text-primary transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 justify-center"
                  onClick={() => {
                    trackCTAClick('whatsapp_mobile_menu')
                    whatsappActions.general()
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 justify-center"
                  onClick={() => {
                    trackCTAClick('call_mobile_menu')
                    phoneActions.general()
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    trackCTAClick('plan_offsite_mobile_menu')
                    whatsappActions.proposal()
                  }}
                >
                  Plan My Offsite
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Corporate Offsite</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating memorable corporate experiences across India and Southeast Asia.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => {
                  trackCTAClick('whatsapp_footer')
                  whatsappActions.general()
                }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/venues" className="text-gray-400 hover:text-white transition-colors">Venues</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Packages</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pan India & SE Asia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Corporate Offsite Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => {
            trackCTAClick('whatsapp_sticky_mobile')
            whatsappActions.general()
          }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => {
            trackCTAClick('call_sticky_mobile')
            phoneActions.general()
          }}
        >
          <Phone className="h-4 w-4" />
          Call
        </Button>
        <Button 
          className="flex-1 bg-primary hover:bg-primary/90"
          onClick={() => {
            trackCTAClick('plan_offsite_sticky_mobile')
            whatsappActions.proposal()
          }}
        >
          Plan Offsite
        </Button>
      </div>
    </div>
  )
}
