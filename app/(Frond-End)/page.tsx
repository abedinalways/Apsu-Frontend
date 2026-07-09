import Banner from "@/components/home/Banner";
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
    </div>
  );
}
