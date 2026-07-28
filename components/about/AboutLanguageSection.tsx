import LanguageCarousel from "../home/LanguageCarousel";

function AboutLanguageSection() {
  return (
    <div className="container pt-12 lg:py-30">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl  lg:text-[40px] xl:text-[52px] font-medium text-primaryColor">
          Care in{" "}
          <span className="text-greenColor block font-semibold">
            40+ languages, and counting.
          </span>{" "}
        </h2>
      </div>
      <div className="p-3 xl:p-0">
        <div className="   flex flex-col items-center    ">
          {/* language carousel  */}
          <div className="mt-6 lg:mt-8 space-y-4 relative">
            <div className="w-20 lg:w-30 h-full bg-linear-to-r from-bgColor to-transparent absolute z-10 left-0"></div>
            <div className="w-20 lg:w-30 h-full bg-linear-to-l from-bgColor to-transparent absolute z-10 right-0"></div>
            <LanguageCarousel />
            <LanguageCarousel direction="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLanguageSection;
