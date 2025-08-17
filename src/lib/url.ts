import { SITE } from './config';

export function absoluteUrl(path = '/') {
  const base = SITE.siteUrl.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function localeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of SITE.locales) {
    languages[l] = `${SITE.siteUrl}/${l}${path}`.replace(/\/+/, '/');
  }
  return languages;
}

export function getCanonicalUrl(path: string, locale?: string) {
  if (locale && locale !== SITE.defaultLocale) {
    return absoluteUrl(`/${locale}${path}`);
  }
  return absoluteUrl(path);
}
