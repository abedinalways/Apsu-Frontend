import type { FAQCategory } from '@/types/faq';

import { Accordion } from '@/components/ui/accordion';

import { FAQAccordion } from './FAQAccordion';

interface Props {
  category: FAQCategory;
}

export function FAQCategorySection({ category }: Props) {
  return (
    <section id={category.id} className="scroll-mt-28 space-y-5">
      <h2 className="text-2xl font-semibold text-primary-800">
        {category.title}
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {category.items.map(item => (
          <FAQAccordion key={item.id} item={item} />
        ))}
      </Accordion>
    </section>
  );
}
