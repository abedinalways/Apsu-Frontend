import { faqData } from '@/lib/data/faqData';
import { FAQCategorySection } from './FAQCategorySection';

export function FAQList() {
  return (
    <div className="w-full max-w-[760px] space-y-14">
      {faqData.map(category => (
        <FAQCategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
