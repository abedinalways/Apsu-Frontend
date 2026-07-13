import WeightImage from "@/public/images/WeightLossQuestion-2.png";
import Image from "next/image";
import CommonHeader from "../reusable/CommonHeader";

function WeightLossQuestion() {
  return (
    <div className="container grid py-14 md:py-18 lg:py-30 grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
      <div className="max-w-xl">
        <CommonHeader
          sectionName="WHY APSU"
          title="Ask the question you've been afraid to mistranslate."
          description="Birth control comes with private, specific questions — and they're hard to ask in a second language. With APSU you ask them in the language you think in. Our AI carries the conversation both ways; your physician makes every medical call."
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
