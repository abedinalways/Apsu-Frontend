'use client';

import type { FAQItem } from '@/types/faq';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { ChevronDown } from 'lucide-react';

interface Props {
  item: FAQItem;
}

export function FAQAccordion({ item }: Props) {
  return (
    <AccordionItem
      value={item.id}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#E7E2D9]
        bg-white
        shadow-[0_6px_18px_rgba(0,0,0,.04)]
      "
    >
      <AccordionTrigger
        className="
          group

          px-6
          py-5

          hover:no-underline

          data-[state=open]:bg-[#586E60]
          data-[state=open]:text-white
        "
      >
        <span className="text-left text-xl font-medium leading-8">
          {item.question}
        </span>

        <span
          className="
            ml-5
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
          "
        >
          <ChevronDown
            className="
              h-5
              w-5

              text-[#586E60]

              transition-transform
              duration-300

              group-data-[state=open]:rotate-180
            "
          />
        </span>
      </AccordionTrigger>

      <AccordionContent
        className="
          border-t
          border-dashed
          border-[#D8D4CC]

          bg-white

          px-6
          py-6

          text-base
          leading-8
          text-[#555]
        "
      >
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
}
