import { StepItem } from '@/types/blogDetails';

interface StepsProps {
  steps?: StepItem[];
}

export default function Steps({ steps }: StepsProps) {
  if (!steps?.length) return null;
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl p-5"
        >
          <span className="flex  items-start justify-center   text-[1.25rem] font-medium text-black">
            {index + 1}
          </span>
          <div>
            <h4 className="flex items-start  text-[1.25rem] font-semibold  text-ink">
              {step.title}
            </h4>
            <p className="mt-1 text-[1.126rem] text-text-primary">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
