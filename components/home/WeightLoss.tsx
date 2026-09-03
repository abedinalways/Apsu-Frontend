import weightImg from "@/public/images/work/weight.png";
import { Check } from "lucide-react";
import Image from "next/image";
import WhiteCustomButton from "../reusable/button/WhiteCustomButton";
function WeightLoss() {
  const points = [
    "Same-day doctor visits and prescriptions",
    "Dosage personalized",
    "Shipped from licensed USA pharmacies",
  ];
  return (
    <div>
      <div className="xl:py-27 lg:py-15 pt-4 relative px-3 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  bg-greenBgColor rounded-2xl lg:rounded-4xl">
        <div>
          <h4 className="text-base w-full text-greenColor mb-3">WEIGHT LOSS</h4>
          <div className="mt-1">
            <h3 className="text-3xl md:text-4xl leading-[124%] xl:text-[52px] font-medium tracking-tight mb-5">
              Loss Weight In Your Way.
            </h3>

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
            <WhiteCustomButton text="See plans" href="/assessment/weight-loss" />
          </div>
        </div>
        <div className="relative w-full xl:col-span-2">
          <div className="lg:absolute lg:-top-27.5 xl:-top-46.75 right-10 ">
            <Image
              src={weightImg}
              alt="Weight Loss"
              width={700}
              height={500}
              className="w-159.75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeightLoss;
