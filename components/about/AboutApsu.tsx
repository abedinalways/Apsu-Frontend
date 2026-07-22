import koteImage from "@/public/images/about/kote.png";
import Image from "next/image";
import { HiArrowLongDown } from "react-icons/hi2";
import { LightIcon, SourceIcon, WaterIcon } from "../icons/Icons";
function AboutApsu() {
  return (
    <div>
      <div className="container bg-whiteColor rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <div className="text-center">
          <h4 className="text-base text-greenColor mb-3">THE NAME</h4>
          <p className="text-base md:text-lg max-w-218 mx-auto text-descriptionColor">
            Long before clinics, before pharmacies, before the word “medicine”
            existed in any language we'd recognize, the Sumerians had a word for
            the source of all life.
          </p>
        </div>
        <div className="bg-[#BCFFE6] rounded-2xl relative overflow-hidden px-4 py-12 md:py-20 mt-6 flex flex-col items-center justify-center text-center">
          <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <div className="w-75 h-75 md:w-112.5 md:h-112.5 rounded-full border-2 border-[#9DFFDA] animate-ripple-1" />
            <div className="w-105 h-105 md:w-150 md:h-150 rounded-full border-2 border-[#9DFFDA]/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ripple-2" />
            <div className="w-135 h-135 md:w-187.5 md:h-187.5 rounded-full border-2 border-[#9DFFDA]/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ripple-3" />
          </div>

          {/* --- CONTENT WRAPPER --- */}
          <div className="relative z-10 w-full max-w-163.25 mx-auto flex flex-col items-center gap-4">
            {/* Main Logo / Image */}
            <div className="w-full px-6 md:px-12">
              <Image
                src="/apsu.png"
                alt="apsu"
                height={800}
                width={2000}
                className="h-auto w-full object-contain select-none"
                priority
              />
            </div>

            {/* Pronunciation Text */}
            <p className="text-base md:text-lg lg:text-xl font-medium text-primaryColor tracking-wider opacity-80 mt-1">
              / ˈɑːp · suː /
            </p>

            {/* --- FORMULA / WORD EQUATION SECTION --- */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mt-8 md:mt-12 lg:flex-row flex-col text-primaryColor">
              {/* Element 1: Ab */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Ab
                </span>
                <div className="flex items-center gap-1.5 bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.04)] px-4 py-2 rounded-full border border-borderColor">
                  <WaterIcon className="w-4 h-4  text-greenColor" />
                  <span className="text-sm md:text-base font-medium text-greenColor">
                    Water
                  </span>
                </div>
              </div>

              {/* Plus Sign */}
              <span className="text-lg font-medium pt-8 lg:-mt-12 -mt-6 text-blackColor">
                +
              </span>

              {/* Element 2: zu */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                  zu
                </span>
                <div className="flex items-center gap-1.5 bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.04)] px-4 py-2 rounded-full border border-borderColor">
                  <LightIcon className="w-4 h-4 text-[#097545]" />
                  <span className="text-sm md:text-base font-medium text-greenColor">
                    To know the deep
                  </span>
                </div>
              </div>

              {/* Arrow Sign */}
              <span className="text-lg   -mt-6 font-medium lg:rotate-270 lg:pt-0 pt-8 text-blackColor">
                <HiArrowLongDown />
              </span>

              {/* Element 3: Apsu */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Apsu
                </span>
                <div className="flex items-center gap-1.5 bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.04)] px-4 py-2 rounded-full border border-borderColor">
                  <SourceIcon className="w-4 h-4 text-greenColor" />
                  <span className="text-sm md:text-base font-medium text-greenColor">
                    The source
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-10">
          <p className="text-base md:text-lg max-w-218 mx-auto text-descriptionColor">
            In the oldest written mythology on earth, the Apsu was the vast
            freshwater abyss beneath the world — the hidden source of wisdom and
            creation that fed every river, every well, every spring from below.
            The Babylonian creation epic begins with it: Apsu, “the first, the
            begetter,” the origin from which everything else came into being.
          </p>

          <div className="mt-8 lg:mt-12 max-w-218 mx-auto">
            <div className="  ">
              <Image
                src={koteImage}
                alt="Kote"
                width={64}
                height={64}
                className="lg:h-auto  h-10 inline-block  -mt-5 -ml-5 w-auto"
              />
              <h2 className="text-3xl inline md:text-4xl lg:text-[40px] leading-[110%] font-medium tracking-tight">
                {" "}
                <span className="text-greenColor font-semibold">
                  Water and Knowledge.
                </span>{" "}
                The source of life, and the source of understanding.
              </h2>
            </div>
            <p className="text-base md:text-lg mt-4 lg:mt-6 text-descriptionColor">
              Five thousand years ago, the people of Mesopotamia already knew
              the two belonged together — that to heal, you need both the
              substance and the wisdom to use it well.
            </p>
            <h4 className="text-headerColor italic text-xl md:text-2xl mt-8 lg:mt-12 font-medium">
              We built a healthcare company on that idea.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApsu;
