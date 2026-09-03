import { pageMetadata } from '@/lib/seo/metadata';
import FAQFooter from "@/components/faq/FAQFooter";
import Banner from "@/components/home/Banner";
import HomeFAQ from "@/components/home/HomeFAQ";
import ScheduleSlider from "@/components/home/OnlineSchedule";
import SuccessStories from "@/components/home/SuccessStories";
import WorkSection from "@/components/home/WorkSection";
import StructuredData from '@/components/seo/StructuredData';

export const metadata = pageMetadata({
  title: 'Healthcare in Your Language | Weight Loss, Birth Control & Sleep',
  description:
    'Apsu provides US-licensed physicians for weight loss, birth control, and sleep care. 40+ languages, AI translation, cash-pay pricing. Start your free consultation today.',
  keywords:
    'online healthcare, weight loss, birth control, sleep medicine, telehealth, GLP-1, semaglutide, tirzepatide, US-licensed physicians, multilingual healthcare, cash-pay',
  path: '/',
});

export default function Home() {
  return (
    <>
      <StructuredData type="medical-organization" />
      <div>
        <Banner />
        <WorkSection />
        <ScheduleSlider />
        <SuccessStories />
        <HomeFAQ />
        <FAQFooter />
      </div>
    </>
  );
}
