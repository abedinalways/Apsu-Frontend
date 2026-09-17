import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Weight Loss Treatment Online | GLP-1 Medications | Apsu",
  description:
    "Physician-guided weight loss with GLP-1 medications (semaglutide, tirzepatide). Online assessment, US-licensed physicians, cash-pay pricing. See if you qualify.",
  path: "/weight-loss",
  keywords:
    "weight loss online, GLP-1, semaglutide, tirzepatide, telehealth weight loss, prescription weight loss, Apsu weight loss",
});


import FAQFooter from "@/components/faq/FAQFooter";
import { CapsulIcon } from "@/components/icons/Icons";
import HowItWorks from "@/components/Sleep/HowItWorks";
import CommonHero from "@/components/weight-loss/CommonHero";
import ProgramPricingSection from "@/components/weight-loss/PriceBenifite";
import PricingSection from "@/components/weight-loss/PricingSection";
import WeightLosFAQsection from "@/components/weight-loss/WeightLosFAQsection";
import WeightLossQuestion from "@/components/weight-loss/WeightLossQuestion";
import YourOption from "@/components/weight-loss/YourOption";
import { Stethoscope } from "lucide-react";
import tirzepatideImg from "@/public/images/banner/Medicine.png";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import StructuredData from '@/components/seo/StructuredData';
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
   const benefits = [
    "Compounded in the U.S.A",
    "Prescribed by U.S. board-certified physicians",
    "2 minute eligibility check",
    "No insurance needed",
    "Pay only if prescribed",
    "Shipping cost $0",
  ];

  const weightLossServiceData = {
    name: 'Weight Loss Treatment',
    description: 'GLP-1 medications for weight management with US-licensed physicians',
    services: [
      'GLP-1 Medications (Semaglutide, Tirzepatide)',
      'Online Medical Assessment',
      'Physician Consultations',
      'Medication Delivery',
    ],
  };

  return (
    <>
      <StructuredData type="healthcare-service" data={weightLossServiceData} />
      <div>
        <CommonHero
          features={featuresData}
          title="Lose weight with GLP-1"
          subtitle="Explained in your language."
          description="GLP-1 medications are prescription treatments that help regulate appetite and blood sugar levels. By helping you feel fuller for longer and reducing hunger, they may support weight loss when combined with healthy lifestyle changes. A licensed provider can help determine whether a GLP-1 medication is appropriate for your individual needs."
        />
        <ProgramPricingSection img={tirzepatideImg} benefits={benefits} />
        <YourOption />
        <PricingSection />
        <HowItWorks />
        <WeightLossQuestion />
        <WeightLosFAQsection />
        <FAQFooter />
      </div>
    </>
  );
}

export default page;
