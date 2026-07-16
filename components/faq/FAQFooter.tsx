

import React from 'react';
import Button from '../reusable/button/ReusableButton';
import Image from 'next/image';

export default function FAQFooter() {
  return (
    <div className="mx-auto md:py-4 py-10 md:pb-0 pb-4">
      <div className="relative lg:py-6 py-10 overflow-x-hidden hero-container h-auto md:min-h-[550px] lg:h-[400px]">
        <div className="faq_footer_bg rounded-[16px] md:py-8 flex flex-col justify-between px-6 py-23">
          <h2 className="text-[#fff] text-[48px] font-medium leading-[124%] text-center md:text-start mb-4">
            Healthcare that speaks <br />
            your language
          </h2>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <span className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 items-center font-normal text-[#fff]">
              <p className="text-sm sm:text-base">Done in minutes</p>

              <p className="rounded-full bg-white w-1.5 h-1.5 aspect-square"></p>

              <p className="text-sm sm:text-base">No insurance required</p>
            </span>

            <div className="relative md:top-0 top-20">
              <Button
                text="Start a free consultation"
                href="/book-appointment"
                width="w-full sm:w-fit"
              />
            </div>
          </div>
        </div>

        <div className="relative -top-46 sm:-top-24 md:-top-60 lg:-top-62 md:-right-10 lg:-right-100 left-0 sm:left-auto">
          <Image
            width={823}
            height={250}
            className="rounded-[16px] object-cover"
            src="/images/faq/footer.png"
            alt="Healthcare illustration"
          />
        </div>
      </div>
    </div>
  );
}