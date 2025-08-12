import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import { Search, Filter, Clock, Users, MapPin, Star } from 'lucide-react'

const activityCategories = [
  { id: 'all', name: 'All Activities', count: 36 },
  { id: 'leadership', name: 'Leadership', count: 12 },
  { id: 'collaboration', name: 'Team Building', count: 15 },
  { id: 'wellness', name: 'Wellness', count: 9 }
]

const difficultyLevels = [
  { id: 'all', name: 'All Levels' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Challenging' }
]

const sampleActivities = [
  // Leadership Activities
  {
    id: 1,
    title: "Leadership Challenge Course",
    category: "leadership",
    difficulty: "medium",
    duration: "4 hours",
    participants: "20-50 people",
    location: "Outdoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "Outdoor leadership development program with problem-solving challenges and team coordination exercises.",
    learningOutcomes: ["Enhanced leadership skills", "Improved decision making", "Team coordination", "Problem solving"],
    weatherDependent: true,
    price: "₹2,500 per person"
  },
  {
    id: 2,
    title: "Executive Coaching Session",
    category: "leadership",
    difficulty: "hard",
    duration: "5 hours",
    participants: "10-20 people",
    location: "Indoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    description: "Intensive executive coaching focused on leadership development, strategic thinking, and personal growth.",
    learningOutcomes: ["Strategic thinking", "Leadership presence", "Executive skills", "Personal development"],
    weatherDependent: false,
    price: "₹4,500 per person"
  },
  {
    id: 3,
    title: "Leadership Simulation Game",
    category: "leadership",
    difficulty: "medium",
    duration: "6 hours",
    participants: "25-60 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    description: "Business simulation game where teams navigate complex leadership scenarios and make strategic decisions.",
    learningOutcomes: ["Strategic decision making", "Crisis management", "Team leadership", "Business acumen"],
    weatherDependent: false,
    price: "₹3,200 per person"
  },
  {
    id: 4,
    title: "360-Degree Leadership Assessment",
    category: "leadership",
    difficulty: "easy",
    duration: "3 hours",
    participants: "15-30 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description: "Comprehensive leadership assessment with peer feedback, self-reflection, and development planning.",
    learningOutcomes: ["Self-awareness", "Leadership style", "Feedback skills", "Development planning"],
    weatherDependent: false,
    price: "₹2,800 per person"
  },
  {
    id: 5,
    title: "Crisis Leadership Workshop",
    category: "leadership",
    difficulty: "hard",
    duration: "4 hours",
    participants: "20-40 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    description: "High-pressure scenarios designed to develop crisis leadership skills and decision-making under stress.",
    learningOutcomes: ["Crisis management", "Pressure handling", "Quick decision making", "Team coordination"],
    weatherDependent: false,
    price: "₹3,800 per person"
  },
  {
    id: 6,
    title: "Emotional Intelligence Training",
    category: "leadership",
    difficulty: "medium",
    duration: "5 hours",
    participants: "15-35 people",
    location: "Indoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    description: "Develop emotional intelligence skills essential for effective leadership and team management.",
    learningOutcomes: ["Emotional awareness", "Empathy", "Social skills", "Self-regulation"],
    weatherDependent: false,
    price: "₹2,600 per person"
  },

  // Collaboration/Team Building Activities
  {
    id: 7,
    title: "Innovation Workshop",
    category: "collaboration",
    difficulty: "easy",
    duration: "6 hours",
    participants: "15-30 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    description: "Interactive workshop focused on creative thinking, innovation methodologies, and collaborative problem-solving.",
    learningOutcomes: ["Creative problem solving", "Innovation mindset", "Collaborative thinking", "Design thinking"],
    weatherDependent: false,
    price: "₹1,800 per person"
  },
  {
    id: 8,
    title: "Escape Room Challenge",
    category: "collaboration",
    difficulty: "medium",
    duration: "3 hours",
    participants: "15-25 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Team-based puzzle solving and escape room challenges designed to improve communication and collaboration.",
    learningOutcomes: ["Team communication", "Problem solving", "Time management", "Collaboration"],
    weatherDependent: false,
    price: "₹1,500 per person"
  },
  {
    id: 9,
    title: "Adventure Sports",
    category: "collaboration",
    difficulty: "hard",
    duration: "6 hours",
    participants: "20-40 people",
    location: "Outdoor",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    description: "Thrilling adventure sports including rock climbing, rappelling, and team challenges in natural settings.",
    learningOutcomes: ["Trust building", "Risk management", "Team support", "Confidence building"],
    weatherDependent: true,
    price: "₹3,200 per person"
  },
  {
    id: 10,
    title: "Cooking Team Challenge",
    category: "collaboration",
    difficulty: "easy",
    duration: "4 hours",
    participants: "20-50 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Collaborative cooking challenge where teams work together to create gourmet meals under time pressure.",
    learningOutcomes: ["Team coordination", "Communication", "Time management", "Creative collaboration"],
    weatherDependent: false,
    price: "₹2,200 per person"
  },
  {
    id: 11,
    title: "Treasure Hunt Adventure",
    category: "collaboration",
    difficulty: "medium",
    duration: "5 hours",
    participants: "25-60 people",
    location: "Outdoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "City-wide treasure hunt combining technology, problem-solving, and teamwork across multiple locations.",
    learningOutcomes: ["Strategic thinking", "Team coordination", "Problem solving", "Navigation skills"],
    weatherDependent: true,
    price: "₹1,900 per person"
  },
  {
    id: 12,
    title: "Improv Theater Workshop",
    category: "collaboration",
    difficulty: "easy",
    duration: "3 hours",
    participants: "15-30 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop",
    description: "Improvisational theater exercises to build confidence, creativity, and spontaneous collaboration.",
    learningOutcomes: ["Spontaneous thinking", "Confidence building", "Active listening", "Creative expression"],
    weatherDependent: false,
    price: "₹1,600 per person"
  },
  {
    id: 13,
    title: "Virtual Reality Team Missions",
    category: "collaboration",
    difficulty: "medium",
    duration: "4 hours",
    participants: "12-24 people",
    location: "Indoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
    description: "Cutting-edge VR team missions requiring coordination, communication, and strategic thinking.",
    learningOutcomes: ["Digital collaboration", "Spatial awareness", "Team coordination", "Technology adaptation"],
    weatherDependent: false,
    price: "₹3,500 per person"
  },
  {
    id: 14,
    title: "Music Band Formation",
    category: "collaboration",
    difficulty: "easy",
    duration: "6 hours",
    participants: "20-40 people",
    location: "Indoor",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "Form teams to create and perform music together, fostering creativity and synchronized teamwork.",
    learningOutcomes: ["Creative collaboration", "Rhythm and timing", "Performance confidence", "Artistic expression"],
    weatherDependent: false,
    price: "₹2,400 per person"
  },
  {
    id: 15,
    title: "Dragon Boat Racing",
    category: "collaboration",
    difficulty: "medium",
    duration: "4 hours",
    participants: "30-60 people",
    location: "Outdoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    description: "Traditional dragon boat racing requiring perfect synchronization, communication, and team spirit.",
    learningOutcomes: ["Synchronization", "Team rhythm", "Physical coordination", "Competitive spirit"],
    weatherDependent: true,
    price: "₹2,800 per person"
  },
  {
    id: 16,
    title: "Design Thinking Workshop",
    category: "collaboration",
    difficulty: "medium",
    duration: "7 hours",
    participants: "20-35 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "Human-centered design process workshop focusing on empathy, ideation, and prototyping.",
    learningOutcomes: ["User empathy", "Creative ideation", "Prototyping", "Iterative thinking"],
    weatherDependent: false,
    price: "₹2,600 per person"
  },
  {
    id: 17,
    title: "Startup Pitch Competition",
    category: "collaboration",
    difficulty: "hard",
    duration: "8 hours",
    participants: "25-50 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    description: "Teams develop and pitch startup ideas, combining creativity, business acumen, and presentation skills.",
    learningOutcomes: ["Business thinking", "Presentation skills", "Market analysis", "Team strategy"],
    weatherDependent: false,
    price: "₹2,900 per person"
  },
  {
    id: 18,
    title: "Robotics Team Challenge",
    category: "collaboration",
    difficulty: "hard",
    duration: "6 hours",
    participants: "16-32 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    description: "Build and program robots to complete team challenges, combining technical skills with collaboration.",
    learningOutcomes: ["Technical collaboration", "Problem solving", "Programming basics", "Engineering thinking"],
    weatherDependent: false,
    price: "₹3,800 per person"
  },
  {
    id: 19,
    title: "Charity Project Challenge",
    category: "collaboration",
    difficulty: "medium",
    duration: "5 hours",
    participants: "30-80 people",
    location: "Indoor/Outdoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    description: "Teams work together on meaningful charity projects, building community impact while strengthening bonds.",
    learningOutcomes: ["Social impact", "Project management", "Community building", "Purpose-driven collaboration"],
    weatherDependent: false,
    price: "₹1,200 per person"
  },
  {
    id: 20,
    title: "Cultural Exchange Workshop",
    category: "collaboration",
    difficulty: "easy",
    duration: "4 hours",
    participants: "20-50 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    description: "Explore different cultures through interactive activities, food, and traditions to build inclusive teams.",
    learningOutcomes: ["Cultural awareness", "Inclusion", "Global mindset", "Diversity appreciation"],
    weatherDependent: false,
    price: "₹1,800 per person"
  },
  {
    id: 21,
    title: "Sports Tournament",
    category: "collaboration",
    difficulty: "medium",
    duration: "6 hours",
    participants: "40-100 people",
    location: "Outdoor",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Multi-sport tournament with various games designed to promote healthy competition and team spirit.",
    learningOutcomes: ["Healthy competition", "Team spirit", "Physical fitness", "Sportsmanship"],
    weatherDependent: true,
    price: "₹1,500 per person"
  },

  // Wellness Activities
  {
    id: 22,
    title: "Wellness Retreat",
    category: "wellness",
    difficulty: "easy",
    duration: "8 hours",
    participants: "10-40 people",
    location: "Indoor/Outdoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    description: "Comprehensive wellness program including yoga, meditation, mindfulness sessions, and stress management techniques.",
    learningOutcomes: ["Stress management", "Work-life balance", "Mindfulness", "Team wellness"],
    weatherDependent: false,
    price: "₹2,200 per person"
  },
  {
    id: 23,
    title: "Mindfulness & Meditation",
    category: "wellness",
    difficulty: "easy",
    duration: "3 hours",
    participants: "15-50 people",
    location: "Indoor/Outdoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Guided mindfulness and meditation sessions to reduce stress and improve mental clarity.",
    learningOutcomes: ["Mental clarity", "Stress reduction", "Focus improvement", "Emotional balance"],
    weatherDependent: false,
    price: "₹1,500 per person"
  },
  {
    id: 24,
    title: "Yoga & Breathing Workshop",
    category: "wellness",
    difficulty: "easy",
    duration: "4 hours",
    participants: "20-60 people",
    location: "Indoor/Outdoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    description: "Yoga sessions combined with breathing techniques to promote physical and mental well-being.",
    learningOutcomes: ["Physical flexibility", "Breathing techniques", "Body awareness", "Relaxation"],
    weatherDependent: false,
    price: "₹1,800 per person"
  },
  {
    id: 25,
    title: "Nutrition & Healthy Living",
    category: "wellness",
    difficulty: "easy",
    duration: "3 hours",
    participants: "25-75 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    description: "Interactive workshop on nutrition, healthy eating habits, and lifestyle choices for better well-being.",
    learningOutcomes: ["Nutrition knowledge", "Healthy habits", "Lifestyle improvement", "Energy management"],
    weatherDependent: false,
    price: "₹1,200 per person"
  },
  {
    id: 26,
    title: "Stress Management Bootcamp",
    category: "wellness",
    difficulty: "medium",
    duration: "5 hours",
    participants: "15-35 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Comprehensive stress management program with practical tools and techniques for workplace wellness.",
    learningOutcomes: ["Stress identification", "Coping strategies", "Resilience building", "Work-life balance"],
    weatherDependent: false,
    price: "₹2,400 per person"
  },
  {
    id: 27,
    title: "Nature Therapy Walk",
    category: "wellness",
    difficulty: "easy",
    duration: "4 hours",
    participants: "20-50 people",
    location: "Outdoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    description: "Guided nature walks combined with mindfulness exercises to reconnect with nature and reduce stress.",
    learningOutcomes: ["Nature connection", "Mindful walking", "Environmental awareness", "Mental restoration"],
    weatherDependent: true,
    price: "₹1,600 per person"
  },
  {
    id: 28,
    title: "Digital Detox Workshop",
    category: "wellness",
    difficulty: "medium",
    duration: "6 hours",
    participants: "15-40 people",
    location: "Indoor/Outdoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    description: "Learn to disconnect from digital devices and reconnect with yourself and colleagues through analog activities.",
    learningOutcomes: ["Digital awareness", "Offline engagement", "Present moment focus", "Real connections"],
    weatherDependent: false,
    price: "₹2,000 per person"
  },
  {
    id: 29,
    title: "Art Therapy Session",
    category: "wellness",
    difficulty: "easy",
    duration: "4 hours",
    participants: "12-30 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    description: "Therapeutic art activities to express emotions, reduce stress, and promote mental well-being.",
    learningOutcomes: ["Emotional expression", "Creative therapy", "Stress relief", "Self-discovery"],
    weatherDependent: false,
    price: "₹2,100 per person"
  },
  {
    id: 30,
    title: "Sleep & Recovery Workshop",
    category: "wellness",
    difficulty: "easy",
    duration: "3 hours",
    participants: "20-60 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=400&h=300&fit=crop",
    description: "Learn about sleep hygiene, recovery techniques, and creating healthy sleep habits for better performance.",
    learningOutcomes: ["Sleep optimization", "Recovery techniques", "Energy management", "Performance improvement"],
    weatherDependent: false,
    price: "₹1,400 per person"
  },

  // Additional Leadership Activities
  {
    id: 31,
    title: "Public Speaking Mastery",
    category: "leadership",
    difficulty: "medium",
    duration: "5 hours",
    participants: "12-25 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    description: "Intensive public speaking workshop to build confidence and communication skills for leaders.",
    learningOutcomes: ["Public speaking", "Confidence building", "Communication skills", "Presentation mastery"],
    weatherDependent: false,
    price: "₹3,200 per person"
  },
  {
    id: 32,
    title: "Negotiation Skills Workshop",
    category: "leadership",
    difficulty: "hard",
    duration: "6 hours",
    participants: "16-30 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    description: "Advanced negotiation techniques and strategies for business leaders and managers.",
    learningOutcomes: ["Negotiation tactics", "Conflict resolution", "Persuasion skills", "Win-win thinking"],
    weatherDependent: false,
    price: "₹3,600 per person"
  },
  {
    id: 33,
    title: "Change Management Simulation",
    category: "leadership",
    difficulty: "hard",
    duration: "7 hours",
    participants: "20-45 people",
    location: "Indoor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "Complex simulation exercise focusing on leading organizational change and transformation.",
    learningOutcomes: ["Change leadership", "Transformation management", "Stakeholder engagement", "Adaptive leadership"],
    weatherDependent: false,
    price: "₹4,200 per person"
  },
  {
    id: 34,
    title: "Mentoring & Coaching Skills",
    category: "leadership",
    difficulty: "medium",
    duration: "4 hours",
    participants: "15-35 people",
    location: "Indoor",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description: "Develop mentoring and coaching skills to support team development and growth.",
    learningOutcomes: ["Coaching techniques", "Mentoring skills", "Development planning", "Feedback delivery"],
    weatherDependent: false,
    price: "₹2,900 per person"
  },
  {
    id: 35,
    title: "Strategic Planning Workshop",
    category: "leadership",
    difficulty: "hard",
    duration: "8 hours",
    participants: "18-40 people",
    location: "Indoor",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    description: "Comprehensive strategic planning session with frameworks, tools, and real-world applications.",
    learningOutcomes: ["Strategic thinking", "Planning frameworks", "Vision setting", "Goal alignment"],
    weatherDependent: false,
    price: "₹4,800 per person"
  },
  {
    id: 36,
    title: "Cross-Cultural Leadership",
    category: "leadership",
    difficulty: "medium",
    duration: "5 hours",
    participants: "20-50 people",
    location: "Indoor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    description: "Develop leadership skills for managing diverse, multicultural teams in global environments.",
    learningOutcomes: ["Cultural intelligence", "Global leadership", "Diversity management", "Inclusive leadership"],
    weatherDependent: false,
    price: "₹3,400 per person"
  }
]

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredActivities = sampleActivities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || activity.difficulty === selectedDifficulty
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    
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
            Engaging activities designed to strengthen team bonds, develop leadership skills, 
            and create lasting memories. Choose from our curated collection of proven team experiences.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search activities..."
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
              {filteredActivities.length} Activities Found
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              Showing activities matching your criteria
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${
                      activity.category === 'leadership' ? 'bg-purple-100 text-purple-800' :
                      activity.category === 'collaboration' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {activity.category}
                    </Badge>
                    <Badge variant={
                      activity.difficulty === 'easy' ? 'secondary' :
                      activity.difficulty === 'medium' ? 'default' : 'destructive'
                    }>
                      {activity.difficulty}
                    </Badge>
                  </div>
                  {activity.weatherDependent && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white">
                        Weather Dependent
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Activity Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{activity.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="font-semibold text-primary">
                        {activity.price}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Learning Outcomes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {activity.learningOutcomes.slice(0, 2).map((outcome, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add to Itinerary</Button>
                      <Button variant="outline" className="flex-1">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Activity?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our team can design bespoke activities tailored to your specific objectives and team dynamics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Custom Activity
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Speak with Activity Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

