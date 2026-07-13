import React from "react";
import CommonHeader from "../reusable/CommonHeader";
import WhyApsuSleepSectionCard from "./WhyApsuSleepSectionCard";

export default function WhyApsuSleepSection() {
  return (
    <div className="container grid pb-10 md:pb-15 lg:pb-20 grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
      <div className="max-w-xl">
        <CommonHeader
          sectionName="WHY APSU SLEEP"
          title="Sleep that doesn't hook you."
          description="The fastest way to sleep isn't always the safest. Every option we offer is non-controlled and chosen to help you rest without building a dependence, your physician looks at what's keeping you up, not just the symptom. Our AI carries the conversation both ways; your doctor makes every medical call."
          isSmall
        />
      </div>

      <WhyApsuSleepSectionCard />
    </div>
  );
}
