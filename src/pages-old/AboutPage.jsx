import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Users, Award, Shield, Target, MapPin, Calendar, Star, CheckCircle } from 'lucide-react'

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    bio: "15+ years in corporate events and hospitality. Former VP at leading event management company.",
    expertise: ["Strategic Planning", "Client Relations", "Team Leadership"]
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "12+ years in operations and logistics. Expert in venue management and activity coordination.",
    expertise: ["Operations", "Logistics", "Vendor Management"]
  },
  {
    name: "Sarah Chen",
    role: "International Partnerships",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "10+ years in international business. Manages partnerships across SE Asia and GCC regions.",
    expertise: ["International Relations", "Partnership Development", "Cultural Intelligence"]
  },
  {
    name: "Amit Patel",
    role: "Activity Design Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "8+ years in team building and leadership development. Certified facilitator and coach.",
    expertise: ["Team Building", "Leadership Development", "Facilitation"]
  }
]

const stats = [
  { number: "500+", label: "Companies Served", icon: <Users className="h-8 w-8" /> },
  { number: "1000+", label: "Successful Offsites", icon: <Calendar className="h-8 w-8" /> },
  { number: "50+", label: "Destinations", icon: <MapPin className="h-8 w-8" /> },
  { number: "4.8", label: "Average Rating", icon: <Star className="h-8 w-8" /> }
]

const values = [
  {
    title: "Excellence",
    description: "We strive for perfection in every detail, from venue selection to activity execution.",
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    title: "Safety First",
    description: "Comprehensive safety protocols and risk management for all activities and venues.",
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    title: "Results Driven",
    description: "Focused on measurable outcomes that strengthen teams and drive business results.",
    icon: <Target className="h-8 w-8 text-primary" />
  },
  {
    title: "Cultural Sensitivity",
    description: "Deep understanding of local cultures and customs across all our destinations.",
    icon: <Users className="h-8 w-8 text-primary" />
  }
]

const milestones = [
  { year: "2018", event: "Founded Corporate-Offsite", description: "Started with a vision to transform corporate team experiences" },
  { year: "2019", event: "First 100 Companies", description: "Reached milestone of serving 100+ companies across India" },
  { year: "2020", event: "International Expansion", description: "Expanded to Singapore and Dubai markets" },
  { year: "2021", event: "Digital Innovation", description: "Launched virtual and hybrid offsite solutions" },
  { year: "2022", event: "500+ Companies", description: "Crossed 500 companies served with 95% retention rate" },
  { year: "2023", event: "SE Asia Growth", description: "Expanded to Thailand, Indonesia, and Philippines" },
  { year: "2024", event: "Industry Recognition", description: "Awarded 'Best Corporate Event Company' by Business Today" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Corporate-Offsite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're passionate about creating transformative team experiences that strengthen bonds, 
            develop leadership, and drive business results across India, Southeast Asia, and GCC regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Work With Us
            </Button>
            <Button variant="outline" size="lg">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Corporate-Offsite was born from a simple observation: most corporate 
                  offsites were either poorly planned or lacked meaningful impact on team dynamics and 
                  business outcomes.
                </p>
                <p>
                  Our founders, with combined 30+ years in corporate events and hospitality, set out to 
                  create a new standard for corporate team experiences. We believe that well-designed 
                  offsites can be transformative—strengthening relationships, developing leadership 
                  capabilities, and driving measurable business results.
                </p>
                <p>
                  Today, we're proud to be the trusted partner for 500+ companies across India, 
                  Southeast Asia, and GCC regions, with a 95% client retention rate and 4.8-star 
                  average rating.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from venue selection to activity design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals passionate about creating exceptional team experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-sm">
                    {member.bio}
                  </CardDescription>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform corporate team experiences.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-white">{milestone.year}</Badge>
                          <CardTitle className="text-lg">{milestone.event}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create an unforgettable offsite experience for your team. Get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Planning Your Offsite
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

