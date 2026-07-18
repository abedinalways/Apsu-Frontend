'use client';

import { Check } from 'lucide-react';

interface OrderStepperProps {
  steps: string[];
  currentStep: number;
}

export default function OrderStepper({
  steps,
  currentStep,
}: OrderStepperProps) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full">
      {/* ========================= */}
      {/* Mobile Stepper */}
      {/* ========================= */}

      <div className="md:hidden">
        <div className="relative">
          {/* Background Line */}

          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#E8F3ED]" />

          {/* Progress Line */}

          <div
            className="absolute left-[11px] top-3 w-[2px] bg-[#FCBE15] transition-all duration-700 ease-in-out"
            style={{
              height: `calc(${progress}% - 16px)`,
            }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const stepNumber = index + 1;

              const completed = stepNumber < currentStep;

              const active = stepNumber === currentStep;

              return (
                <div key={step} className="relative flex items-center gap-4">
                  {/* Circle */}

                  <div
                    className={`
                    relative
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    transition-all
                    duration-500

                    ${
                      completed
                        ? 'bg-[#5A6561] border-[#E8F3ED]'
                        : active
                          ? 'bg-[#FCBE15] border-[#E8F3ED]'
                          : 'bg-[#5A6561] border-[#E8F3ED]'
                    }
                  `}
                  >
                    {completed && (
                      <Check
                        className="h-3.5 w-3.5 text-white"
                        strokeWidth={3}
                      />
                    )}

                    {active && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-[#FCBE15]/40 animate-ping" />

                        <span className="relative h-2 w-2 rounded-full bg-white" />
                      </>
                    )}
                  </div>

                  {/* Text */}

                  <p
                    className={`
                    text-sm transition-all duration-300

                    ${
                      active
                        ? 'font-semibold text-[#142C1E]'
                        : completed
                          ? 'font-medium text-[#5A6561]'
                          : 'text-[#8A928D]'
                    }
                  `}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Desktop Stepper */}
      {/* ========================= */}

      <div className="hidden md:block">
        <div className="relative flex justify-between">
          {/* Background Line */}

          <div className="absolute left-0 right-0 top-5 h-[2px] bg-[#E8F3ED]" />

          {/* Progress Line */}

          <div
            className="absolute left-0 top-5 h-[2px] bg-[#FCBE15] transition-all duration-700 ease-in-out"
            style={{
              width: `${progress}%`,
            }}
          />

          {steps.map((step, index) => {
            const stepNumber = index + 1;

            const completed = stepNumber < currentStep;

            const active = stepNumber === currentStep;

            return (
              <div
                key={step}
                className="relative z-10 flex flex-1 flex-col items-center"
              >
                {/* Circle */}

                <div
                  className={`
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-[4px]
                  transition-all
                  duration-500

                  ${
                    completed
                      ? 'bg-[#5A6561] border-[#E8F3ED]'
                      : active
                        ? 'bg-[#FCBE15] border-[#E8F3ED] scale-110'
                        : 'bg-[#5A6561] border-[#E8F3ED]'
                  }
                `}
                >
                  {completed && (
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  )}

                  {active && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-[#FCBE15]/40 animate-ping" />

                      <span className="relative h-3 w-3 rounded-full bg-white" />
                    </>
                  )}
                </div>

                {/* Label */}

                <p
                  className={`
                  mt-4 text-sm transition-all duration-300

                  ${
                    active
                      ? 'font-semibold text-[#142C1E]'
                      : completed
                        ? 'font-medium text-[#5A6561]'
                        : 'text-[#8A928D]'
                  }
                `}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
