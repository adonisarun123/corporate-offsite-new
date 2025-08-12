// Comprehensive Destinations Data for India & Southeast Asia

export const destinations = [
  // INDIA DESTINATIONS
  {
    id: 'bangalore',
    name: "Bangalore",
    country: "India",
    region: "South India",
    slug: "bangalore",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop",
    description: "India's Silicon Valley offers modern conference facilities, tech-savvy venues, and excellent connectivity for corporate offsites.",
    longDescription: "Bangalore, India's Silicon Valley, is the perfect destination for corporate offsites that blend innovation with comfort. Known for its pleasant weather, cosmopolitan culture, and world-class infrastructure, Bangalore offers an ideal environment for team building, strategic planning, and corporate retreats. The city's tech-forward atmosphere inspires innovation while its numerous parks and cultural attractions provide perfect venues for team bonding activities.",
    badge: "Most Popular",
    highlights: ["Tech hub atmosphere", "Modern facilities", "Great connectivity", "Pleasant weather year-round"],
    bestTime: "October - March",
    gettingThere: "2 hours from Kempegowda International Airport to city venues",
    budget: "₹5-15K per person",
    teamSizes: ["20-200+ people"],
    activities: ["Leadership workshops", "Innovation labs", "City tours", "Team challenges", "Tech company visits"],
    venues: [
      {
        name: "The Leela Palace Bangalore",
        type: "Luxury Hotel",
        capacity: "200",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "spa"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Old Airport Road",
        description: "Luxury hotel with world-class conference facilities and stunning city views."
      },
      {
        name: "ITC Windsor Bangalore",
        type: "Business Hotel",
        capacity: "300",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "business center"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        rating: 4.7,
        location: "Golf Course Road",
        description: "Heritage luxury hotel with extensive conference facilities and landscaped gardens."
      },
      {
        name: "Eagleton Golf Resort",
        type: "Resort",
        capacity: "150",
        priceRange: "Mid-range",
        amenities: ["wifi", "parking", "catering", "golf", "spa"],
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop",
        rating: 4.6,
        location: "Bidadi",
        description: "Golf resort with team building facilities and outdoor activities, 45 minutes from city."
      }
    ]
  },
  {
    id: 'goa',
    name: "Goa",
    country: "India",
    region: "West India",
    slug: "goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    description: "Beach paradise perfect for relaxation-focused offsites with water sports and coastal team building activities.",
    longDescription: "Goa offers the perfect blend of work and relaxation for corporate offsites. With its pristine beaches, vibrant culture, and excellent hospitality infrastructure, Goa provides an ideal setting for team bonding and strategic retreats. The coastal environment promotes creativity and open communication, while the laid-back atmosphere helps teams unwind and connect on a deeper level.",
    badge: "Beach Paradise",
    highlights: ["Beautiful beaches", "Water sports", "Relaxed atmosphere", "Great cuisine", "Cultural experiences"],
    bestTime: "November - March",
    gettingThere: "1 hour from Dabolim Airport to most beach resorts",
    budget: "₹4-12K per person",
    teamSizes: ["15-100 people"],
    activities: ["Beach team building", "Water sports", "Sunset cruises", "Cultural tours", "Cooking classes"],
    venues: [
      {
        name: "Club Mahindra Goa",
        type: "Beach Resort",
        capacity: "120",
        priceRange: "Mid-range",
        amenities: ["wifi", "parking", "catering", "beach access", "pool"],
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        rating: 4.6,
        location: "Varca Beach",
        description: "Beachfront resort with excellent conference facilities and water sports."
      },
      {
        name: "The Zuri White Sands Resort",
        type: "Luxury Resort",
        capacity: "200",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "beach access", "spa", "multiple restaurants"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Varca Beach",
        description: "Luxury beachfront resort with extensive meeting facilities and team activities."
      }
    ]
  },
  {
    id: 'mumbai',
    name: "Mumbai",
    country: "India",
    region: "West India",
    slug: "mumbai",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1595815771614-4e4cd5e19b66?w=1200&h=600&fit=crop",
    description: "India's financial capital offering premium business venues and networking opportunities.",
    longDescription: "Mumbai, the commercial capital of India, provides an unparalleled business environment for corporate offsites. The city's fast-paced energy, combined with world-class infrastructure and connectivity, makes it ideal for high-level strategic meetings and leadership development programs. From luxury hotels to innovative co-working spaces, Mumbai offers diverse venue options to suit every corporate need.",
    badge: "Business Hub",
    highlights: ["Financial district access", "Premium hotels", "Business networking", "Cultural diversity", "Excellent connectivity"],
    bestTime: "November - February",
    gettingThere: "1.5 hours from international airport to city center",
    budget: "₹8-20K per person",
    teamSizes: ["25-300 people"],
    activities: ["Leadership summits", "Business simulations", "City tours", "Industry visits", "Networking events"],
    venues: [
      {
        name: "The Taj Mahal Palace",
        type: "Heritage Hotel",
        capacity: "500",
        priceRange: "Luxury",
        amenities: ["wifi", "parking", "catering", "multiple restaurants", "spa", "business center"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        rating: 4.9,
        location: "Colaba",
        description: "Iconic luxury hotel with world-class conference facilities and harbor views."
      },
      {
        name: "Grand Hyatt Mumbai",
        type: "Business Hotel",
        capacity: "400",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "business center", "spa"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        rating: 4.7,
        location: "Santacruz East",
        description: "Modern business hotel with extensive meeting facilities near the airport."
      }
    ]
  },
  {
    id: 'delhi',
    name: "Delhi NCR",
    country: "India",
    region: "North India",
    slug: "delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1580492516014-4a28466d55df?w=1200&h=600&fit=crop",
    description: "India's capital region with heritage venues, modern facilities, and government proximity.",
    longDescription: "Delhi NCR combines India's rich heritage with modern infrastructure, offering unique venues for corporate offsites. From historic palaces to contemporary business hotels, the region provides diverse options for teams. The proximity to government institutions and major corporations makes it ideal for high-level strategic meetings and policy discussions.",
    badge: "Capital Region",
    highlights: ["Historic venues", "Government proximity", "Cultural richness", "Modern infrastructure", "Business connections"],
    bestTime: "October - March",
    gettingThere: "1 hour from IGI Airport to central Delhi venues",
    budget: "₹6-18K per person",
    teamSizes: ["20-250 people"],
    activities: ["Heritage walks", "Government visits", "Cultural experiences", "Leadership retreats", "Policy workshops"],
    venues: [
      {
        name: "The Imperial New Delhi",
        type: "Heritage Hotel",
        capacity: "300",
        priceRange: "Luxury",
        amenities: ["wifi", "parking", "catering", "heritage architecture", "gardens"],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Connaught Place",
        description: "Art Deco heritage hotel with elegant conference facilities in the heart of Delhi."
      },
      {
        name: "ITC Maurya",
        type: "Business Hotel",
        capacity: "400",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "business center", "multiple restaurants"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        rating: 4.7,
        location: "Diplomatic Enclave",
        description: "Premier business hotel in the diplomatic area with world-class facilities."
      }
    ]
  },
  {
    id: 'kerala',
    name: "Kerala (Backwaters)",
    country: "India",
    region: "South India",
    slug: "kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
    description: "Serene backwaters and hill stations perfect for wellness retreats and mindful team building.",
    longDescription: "Kerala's backwaters and hill stations offer a tranquil setting for corporate wellness retreats and mindful team building. The state's natural beauty, Ayurvedic traditions, and peaceful environment create the perfect atmosphere for stress relief, creative thinking, and deep team bonding. Ideal for companies looking to combine business objectives with employee well-being.",
    badge: "Wellness Focus",
    highlights: ["Backwater cruises", "Ayurvedic wellness", "Hill stations", "Natural beauty", "Peaceful environment"],
    bestTime: "September - March",
    gettingThere: "2-3 hours from Kochi Airport to various locations",
    budget: "₹5-14K per person",
    teamSizes: ["15-80 people"],
    activities: ["Houseboat meetings", "Ayurvedic wellness", "Nature walks", "Meditation sessions", "Cultural performances"],
    venues: [
      {
        name: "Kumarakom Lake Resort",
        type: "Lake Resort",
        capacity: "100",
        priceRange: "Premium",
        amenities: ["wifi", "catering", "spa", "ayurveda", "boat transfers"],
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Kumarakom",
        description: "Luxury backwater resort with heritage villas and conference facilities."
      }
    ]
  },

  // SOUTHEAST ASIA DESTINATIONS
  {
    id: 'singapore',
    name: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    slug: "singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    description: "World-class facilities and innovation hub perfect for international corporate experiences.",
    longDescription: "Singapore stands as Southeast Asia's premier business destination, offering world-class infrastructure and a melting pot of cultures. Its strategic location, excellent connectivity, and reputation as an innovation hub make it ideal for international corporate offsites. The city-state's efficient systems, diverse experiences, and business-friendly environment create perfect conditions for strategic planning and team development.",
    badge: "Innovation Hub",
    highlights: ["World-class infrastructure", "Multicultural environment", "Innovation ecosystem", "Easy connectivity", "Safety and efficiency"],
    bestTime: "Year-round (tropical climate)",
    gettingThere: "30 minutes from Changi Airport to city center",
    budget: "₹25-45K per person",
    teamSizes: ["20-200 people"],
    activities: ["Innovation labs", "Cultural diversity workshops", "City tours", "Business visits", "Team challenges"],
    venues: [
      {
        name: "Marina Bay Sands",
        type: "Integrated Resort",
        capacity: "500",
        priceRange: "Luxury",
        amenities: ["wifi", "parking", "catering", "infinity pool", "shopping", "entertainment"],
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
        rating: 4.9,
        location: "Marina Bay",
        description: "Iconic resort with world-class convention facilities and stunning city views."
      },
      {
        name: "Shangri-La Singapore",
        type: "Luxury Hotel",
        capacity: "300",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "gardens", "spa", "multiple restaurants"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Orchard Road",
        description: "Garden oasis in the city with extensive meeting facilities and tropical landscaping."
      }
    ]
  },
  {
    id: 'bali',
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    slug: "bali",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=600&fit=crop",
    description: "Tropical paradise combining relaxation with inspiring cultural experiences for creative teams.",
    longDescription: "Bali offers a unique blend of tropical paradise and rich cultural heritage, making it an inspiring destination for corporate offsites. The island's spiritual atmosphere, stunning natural beauty, and warm hospitality create an environment that fosters creativity, team bonding, and personal reflection. Perfect for companies seeking transformative experiences that combine business objectives with cultural immersion.",
    badge: "Cultural Paradise",
    highlights: ["Tropical beauty", "Rich culture", "Spiritual atmosphere", "Adventure activities", "Wellness focus"],
    bestTime: "April - October (dry season)",
    gettingThere: "45 minutes from Ngurah Rai Airport to Ubud/Seminyak",
    budget: "₹15-30K per person",
    teamSizes: ["15-100 people"],
    activities: ["Cultural workshops", "Temple visits", "Adventure activities", "Cooking classes", "Wellness retreats"],
    venues: [
      {
        name: "COMO Shambhala Estate",
        type: "Wellness Resort",
        capacity: "60",
        priceRange: "Luxury",
        amenities: ["wifi", "spa", "wellness programs", "healthy cuisine", "nature setting"],
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
        rating: 4.9,
        location: "Ubud",
        description: "Wellness retreat in tropical jungle setting with holistic meeting experiences."
      }
    ]
  },
  {
    id: 'thailand',
    name: "Thailand (Bangkok/Phuket)",
    country: "Thailand",
    region: "Southeast Asia",
    slug: "thailand",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544413164-76fbbae9a785?w=1200&h=600&fit=crop",
    description: "Diverse experiences from bustling Bangkok business districts to serene Phuket beach resorts.",
    longDescription: "Thailand offers incredible diversity for corporate offsites, from Bangkok's vibrant business environment to Phuket's tranquil beach settings. The country's excellent hospitality industry, cultural richness, and variety of experiences make it perfect for different types of corporate programs. Whether seeking energetic urban environments or peaceful coastal retreats, Thailand delivers exceptional value and memorable experiences.",
    badge: "Diverse Options",
    highlights: ["Cultural diversity", "Excellent hospitality", "Beach and city options", "Adventure activities", "Great value"],
    bestTime: "November - March",
    gettingThere: "Bangkok: 1 hour from airport. Phuket: 45 minutes from airport",
    budget: "₹12-25K per person",
    teamSizes: ["20-150 people"],
    activities: ["Cultural tours", "Cooking classes", "Beach activities", "Temple visits", "Adventure sports"],
    venues: [
      {
        name: "JW Marriott Phuket Resort & Spa",
        type: "Beach Resort",
        capacity: "200",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "beach access", "spa", "multiple pools"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        rating: 4.8,
        location: "Mai Khao Beach, Phuket",
        description: "Beachfront resort with extensive meeting facilities and Thai cultural experiences."
      }
    ]
  },
  {
    id: 'vietnam',
    name: "Vietnam (Ho Chi Minh/Hanoi)",
    country: "Vietnam",
    region: "Southeast Asia",
    slug: "vietnam",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&h=600&fit=crop",
    description: "Emerging business destination with rich history and modern infrastructure for unique corporate experiences.",
    longDescription: "Vietnam represents an exciting emerging market with a perfect blend of ancient culture and modern business infrastructure. Cities like Ho Chi Minh and Hanoi offer unique corporate offsite experiences that combine business development with cultural exploration. The country's entrepreneurial spirit, rapidly growing economy, and warm hospitality make it an inspiring destination for forward-thinking companies.",
    badge: "Emerging Market",
    highlights: ["Emerging economy", "Rich history", "Entrepreneurial spirit", "Cultural depth", "Modern infrastructure"],
    bestTime: "October - April",
    gettingThere: "45 minutes from airports to city centers",
    budget: "₹10-22K per person",
    teamSizes: ["15-120 people"],
    activities: ["Market visits", "Cultural tours", "History walks", "Cooking classes", "Business networking"],
    venues: [
      {
        name: "Park Hyatt Saigon",
        type: "Luxury Hotel",
        capacity: "200",
        priceRange: "Premium",
        amenities: ["wifi", "parking", "catering", "city center location", "spa"],
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
        rating: 4.7,
        location: "Ho Chi Minh City Center",
        description: "Elegant hotel in the heart of the business district with French colonial influences."
      }
    ]
  },

  // GCC DESTINATIONS
  {
    id: 'dubai',
    name: "Dubai",
    country: "UAE",
    region: "GCC",
    slug: "dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=600&fit=crop",
    description: "Luxury destination with futuristic architecture and world-class business facilities.",
    longDescription: "Dubai epitomizes luxury and innovation, offering an unparalleled environment for high-level corporate offsites. The city's futuristic skyline, world-class infrastructure, and position as a global business hub create the perfect backdrop for strategic planning and leadership development. From desert adventures to luxury experiences, Dubai offers unique team-building opportunities that inspire and motivate.",
    badge: "Luxury Hub",
    highlights: ["Futuristic architecture", "Luxury experiences", "Global business hub", "Desert adventures", "Cultural diversity"],
    bestTime: "November - March",
    gettingThere: "45 minutes from Dubai International Airport",
    budget: "₹30-60K per person",
    teamSizes: ["20-300 people"],
    activities: ["Desert safaris", "Luxury experiences", "Architecture tours", "Business visits", "Cultural explorations"],
    venues: [
      {
        name: "Taj Dubai",
        type: "Luxury Hotel",
        capacity: "400",
        priceRange: "Luxury",
        amenities: ["wifi", "parking", "catering", "city views", "spa", "multiple restaurants"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        rating: 4.9,
        location: "Business Bay",
        description: "Iconic luxury hotel with stunning Burj Khalifa views and world-class facilities."
      }
    ]
  }
]

export const getDestinationBySlug = (slug) => {
  return destinations.find(dest => dest.slug === slug)
}

export const getDestinationsByRegion = (region) => {
  return destinations.filter(dest => dest.region === region)
}

export const getPopularDestinations = () => {
  return destinations.filter(dest => dest.badge === "Most Popular" || dest.badge === "Innovation Hub")
}
