'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { FormData } from '@/zod/AssessmentSchema';

const SIDE_EFFECT_OPTIONS = [
  'Vomiting',
  'Nausea',
  'Diarrhea',
  'Fatigue',
  'Decreased appetite',
  'None',
];

export default function HealthHistoryStepThree() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const activeSideEffects = watch('selectedSideEffects') || [];

  const handleToggleSideEffect = (effect: string) => {
    let updatedEffects = [...activeSideEffects];

    if (effect === 'None') {
      // "None" option clears all selected symptoms
      updatedEffects = ['None'];
    } else {
      // Remove "None" if a symptom is selected
      updatedEffects = updatedEffects.filter(item => item !== 'None');

      if (updatedEffects.includes(effect)) {
        updatedEffects = updatedEffects.filter(item => item !== effect);
      } else {
        updatedEffects.push(effect);
      }
    }

    setValue('selectedSideEffects', updatedEffects, { shouldValidate: true });
  };

  // Helper to split options into selected (dark badges) and unselected (outlined pills) arrays
  const selectedList = SIDE_EFFECT_OPTIONS.filter(item =>
    activeSideEffects.includes(item),
  );
  const unselectedList = SIDE_EFFECT_OPTIONS.filter(
    item => !activeSideEffects.includes(item),
  );

  return (
    <div className="space-y-6">
      {/* Step Description Headers from Screenshot 2026-07-05 121717.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Do you faced any side effects during your medication?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          Please select all that apply.
        </p>
      </div>

      <FormField
        control={control}
        name="selectedSideEffects"
        render={() => (
          <FormItem className="space-y-4">
            <FormControl>
              <div className="space-y-4">
                {/* Outlined unselected pills container row */}
                {unselectedList.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {unselectedList.map(effect => (
                      <button
                        key={effect}
                        type="button"
                        onClick={() => handleToggleSideEffect(effect)}
                        className="px-4 py-2 rounded-full border border-[#AFC1B6] bg-white text-xs font-medium text-secondary-bg hover:bg-[#AFC1B6]/10 transition-all active:scale-95"
                      >
                        {effect}
                      </button>
                    ))}
                  </div>
                )}

                {/* Subfield Label section */}
                <FormLabel className="text-[14px] font-semibold text-[#111] flex items-center gap-0.5 pt-2">
                  Describe any side effects you have experienced:{' '}
                  <span className="text-red-500">*</span>
                </FormLabel>

                {/* Active dark badge layout area matching Screenshot 2026-07-05 121744.png */}
                {selectedList.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {selectedList.map(effect => (
                      <div
                        key={effect}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#AFC1B6] bg-secondary-bg text-white text-xs font-medium shadow-sm"
                      >
                        <span>{effect}</span>
                        <button
                          type="button"
                          onClick={() => handleToggleSideEffect(effect)}
                          className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Narrative input box for custom textual details */}
      <FormField
        control={control}
        name="sideEffectsAdditionalDetails"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] font-semibold text-[#111] flex items-center gap-0.5">
              Describe any side effects you have experienced:{' '}
              <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="add any additional details here..."
                className="min-h-[110px] resize-none rounded-2xl text-sm placeholder:text-gray-400 p-4 w-full bg-[background] border-[background]  h-11 text-[16px] text-[#6c6c6c] focus-visible:ring-[1px] "
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
