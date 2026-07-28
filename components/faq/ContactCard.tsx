import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import Button from '../reusable/button/ReusableButton';
import PrimaryButton from '../reusable/button/PrimaryButton';

export default function ContactCard() {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-[16px] bg-[#fff] p-6 sm:p-8 shadow-[0_4px_22px_0_rgba(2,29,23,0.06)]  mx-auto">
      <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#111] w-full text-center">
        Still have a question?
      </p>
      <p className="text-base sm:text-lg leading-[160%] text-secondary-charcol-700 text-center">
        If you didn't find your answer, feel free to reach out.
      </p>
      <PrimaryButton text='Contact Us' href='/contact'/>
    </div>
  );
}
