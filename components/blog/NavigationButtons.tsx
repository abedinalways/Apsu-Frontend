'use client';

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  prevDisabled: boolean;
  nextDisabled: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

export default function NavigationButtons({
  prevDisabled,
  nextDisabled,
  scrollPrev,
  scrollNext,
}: Props) {
  return (
    <div className="flex items-center gap-3 ">
      <button
        onClick={scrollPrev}
        disabled={prevDisabled}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-brand
        transition-all
        duration-300
        hover:bg-brand
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ArrowLeft size={16} />
      </button>

      <button
        onClick={scrollNext}
        disabled={nextDisabled}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-brand
        transition-all
        duration-300
        hover:bg-brand
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
