import principlePersonImg from "@/public/images/about/principle.png";
import { Stethoscope } from "lucide-react";
import Image from "next/image";
import { CashPricingIcon, PrivacyIcon, TranslateIcon } from "../icons/Icons";
function AboutPrinciples() {
  return (
    <div className="container">
      <div className=" bg-white  p-4  lg:p-6 font-sans rounded-xl lg:rounded-2xl text-primaryColor">
        <div className="text-center">
          <h4 className="text-base text-greenColor mb-3">WHAT WE STAND ON</h4>

          <h2 className="text-3xl md:text-4xl mx-auto max-w-[500px] lg:text-[40px] font-medium text-primaryColor">
            Principles we{" "}
            <span className="text-greenColor font-semibold">
              don&apos;t bend.
            </span>{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end w-full mt-10">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Real medicine */}
            <div className="bg-bgColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl p-3 xl:p-6 flex flex-col lg:items-end lg:text-end justify-between ">
              <div className="flex items-start gap-3 mb-3 flex-row-reverse lg:flex-row justify-end w-full">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primaryColor">
                    Real medicine, real doctors
                  </h3>
                  <p className="text-descriptionColor text-sm md:text-base leading-[160%]  max-w-xs">
                    Every diagnosis and prescription is made by a U.S.-licensed
                    physician — never by software.
                  </p>
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full bg-primaryColor flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 2: Clear, cash-pay pricing */}
            <div className="bg-bgColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl xl:p-6 p-3 flex flex-col lg:items-end lg:text-end justify-between">
              <div className="flex items-start gap-3 mb-3 flex-row-reverse lg:flex-row justify-end w-full">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primaryColor">
                    Clear, cash-pay pricing
                  </h3>
                  <p className="text-descriptionColor text-sm md:text-base leading-[160%]  max-w-xs">
                    You pay for medication. No insurance required, no
                    subscriptions to untangle, no surprise charges.
                  </p>
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full bg-primaryColor flex items-center justify-center text-white">
                  <CashPricingIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE COLUMN (CENTER IMAGE) ================= */}
          <div className="relative w-full  mx-auto rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(2,31,24,0.08)] ">
            <Image
              src={principlePersonImg}
              alt="Principles Background Person"
              width={600}
              height={600}
              className="object-cover w-full object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primaryColor/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-6 ">
            {/* Card 3: Translation, not advice */}
            <div className="bg-bgColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl xl:p-6 p-3 flex flex-col items-start text-start justify-between ">
              <div className="flex items-start gap-3 mb-3 justify-start w-full">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primaryColor flex items-center justify-center text-white">
                  <TranslateIcon className="w-5 h-5" />
                </div>
                <div className="">
                  <h3 className="text-base md:text-lg font-bold text-primaryColor">
                    Translation, not advice
                  </h3>
                  <p className="text-descriptionColor text-sm md:text-base leading-[160%] mt-2 xl:mt-4  max-w-xs">
                    AI translates, shares general information. It doesn&apos;t
                    diagnose, prescribe, or replace your physician.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Privacy by default */}
            <div className="bg-bgColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl p-3 xl:p-6 flex flex-col items-start text-start justify-between ">
              <div className="flex items-start gap-3 mb-3 justify-start w-full">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primaryColor flex items-center justify-center text-white">
                  <PrivacyIcon className="w-5 h-5" />
                </div>
                <div className="space-y-2 xl:space-y-4">
                  <h3 className="text-base md:text-lg font-bold text-primaryColor">
                    Privacy by default
                  </h3>
                  <p className="text-descriptionColor text-sm md:text-base leading-[160%]  max-w-xs">
                    Discreet packaging and careful handling of your health
                    information, at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPrinciples;
