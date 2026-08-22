import { TermsHero } from '@/components/legal/TermsHero';
import { TermsSidebar } from '@/components/legal/TermsSidebar';
import { TermsList } from '@/components/legal/TermsList';
import { termsData } from '@/lib/data/termsData';
import FAQFooter from '@/components/faq/FAQFooter';
import GoToTopButton from '@/components/legal/GoToTopButton';

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
        <div className="grid grid-cols-1 md:grid-cols-[364px_1fr] gap-8 lg:gap-16 justify-self-center mt-6 lg:mt-8 md:mb-6 mb-2 relative">
          <aside className="w-full mx-auto flex flex-col lg:items-center lg:h-fit lg:justify-start  mt-24 md:*:order-2 order-1">
            <div className="w-full md:hidden ">
              <TermsHero />
            </div>
            <TermsSidebar sections={sections} />
          </aside>
          <main className="mt-6 lg:mt-20 md:order-1 order-2">
            <div className="w-full hidden md:block ">
              <TermsHero />
            </div>
            <TermsList />
          </main>
        </div>
      </div>
      <div>
        <FAQFooter />
      </div>
      <GoToTopButton />
    </>
  );
}
