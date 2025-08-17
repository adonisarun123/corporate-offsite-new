import { SITE } from './config';

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

export async function generateSitemap() {
  const now = new Date();
  const entries: SitemapEntry[] = [];

  // Add static pages
  const staticPages = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/activities', priority: 0.9 },
    { path: '/destinations', priority: 0.9 },
    { path: '/venues', priority: 0.9 },
    { path: '/packages', priority: 0.9 },
  ];

  // Add entries for each locale
  for (const locale of SITE.locales) {
    for (const page of staticPages) {
      const localePath = locale === SITE.defaultLocale ? page.path : `/${locale}${page.path}`;
      entries.push({
        url: `${SITE.siteUrl}${localePath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: page.priority,
      });
    }
  }

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${entries.map(entry => `
    <url>
      <loc>${entry.url}</loc>
      <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified}</lastmod>
      ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
      ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
      ${SITE.locales.map(locale => {
        const url = entry.url.replace(
          new RegExp(`^${SITE.siteUrl}(/${SITE.defaultLocale})?(/.*)?$`),
          locale === SITE.defaultLocale ? `${SITE.siteUrl}$2` : `${SITE.siteUrl}/${locale}$2`
        );
        return `<xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />`;
      }).join('\n      ')}
      <xhtml:link rel="alternate" hreflang="x-default" href="${entry.url.replace(new RegExp(`^${SITE.siteUrl}(/${SITE.defaultLocale})?(/.*)?$`), `${SITE.siteUrl}$2`)}" />
    </url>
  `).join('')}
</urlset>`;

  return sitemap.trim();
}
