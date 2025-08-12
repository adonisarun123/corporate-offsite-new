// Comprehensive Activities Data with Learning & Development Framework Mappings

export const activities = [
  // LEADERSHIP DEVELOPMENT
  {
    id: 'leadership-challenge-course',
    name: "Leadership Challenge Course",
    type: "leadership",
    slug: "leadership-challenge-course",
    duration: "4-6 hours",
    teamSize: "20-50 people",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop",
    description: "Outdoor leadership development program with problem-solving challenges and team dynamics.",
    longDescription: "Our Leadership Challenge Course is designed around the Action-Centered Leadership model by John Adair, focusing on the three overlapping circles of Task, Team, and Individual needs. Participants navigate through carefully designed outdoor challenges that simulate real workplace scenarios, requiring them to demonstrate and develop key leadership competencies while working under pressure and uncertainty.",
    framework: "Action-Centered Leadership (John Adair)",
    frameworkDescription: "Based on John Adair's three-circle model focusing on Task (achieving objectives), Team (building and maintaining team cohesion), and Individual (meeting personal needs and development). This proven framework helps leaders balance competing demands and develop situational leadership skills.",
    learningOutcomes: [
      "Enhanced situational leadership skills",
      "Improved decision-making under pressure", 
      "Better team collaboration and communication",
      "Increased self-awareness and emotional intelligence",
      "Strategic thinking and problem-solving abilities"
    ],
    keyCompetencies: [
      "Adaptive Leadership",
      "Strategic Thinking", 
      "Team Building",
      "Communication",
      "Decision Making",
      "Emotional Intelligence"
    ],
    difficulty: "medium",
    indoor: false,
    weatherDependent: true,
    price: "₹2,500-4,000 per person",
    includes: ["Professional facilitators", "Safety equipment", "Debrief sessions", "Materials", "Certificate"],
    agenda: [
      "Opening circle and objectives setting",
      "Team formation and role assignments", 
      "Series of progressive challenges",
      "Individual reflection periods",
      "Group debrief and learning extraction",
      "Action planning for workplace application"
    ],
    locations: ["Bangalore", "Mumbai", "Delhi", "Singapore", "Bali"],
    idealFor: ["Senior management teams", "High-potential employees", "Cross-functional project teams", "New leadership cohorts"]
  },
  {
    id: 'executive-coaching-intensive',
    name: "Executive Coaching Intensive", 
    type: "leadership",
    slug: "executive-coaching-intensive",
    duration: "2 days",
    teamSize: "8-15 executives",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop",
    description: "Intensive executive development program using proven coaching methodologies and 360-degree feedback.",
    longDescription: "This intensive program is built on the GROW coaching model (Goals, Reality, Options, Way Forward) combined with the Leadership Circle Profile assessment. Executives engage in deep self-reflection, receive comprehensive 360-degree feedback, and develop personalized leadership development plans through one-on-one coaching sessions and peer learning circles.",
    framework: "GROW Model + Leadership Circle Profile",
    frameworkDescription: "The GROW model provides a structured coaching framework for goal-setting and problem-solving, while the Leadership Circle Profile offers scientifically validated assessment of leadership effectiveness and development needs. Together, they create a powerful development experience.",
    learningOutcomes: [
      "Increased self-awareness and leadership presence",
      "Clear personal leadership development plan",
      "Enhanced coaching skills for developing others",
      "Improved emotional regulation and resilience",
      "Stronger authentic leadership capabilities"
    ],
    keyCompetencies: [
      "Self-Awareness",
      "Authentic Leadership",
      "Coaching Others",
      "Emotional Intelligence",
      "Strategic Vision",
      "Change Leadership"
    ],
    difficulty: "hard",
    indoor: true,
    weatherDependent: false,
    price: "₹8,000-12,000 per person",
    includes: ["Leadership Circle assessment", "Certified executive coaches", "360-degree feedback", "Personalized reports", "Follow-up sessions"],
    agenda: [
      "Leadership assessment and feedback review",
      "Individual coaching sessions",
      "Leadership presence workshop",
      "Peer coaching practice",
      "Development planning",
      "Commitment and accountability setup"
    ],
    locations: ["Bangalore", "Mumbai", "Delhi", "Singapore", "Dubai"],
    idealFor: ["C-suite executives", "Senior leaders", "High-potential managers", "Leadership development cohorts"]
  },

  // TEAM COLLABORATION
  {
    id: 'innovation-workshop',
    name: "Innovation Workshop",
    type: "collaboration", 
    slug: "innovation-workshop",
    duration: "6 hours",
    teamSize: "15-30 people",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    description: "Interactive workshop focused on creative thinking, innovation methodologies, and collaborative ideation.",
    longDescription: "Our Innovation Workshop employs Design Thinking methodology pioneered by IDEO and Stanford d.school, combined with elements of Google's 'Design Sprint' framework. Teams work through the five stages of Design Thinking - Empathize, Define, Ideate, Prototype, and Test - to solve real business challenges while learning systematic innovation approaches they can apply in their daily work.",
    framework: "Design Thinking + Design Sprint",
    frameworkDescription: "Design Thinking is a human-centered approach to innovation that integrates the needs of people, possibilities of technology, and requirements for business success. Design Sprint compresses the process into intensive focused sessions for rapid iteration and learning.",
    learningOutcomes: [
      "Creative problem-solving mindset",
      "Innovation methodology mastery",
      "Enhanced collaborative ideation skills",
      "Rapid prototyping capabilities",
      "User-centered thinking approach"
    ],
    keyCompetencies: [
      "Creative Problem Solving",
      "Design Thinking", 
      "Collaboration",
      "User Empathy",
      "Rapid Prototyping",
      "Systems Thinking"
    ],
    difficulty: "easy",
    indoor: true,
    weatherDependent: false,
    price: "₹1,800-3,200 per person",
    includes: ["Innovation facilitators", "Design thinking materials", "Prototyping supplies", "Digital tools access", "Innovation toolkit"],
    agenda: [
      "Innovation mindset activation",
      "Problem definition and user empathy", 
      "Ideation and creative techniques",
      "Rapid prototyping session",
      "Testing and feedback loops",
      "Implementation planning"
    ],
    locations: ["Bangalore", "Mumbai", "Delhi", "Singapore", "Thailand"],
    idealFor: ["Product teams", "R&D departments", "Cross-functional project teams", "Innovation champions"]
  },
  {
    id: 'agile-team-dynamics',
    name: "Agile Team Dynamics Workshop",
    type: "collaboration",
    slug: "agile-team-dynamics", 
    duration: "1 day",
    teamSize: "12-25 people",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
    description: "Experience-based learning of agile principles through team challenges and retrospective practices.",
    longDescription: "Based on the Scrum framework and Tuckman's team development model (Forming, Storming, Norming, Performing), this workshop accelerates team formation and effectiveness. Teams experience multiple sprint cycles through engaging challenges, learning to self-organize, collaborate effectively, and continuously improve their processes through structured retrospectives.",
    framework: "Scrum Framework + Tuckman's Team Development Model",
    frameworkDescription: "Scrum provides the structural framework for iterative development and team self-organization, while Tuckman's model helps understand and accelerate the natural stages of team development for optimal performance.",
    learningOutcomes: [
      "Agile mindset and principles adoption",
      "Self-organizing team capabilities", 
      "Effective retrospective and feedback skills",
      "Continuous improvement mindset",
      "Enhanced team communication and collaboration"
    ],
    keyCompetencies: [
      "Agile Methodology",
      "Team Self-Organization",
      "Continuous Improvement",
      "Feedback Culture",
      "Adaptive Planning",
      "Collaborative Decision Making"
    ],
    difficulty: "medium",
    indoor: true,
    weatherDependent: false,
    price: "₹2,200-3,800 per person",
    includes: ["Certified agile coaches", "Simulation materials", "Retrospective tools", "Agile planning tools", "Reference materials"],
    agenda: [
      "Agile principles immersion",
      "Team charter creation",
      "Sprint simulation cycles",
      "Daily standup practices", 
      "Retrospective facilitation",
      "Team improvement planning"
    ],
    locations: ["Bangalore", "Mumbai", "Delhi", "Singapore", "Vietnam"],
    idealFor: ["Software development teams", "Project teams", "Product teams", "Teams adopting agile practices"]
  },

  // WELLNESS & MINDFULNESS
  {
    id: 'wellness-retreat',
    name: "Wellness Retreat",
    type: "wellness",
    slug: "wellness-retreat",
    duration: "8 hours",
    teamSize: "10-40 people", 
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    description: "Comprehensive wellness program including yoga, meditation, mindfulness, and stress management techniques.",
    longDescription: "Our Wellness Retreat integrates ancient mindfulness practices with modern neuroscience research on stress, resilience, and peak performance. Based on Jon Kabat-Zinn's Mindfulness-Based Stress Reduction (MBSR) program and the PERMA model of well-being by Martin Seligman, participants learn practical techniques for managing stress, building resilience, and enhancing overall well-being in the workplace.",
    framework: "MBSR (Mindfulness-Based Stress Reduction) + PERMA Well-being Model",
    frameworkDescription: "MBSR provides evidence-based mindfulness practices for stress reduction, while PERMA (Positive emotions, Engagement, Relationships, Meaning, Achievement) offers a comprehensive framework for sustainable well-being and performance.",
    learningOutcomes: [
      "Stress management and resilience building",
      "Mindfulness and meditation practices",
      "Work-life balance strategies",
      "Enhanced emotional regulation",
      "Improved focus and cognitive performance"
    ],
    keyCompetencies: [
      "Mindfulness Practice",
      "Stress Management",
      "Emotional Regulation",
      "Resilience Building", 
      "Self-Care",
      "Work-Life Integration"
    ],
    difficulty: "easy",
    indoor: true,
    weatherDependent: false,
    price: "₹1,500-2,800 per person",
    includes: ["Certified wellness instructors", "Yoga and meditation sessions", "Healthy meals", "Wellness toolkit", "Ongoing practice guide"],
    agenda: [
      "Wellness assessment and goal setting",
      "Mindfulness and meditation practice",
      "Yoga and movement session",
      "Stress management techniques",
      "Nutrition and lifestyle guidance", 
      "Personal wellness planning"
    ],
    locations: ["Kerala", "Goa", "Bali", "Thailand", "Singapore"],
    idealFor: ["High-stress teams", "Burnout prevention programs", "Leadership development", "Employee wellness initiatives"]
  },

  // COMMUNICATION & RELATIONSHIP BUILDING
  {
    id: 'communication-mastery',
    name: "Communication Mastery Workshop",
    type: "communication",
    slug: "communication-mastery",
    duration: "1 day", 
    teamSize: "15-35 people",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop",
    description: "Advanced communication skills development using neurolinguistic programming and emotional intelligence principles.",
    longDescription: "This workshop is built on Daniel Goleman's Emotional Intelligence framework and incorporates elements of Nonviolent Communication (NVC) by Marshall Rosenberg. Participants learn to understand and manage their own emotions while effectively reading and responding to others, creating more authentic and productive workplace relationships through enhanced communication skills.",
    framework: "Emotional Intelligence + Nonviolent Communication (NVC)",
    frameworkDescription: "Emotional Intelligence provides the foundation for understanding emotions in communication, while NVC offers a structured approach to expressing needs and hearing others with empathy, reducing conflict and building connection.",
    learningOutcomes: [
      "Enhanced emotional intelligence in communication",
      "Conflict resolution and difficult conversation skills",
      "Active listening and empathy development", 
      "Assertive communication techniques",
      "Building trust and psychological safety"
    ],
    keyCompetencies: [
      "Emotional Intelligence",
      "Active Listening",
      "Conflict Resolution",
      "Assertive Communication",
      "Empathy",
      "Trust Building"
    ],
    difficulty: "medium",
    indoor: true,
    weatherDependent: false,
    price: "₹2,000-3,500 per person",
    includes: ["Communication experts", "Video analysis", "Role-play scenarios", "Assessment tools", "Practice guide"],
    agenda: [
      "Communication style assessment",
      "Emotional intelligence in communication",
      "Active listening skills practice",
      "Difficult conversation navigation",
      "Feedback and feedforward techniques",
      "Personal communication action plan"
    ],
    locations: ["Bangalore", "Mumbai", "Delhi", "Singapore", "Dubai"],
    idealFor: ["Leadership teams", "Customer-facing teams", "Cross-cultural teams", "Teams with communication challenges"]
  },

  // ADVENTURE & EXPERIENTIAL LEARNING  
  {
    id: 'adventure-leadership',
    name: "Adventure Leadership Experience",
    type: "adventure",
    slug: "adventure-leadership",
    duration: "2 days",
    teamSize: "16-40 people",
    image: "https://images.unsplash.com/photo-1551524164-6cf0ac1bf1b4?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop", 
    description: "High-impact outdoor adventure program designed to build leadership confidence and team resilience.",
    longDescription: "Based on Outward Bound's experiential learning model and Kolb's Experiential Learning Cycle, this adventure program uses challenging outdoor activities to develop leadership courage, team resilience, and personal breakthrough moments. Participants engage in rock climbing, rope courses, and wilderness navigation while learning to lead under uncertainty and support team members through challenges.",
    framework: "Outward Bound Model + Kolb's Experiential Learning Cycle",
    frameworkDescription: "The Outward Bound model emphasizes learning through direct experience and reflection, while Kolb's cycle (Experience, Reflect, Abstract, Apply) ensures learning is processed and can be transferred to workplace situations.",
    learningOutcomes: [
      "Leadership courage and confidence building",
      "Team resilience and mutual support",
      "Risk assessment and decision-making skills",
      "Personal breakthrough and limiting belief challenge",
      "Trust building and vulnerability-based leadership"
    ],
    keyCompetencies: [
      "Courage and Risk-Taking",
      "Team Resilience", 
      "Trust Building",
      "Decision Making Under Pressure",
      "Mutual Support",
      "Personal Breakthrough"
    ],
    difficulty: "hard",
    indoor: false,
    weatherDependent: true,
    price: "₹4,500-7,500 per person",
    includes: ["Adventure specialists", "Safety equipment", "All adventure activities", "Accommodation", "Meals", "Debrief sessions"],
    agenda: [
      "Challenge by choice introduction",
      "Trust and team building activities",
      "Progressive adventure challenges", 
      "Individual courage challenges",
      "Team problem-solving under pressure",
      "Integration and workplace application"
    ],
    locations: ["Kerala", "Goa", "Bali", "Thailand", "Dubai"], 
    idealFor: ["Leadership development programs", "High-performing teams", "Team resilience building", "Change management initiatives"]
  },

  // SALES & PERFORMANCE
  {
    id: 'sales-excellence-bootcamp',
    name: "Sales Excellence Bootcamp",
    type: "sales",
    slug: "sales-excellence-bootcamp", 
    duration: "2 days",
    teamSize: "20-50 people",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
    description: "Intensive sales training combining consultative selling methodologies with psychological influence principles.",
    longDescription: "This bootcamp integrates the Challenger Sale methodology with Robert Cialdini's principles of influence and persuasion. Sales professionals learn to become trusted advisors who challenge customer thinking, teach new insights, and tailor their approach while applying ethical influence techniques to drive meaningful business outcomes for both seller and buyer.",
    framework: "Challenger Sale + Cialdini's Principles of Influence",
    frameworkDescription: "The Challenger Sale focuses on teaching, tailoring, and taking control of the sales conversation, while Cialdini's six principles of influence provide ethical frameworks for persuasion and relationship building.",
    learningOutcomes: [
      "Consultative and challenger selling skills",
      "Ethical influence and persuasion techniques",
      "Customer insight development and teaching",
      "Advanced objection handling and negotiation",
      "Sales pipeline and process optimization"
    ],
    keyCompetencies: [
      "Consultative Selling",
      "Customer Insight",
      "Ethical Influence",
      "Negotiation",
      "Relationship Building",
      "Sales Process Management"
    ],
    difficulty: "medium",
    indoor: true,
    weatherDependent: false,
    price: "₹3,500-5,500 per person",
    includes: ["Sales methodology experts", "Role-play scenarios", "Customer case studies", "Sales tools", "Performance tracking"],
    agenda: [
      "Sales assessment and goal setting",
      "Challenger methodology deep dive",
      "Customer insight development",
      "Influence and persuasion practice",
      "Objection handling and negotiation",
      "Sales action planning and commitment"
    ],
    locations: ["Mumbai", "Delhi", "Bangalore", "Singapore", "Dubai"],
    idealFor: ["Sales teams", "Account managers", "Business development teams", "Customer success teams"]
  }
]

export const getActivityBySlug = (slug) => {
  return activities.find(activity => activity.slug === slug)
}

export const getActivitiesByType = (type) => {
  return activities.filter(activity => activity.type === type)
}

export const getActivitiesByDifficulty = (difficulty) => {
  return activities.filter(activity => activity.difficulty === difficulty)
}

export const getFeaturedActivities = () => {
  return activities.slice(0, 6) // Return first 6 as featured
}
