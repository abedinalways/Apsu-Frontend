"use client";

import WhyApsuSleepIcons from "../icons/WhyApsuSleepIcons";

const TRUST_ITEMS = [
  {
    id: "item-1",
    title: "No controlled substances",
    description:
      "None of our sleep options are controlled or classified as habit-forming sedatives.",
  },
  {
    id: "item-2",
    title: "Built to avoid dependence",
    description:
      "Options are selected and dosed to help you sleep without your body relying on them.",
  },
  {
    id: "item-3",
    title: "A physician looks deeper",
    description:
      "Sleep trouble can have an underlying cause. Your doctor reviews it before prescribing.",
  },
];

export default function WhyApsuSleepSectionCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-5 lg:p-8">
      <div className="space-y-6">
        {TRUST_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col space-y-4">
            {/* Heading row with inline brand icon */}
            <div className="flex items-center gap-3">
              <div className="text-greenColor shrink-0">
                <WhyApsuSleepIcons className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-greenColor tracking-tight leading-none">
                {item.title}
              </h3>
            </div>

            {/* Description matching exact font size, line-height, and lack of left indentation */}
            <p className="text-descriptionColor text-base md:text-lg font-normal leading-[160%] tracking-wide">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
