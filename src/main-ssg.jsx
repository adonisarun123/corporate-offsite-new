import { ViteSSG } from 'vite-ssg'
import App from './App.jsx'
import './index.css'
import { destinations } from './data/destinations.js'
import { activities } from './data/activities.js'

// Generate all routes for static generation
const routes = [
  // Static routes
  { path: '/', component: () => import('./App.jsx') },
  { path: '/destinations', component: () => import('./pages/DestinationsPage.jsx') },
  { path: '/venues', component: () => import('./pages/VenuesPage.jsx') },
  { path: '/activities', component: () => import('./pages/ActivitiesPage.jsx') },
  { path: '/packages', component: () => import('./pages/PackagesPage.jsx') },
  { path: '/case-studies', component: () => import('./pages/CaseStudiesPage.jsx') },
  { path: '/blog', component: () => import('./pages/BlogPage.jsx') },
  { path: '/about', component: () => import('./pages/AboutPage.jsx') },
  { path: '/contact', component: () => import('./pages/ContactPage.jsx') },
  
  // Dynamic destination routes
  ...destinations.flatMap(destination => {
    const destinationRoute = {
      path: `/destinations/${destination.slug}`,
      component: () => import('./pages/DestinationDetailPage.jsx')
    }
    
    const venueRoutes = destination.venues.map(venue => {
      const venueSlug = venue.name.toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/ +/g, '-')
      return {
        path: `/destinations/${destination.slug}/venues/${venueSlug}`,
        component: () => import('./pages/VenueDetailPage.jsx')
      }
    })
    
    return [destinationRoute, ...venueRoutes]
  }),
  
  // Dynamic activity routes
  ...activities.map(activity => ({
    path: `/activities/${activity.slug}`,
    component: () => import('./pages/ActivityDetailPage.jsx')
  }))
]

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // Configure the app
    if (isClient) {
      // Client-side specific setup
      console.log('SSG: Client-side hydration')
    } else {
      // Server-side specific setup
      console.log('SSG: Server-side rendering')
    }
  }
)
