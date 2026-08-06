import { PrivacyHero } from '@/components/legal/PrivacyHero';
import { PrivacySidebar } from '@/components/legal/PrivacySidebar';
import { PrivacyList } from '@/components/legal/PrivacyList';
import { privacyData } from '@/lib/data/privacyData';
import FAQFooter from '@/components/faq/FAQFooter';

export default function PrivacyPolicyPage() {
  const sections = privacyData.map(section => ({
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
            <div className="w-full hidden md:block ">
              <PrivacyHero />
            </div>
            <PrivacyList />
          </main>
          <aside className="w-full mx-auto flex flex-col lg:items-center lg:h-fit lg:justify-start lg:sticky lg:top-42 md:*:order-2 order-1">
            <div className="w-full md:hidden ">
              <PrivacyHero />
            </div>
            <PrivacySidebar sections={sections} />
          </aside>
        </div>
      </div>
      <div>
        <FAQFooter />
      </div>
    </>
  );
}
