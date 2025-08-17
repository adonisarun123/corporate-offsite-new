import { Helmet } from 'react-helmet-async';
import { SITE } from '../lib/config';
import { getCanonicalUrl } from '../lib/url';
import DocumentHead from './DocumentHead';

export default function SEO({
  title = SITE.meta.defaultTitle,
  description = SITE.meta.defaultDescription,
  canonical,
  image = SITE.meta.defaultImage,
  keywords = SITE.meta.defaultKeywords,
  schemaMarkup,
  type = 'website',
  article = null,
  noindex = false,
  locale = SITE.defaultLocale
}) {
  const fullCanonical = canonical ? getCanonicalUrl(canonical, locale) : SITE.siteUrl;
  
  return (
    <>
      {/* DocumentHead for immediate DOM updates */}
      <DocumentHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={fullCanonical}
        structuredData={schemaMarkup}
      />
      
      {/* Helmet for additional meta tags and SSR support */}
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
        <link rel="canonical" href={fullCanonical} />

        {/* Language alternates */}
        {SITE.locales.map(lang => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={getCanonicalUrl(canonical || '/', lang)}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={getCanonicalUrl(canonical || '/')} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={locale} />
        {SITE.locales.filter(l => l !== locale).map(l => (
          <meta key={l} property="og:locale:alternate" content={l} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.brand.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}

        {/* Article specific meta tags */}
        {article && (
          <>
            <meta property="article:published_time" content={article.publishedTime} />
            <meta property="article:modified_time" content={article.modifiedTime} />
            <meta property="article:author" content={article.author} />
            {article.tags?.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Structured Data */}
        {schemaMarkup && (
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        )}

        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
      </Helmet>
    </>
  );
}