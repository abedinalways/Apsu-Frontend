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

const TREATMENT_OPTIONS = [
  { id: 'prescription', label: 'Prescription medication' },
  { id: 'melatonin', label: 'Melatonin' },
  { id: 'supplements', label: 'Supplements' },
  { id: 'lifestyle', label: 'Lifestyle changes' },
  { id: 'none', label: 'None' },
];

export default function EligibilityCheckStepTwo() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text matched from Frame 1984077999 (2).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-brand">
          Have you tried any sleep treatments before?
        </h2>
      </div>

      {/* Checkbox Options List */}
      <FormField
        control={control}
        name="pastSleepTreatments"
        render={({ field }) => {
          const selected = (field.value as string[] | undefined) ?? [];

          const handleSelect = (optionId: string) => {
            let updated: string[];

            if (optionId === 'none') {
              // If "None" is selected, clear everything else and just keep "none"
              updated = selected.includes('none') ? [] : ['none'];
            } else {
              // If any other treatment is selected, remove "none" first
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
                  {TREATMENT_OPTIONS.map(option => {
                    const isChecked = selected.includes(option.id);
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center space-x-3.5 p-4  select-none  gap-2 bg-[background] h-14! rounded-xl border text-[16px] text-text-secondary capitalize transition-all w-full cursor-pointer',
                          isChecked
                            ? 'border-border-light border-2 text-secondary-bg'
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
