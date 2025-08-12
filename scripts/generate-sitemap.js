import { createWriteStream, writeFileSync, existsSync } from 'fs'
import { resolve, join, dirname } from 'path'
import { SitemapStream } from 'sitemap'
import { destinations } from '../src/data/destinations.js'
import { activities } from '../src/data/activities.js'

const BASE_URL = 'https://corporate-offsite-experts.com'

const generateSitemap = async () => {
  const staticRoutes = [
    '/',
    '/destinations',
    '/venues', 
    '/activities',
    '/packages',
    '/case-studies',
    '/blog',
    '/about',
    '/contact'
  ]

  // Generate dynamic destination routes
  const destinationRoutes = destinations.flatMap(destination => {
    const destinationRoute = `/destinations/${destination.slug}`
    const venueRoutes = destination.venues.map(venue => {
      const venueSlug = venue.name.toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/ +/g, '-')
      return `/destinations/${destination.slug}/venues/${venueSlug}`
    })
    return [destinationRoute, ...venueRoutes]
  })

  // Generate dynamic activity routes
  const activityRoutes = activities.map(activity => `/activities/${activity.slug}`)

  const allRoutes = [...staticRoutes, ...destinationRoutes, ...activityRoutes]

  // Create sitemap using sitemap library
  const sitemap = new SitemapStream({ hostname: BASE_URL })
  const writePath = resolve(process.cwd(), 'dist', 'sitemap.xml')
  const writeStream = createWriteStream(writePath)
  sitemap.pipe(writeStream)

  allRoutes.forEach((url) => {
    sitemap.write({
      url,
      changefreq: url === '/' ? 'daily' : url.includes('/venues/') || url.includes('/activities/') ? 'weekly' : 'monthly',
      priority: url === '/' ? 1.0 : url.includes('/venues/') || url.includes('/activities/') ? 0.8 : 0.7,
    })
  })

  sitemap.end()

  await new Promise((res, rej) => {
    writeStream.on('finish', res)
    writeStream.on('error', rej)
  })

  // Also write to public directory
  const publicPath = resolve(process.cwd(), 'public', 'sitemap.xml')
  const publicSitemap = new SitemapStream({ hostname: BASE_URL })
  const publicWriteStream = createWriteStream(publicPath)
  publicSitemap.pipe(publicWriteStream)

  allRoutes.forEach((url) => {
    publicSitemap.write({
      url,
      changefreq: url === '/' ? 'daily' : url.includes('/venues/') || url.includes('/activities/') ? 'weekly' : 'monthly',
      priority: url === '/' ? 1.0 : url.includes('/venues/') || url.includes('/activities/') ? 0.8 : 0.7,
    })
  })

  publicSitemap.end()

  await new Promise((res, rej) => {
    publicWriteStream.on('finish', res)
    publicWriteStream.on('error', rej)
  })

  console.log(`✅ Generated sitemap with ${allRoutes.length} URLs`)
  console.log(`📁 Written to: ${writePath}`)
  console.log(`📁 Written to: ${publicPath}`)

  return allRoutes
}

// Also generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Crawl delay (optional)
Crawl-delay: 1`

  const publicRobotsPath = join(process.cwd(), 'public', 'robots.txt')
  const distRobotsPath = join(process.cwd(), 'dist', 'robots.txt')

  writeFileSync(publicRobotsPath, robotsTxt)
  
  if (existsSync(dirname(distRobotsPath))) {
    writeFileSync(distRobotsPath, robotsTxt)
  }

  console.log(`✅ Generated robots.txt`)
  console.log(`📁 Written to: ${publicRobotsPath}`)
  if (existsSync(dirname(distRobotsPath))) {
    console.log(`📁 Written to: ${distRobotsPath}`)
  }
}

// Always run when script is executed directly
async function run() {
  await generateSitemap()
  generateRobotsTxt()
}

run().catch((e) => {
  console.error('Sitemap generation failed:', e)
  process.exit(1)
})

export { generateSitemap, generateRobotsTxt }
