import { SITE } from './config';
import { absoluteUrl, localeAlternates } from './url';

export function baseMetadata() {
  return {
    metadataBase: new URL(SITE.siteUrl),
    applicationName: SITE.name,
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    viewport: 'width=device-width, initial-scale=1',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ],
    alternates: {
      canonical: absoluteUrl('/'),
      languages: localeAlternates('/'),
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      url: absoluteUrl('/'),
      title: SITE.meta.defaultTitle,
      description: SITE.meta.defaultDescription,
      images: [SITE.meta.defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.brand.twitter,
      title: SITE.meta.defaultTitle,
      description: SITE.meta.defaultDescription,
      images: [SITE.meta.defaultImage],
    },
  };
}

export function pageMetadata({
  path,
  title,
  description,
  images,
  locale,
  type = 'website',
  noindex = false,
}: {
  path: string;
  title?: string;
  description?: string;
  images?: string[];
  locale?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}) {
  const url = absoluteUrl(path);
  return {
    title: title || SITE.meta.defaultTitle,
    description: description || SITE.meta.defaultDescription,
    alternates: {
      canonical: url,
      languages: localeAlternates(path),
    },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      title: title || SITE.meta.defaultTitle,
      description: description || SITE.meta.defaultDescription,
      url,
      images: images || [SITE.meta.defaultImage],
    },
    twitter: {
      title: title || SITE.meta.defaultTitle,
      description: description || SITE.meta.defaultDescription,
      images: images || [SITE.meta.defaultImage],
    },
  };
}
