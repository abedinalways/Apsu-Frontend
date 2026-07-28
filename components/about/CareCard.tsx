import Image from "next/image";
import { SlideItem } from "./AboutCareWork";

function CareCard({ slide }: { slide: SlideItem }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch w-full ">
        <div className="md:col-span-2 bg-bgColor border border-[#F5F4EE] shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.04)] rounded-2xl p-6 md:p-4 lg:p-6 flex flex-col justify-between items-start text-left">
          <span className="text-5xl md:text-6xl lg:text-[80px]  text-[#21AC8847]/38 ">
            {slide.stepNumber}
          </span>

          <div className="mt-8 md:mt-0">
            <h3 className="text-2xl md:text-xl  lg:text-2xl xl:text-[40px]  font-semibold text-greenColor  mb-4 lg:mb-8">
              {slide.title}
            </h3>
            <p className="text-descriptionColor text-sm md:text-base leading-relaxed max-w-xs">
              {slide.description}
            </p>
          </div>
        </div>

        {/* Right Side: Image with White Overlay Capsules */}
        <div className="md:col-span-3 relative  rounded-2xl overflow-hidden ">
          <Image
            src={slide.mobileImage}
            alt={slide.title}
            width={1000}
            height={600}
            className="object-cover h-auto md:hidden"
          />
          <Image
            src={slide.mainImage}
            alt={slide.title}
            width={1000}
            height={600}
            className="object-cover h-auto hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default CareCard;
