import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions | Apsu",
  description:
    "Answers to common questions about Apsu's online healthcare: treatments, pricing, medications, delivery, languages, and how our physician consultations work.",
  path: "/faq",
});


import { FAQHero } from "@/components/faq/FAQHero";
import { FAQSidebar } from "@/components/faq/FAQSidebar";
import { FAQList } from "@/components/faq/FAQList";
import { faqData } from "@/lib/data/faqData";
import ContactCard from "@/components/faq/ContactCard";
import FAQFooter from "@/components/faq/FAQFooter";

export default function FaqPage() {
  const topics = faqData.map((category) => ({
    id: category.id,
    title: category.title,
  }));

  return (
    <>
      <div className="FAQ-container px-4 sm:px-6 md:px-8">
        <FAQHero />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[364px_1fr] gap-8 lg:gap-12 justify-self-center mt-6 lg:mt-8 mb-6 relative">
          <aside className="w-full mx-auto flex flex-col lg:items-center lg:h-fit lg:justify-start  lg:sticky lg:top-30">
            <FAQSidebar topics={topics} />
          </aside>

          <main className="mt-6 lg:mt-10">
            <FAQList />

            <div className="mt-6 lg:hidden">
              <ContactCard />
            </div>
          </main>
        </div>
      </div>
      <FAQFooter />
    </>
  );
}
