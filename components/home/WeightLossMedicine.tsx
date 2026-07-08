import MedicineImg from "@/public/images/work/medicine.png";
import Image from "next/image";
import PrimaryButton from "../reusable/button/PrimaryButton";
function WeightLossMedicine() {
  const data = [
    {
      id: 1,
      image: MedicineImg,
      title: "Compounded Semaglutide",
      price: 200,
    },
    {
      id: 2,
      image: MedicineImg,
      title: "Compounded Tirzepatide",
      price: 200,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col p-4 bg-whiteColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl items-center justify-center gap-2"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={700}
            height={600}
            className="w-full h-full object-cover"
          />
          <h3 className="text-2xl lg:text-[32px] py-5 lg:py-8 border-b  w-full  font-medium">
            {item.title}
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-2 justify-between w-full mt-4">
            <p className="text-lg text-blackColor lg:text-2xl font-medium">
              From <span className="text-2xl md:text-3xl">${item.price}</span>
              /month
            </p>
            <PrimaryButton text="Get Started" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeightLossMedicine;
