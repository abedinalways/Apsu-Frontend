import WeightImage from "@/public/images/banner/Frame 184.png";
import Image from "next/image";
import CommonHeader from "../reusable/CommonHeader";

function WeightLossQuestion() {
  return (
    <div className="container grid py-14 md:py-18 lg:py-30 grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
      <div className="max-w-xl">
        <CommonHeader
          sectionName="WHY APSU"
          title="Ask the question you've been afraid to mistranslate."
          description="Starting a GLP-1 means real questions — about side effects, dosing, what's normal. With APSU you ask them in your own words. Our AI carries the conversation both ways; your physician makes every medical call."
          isSmall
        />
      </div>
      <div>
        <Image
          src={WeightImage}
          alt="Weight Loss"
          width={800}
          height={600}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default WeightLossQuestion;
