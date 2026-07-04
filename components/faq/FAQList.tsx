
import { faqData } from '@/lib/data/faqData';
import { FAQCategorySection } from './FAQCategorySection';

export function FAQList() {
  return (
    <div className="flex w-full flex-col gap-10 py-12 max-w-4xl">
      {faqData.map(category => (
        <FAQCategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
