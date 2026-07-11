import AboutApsu from "@/components/about/AboutApsu";
import AboutCareWork from "@/components/about/AboutCareWork";
import AboutExist from "@/components/about/AboutExist";
import AboutHero from "@/components/about/AboutHero";
import AboutHonestlyPart from "@/components/about/AboutHonestlyPart";

function page() {
  return (
    <div>
      <div>
        <AboutHero />
        <AboutApsu />
        <AboutExist />
        <AboutHonestlyPart />
        <AboutCareWork />
      </div>
    </div>
  );
}

export default page;
