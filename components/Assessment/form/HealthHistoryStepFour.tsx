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

const ALLERGY_OPTIONS = [
  { id: 'penicillin', label: 'Penicillin' },
  { id: 'latex', label: 'Latex' },
  { id: 'sulfa-drugs', label: 'Sulfa drugs' },
  { id: 'food-allergies', label: 'Food allergies' },
  { id: 'none', label: 'None of these' },
] as const;

export default function HealthHistoryStepFour() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedAllergies = watch('knownAllergies') || [];

  const handleToggleAllergy = (id: string, checked: boolean) => {
    let updatedAllergies = [...selectedAllergies];

    if (id === 'none') {
      // If "None of these" is checked, clear all other selections
      updatedAllergies = checked ? ['none'] : [];
    } else {
      if (checked) {
        // Remove "none" if a specific allergen target gets activated
        updatedAllergies = updatedAllergies.filter(item => item !== 'none');
        updatedAllergies.push(id);
      } else {
        updatedAllergies = updatedAllergies.filter(item => item !== id);
      }
    }

    setValue('knownAllergies', updatedAllergies, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Description header matching text from Screenshot 2026-07-05 122224.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          Do you have any allergies?
        </h2>
        <p className="text-[14px] text-grayColor1 mt-1.5">
          Please select all that apply.
        </p>
      </div>

      {/* Selectable Block List Field container */}
      <FormField
        control={control}
        name="knownAllergies"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {ALLERGY_OPTIONS.map(option => {
                  const isChecked = selectedAllergies.includes(option.id);

                  return (
                    <div
                      key={option.id}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked={isChecked}
                      aria-labelledby={`allergy-${option.id}`}
                      onClick={() => handleToggleAllergy(option.id, !isChecked)}
                      onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleToggleAllergy(option.id, !isChecked);
                        }
                      }}
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all h-14! text-[16px] text-grayColor1 bg-background cursor-pointer  ${
                        isChecked
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                          isChecked
                            ? 'border-greenColor1  bg-secondary-bg text-white'
                            : 'border-gray-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span
                        id={`allergy-${option.id}`}
                        className="text-sm font-medium text-gray-700"
                      >
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
