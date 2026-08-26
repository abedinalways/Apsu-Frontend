"use client";

import type { FAQItem } from "@/types/faq";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronDown } from "lucide-react";

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
<<<<<<< HEAD
        border  hover:bg-greenColor1 hover:text-whiteColor transition-all
        border-background
>>>>>>> 673c73c (update the faq section)
        bg-white
        shadow-[0_6px_18px_rgba(0,0,0,.04)]
      "
    >
      <AccordionTrigger
        className="
          group
          cursor-pointer
          px-4 sm:px-6
          py-4 sm:py-5

          hover:no-underline

          data-[state=open]:bg-greenColor1
          data-[state=open]:text-white
        "
      >
        <span className="text-left text-base sm:text-lg md:text-xl font-medium leading-6 sm:leading-8">
          {item.question}
        </span>

        <span
          className="
            ml-3 sm:ml-5
            flex
            h-8 w-8 sm:h-10 sm:w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
          "
        >
          <ChevronDown
            className="
              h-4 w-4 sm:h-5 sm:w-5

              text-greenColor

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
          border-background

          bg-whiteColor

          px-4 sm:px-6
          py-4 sm:py-6

          text-sm sm:text-base
          leading-6 sm:leading-8
          text-grayColor1
        "
      >
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
}
