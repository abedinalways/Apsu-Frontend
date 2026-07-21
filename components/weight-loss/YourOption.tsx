import {
  default as semaglutideVial,
  default as tirzepatideVial,
} from "@/public/images/banner/medic.png";
import { StaticImageData } from "next/image";
import CommonHeader from "../reusable/CommonHeader";
import MedicationSection from "./MedicationSection";
export interface MedicationItem {
  id: number;
  tag: string;
  name: string;
  brandInfo: string;
  features: string[];
  price: string;
  image: string | StaticImageData;
}
function YourOption() {
  const medicationsData: MedicationItem[] = [
    {
      id: 1,
      tag: "GLP-1",
      name: "Semaglutide",
      brandInfo: "The active ingredient in Ozempic® & Wegovy®",
      features: [
        "A once-weekly injection that helps regulate appetite and blood sugar.",
        "A widely used starting point for medical weight management.",
      ],
      price: "$200",
      image: semaglutideVial,
    },
    {
      id: 2,
      tag: "GLP-1 / GIP",
      name: "Tirzepatide",
      brandInfo: "The active ingredient in Mounjaro® & Zepbound®",
      features: [
        "A once-weekly injection that acts on two appetite-regulating pathways.",
        "Often considered when more support is clinically appropriate.",
      ],
      price: "$200",
      image: tirzepatideVial,
    },
  ];

  return (
    <div className="bg-white container rounded-2xl lg:rounded-4xl  p-4 md:p-6">
      <div className="text-center">
        <CommonHeader
          sectionName="YOUR OPTIONS"
          title="Two Proven GLP-1 Medications."
          description="Your physician recommends the option that fits your health history and goals. Both are compounded and shipped to your door."
          isSmall
        />
      </div>

      <MedicationSection
        sectionBgColor="bg-[#BCFFE6]/80"
        data={medicationsData}
      />
    </div>
  );
}

export default YourOption;
