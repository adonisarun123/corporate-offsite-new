import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Import your data
import { destinations } from '../src/data/destinations.js'
import { activities } from '../src/data/activities.js'

// Base HTML template
const getHTMLTemplate = (title, description, keywords, image, url, structuredData, canonical) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical || url}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="Corporate Offsite Experts" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#3b82f6" />
    
    ${structuredData ? `
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 2)}
    </script>
    ` : ''}
    
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" href="/assets/index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`

// Generate homepage
const generateHomepage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Corporate Offsite Experts",
    "description": "Premium corporate offsite planning and team building solutions across India & Southeast Asia",
    "url": "https://corporate-offsite-experts.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return getHTMLTemplate(
    "Corporate Offsite Experts - Premium Team Building & Retreat Solutions",
    "Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia.",
    "corporate offsite, team building, corporate retreat, venue booking, event planning",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop",
    "https://corporate-offsite-experts.com/",
    structuredData
  )
}

// Generate destination pages
const generateDestinationPage = (destination) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.longDescription || destination.description,
    "image": destination.heroImage || destination.image,
    "url": `https://corporate-offsite-experts.com/destinations/${destination.slug}`
  }

  return getHTMLTemplate(
    `${destination.name} Corporate Offsite Venues & Team Building Activities`,
    `Plan your corporate offsite in ${destination.name}. ${destination.description} Best venues, activities, and expert planning services.`,
    `${destination.name} corporate offsite, ${destination.name} team building, ${destination.name} venues`,
    destination.heroImage || destination.image,
    `https://corporate-offsite-experts.com/destinations/${destination.slug}`,
    structuredData
  )
}

// Generate venue pages  
const generateVenuePage = (destination, venue) => {
  const venueSlug = venue.name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ +/g, '-')
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": venue.name,
    "description": venue.description,
    "image": venue.image,
    "starRating": {
      "@type": "Rating",
      "ratingValue": venue.rating
    }
  }

  return getHTMLTemplate(
    `${venue.name} - Corporate Offsite Venue in ${destination.name}`,
    `Book ${venue.name} for your corporate offsite in ${destination.name}. ${venue.description} Capacity: ${venue.capacity} people. Rating: ${venue.rating}/5.`,
    `${venue.name}, ${destination.name} venue, corporate offsite`,
    venue.image,
    `https://corporate-offsite-experts.com/destinations/${destination.slug}/venues/${venueSlug}`,
    structuredData
  )
}

// Generate activity pages
const generateActivityPage = (activity) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": activity.name,
    "description": activity.longDescription || activity.description,
    "image": activity.heroImage || activity.image
  }

  return getHTMLTemplate(
    `${activity.name} - Corporate Team Building Activity`,
    `${activity.description} Duration: ${activity.duration}. Team size: ${activity.teamSize}. Framework: ${activity.framework}.`,
    `${activity.name}, team building, ${activity.type}, corporate training`,
    activity.heroImage || activity.image,
    `https://corporate-offsite-experts.com/activities/${activity.slug}`,
    structuredData
  )
}

// Main prerender function
const prerender = () => {
  const outputDir = path.join(__dirname, '../dist-prerender')
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Generate homepage
  fs.writeFileSync(path.join(outputDir, 'index.html'), generateHomepage())
  console.log('✅ Generated homepage')

  // Generate destination pages
  destinations.forEach(destination => {
    const destDir = path.join(outputDir, 'destinations', destination.slug)
    fs.mkdirSync(destDir, { recursive: true })
    fs.writeFileSync(path.join(destDir, 'index.html'), generateDestinationPage(destination))
    console.log(`✅ Generated destination page: ${destination.name}`)

    // Generate venue pages
    destination.venues?.forEach(venue => {
      const venueSlug = venue.name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ +/g, '-')
      const venueDir = path.join(destDir, 'venues', venueSlug)
      fs.mkdirSync(venueDir, { recursive: true })
      fs.writeFileSync(path.join(venueDir, 'index.html'), generateVenuePage(destination, venue))
      console.log(`✅ Generated venue page: ${venue.name}`)
    })
  })

  // Generate activity pages
  activities.forEach(activity => {
    const activityDir = path.join(outputDir, 'activities', activity.slug)
    fs.mkdirSync(activityDir, { recursive: true })
    fs.writeFileSync(path.join(activityDir, 'index.html'), generateActivityPage(activity))
    console.log(`✅ Generated activity page: ${activity.name}`)
  })

  console.log(`\n🎉 Prerendering complete! Generated ${destinations.length + activities.length + destinations.reduce((acc, d) => acc + (d.venues?.length || 0), 0) + 1} pages`)
  console.log(`Output directory: ${outputDir}`)
}

// Run prerender
prerender()
