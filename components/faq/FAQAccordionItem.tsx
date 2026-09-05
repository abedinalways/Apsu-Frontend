'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types/faq';

interface FAQAccordionItemProps {
  item: FAQItem;
}

export function FAQAccordionItem({ item }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-[12px] transition-colors duration-200 ${
        isOpen ? 'bg-primary-800' : 'border border-borderColor bg-white'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors ${
          isOpen
            ? 'text-white'
            : 'text-blackColor hover:text-blackColor'
        }`}
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-white' : 'text-grayColor1'
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-sm leading-[160%] text-white/90">
          {item.answer}
        </div>
      )}
    </div>
  );
}
