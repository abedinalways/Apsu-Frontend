'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { FormData } from '@/zod/AssessmentSchema';
import { Check } from 'lucide-react';

const AUTOIMMUNE_OPTIONS = [
  { id: 'lupus', label: 'Systemic Lupus Erythematous' },
  { id: 'connective-tissue', label: 'Mixed connective tissue disorder' },
  { id: 'none', label: "No, I don't have an autoimmune condition" },
] as const;

export default function EligibilityCheckStepFive() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedConditions = watch('autoimmuneConditions') || [];

  const handleToggle = (id: string, checked: boolean) => {
    let updatedConditions = [...selectedConditions];

    if (id === 'none') {
      // If "No autoimmune condition" is selected, clear everything else
      updatedConditions = checked ? ['none'] : [];
    } else {
      if (checked) {
        // Remove "none" if a specific disease option is selected
        updatedConditions = updatedConditions.filter(item => item !== 'none');
        updatedConditions.push(id);
      } else {
        updatedConditions = updatedConditions.filter(item => item !== id);
      }
    }

    setValue('autoimmuneConditions', updatedConditions, {
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header section from Screenshot 2026-07-05 112809.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Have you ever been diagnosed with any of these autoimmune conditions?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          Please select all that apply.
        </p>
      </div>

      {/* Selectable checklist list layout container */}
      <FormField
        control={control}
        name="autoimmuneConditions"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {AUTOIMMUNE_OPTIONS.map(option => {
                  const isChecked = selectedConditions.includes(option.id);

                  return (
                    <div
                      key={option.id}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked={isChecked}
                      onClick={() => handleToggle(option.id, !isChecked)}
                      onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleToggle(option.id, !isChecked);
                        }
                      }}
                      className={`flex items-center gap-4 p-4 w-full text-left transition-all bg-[background] h-14! rounded-xl border text-[16px] text-[#6c6c6c] cursor-pointer ${
                        isChecked
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                          isChecked
                            ? 'border-[#AFC1B6] bg-[secondary-bg] text-white'
                            : 'border-gray-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
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
  );
}
