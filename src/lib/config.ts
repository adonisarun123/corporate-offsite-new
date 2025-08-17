export const SITE = {
  name: 'Corporate Offsite Experts',
  siteUrl: process.env.SITE_URL || 'https://corporate-offsite-experts.com',
  locales: (process.env.LOCALES || 'en').split(',') as ReadonlyArray<string>,
  defaultLocale: process.env.DEFAULT_LOCALE || 'en',
  brand: {
    logoText: 'Corporate Offsite Experts',
    twitter: '@corporateoffsite',
    description: 'Premium Team Building & Retreat Solutions',
  },
  meta: {
    titleTemplate: '%s | Corporate Offsite Experts',
    defaultTitle: 'Corporate Offsite Experts - Premium Team Building & Retreat Solutions',
    defaultDescription: 'Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia.',
    defaultImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop',
    defaultKeywords: 'corporate offsite, team building, corporate retreat, venue booking, event planning, team activities, leadership training, corporate events, India, Southeast Asia',
    // Page-specific metadata templates
    pages: {
      home: {
        title: 'Corporate Offsite Experts - Premium Team Building & Retreat Solutions',
        description: 'Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia.',
      },
      about: {
        title: 'About Us - Corporate Offsite Experts',
        description: 'Learn about Corporate Offsite Experts - India\'s leading corporate retreat planning company. 500+ companies served, 50+ destinations, and a team dedicated to creating exceptional offsite experiences.',
      },
      destinations: {
        title: 'Corporate Offsite Destinations - India & Southeast Asia',
        description: 'Explore premium corporate offsite destinations across India & Southeast Asia. From Bangalore\'s tech hub to Bali\'s serene landscapes, find the perfect location for your team retreat.',
      },
      venues: {
        title: 'Premium Offsite Venues - Corporate Retreat Locations',
        description: 'Discover handpicked venues for corporate offsites. Luxury resorts, business hotels, and retreat centers with world-class facilities across India & Southeast Asia.',
      },
      activities: {
        title: 'Team Building Activities & Corporate Training Programs',
        description: 'Engaging team building activities and corporate training programs designed for measurable outcomes. From adventure sports to leadership workshops.',
      },
      contact: {
        title: 'Contact Us - Corporate Offsite Experts',
        description: 'Get in touch with our offsite planning experts. Request a custom proposal for your next corporate retreat or team building event.',
      },
    },
  },
};