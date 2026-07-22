import WeightImage from "@/public/images/WeightLossQuestion-3.png";
import WeightMobile from "@/public/images/sleep-mobile.png";
import Image from "next/image";
import CommonHeader from "../reusable/CommonHeader";

function SleepQuestion() {
  return (
    <div className="container grid py-14 md:py-18 lg:py-30 grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
      <div className="max-w-xl">
        <CommonHeader
          sectionName="WHY APSU"
          title="Describe the night you can't sleep through."
          description="Sleep is personal, and hard to explain in a second language at 15-minute speed. With APSU you tell your physician what's really happening in your own words. Our AI carries the conversation both ways; your doctor makes every medical call."
          isSmall
        />
      </div>
      <div>
        <Image
          src={WeightImage}
          alt="Weight Loss"
          width={800}
          height={600}
          className="w-full h-full lg:block hidden"
        />
        <Image
          src={WeightMobile}
          alt="Weight Loss"
          width={800}
          height={600}
          className="w-full h-full lg:hidden"
        />
      </div>
    </div>
  );
}

export default SleepQuestion;
