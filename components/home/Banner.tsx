import { Stethoscope, Truck } from "lucide-react";
import { IoEarthOutline } from "react-icons/io5";
import ButtonGroup from "../ui/ButtonGroup";
import LanguageCarousel from "./LanguageCarousel";
import BannerMedicineCards from "./BannerMedicineCards";

export const Banner = () => {
  return (
    <div className="p-3 xl:p-0">
      <div className="mt-0 lg:mt-8 max-w-[1384px] min-h-screen bg-white  flex flex-col items-center mx-auto rounded-4xl pt-31 lg:pt-50 ">
        {/* info */}
        <div className="text-[#21AC88] h-fit flex items-center flex-col-reverse lg:flex-row justify-center gap-2 lg:gap-6 ">
          <div className="flex items-center flex-wrap justify-center gap-2 lg:gap-6">
            <p className="text-sm flex items-center gap-2">
              {" "}
              <IoEarthOutline className="size-3 md:size-5" />
              40+ Language
            </p>
            <p className="text-xs md:text-sm flex items-center gap-2">
              {" "}
              <Stethoscope className="size-3 md:size-5" />
              US-licensed physicians
            </p>
          </div>
          <p className="text-sm flex items-center gap-2">
            {" "}
            <Truck className="size-3 md:size-5" />
            Free expedited shipping
          </p>
        </div>
        {/* title */}
        <h1 className="text-primary font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:max-w-150 lg:max-w-180 max-w-218 text-center mt-4">
          Healthcare that{" "}
          <span className="text-[#00774D]">speaks your language.</span>
        </h1>
        {/* subtitle */}
        <p className="text-center lg:text-xl mt-4 max-w-100 xl:max-w-150 xl:flex xl:flex-col">
          <span> Care in the language you think in.</span>
          <span> US-licensed physicians, AI translates your consultation.</span>
        </p>
        {/* cta button */}
        <div className="mt-6">
          <ButtonGroup>Start a free consultation</ButtonGroup>
          
        </div>
        {/* language carousel  */}
        <div className="mt-6 lg:mt-8 space-y-4 relative">
          <div className="w-20 lg:w-30 h-full bg-linear-to-r from-white to-transparent absolute z-10 left-0"></div>
          <div className="w-20 lg:w-30 h-full bg-linear-to-l from-white to-transparent absolute z-10 right-0"></div>
          <LanguageCarousel />
          <LanguageCarousel direction="right" />
        </div>
        {/* medicine cards */}
        <BannerMedicineCards />
      </div>
    </div>
  );
};

export default Banner;
