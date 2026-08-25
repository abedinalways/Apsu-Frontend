import { MedicineData } from "@/public/demoData/medicineData";
import Image from "next/image";
import WhiteCustomButton from "../reusable/button/WhiteCustomButton";

const MedicineCard = ({ data, idx }: { data: MedicineData; idx: number }) => {
  return (
    <div
      className={`flex p-3 h-full md:p-4 lg:p-6 justify-between  pb-0! ${idx === 0 ? "bg-lightGreenColor" : idx === 1 ? "pr-0! bg-purpleColor" : "bg-lightGreenColor"} overflow-hidden  rounded-2xl`}
    >
      <div className=" max-w-53 lg:max-w-58 flex flex-col justify-between pb-3 md:pb-4 lg:pb-6">
        <div>
          <p className="text-sm  md:text-base lg:text-lg text-primary">
            {data.for}
          </p>
          <h4 className="text-xl xl:text-2xl font-medium text-blackColor mt-4">
            {data.info}
          </h4>
        </div>
        <WhiteCustomButton href={data.url} text="See Plans" />
      </div>
      <Image
        className={` ${idx == 1 ? "w-[44%]" : "w-2/5"} pt-16`}
        src={data.image}
        alt={data.info}
        width={166}
        height={316}
      />
    </div>
  );
};

export default MedicineCard;
