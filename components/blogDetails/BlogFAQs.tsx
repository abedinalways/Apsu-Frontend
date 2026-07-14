import { FAQAccordion } from '../faq/FAQAccordion';
import CommonHeader from '../reusable/CommonHeader';
import { Accordion } from '../ui/accordion';

function BlogFAQs() {
  const items = [
    {
      id: 'states-available',
      question: 'Is there a membership or subscription fee?',
      answer: 'We are currently able to serve GLP-1 programs in all 50 states.',
    },
    {
      id: 'languages-supported',
      question: 'Why do some patients consider compounded GLP-1 medications? ',
      answer:
        'Our platform supports multiple languages including English, Español, Tiếng Việt, Tagalog and more to ensure clear communication.',
    },
    {
      id: 'insurance-required',
      question: 'Can I switch from one to the other?',
      answer:
        'No insurance is needed. Apsu is a direct-pay service, so there are no insurance forms, prior authorizations, or surprise bills to navigate.',
    },
    {
      id: 'compounded-medication',
      question: 'What if I take birth control pills?',
      answer:
        "Compounded medications are custom-made drugs mixed by a licensed pharmacy to match a patient's specific needs when standard commercially manufactured options aren't suitable or available.",
    },
    
  ];
  return (
    <section className="xl:py-27 lg:py-15 pt-4 relative px-3 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          <div className="">
            <CommonHeader
              title="Frequently Asked Questions"
              description=""
              sectionName=""
              isSmall={true}
            />
          </div>
          <div className="">
            <Accordion type="single" collapsible className="space-y-4">
              {items.map(item => (
                <FAQAccordion key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogFAQs;
