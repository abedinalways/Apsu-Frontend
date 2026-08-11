import { InfoSidebar } from '@/components/legal/InfoSidebar';
import FAQFooter from '@/components/faq/FAQFooter';
import { InfoHero } from '@/components/legal/InfoHero';
import { InfoList } from '@/components/legal/InfoList';
import { infoData } from '@/lib/data/infoData';
import GoToTopButton from '@/components/legal/GoToTopButton';

export default function InfoPage() {
  const sections = infoData.map(section => ({
    id: section.id,
    title: section.title,
    sidebarTitle: section.sidebarTitle,
    serial: section.serial,
  }));

  return (
    <>
      <div className="terms-container px-4 sm:px-6 md:px-8 mt-30">
        <div className="grid grid-cols-1 md:grid-cols-[364px_1fr] gap-8 lg:gap-16 justify-self-center mt-6 lg:mt-8 mb-6 relative">
          <aside className="w-full mx-auto flex flex-col lg:items-center lg:h-fit lg:justify-start mt-24 lg:sticky lg:top-42 md:*:order-2 order-1">
            <div className="w-full md:hidden ">
              <InfoHero />
            </div>
            <InfoSidebar sections={sections} />
          </aside>
          <main className="mt-6 lg:mt-20 md:order-1 order-2">
            <div className="w-full md:hidden mt-6 block">
              <p className="py-4 ">
                Please read this carefully. This page is a general summary of
                safety information for the medications offered through Apsu. It
                does not contain all possible information, is not medical
                advice, and does not replace the guidance of your provider or
                pharmacist or the official prescribing information for your
                medication. Always read the materials your provider and pharmacy
                give you.
              </p>

              <p className="mb-14 ">
                If you think you may be having a medical emergency, call 911 or
                go to the nearest emergency room. If you are in emotional
                distress or crisis, call or text 988 (the Suicide & Crisis
                Lifeline).
              </p>
            </div>
            <div className="w-full hidden md:block ">
              <InfoHero />
            </div>
            <InfoList />
          </main>
        </div>
      </div>
      <div>
        <FAQFooter />
      </div>
      <GoToTopButton/>
    </>
  );
}
