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
import { FormData } from '@/lib/validations/AssessmentSchema';

const WAKE_UP_OPTIONS = [
  { id: 'multiple_times', label: 'Multiple times' },
  { id: 'once_or_twice', label: 'Once or twice' },
  { id: 'rarely', label: 'Rarely' },
  { id: 'never', label: 'Never' },
];

const FALL_ASLEEP_OPTIONS = [
  { id: 'yes', label: 'Yes' },
  { id: 'often', label: 'Often' },
  { id: 'rarely', label: 'Rarely' },
  { id: 'never', label: 'Never' },
];

const SCREEN_TIME_OPTIONS = [
  { id: 'never', label: 'Never' },
  { id: 'sometimes', label: 'Sometimes' },
  { id: 'often', label: 'Often' },
];

export default function EligibilityCheckStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();

  const selectedWakeUp = watch('wakeUpFrequency');

  return (
    <div className="space-y-6">
      {/* Top Header Label */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          Tell us about your sleep habit
        </h2>
      </div>

      {/* Question 1: Do you wake up during the night? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="wakeUpFrequency"
          render={() => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-blackColor">
                Do you wake up during the night?
              </FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {WAKE_UP_OPTIONS.map(option => {
                    const isSelected = selectedWakeUp === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() =>
                          setValue('wakeUpFrequency', option.id, {
                            shouldValidate: true,
                          })
                        }
                        className={cn(
                          'flex items-center justify-center gap-2 bg-background h-14! rounded-xl border text-[16px] text-grayColor1 capitalize transition-all w-full cursor-pointer',
                          isSelected
                            ? 'border-greenColor1  border-2 text-secondary-bg'
                            : 'border-gray-200',
                        )}
                      >
                        {option.label}
                      </div>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Question 2: When you wake up, can you usually fall back asleep? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="fallBackAsleep"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-blackColor">
                When you wake up, can you usually fall back asleep?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
                >
                  {FALL_ASLEEP_OPTIONS.map(option => {
                    const isSelected = field.value === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center justify-center gap-2 bg-background h-14! rounded-xl border text-[16px] text-grayColor1 capitalize transition-all w-full cursor-pointer',
                          isSelected
                            ? 'border-greenColor1  border-2 text-secondary-bg'
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

      {/* Question 3: How often do you use screens before bed? */}
      <div className="space-y-3">
        <FormField
          control={control}
          name="screenTimeBeforeBed"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-[14px] font-semibold text-blackColor">
                How often do you use screens before bed?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                >
                  {SCREEN_TIME_OPTIONS.map(option => {
                    const isSelected = field.value === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          'flex items-center justify-center gap-2 bg-background h-14! rounded-xl border text-[16px] text-grayColor1 capitalize transition-all w-full cursor-pointer',
                          isSelected
                            ? 'border-greenColor1  border-2 text-secondary-bg'
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
