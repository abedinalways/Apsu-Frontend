
import ContactContent from '@/components/contact/ContactContent';
import ContactHero from '@/components/contact/ContactHero';
import FAQFooter from '@/components/faq/FAQFooter';

export default function ContactPage() {
  return (
    <>
      <main className="lg:custom-container pt-50 ">
        <ContactHero />

        <div className=" overflow-x-hidden">
          <ContactContent />
        </div>
        <div className="mb-30" />
      </main>
      <FAQFooter />
    </>
  );
}
