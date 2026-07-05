import React from 'react'
import ArrowIcon from '../icons/ArrowIcon';
import Button from '../reusable/button/Button';

export default function ContactCard() {
  return (
    <div className="flex flex-col items-start gap-3 rounded-[16px] bg-[#fff] p-8 shadow-[0_4px_22px_0_rgba(2,29,23,0.06)] md:w-91">
      <p className="md:text-2xl text-lg font-medium text-[#111]">
        Still have a question?
      </p>
      <p className="md:text-lg text-md leading-[160%] text-secondary-charcol-700">
        If you didn&apos;t find your answer, feel free to reach out.
      </p>
      <Button text="Contact Us" href="/contact" />
    </div>
  );
}
