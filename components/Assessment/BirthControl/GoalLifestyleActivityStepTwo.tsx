'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { FormData } from '@/lib/validations/AssessmentSchema';

const METHOD_OPTIONS = [
  { id: 'daily_pill', label: 'Daily pill' },
  { id: 'weekly_patch', label: 'Weekly patch' },
  { id: 'monthly_yearly_ring', label: 'Monthly or yearly ring' },
  { id: 'self_injection_3_months', label: 'Self-injection every 3 months' },
  { id: 'non_hormonal', label: 'Non-hormonal options' },
  { id: 'not_sure', label: "I'm not sure" },
];

export default function GoalLifestyleActivityStepTwo() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text matched from Frame 1984077999 (4).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          Do you have any preferred method?
        </h2>
      </div>

      {/* Radio Options Container */}
      <FormField
        control={control}
        name="preferredMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-3"
              >
                {METHOD_OPTIONS.map(option => {
                  const isSelected = field.value === option.id;
                  return (
                    <label
                      key={option.id}
                      className={cn(
                        'flex items-center space-x-4 w-full p-4 rounded-xl border transition-all cursor-pointer select-none bg-background h-14! text-[16px] text-grayColor1',
                        isSelected
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200',
                      )}
                    >
                      <RadioGroupItem
                        value={option.id}
                        className="h-5 w-5 border-gray-300 text-emerald-900 focus:ring-emerald-800 data-[state=checked]:border-secondary-bg data-[state=checked]:text-secondary-bg"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
