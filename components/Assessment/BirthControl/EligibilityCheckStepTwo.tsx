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

const PRODUCT_OPTIONS = [
  { id: 'cigarettes', label: 'Cigarettes' },
  { id: 'vape', label: 'Vape' },
  { id: 'replacement-therapy', label: 'Nicotine patch/gum/inhaler' },
  { id: 'others', label: 'Others' },
] as const;

export default function EligibilityCheckStepTwo() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedProducts = watch('nicotineProductTypes') || [];

  const handleToggle = (id: string, checked: boolean) => {
    let updatedProducts = [...selectedProducts];
    if (checked) {
      updatedProducts.push(id);
    } else {
      updatedProducts = updatedProducts.filter(item => item !== id);
    }
    setValue('nicotineProductTypes', updatedProducts, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Title & Subtitle block from Screenshot 2026-07-05 111020.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-brand">
          What type of nicotine-containing product do you use?
        </h2>
        <p className="text-[14px] text-text-primary mt-1.5">
          This affects which options are safest for you.
        </p>
      </div>

      {/* Checkbox Rows Container Stack */}
      <FormField
        control={control}
        name="nicotineProductTypes"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {PRODUCT_OPTIONS.map(option => {
                  const isChecked = selectedProducts.includes(option.id);

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
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all bg-[background] h-14! cursor-pointer text-[16px] text-text-secondary ${
                        isChecked
                          ? 'border-border-light border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                          isChecked
                            ? 'border-border-light bg-secondary-bg text-white'
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
