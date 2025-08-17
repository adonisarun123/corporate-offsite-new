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
    defaultTitle: 'Corporate Offsite Experts - Premium Team Building & Retreat Solutions',
    defaultDescription: 'Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia.',
    defaultImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop',
    defaultKeywords: 'corporate offsite, team building, corporate retreat, venue booking, event planning, team activities, leadership training, corporate events, India, Southeast Asia',
  }
};
