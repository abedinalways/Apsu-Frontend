import { FAQAccordionItem } from './FAQAccordionItem';
import type { FAQCategory } from '@/types/faq';

interface FAQCategorySectionProps {
  category: FAQCategory;
}

export function FAQCategorySection({ category }: FAQCategorySectionProps) {
  return (
    <div id={category.id} className="flex scroll-mt-24 flex-col gap-4">
      <h2 className="text-lg font-semibold text-primary-800 md:text-xl">
        {category.title}
      </h2>
      <div className="flex flex-col gap-3">
        {category.items.map(item => (
          <FAQAccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
