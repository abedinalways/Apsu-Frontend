import { FAQAccordion } from "../faq/FAQAccordion";
import CommonHeader from "../reusable/CommonHeader";
import { Accordion } from "../ui/accordion";

function HomeFAQ() {
  const items = [
    {
      id: "states-available",
      question: "What states do you serve in GLP-1 programs?",
      answer: "We are currently able to serve GLP-1 programs in all 50 states.",
    },
    {
      id: "languages-supported",
      question: "Which languages do you support?",
      answer:
        "Our platform supports multiple languages including English, Español, Tiếng Việt, Tagalog and more to ensure clear communication.",
    },
    {
      id: "insurance-required",
      question: "Do I need insurance?",
      answer:
        "No insurance is needed. Apsu is a direct-pay service, so there are no insurance forms, prior authorizations, or surprise bills to navigate.",
    },
    {
      id: "compounded-medication",
      question: "What is compounded medication?",
      answer:
        "Compounded medications are custom-made drugs mixed by a licensed pharmacy to match a patient's specific needs when standard commercially manufactured options aren't suitable or available.",
    },
    {
      id: "guaranteed-prescription",
      question: "Am I guaranteed a prescription?",
      answer:
        "No. A licensed provider decides whether a medication is safe and appropriate for you based on the information you share. If a provider determines that treatment isn't right for you, you won't be charged for medication.",
    },
  ];
  return (
    <section className="xl:py-27 lg:py-15  pt-14 relative  ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-5 lg:pr-8">
            <CommonHeader
              title="Frequently Asked Questions"
              description="Have more questions? Our care team is here to help in your language."
              sectionName="FAQs"
              isSmall={true}
            />
          </div>
          <div className="col-span-7">
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item) => (
                <FAQAccordion key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFAQ;
