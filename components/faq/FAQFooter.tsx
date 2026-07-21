import Image from "next/image";
import PrimaryButton from "../reusable/button/PrimaryButton";

export default function FAQFooter() {
  return (
    <div className=" pt-14 lg:pt-0">
      <div className="   bg-whiteColor rounded-t-4xl mx-auto px-4 pb-5 md:pb-10 lg:pb-22">
        <div className="max-w-[1376px] mx-auto  md:pt-8 pt-6  ">
          <div className="faq_footer_bg relative rounded-[16px]  md:py-8 flex flex-col justify-between px-6 py-6  ">
            <h2 className="text-[#fff] text-[48px]  font-medium leading-[124%]  text-center md:text-start mb-4">
              Healthcare that speaks <br />
              your language
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <span className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 items-center font-normal text-[#fff]">
                <p className="text-sm sm:text-base">Done in minutes</p>
                <p className="rounded-full bg-white w-1.5 h-1.5 aspect-square"></p>
                <p className="text-sm sm:text-base">No insurance required</p>
              </span>
              <div className=" pt-10">
                <PrimaryButton text="Start a free consultation" type="button" />
              </div>
            </div>
            <div className="absolute max-w-[823px] h-62.5  bottom-0 left-1/2 -translate-x-1/2 w-full ">
              <Image
                width={823}
                height={250}
                className="rounded-[16px] w-full h-full object-contain"
                src="/images/faq/footer.png"
                alt="Healthcare illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
