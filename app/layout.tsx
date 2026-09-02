import { AppConfig } from '@/config/app.config';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google'; 
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'sonner';


const workSans = Work_Sans({ subsets: ['latin'] });

const appConfig = AppConfig();
const siteUrl = appConfig.app.meta.url || 'https://apsu.com';
const siteName = appConfig.app.meta.siteName || 'Apsu';
const defaultTitle = appConfig.app.meta.title || 'Apsu — Healthcare in Your Language';
const defaultDescription = appConfig.app.meta.description || '';
const defaultImage = appConfig.app.meta.image || '/images/og-default.jpg';
const twitterHandle = appConfig.app.meta.twitterHandle || '@apsuhealth';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: appConfig.app.meta.keywords,
  authors: [{ name: appConfig.app.meta.author || siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
    creator: twitterHandle,
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
    'revisit-after': '7 days',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: defaultDescription,
    sameAs: [
      appConfig.app.social?.facebook,
      appConfig.app.social?.twitter,
      appConfig.app.social?.linkedin,
    ].filter(Boolean),
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    availableLanguage: [
      'English',
      'Spanish',
      'Chinese',
      'Vietnamese',
      'Korean',
      'Tagalog',
      'Russian',
      'Arabic',
      'French',
      'Portuguese',
      'Hindi',
    ],
    medicalSpecialty: ['Weight Management', 'Birth Control', 'Sleep Medicine'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${workSans.className}`}>
        <AuthProvider>
          {children}
          <Toaster richColors position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
