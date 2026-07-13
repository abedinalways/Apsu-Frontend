import React from "react";
import { CapsulIcon } from "@/components/icons/Icons";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import { Stethoscope, Truck } from "lucide-react";
import { IoEarthOutline } from "react-icons/io5";
import SleepBreak from "@/components/Sleep/SleepBreak";
import HowItWorks from "@/components/Sleep/HowItWorks";

export interface FeatureItem {
  id: number;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}
export default function SleepPage() {
  const featuresData: FeatureItem[] = [
    {
      id: 1,
      text: "Compound GLP-1",
      icon: CapsulIcon,
    },

    {
      id: 3,
      text: "US-licensed physicians",
      icon: Stethoscope,
    },
    {
      id: 2,
      text: "40+ Language",
      icon: IoEarthOutline,
    },
  ];
  return (
    <div className="mt-42">
      <CommonHero
        features={featuresData}
        title="Find your way back to deep sleep."
        subtitle=""
        description="Non-habit-forming, non-controlled sleep treatment. Complete your visit in the language you think in."
      />
      <ProgramPricingSection />
      <SleepBreak />
      <HowItWorks />
    </div>
  );
}
