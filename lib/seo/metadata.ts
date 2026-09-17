import { Metadata } from 'next';
import { AppConfig } from '@/config/app.config';

const appConfig = AppConfig();
export const siteUrl = appConfig.app.meta.url || 'https://apsu.com';
export const siteName = appConfig.app.meta.siteName || 'Apsu';
export const defaultTitle = appConfig.app.meta.title || 'Apsu — Healthcare in Your Language';
export const defaultDescription = appConfig.app.meta.description || '';
export const defaultImage = appConfig.app.meta.image || '/images/og-default.jpg';
export const twitterHandle = appConfig.app.meta.twitterHandle || '@apsuhealth';

export type PageMetaOptions = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Builds a complete per-page Metadata object (title, description, canonical,
 * OpenGraph and Twitter cards) on top of the root layout defaults.
 *
 * Note: do not append `| ${siteName}` to the title here — the root layout's
 * `title.template` already handles that. Appending it again causes duplicate
 * site names in the final title (e.g. "Page | Apsu | Apsu").
 */
export const pageMetadata = function({
  title,
  description = defaultDescription,
  keywords = appConfig.app.meta.keywords,
  image = defaultImage,
  path = '/',
  noIndex = false,
}: PageMetaOptions = {}): Metadata {
  const url = `${siteUrl}${path === '/' ? '' : path}`;
  const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const base: Metadata = {
    title: title || defaultTitle,
    description,
    keywords,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName,
      title: title || defaultTitle,
      description,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || defaultTitle,
      description,
      images: [absoluteImage],
      creator: twitterHandle,
    },
  };

  return base;
};