import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "About Apsu | Healthcare in Your Language",
  description:
    "Learn about Apsu's mission to make US-licensed healthcare accessible in 40+ languages — weight loss, birth control, and sleep care with AI translation and cash-pay pricing.",
  path: "/about",
});


import AboutApsu from "@/components/about/AboutApsu";
import AboutCareWork from "@/components/about/AboutCareWork";
import AboutExist from "@/components/about/AboutExist";
import AboutHero from "@/components/about/AboutHero";
import AboutHonestlyPart from "@/components/about/AboutHonestlyPart";
import AboutLanguageSection from "@/components/about/AboutLanguageSection";
import AboutMedicinePart from "@/components/about/AboutMedicinePart";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import FAQFooter from "@/components/faq/FAQFooter";

function page() {
  return (
    <div>
      <div>
        <AboutHero />
        <AboutApsu />
        <AboutExist />
        <AboutHonestlyPart />
        <AboutCareWork />
        <AboutMedicinePart />
        <AboutPrinciples />
        <AboutLanguageSection />
        <div className="">
          <FAQFooter />
        </div>
      </div>
    </div>
  );
}

export default page;
