import CommonHeader from "../reusable/CommonHeader";
import WorkAddSection from "./WorkAddSection";
import WorkList from "./WorkList";

function WorkSection() {
  return (
    <div className="md:my-20 my-14">
      <div>
        <WorkAddSection />
      </div>
      <div className="lg:my-20 my-14 md:my-18">
        <div className="container text-center">
          <CommonHeader
            sectionName="HOW IT WORKS"
            title="Real physicians, AI-amplified."
            description="Two layers working together — each doing what they do best."
          />
        </div>
        <div>
          <WorkList />
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
