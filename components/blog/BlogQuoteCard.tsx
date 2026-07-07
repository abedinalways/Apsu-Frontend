import { ArrowUpRight } from 'lucide-react';
import Arrow from '../icons/Arrow';

export default function BlogQuoteCard() {
  return (
    <div className="decorative-accent rounded-[24px] p-3">
      <div className="bg-white rounded-[20px] h-full p-6 flex flex-col justify-between">
        {/* Top */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#0A8A61] font-medium">
            Multilingual Care
          </span>

          <span className="text-[13px] text-[#6B7280] whitespace-nowrap">
            20 Jan 2026 • 5 min read
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[22px] leading-[136%] font-medium text-[#292B2A]">
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
