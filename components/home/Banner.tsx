import { Stethoscope, Truck } from "lucide-react";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="p-3 xl:p-0">
      <div className="mt-0 lg:mt-8 max-w-[1384px] min-h-screen bg-white flex flex-col items-center mx-auto rounded-4xl pt-31 lg:pt-50 ">
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
      </div>
    </div>
  );
};

export default Banner;
