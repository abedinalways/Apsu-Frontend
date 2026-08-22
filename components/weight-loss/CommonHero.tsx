import { FeatureItem } from "@/app/(Front-End)/weight-loss/page";
import PrimaryButton from "../reusable/button/PrimaryButton";
import { StaticImageData } from "next/image";

interface CommonHeroProps {
  features: FeatureItem[];
  image?: string | StaticImageData
  title: string;
  subtitle?: string;
  description: string;
}

function CommonHero({
  features,
  image,
  title,
  subtitle,
  description,
}: CommonHeroProps) {
  return (
    <div className="mt-0 lg:mt-8 container pt-28 lg:pt-36 xl:pt-40 mx-auto">
      <div className="text-greenColor flex flex-col items-center text-center gap-4 lg:gap-6 w-full">
        <div className="flex items-center flex-wrap justify-center gap-3 lg:gap-6 w-full">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <p
                key={item.id}
                className="text-sm md:text-sm flex items-center gap-2 px-1 font-medium"
              >
                {Icon && <Icon className="size-4 md:size-5" />}
                {item.text}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col items-center text-center w-full max-w-250 mx-auto mt-2">
          {/* Title */}
          <h2 className="text-4xl max-w-75  md:text-4xl lg:text-[40px]  font-medium text-primaryColor lg:max-w-150 leading-tight">
            {title}
          </h2>
          <div className="bg-white rounded-2xl lg:hidden w-full  my-8 p-6 md:p-8 shadow-[0_4px_12px_0_rgba(2,31,24,0.04)] border border-borderColor relative  flex flex-col justify-center">
            <span className="text-gray-500 text-sm md:text-base font-medium mb-3">
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
              <PrimaryButton text="Check your eligibility" />
            </div>
          </div>
          {subtitle && (
            <h4 className="text-lg md:text-xl lg:text-2xl text-primaryColor text-center mt-3 font-medium">
              {subtitle}
            </h4>
          )}
          <p className="text-base text-descriptionColor text-center mt-4 max-w-264 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonHero;
