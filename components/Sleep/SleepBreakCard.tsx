import React from "react";
import image1 from "@/public/images/sleep/sleep1.png";
import image2 from "@/public/images/sleep/sleep2.png";
import image3 from "@/public/images/sleep/sleep3.png";
import { Instagram, Linkedin, Star, Twitter } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Arrow from "../icons/Arrow";
interface SleepBreakCardItem {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

export default function SleepBreakCard() {
  const stories: SleepBreakCardItem[] = [
    {
      id: 1,
      title: "Trouble falling asleep",
      description:
        "A racing mind at bedtime, lying awake for an hour, dreading the alarm before it rings.",
      image: image1,
    },
    {
      id: 2,
      title: "Waking through the night",
      description:
        "You drift off fine, then wake at 3 a.m. and can't get back down — every single night.",
      image: image2,
    },
    {
      id: 3,
      title: "An off schedule",
      description:
        "Shift work, jet lag, or a body clock that simply won't reset to the hours you live by.",
      image: image3,
    },
  ];

  return (
    <section className="pt-8 lg:pt-12">
      <div className="container">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {stories.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-[#D0FFFD] shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl p-4 md:p-6 min-h-[400px]  lg:min-h-[431px] justify-between overflow-hidden cursor-pointer transition-all duration-300 border border-[#F5F4EE]"
            >
              {/* --- NORMAL CONTENT STATE --- */}

              <div className="flex flex-col gap-5 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <h3 className="text-greenColor text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                {/* Testimonial text */}
                <p className="text-descriptionColor text-base lg:text-lg leading-relaxed ">
                  "{item.description}"
                </p>
              </div>

              {/* Normal State Footer */}
              <div className="flex items-end justify-between transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <div>
                  <h4 className="text-blackColor font-semibold text-lg md:text-xl flex items-center gap-1">
                    <Arrow /> Matched to a
                  </h4>
                  <p className="text-descriptionColor text-sm md:text-base">
                    non-habit-forming option
                  </p>
                </div>
              </div>

              {/* --- HOVER IMAGE STATE --- */}

              <div className="absolute -inset-6 md:-inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Bottom dark gradient wrapper to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryColor via-primaryColor/10 to-transparent pointer-events-none rounded-2xl" />

                {/* Hover Content */}
                <div className="absolute top-3 w-full p-10 md:p-12">
                  <div className="flex  text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
