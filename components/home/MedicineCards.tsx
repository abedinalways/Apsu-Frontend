import { MedicineData } from "@/public/demoData/medicineData";
import Image from "next/image";
import WhiteCustomButton from "../reusable/button/WhiteCustomButton";

const MedicineCard = ({ data, idx }: { data: MedicineData; idx: number }) => {
  return (
    <div
      className={` p-3 h-full md:p-4 lg:p-6 justify-between  pb-0! ${idx === 0 ? "bg-lightGreenColor2" : idx === 1 ? "pr-0! bg-purpleColor" : "bg-lightblueCOlor"} overflow-hidden  rounded-2xl`}
    >
      <div className=" max-w-50 lg:max-w-55 flex flex-col justify-between pb-3 md:pb-4 lg:pb-6">
        <div>
          <p className="text-sm  md:text-base lg:text-lg text-primary">
            {data.for}
          </p>
          <h4 className="text-xl xl:text-2xl font-medium text-blackColor mt-4  ">
            {data.info}
          </h4>
        </div>
      </div>
      <div className="flex items-end justify-between -mt-15 ">
        <div className="pb-4">
          <WhiteCustomButton href={data.url} text="See Plans" />
        </div>
        <div className="h-79 w-auto">
          <Image
            className={` h-full w-full `}
            src={data.image}
            alt={data.info}
            width={166}
            height={316}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
