import { SITE } from './config';

export function generateRobots() {
  return `# https://${SITE.siteUrl}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /search

# Host
Host: ${SITE.siteUrl}

# Sitemaps
Sitemap: ${SITE.siteUrl}/sitemap.xml`;
}
