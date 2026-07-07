import { medicineData } from "@/public/demoData/medicineData";
import MedicineCard from "./MedicineCards";

const BannerMedicineCards = () => {
  return (
    <div className="mt-9 lg:mt-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-4 lg:pb-7 lg:px-7 w-full">
      {medicineData.map((data, idx) => (
        <MedicineCard key={data.for} data={data} idx={idx} />
      ))}
    </div>
  );
};

export default BannerMedicineCards;
