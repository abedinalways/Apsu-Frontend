'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { FormData } from '@/zod/AssessmentSchema';

const ATTEMPT_OPTIONS = [
  { id: 'never', label: 'Currently breastfeeding' },
  { id: 'few-times', label: 'Currently pregnant' },
  {
    id: 'couldnt-maintain',
    label: 'Planning to become pregnant in the next 3 months',
  }, // matches exact typography from image
  { id: 'many-times', label: 'None of the above' },
] as const;

export default function EligibilityCheckStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedOption = watch('triedLosingWeightBefore');

  return (
    <div className="space-y-6">
      {/* Question Header matching Screenshot 2026-07-05 093221.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          What are your current condition?
        </h2>
      </div>

      {/* Stacked Selection List Area */}
      <FormField
        control={control}
        name="triedLosingWeightBefore"
        render={() => (
          <FormItem className="space-y-3">
            <FormLabel className="text-[14px] font-semibold text-blackColor">
              What are your current conditions?
            </FormLabel>
            <FormControl>
              <div className="flex flex-col gap-3">
                {ATTEMPT_OPTIONS.map(option => {
                  const isSelected = selectedOption === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue('triedLosingWeightBefore', option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`w-full p-4 text-left  rounded-2xl border transition-all h-14! bg-background cursor-pointer  ${
                        isSelected
                          ? 'border-lightGreenColor border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-[14px] text-blackColor">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
