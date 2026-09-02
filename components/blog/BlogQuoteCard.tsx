import Arrow from '../icons/Arrow';

export default function BlogQuoteCard() {
  return (
    <div className="decorative-accent shadow-[0_0_40px_10px_rgba(46,145,105,0.6)] rounded-[16px] md:rounded-[32px]  p-4">
      <div className="bg-white rounded-[16px] h-full md:p-6 p-4 flex flex-col justify-between">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <span className="text-[16px] uppercase tracking-[0.13em] text-greenColor font-normal">
            Multilingual Care
          </span>

          <span className="text-[16px] text-grayColor1 whitespace-nowrap">
            5 min read
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[20px] md:text-[28px] leading-[116%] font-medium text-blackColor">
          Why Healthcare Should Speak Your Language
        </h3>

        {/* Footer */}
        <button className="mt-8 cursor-pointer inline-flex w-fit items-center gap-2 text-greenColor text-[16px] font-medium hover:gap-3 transition-all duration-300">
          Read More
          <Arrow />
        </button>
      </div>
    </div>
  );
}
