import React from "react";
import CommonHeader from "../reusable/CommonHeader";
import QuickCheckCard from "./QuickCheckCard";

export default function QuickCheckSection() {
  return (
    <div className="container p-4 md:p-6">
      <div className="text-center">
        <CommonHeader
          sectionName="IS IT RIGHT FOR YOU?"
          title="A quick gut check."
          description="Your physician makes the final call during your intake — but here's the general picture."
          isSmall
        />
      </div>

      <QuickCheckCard />
    </div>
  );
}
