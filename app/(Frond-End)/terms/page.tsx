import { TermsHero } from '@/components/terms/TermsHero';
import { TermsSidebar } from '@/components/terms/TermsSidebar';
import { TermsList } from '@/components/terms/TermsList';
import { termsData } from '@/lib/data/termsData';
import FAQFooter from '@/components/faq/FAQFooter';

export default function TermsPage() {
  const sections = termsData.map(section => ({
    id: section.id,
    title: section.title,
    sidebarTitle: section.sidebarTitle,
    serial: section.serial,
  }));

  return (
    <>
      <div className="terms-container px-4 sm:px-6 md:px-8 mt-30">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_364px] gap-8 lg:gap-16 justify-self-center mt-6 lg:mt-8 mb-6 relative">
          <main className="mt-6 lg:mt-20 md:order-1 order-2">
            <TermsHero />
            <TermsList />
          </main>
          <aside className="w-full mx-auto flex flex-col lg:items-center lg:h-fit lg:justify-start lg:sticky lg:top-42 md:*:order-2 order-1">
            <TermsSidebar sections={sections} />
          </aside>
        </div>
      </div>
      <div>
        <FAQFooter />
      </div>
    </>
  );
}
