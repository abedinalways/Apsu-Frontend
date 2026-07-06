'use client';

import NavigationButtons from './NavigationButtons';

interface Props {
  prevDisabled: boolean;
  nextDisabled: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

export default function RecommendedHeader({
  prevDisabled,
  nextDisabled,
  scrollPrev,
  scrollNext,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h2 className="recommended-title text-4xl md:text-[52px] font-medium text-[#292B2A]">
        Recommended Insights
      </h2>

      <NavigationButtons
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
      />
    </div>
  );
}
