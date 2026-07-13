import { FAQAccordion } from "../faq/FAQAccordion";
import PrimaryButton from "../reusable/button/PrimaryButton";
import { Accordion } from "../ui/accordion";

function WeightLosFAQsection() {
  const items = [
    {
      id: "states-available",
      question: "What is compounded GLP-1 medication?",
      answer: "We are currently able to serve GLP-1 programs in all 50 states.",
    },
    {
      id: "languages-supported",
      question: "Do I need insurance?",
      answer:
        "Our platform supports multiple languages including English, Español, Tiếng Việt, Tagalog and more to ensure clear communication.",
    },
    {
      id: "insurance-required",
      question: "How does language support work?",
      answer:
        "No insurance is needed. Apsu is a direct-pay service, so there are no insurance forms, prior authorizations, or surprise bills to navigate.",
    },
    {
      id: "compounded-medication",
      question: "What if I'm not eligible?",
      answer:
        "Compounded medications are custom-made drugs mixed by a licensed pharmacy to match a patient's specific needs when standard commercially manufactured options aren't suitable or available.",
    },
    {
      id: "guaranteed-prescription",
      question: "Is the medication injected?",
      answer:
        "No. A licensed provider decides whether a medication is safe and appropriate for you based on the information you share. If a provider determines that treatment isn't right for you, you won't be charged for medication.",
    },
    {
      id: "still-questions",
      question: "Still have questions?",
      answer:
        "No. A licensed provider decides whether a medication is safe and appropriate for you based on the information you share. If a provider determines that treatment isn't right for you, you won't be charged for medication.",
    },
  ];
  return (
    <section className="xl:pb-27 lg:pb-15   relative  ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-5 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-[52px] pb-4 font-medium text-primaryColor">
              Frequently Asked Questions
            </h2>
            <div className="pt-6 border-t border-borderColor">
              <div className="bg-white shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-headerColor">
                  Still have questions?
                </h4>
                <p className="text-descriptionColor mt-2 text-base md:text-lg">
                  If you didn’t find your answer, feel free to reach out.
                </p>
                <div className="mt-6 flex justify-center w-full">
                  <PrimaryButton text="Contact us" />
                </div>
              </div>
            </div>
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

export default WeightLosFAQsection;
