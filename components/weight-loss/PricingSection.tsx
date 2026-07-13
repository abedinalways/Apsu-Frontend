"use client";
import React from "react";
import PricingCardSection from "../Sleep/PricingCardSection";

export default function PricingSection() {
  const handlePricingRedirect = () => {
    console.log("Redirecting to onboarding funnel flow...");
  };

  return (
    <main className="w-full my-10 md:my-14 lg:my-20">
      <PricingCardSection
        bgImageUrl="/images/sleep/pricing-bg-1.png"
        title="Affordable plan for every lifestyle"
        priceAmount="$200"
        onButtonClick={handlePricingRedirect}
      />
    </main>
  );
}
