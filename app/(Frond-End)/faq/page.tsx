import { FAQHero } from '@/components/faq/FAQHero';
import { FAQSidebar } from '@/components/faq/FAQSidebar';
import { FAQList } from '@/components/faq/FAQList';
import { faqData } from '@/lib/data/faqData';
import ContactCard from '@/components/faq/ContactCard';
import FAQFooter from '@/components/faq/FAQFooter';



export default function FaqPage() {
  const topics = faqData.map(category => ({
    id: category.id,
    title: category.title,
  }));

  return (
    <div className="FAQ-container">
      <FAQHero />
      <div className="grid lg:grid-cols-[400px_1fr] gap-12 justify-center mt-6 mb-6">
        <aside className=" w-full mx-auto flex flex-col lg:items-center" >
          <FAQSidebar topics={topics} />
        </aside>

        <main className=" mt-10">
          <FAQList />

          <div className="mt-6 lg:hidden">
            <ContactCard />
          </div>
        </main>
      </div>
      <FAQFooter/>
    </div>
  );
}
