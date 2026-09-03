
import { pageMetadata } from '@/lib/seo/metadata';

export const metadata = pageMetadata({
  title: 'Contact Us | Apsu',
  description:
    'Get in touch with the Apsu team. Questions about treatments, orders, or your account — reach out and we will help you in your preferred language.',
  path: '/contact',
});


import ContactContent from '@/components/contact/ContactContent';
import ContactHero from '@/components/contact/ContactHero';
import FAQFooter from '@/components/faq/FAQFooter';

export default function ContactPage() {
  return (
    <>
      <main className="pt-30 md:pt-50">
        <ContactHero />

        <div className=" overflow-x-hidden">
          <ContactContent />
        </div>
        <div className="mb-14 md:mb-30" />
      </main>
      <FAQFooter />
    </>
  );
}
