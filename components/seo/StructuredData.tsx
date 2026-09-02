import { siteUrl, siteName, defaultTitle, defaultDescription } from '@/lib/seo/metadata';

interface StructuredDataProps {
  type: 'organization' | 'medical-organization' | 'healthcare-service' | 'article';
  data?: Record<string, any>;
}

export default function StructuredData({ type, data = {} }: StructuredDataProps) {
  let jsonLd: Record<string, any> = {};

  switch (type) {
    case 'organization':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/images/og-default.jpg`,
        description: defaultDescription,
        sameAs: [
          'https://facebook.com/apsuhealth',
          'https://twitter.com/apsuhealth',
          'https://linkedin.com/company/apsuhealth',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-XXX-XXXX',
          contactType: 'customer service',
          availableLanguage: ['en', 'es', 'zh', 'ar', 'hi', 'bn', 'ur', 'vi', 'ko', 'ja'],
        },
      };
      break;

    case 'medical-organization':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: siteName,
        url: siteUrl,
        description: defaultDescription,
        medicalSpecialty: ['Weight Loss', 'Birth Control', 'Sleep Medicine'],
        availableService: [
          {
            '@type': 'MedicalService',
            name: 'Weight Loss Treatment',
            description: 'GLP-1 medications for weight management',
          },
          {
            '@type': 'MedicalService',
            name: 'Birth Control',
            description: 'Prescription birth control and emergency contraception',
          },
          {
            '@type': 'MedicalService',
            name: 'Sleep Treatment',
            description: 'Personalized sleep care and treatment',
          },
        ],
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        availableLanguage: ['en', 'es', 'zh', 'ar', 'hi', 'bn', 'ur', 'vi', 'ko', 'ja'],
      };
      break;

    case 'healthcare-service':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HealthcareService',
        name: data.name || 'Telehealth Services',
        description: data.description || defaultDescription,
        provider: {
          '@type': 'MedicalOrganization',
          name: siteName,
        },
        availableService: data.services || [],
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        availableLanguage: ['en', 'es', 'zh', 'ar', 'hi', 'bn', 'ur', 'vi', 'ko', 'ja'],
      };
      break;

    case 'article':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline || '',
        description: data.description || '',
        image: data.image || `${siteUrl}/images/og-default.jpg`,
        author: {
          '@type': 'Organization',
          name: 'Apsu Health',
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/og-default.jpg`,
          },
        },
        datePublished: data.datePublished || '',
        dateModified: data.dateModified || data.datePublished || '',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url || siteUrl,
        },
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}