import weightImg from "@/public/images/work/birthControll.png";
import { Check } from "lucide-react";
import Image from "next/image";
import WhiteCustomButton from "../reusable/button/WhiteCustomButton";
function BirthControll() {
  const points = [
    "Prescribed online, delivered to your door",
    "Automatic refills, delivered",
    "Plain, discreet packaging",
  ];
  return (
    <div>
      <div className="xl:py-27 lg:py-15 pt-4 relative px-3 md:px-6 mt-12 lg:mt-30  lg:px-8 grid grid-cols-1 lg:grid-cols-2   bg-[#FFDEFF] rounded-2xl lg:rounded-4xl">
        <div>
          <div className="">
            <h3 className="text-3xl md:text-4xl max-w-153 leading-[124%] xl:text-[52px] font-medium tracking-tight mb-5">
              Birth Control, Without the Waiting Room.
            </h3>
            <p className="text-descriptionColor text-sm md:text-base leading-relaxed mb-6 ">
              Choose the method that fits your life. A US-licensed physician
              prescribes online, and your refills arrive automatically.
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
          <div className="mt-8">
            <div className="mb-4">
              <p className="text-lg text-blackColor md:text-2xl font-medium">
                From <span className="text-2xl md:text-3xl">$20</span>
                /month
              </p>
            </div>
            <div className="w-full ">
              <WhiteCustomButton
                text="Start your birth control consult"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full mt-2 lg:mt-0">
          <div className="lg:absolute flex justify-center  lg:-top-27.5 xl:-top-43.75 right-10 ">
            <Image
              src={weightImg}
              alt="Weight Loss"
              width={700}
              height={500}
              className="md:w-81 w-45 xl:w-[392.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthControll;
