import CommonHeader from "../reusable/CommonHeader";
import WorkAddSection from "./WorkAddSection";

function WorkSection() {
  return (
    <div className="md:my-20 my-14">
      <div>
        <WorkAddSection />
      </div>
      <div className="my-20">
        <div className="container text-center">
          <CommonHeader
            sectionName="HOW IT WORKS"
            title="Real physicians, AI-amplified."
            description="Two layers working together — each doing what they do best."
          />
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
