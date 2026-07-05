import React from 'react'
import Button from '../reusable/button/Button';
import Image from 'next/image';

export default function FAQFooter() {
  return (
    <div className="hero-container mx-auto">
      <div className="relative py-6 overflow-x-hidden custom-container">
        <div className="faq_footer_bg rounded-[16px] md:py-8 flex flex-col justify-between  px-6 py-20">
          <h2 className="text-[#fff] md:text-[48px] text-[32px] font-medium leading-[124%]  mb-4">
            Healthcare that speaks <br />
            your language
          </h2>
          <div className="flex md:justify-between justify-end items-center md:gap-4 gap-10 flex-col md:flex-row">
            <span className="md:flex gap-4 items-center font-normal text-[#fff]">
              <p>Done in minutes</p>
              <p className="rounded-full bg-white w-[.5rem] h-[.5rem] aspect-square mx-auto"></p>
              <p>No insurance required</p>
            </span>
            <Button
              text="Start a free consultation"
              href="/book-appointment"
              width="w-full md:w-fit"
            />
          </div>
        </div>
        <div className="relative  md:-top-62 md:-right-100 -top-34 -right-0">
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
