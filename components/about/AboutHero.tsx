import aboutImage from "@/public/images/about/aboutImage.png";
import Image from "next/image";
import PrimaryButton from "../reusable/button/PrimaryButton";

function AboutHero() {
  return (
    <div className="pb-14 lg:pb-30">
      <div className="container">
        <div className=" grid grid-cols-1 lg:grid-cols-2 pt-28 md:pt-40 gap-4 pb-8 md:pb-12 space-y-3">
          <div className="text-center lg:text-start">
            <h4 className="text-base text-greenColor mb-3">ABOUT US</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-[110%] font-medium tracking-tight">
              Care{" "}
              <span className="text-greenColor font-semibold">
                shouldn't get lost
              </span>{" "}
              in translation.
            </h2>
          </div>
          <div className="space-y-6 text-center lg:text-start flex flex-col items-center lg:items-start">
            <p className="text-descriptionColor text-base md:text-xl tracking-wide">
              APSU is American telehealth built for the tens of millions of
              people who live, work, and raise families here in a language other
              than English. You describe what's wrong in the language you think
              in. A US-licensed physician provides your care.
            </p>
            <PrimaryButton text="Get started" />
          </div>
        </div>
        <div className="">
          <Image
            src={aboutImage}
            alt="About Us"
            width={2000}
            height={1000}
            className="w-full h-full rounded-2xl  lg:rounded-[56px] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
