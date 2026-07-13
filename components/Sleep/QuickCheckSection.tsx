import React from "react";
import CommonHeader from "../reusable/CommonHeader";

interface CardItem {
  number: string;

  description: string;
}

export default function QuickCheckSection() {
  const cards: CardItem[] = [
    {
      number: "01",
      description: "Adults with ongoing trouble falling or staying asleep",
    },
    {
      number: "02",

      description:
        "People who've tried over-the-counter aids without lasting results",
    },
    {
      number: "03",

      description:
        "Those who want a non-habit-forming, physician-guided option",
    },
  ];
  return (
    <div className="container">
      <div className="text-center">
        <CommonHeader
          sectionName="IS IT RIGHT FOR YOU?"
          title="A quick gut check."
          description="Often a good fit"
          isSmall
        />
      </div>

      {/* <QuickCheckCard /> */}
      <div className="py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-2xl px-4 md:px-6 py-4 md:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full "
            >
              {/* Top Right Number */}
              <div className=" text-[52px] lg:text-[80px] leading-[100%] text-end  text-[#21AC8847]">
                {card.number}
              </div>

              {/* Card Content */}
              <div className="mt-5">
                <p className="text-[#585E5A] text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
