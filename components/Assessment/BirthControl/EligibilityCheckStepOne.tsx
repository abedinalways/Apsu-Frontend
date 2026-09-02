'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { FormData } from '@/lib/validations/AssessmentSchema';

const NICOTINE_OPTIONS = [
  { id: 'every-day', label: 'Every day' },
  { id: 'few-times-week', label: 'A few times per week' },
  { id: 'few-times-month', label: 'A few times per month' },
  { id: 'quit-smoking', label: 'I quit smoking' },
  { id: 'other-nicotine', label: 'Using other nicotine containing product' },
  {
    id: 'never-used',
    label: 'I’ve never smoked or used nicotine containing products',
  },
] as const;

export default function EligibilityCheckStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedUsage = watch('nicotineUsage');

  return (
    <div className="space-y-6">
      {/* Title & Description block from Screenshot 2026-07-05 110413.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          Do you currently use nicotine-containing products?
        </h2>
        <p className="text-[14px] text-grayColor1 mt-1.5">
          This includes cigarettes, e-cigarettes/vape, pipe tobacco, chewing
          tobacco/snuff, cigars, nicotine patch, nicotine gum, nicotine inhaler,
          and nicotine lozenges.
        </p>
      </div>

      {/* Selectable radio card rows stack */}
      <FormField
        control={control}
        name="nicotineUsage"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {NICOTINE_OPTIONS.map(option => {
                  const isSelected = selectedUsage === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue('nicotineUsage', option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all bg-background h-14! text-[16px] text-grayColor1 cursor-pointer ${
                        isSelected
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      {/* Outer circular radio container button accent */}
                      <div
                        className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'border-greenColor1  bg-secondary-bg'
                            : 'border-grayColor1 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>

                      <span className="text-sm font-medium text-gray-700 leading-tight">
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
