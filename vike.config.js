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
  }
}
