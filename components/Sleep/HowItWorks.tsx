import CommonHeader from "../reusable/CommonHeader";
import WorksCard from "./WorksCard";

export default function HowItWorks() {
  return (
    <div
      id="Works"
      className="bg-white container rounded-2xl lg:rounded-4xl  p-4 md:p-6"
    >
      <div className="text-center">
        <CommonHeader
          sectionName="How it works"
          title="From your words to your door."
          description=""
          isSmall
        />
      </div>

      <WorksCard />
    </div>
  );
}
