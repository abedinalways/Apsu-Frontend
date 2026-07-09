"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BirthControlIcons from "@/components/icons/BirthControlIcons";
import SleepIcons from "@/components/icons/SleepIcons";
import WeightLossIcons from "@/components/icons/WeightLossIcons";

const TOTAL_STEPS = 8;

const STEP_LABELS = [
  "Treatment",
  "Health History",
  "Goal & Lifestyle",
  "Eligibility Check",
  "Eligibility",
  "Treatment Plan",
  "Schedule Consultation",
  "Checkout & Payment",
];

export default function Assessment() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "GLP-1 and metabolic support, guided by a physician.",
      icon: <WeightLossIcons />,
      href: "/assessment/weight-loss",
    },
    {
      id: "birth-control",
      title: "Birth Control",
      description: "Pills, patches, rings - delivered discreetly each month.",
      icon: <BirthControlIcons />,
      href: "/assessment/birth",
    },
    {
      id: "sleep",
      title: "Sleep",
      description: "Personalized plans for falling and staying asleep.",
      icon: <SleepIcons />,
      href: "/assessment/sleep",
    },
  ] as const;

  const handleContinue = () => {
    const selectedOption = options.find((o) => o.id === selected);
    if (selectedOption) {
      router.push(selectedOption.href);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 bg-[#FFFFFF] max-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {/* Dynamic header / progress bar logic */}
        {step <= TOTAL_STEPS && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>{STEP_LABELS[step]}</span>
              <span>
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full flex gap-1">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? "bg-emerald-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 0: goal selection */}
        {step === 0 && (
          <div className="space-y-6">
            <h2 className="text-[20px] font-semibold text-[#102b1c]">
              What would you like help with today?
            </h2>

            <div className="grid gap-4">
              {options.map((option) => {
                const isSelected = selected === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected(option.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#ECF9F1] bg-[#ECF9F1]"
                        : "border-gray-100 bg-[#FAF9F4] hover:bg-[#FAF9F4]/50"
                    }`}
                  >
                    <div className="space-y-3 pr-4">
                      <p className="font-medium text-gray-900">
                        {option.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <div className="">{option.icon}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Steps 1-7: treatment flow content */}
        {step > 0 && step < TOTAL_STEPS && (
          <div className="space-y-6">
            <h2 className="text-[20px] font-semibold text-[#102b1c]">
              {STEP_LABELS[step]}
            </h2>
            <p className="text-sm text-muted-foreground">
              Treatment step {step} content goes here.
            </p>
          </div>
        )}
      </div>

      {/* Global Form Footer Trigger buttons */}
      <div className="flex flex-col gap-3 pt-6 border-t mt-6 bg-[#FFFFFF]">
        <div className="flex justify-between items-center w-full">
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="px-6 py-3 border rounded-full text-sm font-medium  disabled:opacity-30"
          >
            &lt; Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className="px-6 py-3 bg-[#0B251A] text-white rounded-full text-sm font-medium disabled:opacity-30 cursor-pointer"
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
