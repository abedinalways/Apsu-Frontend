import { FAQHero } from '@/components/faq/FAQHero';
import { FAQSidebar } from '@/components/faq/FAQSidebar';
import { FAQList } from '@/components/faq/FAQList';
import { faqData } from '@/lib/data/faqData';


export default function FaqPage() {
  const topics = faqData.map(category => ({
    id: category.id,
    title: category.title,
  }));

  return (
    <div className="FAQ-container">
      <FAQHero />
      <div className="mx-auto flex w-full  gap-10 px-4">
        <FAQSidebar topics={topics} />
        <FAQList />
      </div>
    </div>
  );
}
