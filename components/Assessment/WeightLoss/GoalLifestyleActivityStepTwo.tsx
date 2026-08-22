'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { FormData } from '@/zod/AssessmentSchema';

const ATTEMPT_OPTIONS = [
  { id: 'never', label: 'Never' },
  { id: 'few-times', label: 'A few times' },
  { id: 'couldnt-maintain', label: "Yes, but couldn't maintained" }, // matches exact typography from image
  { id: 'many-times', label: 'Many times' },
] as const;

export default function GoalLifestyleActivityStepTwo() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedOption = watch('triedLosingWeightBefore');

  return (
    <div className="space-y-6">
      {/* Question Header matching Screenshot 2026-07-05 093221.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Have you tried losing weight before?
        </h2>
      </div>

      {/* Stacked Selection List Area */}
      <FormField
        control={control}
        name="triedLosingWeightBefore"
        render={() => (
          <FormItem className="space-y-3">
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
                      className={`w-full p-4 text-left rounded-2xl border transition-all h-14! bg-[background] cursor-pointer   ${
                        isSelected
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-700">
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
