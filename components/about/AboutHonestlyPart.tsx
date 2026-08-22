import honestyImg from '@/public/images/about/Frame 2147240890.jpg';
import mobileImg from '@/public/images/about/aboutmobile.png';
import { Clock, Stethoscope } from 'lucide-react'; // আপনার প্রজেক্টের সঠিক আইকন ব্যবহার করুন
import Image from 'next/image';
import { GlobalIcon } from '../icons/Icons';

function AboutHonestlyPart() {
  const cards = [
    {
      icon: GlobalIcon,
      title: 'In your language',
      description:
        "Complete your entire visit in the language you're most comfortable in. Our AI translates your intake and messages both ways inside the consultation. Nothing important gets lost on either side.",
    },
    {
      icon: Stethoscope,
      title: 'U.S. physicians',
      description:
        'Every diagnosis and prescription comes from a U.S. board-certified physician. The AI never diagnoses or prescribes. The medicine always stays with the doctor.',
    },
    {
      icon: Clock,
      title: 'On your schedule',
      description:
        'Care is asynchronous. Share your history whenever it suits you; your physician reviews and responds. No appointment, no waiting room, no insurance required.',
    },
  ];

  return (
    <div className="relative w-full min-h-305 md:min-h-200 lg:min-h-225 f overflow-hidden  py-16 md:py-24 px-4 md:px-0 lg:px-8">
      {/* --- BACKGROUND IMAGE USING NEXT/IMAGE --- */}
      <Image
        src={mobileImg}
        alt="About Honestly Background"
        width={2500}
        height={1000}
        className="w-full h-full  absolute top-0 left-0 z-0 md:hidden"
        style={{
          objectPosition: `${30}% ${10}%`,
        }}
      />
      <Image
        src={honestyImg}
        alt="About Honestly Background"
        width={2500}
        height={1000}
        className="w-full h-full object-cover absolute top-0 left-0 z-0 hidden md:block"
        style={{
          objectPosition: `${30}% ${10}%`,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-blackColor/0 z-10">
        {/* --- CONTENT CONTAINER --- */}
        <div className=" z-20 w-full container flex flex-col items-center justify-center h-full text-center text-white">
          {/* Subtitle */}
          <span className="text-sm md:text-base font-semibold tracking-[0.2em]  uppercase mb-4">
            WHAT MAKES US DIFFERENT
          </span>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-medium  max-w-3xl  mb-4">
            Two things, done honestly.
          </h2>

          {/* Inner Sub-description */}
          <p className="text-base md:text-lg text-[background] max-w-xl  mb-16 lg:mb-30 font-light">
            The AI handles the language. Your physician makes every medical
            decision.
          </p>

          {/* --- THREE GREEN CARDS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-6 w-full items-stretch">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-brand backdrop-blur-sm rounded-2xl p-4 py-6 lg:p-8 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  {/* Custom Thin Styled Icon */}
                  {Icon && (
                    <div className="mb-5 text-whiteColor">
                      <Icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                  )}

                  {/* Card Title */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white mb-4">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[background] text-base lg:text-lg leading-[160%] ">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHonestlyPart;
