import { MedicineData } from "@/public/demoData/medicineData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";

const MedicineCard = ({ data }: { data: MedicineData }) => {
  return (
    <div className="flex p-3 md:p-4 lg:p-6 pb-0! bg-[#C9FFEB] rounded-2xl">
      <div className=" max-w-53 lg:max-w-58 flex flex-col justify-between pb-3 md:pb-4 lg:pb-6">
        <div>
          <p className="text-sm  md:text-base lg:text-lg text-primary">
            {data.for}
          </p>
          <h4 className="text-xl lg:text-2xl font-medium text-[#2A2A2A] mt-4">
            {data.info}
          </h4>
        </div>
        <Button className="h-12 lg:text-lg pl-8 pr-2 group w-fit">
          See plans
          <span className="size-7 rounded-full bg-white text-secondary flex items-center justify-center">
            <FaArrowRight className="group-hover:-rotate-45 transition-all duration-200" />
          </span>
        </Button>
      </div>
      <div className=" pt-10 shrink-0">
        <Image src={data.image} alt={data.info} width={166} height={316} />
      </div>
    </div>
  );
};

export default MedicineCard;
