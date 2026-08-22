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

const CONDITION_OPTIONS = [
  { id: 'anxiety', label: 'Anxiety' },
  { id: 'depression', label: 'Depression' },
  { id: 'sleep_apnea', label: 'Sleep apnea' },
  { id: 'ptsd', label: 'PTSD' },
  { id: 'none', label: 'None' },
];

export default function EligibilityCheckStepThree() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text matched from Frame 1984077999 (3).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Have you ever been diagnosed with:
        </h2>
      </div>

      {/* Checkbox Options List */}
      <FormField
        control={control}
        name="diagnosedConditions"
        render={({ field }) => {
          const selected = (field.value as string[] | undefined) ?? [];

          const handleSelect = (optionId: string) => {
            let updated: string[];

            if (optionId === 'none') {
              // If "None" is selected, clear everything else and just keep "none"
              updated = selected.includes('none') ? [] : ['none'];
            } else {
              // If any other option is selected, remove "none" first
              const filtered = selected.filter(id => id !== 'none');
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
                  {CONDITION_OPTIONS.map(option => {
                    const isChecked = selected.includes(option.id);
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center space-x-3.5 w-full p-4 rounded-xl border transition-all select-none bg-[background] cursor-pointer h-14!',
                          isChecked
                            ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                            : 'border-gray-200',
                        )}
                      >
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => handleSelect(option.id)}
                          className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-[secondary-bg] data-[state=checked]:border-[secondary-bg]"
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
