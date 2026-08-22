import BirthControlFAQsection from "@/components/birth-control/BirthControlFAQsection";
import BirthControlQuestion from "@/components/birth-control/BirthControlQuestion";
import PricingSection from "@/components/birth-control/PricingSection";
import QuickCheckSection from "@/components/birth-control/QuickCheckSection";
import FAQFooter from "@/components/faq/FAQFooter";
import { ApprovedIcon, GlobalIcon } from "@/components/icons/Icons";
import HowItWorks from "@/components/Sleep/HowItWorks";
import BirthOption from "@/components/weight-loss/BirthOption";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import {
  default as heroImage,
  default as tirzepatideImg,
} from "@/public/images/birth-controll/birth-herro.png";
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
  const benefits = [
    "Prescribed by U.S. board-certified physicians",
    "No insurance needed",
    "Pay only if prescribed",
    "Physician consult cost $0",
    "Shipping cost $0",
  ];
  return (
    <div>
      <CommonHero
        image={heroImage}
        features={featuresData}
        title="Birth control, on your terms."
        description="Prescription birth control, the pill or the shot. Complete your visit in the language you think in."
      />
      <ProgramPricingSection img={tirzepatideImg} benefits={benefits} />
      <BirthOption />
      <PricingSection />
      <HowItWorks />
      <BirthControlQuestion />
      <QuickCheckSection />
      <BirthControlFAQsection />
      <FAQFooter />
    </div>
  );
}

export default page;
