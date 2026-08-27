import { Metadata } from 'next';
import { AppConfig } from '@/config/app.config';

const appConfig = AppConfig();
const siteUrl = appConfig.app.meta.url || 'https://apsu.com';
const siteName = appConfig.app.meta.siteName || 'Apsu';
const defaultTitle = appConfig.app.meta.title || 'Apsu — Healthcare in Your Language';
const defaultDescription = appConfig.app.meta.description || '';
const defaultImage = appConfig.app.meta.image || '/images/og-default.jpg';
const twitterHandle = appConfig.app.meta.twitterHandle || '@apsuhealth';

type PageMetadata = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
};

export function getPageMetadata({
  title,
  description = defaultDescription,
  keywords = appConfig.app.meta.keywords,
  image = defaultImage,
  path = '',
  noIndex = false,
}: PageMetadata = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const url = `${siteUrl}${path}`;
  const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const base: Metadata = {
    title: fullTitle,
    description,
    keywords,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName,
      title: fullTitle,
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
      title: fullTitle,
      description,
      images: [absoluteImage],
      creator: twitterHandle,
    },
  };

  return base;
}

export { siteUrl, siteName, defaultTitle, defaultDescription, defaultImage, twitterHandle };
