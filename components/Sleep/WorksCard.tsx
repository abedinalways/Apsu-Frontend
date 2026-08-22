"use client";

import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  ArrowRight,
  ClipboardList,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HeadphonesIcon, TruckIcon } from "../icons/Icons";

const WORKS_STEPS = [
  {
    id: "step-1",
    title: "Check eligibility",
    description: "Answer a few health questions.",
    image: "/images/sleep/work1.png",
    icon: ClipboardList,
  },
  {
    id: "step-2",
    title: "Complete intake",
    description:
      "Share your history and goals. We translate it for your physician.",
    image: "/images/sleep/work2.png",
    icon: UserCheck,
  },
  {
    id: "step-3",
    title: "Physician reviews",
    description:
      "A U.S.-licensed doctor evaluates and prescribes only when appropriate.",
    image: "/images/sleep/work3.png",
    icon: Stethoscope,
  },
  {
    id: "step-4",
    title: "Medication ships",
    description:
      "Delivered discreetly, with ongoing check-ins and dose support.",
    image: "/images/sleep/work4.png",
    icon: TruckIcon,
  },
  {
    id: "step-5",
    title: "24/7 ongoing support",
    description: "Refills, dose check-ins anytime.",
    image: "/images/sleep/work5.png",
    icon: HeadphonesIcon,
  },
];

export default function WorksCard() {
  const [activeTab, setActiveTab] = useState<string>("step-1");

  const activeIndex = WORKS_STEPS.findIndex((step) => step.id === activeTab);
  const activeData = WORKS_STEPS[activeIndex] || WORKS_STEPS[0];

  return (
    <div className="pt-8 lg:pt-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side: Dynamic Image Display */}
        <div className="relative w-full aspect-[3/2.25] md:aspect-[3/4] max-h-150 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={activeData.image}
            alt={activeData.title}
            fill
            className="object-cover transition-opacity duration-500 ease-in-out"
            sizes="(max-w-768px) 100vw, 50vw"
            priority
          />

          <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6">
            <button className="bg-brand hover:bg-[#153e2a] transition-colors duration-300 text-white text-sm md:text-base font-medium py-2.5 pl-5 pr-2.5 rounded-full flex items-center gap-3 shadow-xl">
              Start your intake
              <div className="bg-white text-[#0f2e1f] rounded-full w-7 h-7 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>

        {/* Right Side: Accordion Steps List */}
        <div className="relative py-4 pl-0 md:pl-8">
          {/* Vertical Timeline Track Container */}
          <div className="absolute left-0 top-6 bottom-6 w-px bg-borderColor hidden md:block">
            {/* Active Highlight Line moving based on active index */}
            <div
              className="absolute w-0.5 left-[-0.5px] bg-brand transition-all duration-300 rounded-full"
              style={{
                // Splits the total track space dynamically into 5 segment intervals
                height: "20%",
                top: `${activeIndex * 20}%`,
              }}
            />
          </div>

          <AccordionPrimitive.Root
            type="single"
            collapsible={false}
            value={activeTab}
            onValueChange={(val) => {
              if (val) setActiveTab(val);
            }}
            className="space-y-2"
          >
            {WORKS_STEPS.map((step) => {
              const isOpen = activeTab === step.id;
              const StepIcon = step.icon;

              return (
                <AccordionPrimitive.Item
                  key={step.id}
                  value={step.id}
                  className={cn(
                    "relative flex flex-col justify-center transition-all duration-300 w-full overflow-hidden",
                    isOpen
                      ? "bg-bgColor rounded-[1.25rem] p-4 shadow-lg"
                      : "bg-transparent p-4 hover:bg-white/5 rounded-[1.25rem]",
                  )}
                >
                  <AccordionPrimitive.Header className="w-full">
                    <AccordionPrimitive.Trigger className="w-full flex items-center gap-4 text-left group outline-none">
                      {/* Icon Container */}
                      <div
                        className={cn(
                          "flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 shrink-0",
                          isOpen
                            ? "bg-primaryColor text-white shadow-sm"
                            : "bg-borderColor text-whiteColor",
                        )}
                      >
                        <StepIcon
                          className="h-5.5 w-5.5"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Header Title & Subtitle Wrapper */}
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "text-lg font-semibold transition-colors duration-300",
                            isOpen ? "text-primaryColor" : "text-[#3a5847]",
                          )}
                        >
                          {step.title}
                        </span>

                        <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <p className="text-[#5b5b5b] font-medium pt-1">
                            {step.description}
                          </p>
                        </AccordionPrimitive.Content>
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                </AccordionPrimitive.Item>
              );
            })}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </div>
  );
}
