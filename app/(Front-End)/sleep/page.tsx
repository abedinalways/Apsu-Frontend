import React from "react";
import { CapsulIcon } from "@/components/icons/Icons";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import { Stethoscope, Truck } from "lucide-react";
import { IoEarthOutline } from "react-icons/io5";
import SleepBreak from "@/components/Sleep/SleepBreak";
import HowItWorks from "@/components/Sleep/HowItWorks";
import PricingSection from "@/components/Sleep/PricingSection";
import FAQFooter from "@/components/faq/FAQFooter";
import WhyApsuSleepSection from "@/components/birth-control/WhyApsuSleepSection";
import QuickCheckSection from "@/components/Sleep/QuickCheckSection";
import SleepFAQsection from "@/components/Sleep/SleepFAQsection";
import SleepQuestion from "@/components/Sleep/SleepQuestion";
import tirzepatideImg from "@/public/images/banner/sleep-hero.png";
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
   const benefits = [
    "Prescribed by U.S. board-certified physicians",
    "No insurance needed",
    "Pay only if prescribed",
    // "Physician consult cost $0",
    "Shipping cost $0",
  ];
  return (
    <div>
      <CommonHero
        features={featuresData}
        title="Find your way back to deep sleep."
        subtitle=""
        description="Non-habit-forming, non-controlled sleep treatment. Complete your visit in the language you think in."
      />
      <ProgramPricingSection img={tirzepatideImg} benefits={benefits} />
      <SleepBreak />
      <PricingSection />
      <WhyApsuSleepSection />
      <HowItWorks />
      <SleepQuestion />
      <QuickCheckSection />
      <SleepFAQsection />
      <FAQFooter />
    </div>
  );
}
