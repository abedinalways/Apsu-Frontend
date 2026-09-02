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
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { FormData } from '@/lib/validations/AssessmentSchema';

const EFFECT_OPTIONS = [
  { id: 'low_energy', label: 'Low energy' },
  { id: 'difficulty_concentrating', label: 'Difficulty concentrating' },
  { id: 'irritability', label: 'Irritability' },
  { id: 'stress', label: 'Stress' },
  { id: 'mood_change', label: 'Mood change' },
];

const RATING_CATEGORIES = [
  { id: 'poor', label: 'Poor', range: '<18.5' },
  { id: 'moderate', label: 'Moderate', range: '18.5 - 24.9' },
  { id: 'normal', label: 'Normal', range: '25 - 29.9' },
  { id: 'high', label: 'High', range: '≥ 30' },
];

export default function GoalLifestyleActivityStepTwo() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Section 1: How does this affect your day? */}
      <div className="space-y-4">
        <h2 className="text-[20px] font-semibold text-titleText">
          How does this affect your day?
        </h2>

        <FormField
          control={control}
          name="dailyEffects"
          render={({ field }) => {
            const selected = (field.value as string[] | undefined) ?? [];
            return (
              <FormItem className="space-y-2">
                {EFFECT_OPTIONS.map(option => {
                  const isChecked = selected.includes(option.id);
                  const toggle = () => {
                    const updated = isChecked
                      ? selected.filter(id => id !== option.id)
                      : [...selected, option.id];
                    field.onChange(updated);
                  };
                  return (
                    <label
                      key={option.id}
                      className={cn(
                        'flex items-center space-x-3 w-full p-4 rounded-xl border transition-all cursor-pointer select-none h-14! bg-background',
                        isChecked
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200',
                      )}
                    >
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={toggle}
                        className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-secondary-bg data-[state=checked]:border-secondary-bg"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  );
                })}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>

      {/* Section 2: How would you rate your sleep quality? */}
      <div className="space-y-4">
        <h2 className="text-[20px] font-semibold text-titleText">
          How would you rate your sleep quality?
        </h2>

        <FormField
          control={control}
          name="sleepRatingCategory"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-[14px] font-semibold text-blackColor">
                How would you rate your sleep quality?
              </FormLabel>
              <FormControl>
                <div className="w-full space-y-3">
                  {/* Multi-colored horizontal line bar gradient preview */}
                  <div className="relative w-full h-1.5 rounded-full overflow-hidden flex">
                    <div className="h-full flex-1 bg-blue-500" />
                    <div className="h-full flex-1 bg-emerald-600" />
                    <div className="h-full flex-1 bg-yellow-600" />
                    <div className="h-full flex-1 bg-orange-500" />
                    <div className="h-full flex-1 bg-redColor" />
                  </div>

                  {/* Dynamic select options row labels exactly from layout map */}
                  <div className="grid grid-cols-4 gap-1 text-center">
                    {RATING_CATEGORIES.map(cat => {
                      const isSelected = field.value === cat.id;
                      return (
                        <div
                          key={cat.id}
                          onClick={() => field.onChange(cat.id)}
                          className={cn(
                            'cursor-pointer p-2 rounded-lg transition-all group select-none',
                            isSelected
                              ? 'bg-gray-100/80'
                              : 'hover:bg-gray-50/60',
                          )}
                        >
                          <p
                            className={cn(
                              'text-xs font-semibold tracking-tight transition-colors',
                              isSelected
                                ? 'text-secondary-bg'
                                : 'text-grayColor1 group-hover:text-gray-900',
                            )}
                          >
                            {cat.label}
                          </p>
                          <p className="text-[11px] text-grayColor1 font-normal mt-0.5">
                            {cat.range}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
