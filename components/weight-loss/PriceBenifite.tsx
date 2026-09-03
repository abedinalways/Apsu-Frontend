'use client';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import PrimaryButton from '../reusable/button/PrimaryButton';

function ProgramPricingSection({
  img,
  benefits,
}: {
  img: string | StaticImageData;
  benefits: string[];
}) {
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(true);

  return (
    <div className="  pb-14 pt-6 md:py-24 font-sans text-primaryColor">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* ================= LEFT COLUMN: INFO & BENEFITS ================= */}
        <div className="flex flex-col lg:col-span-5 justify-between w-full space-y-6">
          {/* Top Price Card */}
          <div className="bg-white rounded-2xl hidden p-6 md:p-8 shadow-[0_4px_12px_0_rgba(2,31,24,0.04)] border border-borderColor relative  lg:flex flex-col justify-center">
            <span className="text-grayColor1 text-sm md:text-base font-medium mb-3">
              Starts from
            </span>
            <h2 className="text-3xl md:text-4xl font-normal mb-3 text-greenColor">
              $200
              <span className="text-base md:text-lg xl:text-xl font-normal">
                /month
              </span>
            </h2>

            {/* Float Button over the price card */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center md:w-auto">
              <PrimaryButton text="Check your eligibility" href="/assessment/weight-loss"/>
            </div>
          </div>

          {/* Menu / Accordion Wrapper */}
          <div className="w-full space-y-4 mt-4 xl:mt-0 ">
            {/* How It Works Header Line */}
            <div className="border-y pt-2 border-borderColor pb-3 flex items-center justify-between cursor-pointer group">
              <a
                href="#Works"
                className="text-xs md:text-sm font-semibold text-grayColor1 group-hover:text-greenColor underline transition-colors"
              >
                How It Works
              </a>
            </div>

            {/* Program Benefits Accordion */}
            <div className="border-b border-borderColor pb-3">
              <div
                onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
                className="flex items-center justify-between cursor-pointer select-none py-1"
              >
                <span className="text-xs md:text-sm font-semibold text-grayColor1">
                  Program Benefits
                </span>
                <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center text-grayColor1">
                  {isBenefitsOpen ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>

              {/* Dynamic Benefits List */}
              {isBenefitsOpen && (
                <ul className="mt-4 space-y-3 pl-1 transition-all">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm  md:text-base font-medium"
                    >
                      {/* Exact Green Icon Check Circle */}
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-greenColor text-white">
                        <Check className="h-2.5 w-2.5 stroke-3" />
                      </div>
                      <span className="text-descriptionColor">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: PRODUCT GAUGE ================= */}
        <div className="relative w-full lg:col-span-7 rounded-3xl overflow-hidden ] xl:shadow-[0_4px_12px_0_rgba(2,31,24,0.03)] flex items-center justify-center ">
          <div className="relative w-full h-full ">
            <Image
              src={img}
              alt="Tirzepatide Weight Loss Program Vials"
              width={700}
              height={700}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPricingSection;
