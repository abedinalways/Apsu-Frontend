'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { FormData } from '@/zod/AssessmentSchema';

const MEDICATION_OPTIONS = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'few_times', label: 'Few times' },
];

const SNORE_OPTIONS = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'not_sure', label: 'Not sure' },
];

const PREGNANT_OPTIONS = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'not_applicable', label: 'Not applicable' },
];

export default function EligibilityCheckStepFour() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text matched from Frame 1984078010 (1).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Please confirm the followings:
        </h2>
      </div>

      {/* Question 1: Do you currently take any sleep medications? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="takesSleepMedication"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-[#111]">
                Do you currently take any sleep medications?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                >
                  {MEDICATION_OPTIONS.map(option => {
                    const isSelected = field.value === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center gap-2.5 cursor-pointer select-none rounded-xl border py-3.5 px-4 text-xs font-medium transition-all bg-[background] h-14!',
                          isSelected
                            ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                            : 'border-gray-200',
                        )}
                      >
                        <RadioGroupItem
                          value={option.id}
                          className="h-4 w-4 border-gray-300 text-emerald-900 focus:ring-emerald-800 data-[state=checked]:border-secondary-bg data-[state=checked]:text-secondary-bg"
                        />
                        <span className="text-gray-700">{option.label}</span>
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

      {/* Question 2: Do you snore heavily or stop breathing during sleep? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="heavySnoringOrApnea"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-[#111]">
                Do you snore heavily or stop breathing during sleep?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                >
                  {SNORE_OPTIONS.map(option => {
                    const isSelected = field.value === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center gap-2.5 cursor-pointer select-none rounded-xl border py-3.5 px-4 text-xs font-medium transition-all bg-[background] h-14!',
                          isSelected
                            ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                            : 'border-gray-200',
                        )}
                      >
                        <RadioGroupItem
                          value={option.id}
                          className="h-4 w-4 border-gray-300 text-emerald-900 focus:ring-emerald-800 data-[state=checked]:border-secondary-bg data-[state=checked]:text-secondary-bg"
                        />
                        <span className="text-gray-700">{option.label}</span>
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

      {/* Question 3: Are you pregnant or breastfeeding? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="pregnantOrBreastfeeding"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-[#111]">
                Are you pregnant or breastfeeding?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                >
                  {PREGNANT_OPTIONS.map(option => {
                    const isSelected = field.value === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center gap-2.5 cursor-pointer select-none rounded-xl border py-3.5 px-4 text-xs font-medium transition-all bg-[background] h-14!',
                          isSelected
                            ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                            : 'border-gray-200',
                        )}
                      >
                        <RadioGroupItem
                          value={option.id}
                          className="h-4 w-4 border-gray-300 text-emerald-900 focus:ring-emerald-800 data-[state=checked]:border-secondary-bg data-[state=checked]:text-secondary-bg"
                        />
                        <span className="text-gray-700">{option.label}</span>
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
    </div>
  );
}
