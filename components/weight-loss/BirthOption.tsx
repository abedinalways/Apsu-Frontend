import image1 from "@/public/images/birth-controll/birth1.png";
import image2 from "@/public/images/birth-controll/update.jpg";
import { StaticImageData } from "next/image";
import MedicationSection from "./MedicationSection";
export interface MedicationItem {
  id: number;
  tag: string;
  name: string;
  brandInfo: string;
  features: string[];
  price: string;
  perDuration: string;
  image: string | StaticImageData;
}
function BirthOption() {
  const birthControlData: MedicationItem[] = [
    {
      id: 1,
      tag: "DAILY",
      name: "The Pill",
      brandInfo:
        "A daily birth control pill, with FDA-approved options your physician matches to you.",
      features: [
        "Options for lighter or fewer periods",
        "Formulations with iron available",
        "Auto-refilled, delivered discreetly",
      ],
      price: "$20",
      perDuration: "/mo",
      image: image1,
    },
    {
      id: 2,
      tag: "EVERY 3 MONTHS",
      name: "The Shot",
      brandInfo: "One injection every three months.",
      features: [
        "No daily pill to keep track of",
        "An estrogen-free option",
        "Discreetly delivered on schedule",
      ],
      price: "$20",
      perDuration: "/ 3mo",
      image: image2,
    },
  ];

  return (
    <div className="bg-white container rounded-2xl lg:rounded-4xl  p-4 md:p-6">
      <div className="max-w-200 text-center  mx-auto w-full">
        <h4 className="text-base text-greenColor mb-3">YOUR OPTIONS</h4>
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-primaryColor">
          Two ways to take control.
        </h2>
      </div>

      <MedicationSection
        sectionBgColor="bg-[#FFDEFF]"
        data={birthControlData}
      />
    </div>
  );
}

export default BirthOption;
