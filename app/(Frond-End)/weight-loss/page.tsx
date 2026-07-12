import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import { Stethoscope, Truck } from "lucide-react";
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
      text: "40+ Language",
      icon: IoEarthOutline,
    },
    {
      id: 2,
      text: "US-licensed physicians",
      icon: Stethoscope,
    },
    {
      id: 3,
      text: "Free expedited shipping",
      icon: Truck,
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
    </div>
  );
}

export default page;
