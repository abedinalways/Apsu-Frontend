'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { FormData } from '@/lib/validations/AssessmentSchema';
// import { FormData } from "./schema";

const GOAL_OPTIONS = [
  { id: 'under-20', label: 'Under 20 lbs' },
  { id: '20-50', label: '20 - 50 lbs' },
  { id: '50-plus', label: '50+ lbs' },
  { id: 'not-sure', label: 'Not sure yet' },
] as const;

export default function GoalLifestyleActivityStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedGoal = watch('weightLossGoal');

  return (
    <div className="space-y-6">
      {/* Title block from Screenshot 2026-07-05 093153.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          What&apos;s your weight loss goal?
        </h2>
        <p className="text-[14px] text-grayColor1 mt-1.5">
          This helps your physician personalize your plan.
        </p>
      </div>

      {/* Grid selector structure matching the 2x2 layout */}
      <FormField
        control={control}
        name="weightLossGoal"
        render={() => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] font-semibold text-blackColor">
              What is your weight loss goal?
            </FormLabel>
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
                      className={`flex items-center gap-3 p-4 w-full rounded-2xl border text-left transition-all bg-background  h-14! text-[16px] text-grayColor1 cursor-pointer ${
                        isSelected
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      {/* Custom styled outer circular radio control ring */}
                      <div
                        className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'border-greenColor1  bg-secondary-bg text-white'
                            : 'border-grayColor1 bg-white'
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
