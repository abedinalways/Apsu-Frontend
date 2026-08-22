import { ArrowUpRight } from 'lucide-react';
import Arrow from '../icons/Arrow';

export default function BlogQuoteCard() {
  return (
    <div className="decorative-accent rounded-[16px] md:rounded-[32px]  p-3">
      <div className="bg-white rounded-[16px] h-full md:p-6 p-4 flex flex-col justify-between">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <span className="text-[16px] uppercase tracking-[0.13em] text-[#0A8A61] font-normal">
            Multilingual Care
          </span>

          <span className="text-[16px] text-[#6B7280] whitespace-nowrap">
            5 min read
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[20px] md:text-[28px] leading-[116%] font-medium text-text-primary">
          Why Healthcare Should Speak Your Language
        </h3>

        {/* Footer */}
        <button className="mt-8 cursor-pointer inline-flex w-fit items-center gap-2 text-[#0A8A61] text-[16px] font-medium hover:gap-3 transition-all duration-300">
          Read More
         
            <Arrow/>
          
        </button>
      </div>
    </div>
  );
}
