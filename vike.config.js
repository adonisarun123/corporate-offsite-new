// vike.config.js
export default {
  // Enable SSG for all discoverable routes
  prerender: true,
  passToClient: ['pageProps', 'urlPathname'],
  // Configure meta data
  meta: {
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true, client: true }
    }
  },
  // Explicitly define routes to prerender
  onBeforePrerender: async () => {
    const routes = [
      '/',
      '/destinations',
      '/activities', 
      '/venues',
      '/packages',
      '/about',
      '/contact'
    ]
    return routes
  }
}
