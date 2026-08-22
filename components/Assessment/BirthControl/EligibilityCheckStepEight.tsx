'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { FormData } from '@/zod/AssessmentSchema';

const PREGNANCY_OPTIONS = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'not-sure', label: 'Not Sure' },
] as const;

export default function EligibilityCheckStepEight() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const currentSelection = watch('isCurrentlyPregnant');

  return (
    <div className="space-y-6">
      {/* Title block from Screenshot 2026-07-05 113852.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Are you currently pregnant?
        </h2>
      </div>

      {/* Stacked Selection List */}
      <FormField
        control={control}
        name="isCurrentlyPregnant"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {PREGNANCY_OPTIONS.map(option => {
                  const isSelected = currentSelection === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue('isCurrentlyPregnant', option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`w-full p-4 text-left transition-all bg-[background] h-14! rounded-xl border text-[16px] text-[#6c6c6c] cursor-pointer ${
                        isSelected
                          ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm font-medium">
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
