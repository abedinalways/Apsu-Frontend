import type { Metadata } from 'next';

import { AppConfig } from '@/config/app.config';

const appConfig = AppConfig();
const siteUrl = appConfig.app.meta.url;
const siteName = appConfig.app.meta.siteName;
const defaultImage = appConfig.app.meta.image;
const twitterHandle = appConfig.app.meta.twitterHandle;

interface PageMetaOptions {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/weight-loss". Root pages use "/". */
  path?: string;
  keywords?: string;
  /** Set true for app-flow pages (assessment, dashboard) that must stay out of search engines. */
  noIndex?: boolean;
}

/**
 * Builds a complete per-page Metadata object (title, description, canonical,
 * OpenGraph and Twitter cards) on top of the root layout defaults, so every
 * public page gets correct social-share previews instead of falling back to
 * the generic root metadata.
 */
export function pageMetadata({
  title,
  description,
  path = '/',
  keywords,
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${siteUrl}${path === '/' ? '' : path}`;
  const image = { url: defaultImage, width: 1200, height: 630, alt: title };

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultImage],
      creator: twitterHandle,
    },
  };
}
