'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { FormData } from '@/zod/AssessmentSchema';

const GOAL_OPTIONS = [
  { id: 'rarely', label: 'Rarely' },
  { id: 'sometimes', label: 'Sometimes' },
  { id: 'most-nights', label: 'Most nights' },
  { id: 'every-night', label: 'Every night' },
] as const;

export default function GoalLifestyleActivityStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedGoal = watch('weightLossGoal');

  return (
    <div className="space-y-6">
      {/* Title block from Screenshot 2026-07-05 093153.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          How often do you have trouble falling asleep?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          Think about the past few weeks.
        </p>
      </div>

      {/* Grid selector structure matching the 2x2 layout */}
      <FormField
        control={control}
        name="weightLossGoal"
        render={() => (
          <FormItem className="space-y-2">
            <FormControl>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GOAL_OPTIONS.map(option => {
                  const isSelected = selectedGoal === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue('weightLossGoal', option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`flex items-center gap-3 p-4 w-full rounded-2xl border text-left transition-all h-14! text-[16px] text-[#6c6c6c] bg-[background] cursor-pointer ${
                        isSelected
                          ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      {/* Custom styled outer circular radio control ring */}
                      <div
                        className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'border-[#AFC1B6] bg-secondary-bg text-white'
                            : 'border-gray-400 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>

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
