'use client';

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTrigger,
} from '@/components/reui/stepper';

const steps = [
  { step: 1, label: 'Review' },
  { step: 2, label: 'Prescribed' },
  { step: 3, label: 'Preparing' },
  { step: 4, label: 'Shipped' },
  { step: 5, label: 'Delivered' },
];

interface OrderProgressProps {
  progressStep: number;
}

export function OrderProgress({ progressStep }: OrderProgressProps) {
  return (
    <div className="border border-[#EBEAE4] rounded-[24px] p-6 mb-4 bg-white font-[Work_Sans]">
      <h5 className="text-xl font-bold text-[secondary-text] mb-8">
        Order Progress
      </h5>

      <Stepper defaultValue={progressStep} className="w-full max-w-xl mx-auto">
        <StepperNav className="items-start">
          {steps.map(({ step, label }) => (
            <StepperItem key={step} step={step} className="flex-1 group/step">
              <StepperTrigger className="flex flex-col items-center gap-3 w-full pointer-events-none">
                <StepperIndicator className="w-4 h-4 rounded-full bg-[#5A6561] text-transparent border-0 shrink-0 transition-all duration-300 data-[state=active]:w-5 data-[state=active]:h-5 data-[state=active]:bg-[#FCBE15] data-[state=completed]:w-4 data-[state=completed]:h-4 data-[state=completed]:bg-[#5A6561]" />
                <span className="text-[13px] font-normal tracking-wide text-[#7D8884] transition-colors duration-300 group-data-[state=active]/step:text-[secondary-text] group-data-[state=active]/step:font-medium">
                  {label}
                </span>
              </StepperTrigger>

              {steps.length > step && (
                <StepperSeparator className="bg-[#E2EAE5] h-[1.5px] mt-2 group-data-[state=completed]/step:bg-[#5A6561]" />
              )}
            </StepperItem>
          ))}
        </StepperNav>
      </Stepper>
    </div>
  );
}
