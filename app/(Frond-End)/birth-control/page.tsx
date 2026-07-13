import PricingSection from "@/components/birth-control/PricingSection";
import QuickCheckSection from "@/components/birth-control/QuickCheckSection";
import WeightLossQuestion from "@/components/birth-control/WeightLossQuestion";
import FAQFooter from "@/components/faq/FAQFooter";
import { ApprovedIcon, GlobalIcon } from "@/components/icons/Icons";
import HowItWorks from "@/components/Sleep/HowItWorks";
import BirthOption from "@/components/weight-loss/BirthOption";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import WeightLosFAQsection from "@/components/weight-loss/WeightLosFAQsection";
import { Stethoscope } from "lucide-react";
import React from "react";
export interface FeatureItem {
  id: number;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}
function page() {
  const featuresData: FeatureItem[] = [
    {
      id: 1,
      text: "FDA-approved options",
      icon: ApprovedIcon,
    },

    {
      id: 3,
      text: "US-licensed physicians",
      icon: Stethoscope,
    },
    {
      id: 2,
      text: "40+ Language",
      icon: GlobalIcon,
    },
  ];
  return (
    <div>
      <CommonHero
        features={featuresData}
        title="Birth control, on your terms."
        description="Prescription birth control, the pill or the shot. Complete your visit in the language you think in."
      />
      <ProgramPricingSection />
      <BirthOption />
      <PricingSection />
      <HowItWorks />
      <WeightLossQuestion />
      <QuickCheckSection />
      <WeightLosFAQsection />
      <FAQFooter />
    </div>
  );
}

export default page;
