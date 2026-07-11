import AboutApsu from "@/components/about/AboutApsu";
import AboutExist from "@/components/about/AboutExist";
import AboutHero from "@/components/about/AboutHero";

function page() {
  return (
    <div>
      <div>
        <AboutHero />
        <AboutApsu />
        <AboutExist />
      </div>
    </div>
  );
}

export default page;
