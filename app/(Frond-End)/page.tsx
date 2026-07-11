import FAQFooter from "@/components/faq/FAQFooter";
import Banner from "@/components/home/Banner";
import HomeFAQ from "@/components/home/HomeFAQ";
import ScheduleSlider from "@/components/home/OnlineSchedule";
import SuccessStories from "@/components/home/SuccessStories";
import WorkSection from "@/components/home/WorkSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <WorkSection />
      <ScheduleSlider />
      <SuccessStories />
      <HomeFAQ />
      <FAQFooter />
    </div>
  );
}
