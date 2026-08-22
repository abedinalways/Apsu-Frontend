"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { useRef } from "react";
interface CardItem {
  number: string;
  title: string;
  description: string;
  points: string[];
}

const WorkList = () => {
  const cards: CardItem[] = [
    {
      number: "01",
      title: "Human physicians",
      description:
        "They handle diagnosis, prescriptions, and every moment that calls for clinical judgment.",
      points: [
        "Diagnosis and treatment decisions.",
        "Prescriptions.",
        "Complex symptom evaluation.",
      ],
    },
    {
      number: "02",
      title: "AI care assistant",
      description:
        "It handles language and instant response — so nothing is lost in communication.",
      points: [
        "Real-time translation in every message.",
        "Answers around the clock.",
      ],
    },
  ];
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".medicine-card", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope: sectionRef },
  );

  return (
    <div className="bg-bgColor max-w-275 mx-auto  py-6 md:py-9 lg:py-12 font-sans text-primaryColor">
      <div className="">
        {/* Cards Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6  "
        >
          {cards.map((card) => (
            <div
              key={card.number}
              className="medicine-card bg-white rounded-2xl px-4 md:px-6 py-6 md:py-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full "
            >
              {/* Top Right Number */}
              <div className=" text-[52px] lg:text-[80px] leading-[100%] text-end  text-success">
                {card.number}
              </div>

              {/* Card Content */}
              <div className="mt-10">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 md:mb-8">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                  {card.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {card.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm md:text-base "
                    >
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-greenColor text-white">
                        <Check className="h-3 w-3 stroke-3" />
                      </div>
                      <span className="text-descriptionColor">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Text */}
        <div className="text-center mt-6 md:mt-9 lg:mt-12">
          <p className="text-base md:text-lg font-medium tracking-wide text-primaryColor">
            The AI handles the language. Your physician makes the medical
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
