import React from "react";
import CommonHeader from "../reusable/CommonHeader";
import SleepBreakCard from "./SleepBreakCard";

export default function SleepBreak() {
  return (
    <div className="bg-white container rounded-2xl lg:rounded-4xl  p-4 md:p-6">
      <div className="text-center">
        <CommonHeader
          sectionName=""
          title="Sleep doesn't break the same way for everyone."
          description="Your physician matches a non-habit-forming option to the way you actually struggle — not a one-size-fits-all pill."
          isSmall
        />
      </div>

      <SleepBreakCard />
    </div>
  );
}
