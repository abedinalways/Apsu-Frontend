"use client";

import { ArrowRight, Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export interface MedicationItem {
  id: number;
  tag: string;
  name: string;
  brandInfo: string;
  features: string[];
  price: string;
  image: string | StaticImageData;
}

interface MedicationSectionProps {
  sectionBgColor?: string;
  data: MedicationItem[];
}

export default function MedicationSection({
  sectionBgColor = "bg-[#FAF9F5]",
  data,
}: MedicationSectionProps) {
  return (
    <div className={`lg:mt-8  pt-12 lg:pt-14`}>
      <div className="">
        {/* --- Grid Items Layout --- */}
        <div className="space-y-8 md:space-y-6">
          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
              >
                <div
                  className={`${sectionBgColor} rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col justify-between shadow-[0_2px_8px_rgba(2,31,24,0.02)] min-h-[380px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-base md:text-lg tracking-wider text-descriptionColor uppercase block">
                      {item.tag}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-[52px] font-semibold tracking-tight text-primaryColor">
                      {item.name}
                    </h3>
                    <p className="text-base  text-descriptionColor !mt-1">
                      {item.brandInfo}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4 pt-4">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-lg md:text-xl text-headerColor/90 leading-relaxed"
                        >
                          <div className="mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-greenColor text-white">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Button area */}
                  <div className="pt-6 space-y-4">
                    <h4 className="text-2xl md:text-3xl  text-headerColor">
                      From{" "}
                      <span className="text-3xl md:text-5xl lg:text-[52px]">
                        {item.price}
                      </span>
                      <span className="text-2xl md:text-3xl font-normal">
                        /mo
                      </span>
                    </h4>
                    <button className="bg-white hover:bg-gray-50 text-[#0C2417] px-4 py-2 rounded-full border border-gray-100 flex items-center gap-2 text-xs md:text-sm font-semibold transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer max-w-fit">
                      Check eligibility
                      <div className="w-5 h-5 bg-[#0C2417] rounded-full flex items-center justify-center text-white">
                        <ArrowRight className="w-3 h-3 stroke-3" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* --- Image Product Box --- */}
                <div
                  className={`bg-white rounded-2xl shadow-[0_4px_12px_rgba(2,31,24,0.05)]   flex items-center justify-center  ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full h-full ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
