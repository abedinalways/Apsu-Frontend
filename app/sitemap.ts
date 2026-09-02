import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo/metadata';

// Static pages that should be included in sitemap
const staticPages = [
  {
    url: '',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  },
  {
    url: '/about',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/faq',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/weight-loss',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/birth-control',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/sleep',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/privacy-policy',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: '/terms',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: '/info',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  },
];

// Blog slugs - these would typically come from your CMS or data source
// For now, I'll include the common blog slugs from your data
const blogSlugs = [
  'semaglutide-vs-tirzepatide',
  'birth-control-options-2024',
  'sleep-tips-insomnia',
  'weight-loss-journey',
  'telehealth-benefits',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticPages.map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Generate blog URLs
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}