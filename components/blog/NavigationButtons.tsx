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
        border-[#0A3322]
        transition-all
        duration-300
        hover:bg-[#0A3322]
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ArrowLeft size={20} />
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
        border-[#0A3322]
        transition-all
        duration-300
        hover:bg-[#0A3322]
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
