import { AppConfig } from '@/config/app.config';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google'; 
import './globals.css';


const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className}`}>{children}</body>
    </html>
  );
}
