import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import Button from '../reusable/button/ReusableButton';
import PrimaryButton from '../reusable/button/PrimaryButton';

export default function ContactCard() {
  return (
    <div className="flex flex-col items-start gap-3 sm:gap-4 rounded-[16px] bg-[#fff] p-6 sm:p-8 shadow-[0_4px_22px_0_rgba(2,29,23,0.06)] max-w-[364px]">
      <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#111]">
        Still have a question?
      </p>
      <p className="text-base sm:text-lg leading-[160%] text-secondary-charcol-700">
        If you didn't find your answer, feel free to reach out.
      </p>
      <PrimaryButton text='Contact Us' href='/contact'/>
    </div>
  );
}
