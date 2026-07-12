import { CapsulIcon } from "@/components/icons/Icons";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import WeightLosFAQsection from "@/components/weight-loss/WeightLosFAQsection";
import WeightLossQuestion from "@/components/weight-loss/WeightLossQuestion";
import YourOption from "@/components/weight-loss/YourOption";
import { Stethoscope } from "lucide-react";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
export interface FeatureItem {
  id: number;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}
function page() {
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
    <div>
      <CommonHero
        features={featuresData}
        title="Weight Loss Solutions"
        subtitle="Personalized Care for Your Journey"
        description="GLP-1 medications are prescription treatments that help regulate appetite and blood sugar levels. By helping you feel fuller for longer and reducing hunger, they may support weight loss when combined with healthy lifestyle changes. A licensed provider can help determine whether a GLP-1 medication is appropriate for your individual needs."
      />
      <ProgramPricingSection />
      <YourOption />
      <WeightLossQuestion />
      <WeightLosFAQsection/>
    </div>
  );
}

export default page;
