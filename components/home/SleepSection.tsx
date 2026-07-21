import weightImg from "@/public/images/work/Sleep2 1.png";
import { Check } from "lucide-react";
import Image from "next/image";
import WhiteCustomButton from "../reusable/button/WhiteCustomButton";
import ProfileStatusCards from "./ProfileStatusCards";
function SleepSection() {
  const points = [
    "Non-controlled, non-habit-forming options",
    "Matched to your sleep pattern by a physician",
    "No controlled sedatives",
    "Cash-pay, no insurance needed",
  ];
  return (
    <div>
      <div className="xl:py-27 lg:py-15 pt-4 relative px-3 md:px-6 mt-30 lg:px-8 grid grid-cols-1 lg:grid-cols-2   bg-[#D0FFFD] rounded-2xl lg:rounded-4xl">
        <div className="relative flex h-full items-end w-full mt-2 lg:mt-0">
          <div className="lg:absolute flex justify-center w-full  lg:-top-21.5 xl:-top-43.75 lg:left-2 left-4 ">
            <Image
              src={weightImg}
              alt="Weight Loss"
              width={700}
              height={500}
              className="w-md xl:w-[552.5px]"
            />
          </div>
          <div className="z-30 absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full ">
            <ProfileStatusCards />
          </div>
        </div>
        <div>
          <div className="">
            <h3 className="text-3xl md:text-4xl max-w-153 leading-[124%] xl:text-[52px] font-medium tracking-tight mb-5">
              Sleep
            </h3>
            <p className="text-descriptionColor text-sm md:text-base leading-relaxed mb-6 ">
              Real rest without the dependency. <br /> Non-habit-forming
              Physician-prescribed For sensitive sleepers
            </p>
            {/* Bullet Points */}
            <ul className="space-y-2 ">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm md:text-base "
                >
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-greenColor text-white">
                    <Check className="h-3 w-3 stroke-3" />
                  </div>
                  <span className="text-descriptionColor">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pb-6 lg:pb-0">
            <div className="mb-4">
              <p className="text-lg text-blackColor md:text-2xl font-medium">
                From <span className="text-2xl md:text-3xl">$20</span>
                /month
              </p>
            </div>
            <WhiteCustomButton text="Start your sleep consult" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SleepSection;
