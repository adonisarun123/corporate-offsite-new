import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Filter, Calendar, Clock, User, ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react'

const categoryFilters = [
  { id: 'all', name: 'All Posts', count: 24 },
  { id: 'leadership', name: 'Leadership', count: 8 },
  { id: 'team-building', name: 'Team Building', count: 7 },
  { id: 'trends', name: 'Industry Trends', count: 5 },
  { id: 'tips', name: 'Tips & Guides', count: 4 }
]

const blogPosts = [
  {
    id: 1,
    title: "The Future of Corporate Team Building: Trends for 2024",
    slug: "future-corporate-team-building-2024",
    category: "trends",
    excerpt: "Explore the latest trends shaping corporate team building, from virtual reality experiences to sustainability-focused activities that are transforming how teams connect and grow.",
    content: "As we move into 2024, corporate team building is evolving rapidly...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      role: "Team Building Expert"
    },
    publishDate: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tags: ["trends", "innovation", "team building", "2024"],
    featured: true,
    views: 2450
  },
  {
    id: 2,
    title: "Building High-Performance Teams: A Leader's Guide",
    slug: "building-high-performance-teams-guide",
    category: "leadership",
    excerpt: "Discover the essential strategies and frameworks that successful leaders use to build and maintain high-performance teams in today's competitive business environment.",
    content: "High-performance teams don't happen by accident...",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      role: "Leadership Coach"
    },
    publishDate: "2024-03-12",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    tags: ["leadership", "performance", "management", "strategy"],
    featured: false,
    views: 1890
  },
  {
    id: 3,
    title: "Remote Team Building: Strategies That Actually Work",
    slug: "remote-team-building-strategies",
    category: "team-building",
    excerpt: "Learn proven strategies for building strong team connections in remote and hybrid work environments, with practical activities and tools that drive real engagement.",
    content: "Remote work has fundamentally changed how teams interact...",
    author: {
      name: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      role: "Remote Work Specialist"
    },
    publishDate: "2024-03-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    tags: ["remote work", "team building", "virtual activities", "engagement"],
    featured: true,
    views: 3120
  },
  {
    id: 4,
    title: "Measuring ROI of Corporate Offsites: A Complete Framework",
    slug: "measuring-roi-corporate-offsites",
    category: "tips",
    excerpt: "A comprehensive guide to measuring the return on investment of your corporate offsites, including key metrics, measurement tools, and reporting frameworks.",
    content: "Measuring the ROI of corporate offsites can be challenging...",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "Business Analyst"
    },
    publishDate: "2024-03-08",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["ROI", "measurement", "analytics", "business value"],
    featured: false,
    views: 1650
  },
  {
    id: 5,
    title: "Creating Psychological Safety in Team Environments",
    slug: "psychological-safety-team-environments",
    category: "leadership",
    excerpt: "Understand the critical role of psychological safety in team performance and learn practical strategies to create environments where team members feel safe to take risks and share ideas.",
    content: "Psychological safety is the foundation of high-performing teams...",
    author: {
      name: "Dr. Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
      role: "Organizational Psychologist"
    },
    publishDate: "2024-03-05",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    tags: ["psychological safety", "team dynamics", "leadership", "culture"],
    featured: false,
    views: 2280
  },
  {
    id: 6,
    title: "The Science Behind Effective Team Building Activities",
    slug: "science-effective-team-building",
    category: "team-building",
    excerpt: "Dive into the research and psychology behind what makes team building activities truly effective, and how to choose activities that create lasting behavioral change.",
    content: "Not all team building activities are created equal...",
    author: {
      name: "Prof. James Wilson",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      role: "Behavioral Scientist"
    },
    publishDate: "2024-03-02",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    tags: ["science", "psychology", "team building", "research"],
    featured: false,
    views: 1920
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, practical guides, and industry trends to help you build stronger teams 
            and create more effective corporate offsites.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles, guides, and insights..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((category) => (
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
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              {filteredPosts.length} articles found
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded text-sm">
                      {post.views.toLocaleString()} views
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category.replace('-', ' ')}
                      </Badge>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Author & Date */}
                      <div className="flex items-center gap-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{post.author.role}</div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(post.publishDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Button className="w-full group">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded text-xs">
                    {post.views.toLocaleString()} views
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category.replace('-', ' ')}
                    </Badge>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Author & Date */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-900">{post.author.name}</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles, guides, and industry insights delivered to your inbox monthly.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most read content across different categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Building</h3>
              <p className="text-gray-600 mb-4">
                Practical strategies and innovative approaches to building stronger, more cohesive teams.
              </p>
              <Button variant="outline" size="sm">
                Explore Articles
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h3>
              <p className="text-gray-600 mb-4">
                Insights and frameworks for developing leadership skills and building high-performance cultures.
              </p>
              <Button variant="outline" size="sm">
                Explore Articles
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Trends</h3>
              <p className="text-gray-600 mb-4">
                Stay ahead with the latest trends and innovations shaping the future of corporate team development.
              </p>
              <Button variant="outline" size="sm">
                Explore Articles
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

