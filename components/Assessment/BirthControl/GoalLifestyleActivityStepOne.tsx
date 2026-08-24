'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { FormData } from '@/zod/AssessmentSchema';

const GOAL_OPTIONS = [
  { id: 'prevent_pregnancy', label: 'Prevent pregnancy' },
  { id: 'acne_control', label: 'Acne control' },
  { id: 'skip_periods', label: 'Skip periods' },
  { id: 'pcos_management', label: 'PCOS management' },
  { id: 'low_hormone', label: 'Low hormone' },
  { id: 'not_sure', label: "I'm not sure" },
];

export default function GoalLifestyleActivityStepOne() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text matched from Frame 1984078010 (2).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-greenColor">
          What are you looking for from your birth control?
        </h2>
        <p className="text-[14px] text-grayColor1 mt-1.5">
          Please select all that apply.
        </p>
      </div>
      {/* Checkbox Options List */}
      <FormField
        control={control}
        name="birthControlGoals"
        render={({ field }) => {
          const selected = (field.value as string[] | undefined) ?? [];

          const handleSelect = (optionId: string) => {
            let updated: string[];

            if (optionId === 'not_sure') {
              // If "I'm not sure" is selected, clear everything else and just keep "not_sure"
              updated = selected.includes('not_sure') ? [] : ['not_sure'];
            } else {
              // If any other option is selected, remove "not_sure" first
              const filtered = selected.filter(id => id !== 'not_sure');
              if (filtered.includes(optionId)) {
                updated = filtered.filter(id => id !== optionId);
              } else {
                updated = [...filtered, optionId];
              }
            }

            field.onChange(updated);
          };

          return (
            <FormItem className="space-y-3">
              <FormControl>
                <div className="space-y-3">
                  {GOAL_OPTIONS.map(option => {
                    const isChecked = selected.includes(option.id);
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center space-x-3.5 w-full p-4 rounded-xl border transition-all cursor-pointer select-none bg-background h-14! text-[16px] text-grayColor1',
                          isChecked
                            ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                            : 'border-gray-200',
                        )}
                      >
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => handleSelect(option.id)}
                          className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-secondary-bg data-[state=checked]:border-secondary-bg"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
}
