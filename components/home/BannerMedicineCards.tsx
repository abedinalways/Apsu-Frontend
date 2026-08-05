"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { medicineData } from "@/public/demoData/medicineData";
import MedicineCard from "./MedicineCards";

const BannerMedicineCards = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".medicine-card", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="mt-9 lg:mt-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-3 lg:px-4 pb-4 lg:pb-7  w-full"
    >
      {medicineData.map((data, idx) => (
        <div key={data.for} className="medicine-card">
          <MedicineCard data={data} idx={idx} />
        </div>
      ))}
    </div>
  );
};

export default BannerMedicineCards;
