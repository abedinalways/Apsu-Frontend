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
// import { FormData } from "./schema";

const CONDITION_OPTIONS = [
  { id: 'dialysis', label: 'Undergoing dialysis' },
  { id: 'heart-failure', label: 'Heart failure' },
  { id: 'eating-disorder', label: 'Anorexia or bulimia' },
  { id: 'transplant', label: 'Organ transplant' },
  { id: 'liver-failure', label: 'Liver failure' },
  { id: 'none', label: 'None' },
];

export default function HealthHistoryStepTwo() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedConditions = watch('medicalConditions') || [];

  const handleToggle = (id: string, checked: boolean) => {
    let updatedConditions = [...selectedConditions];

    if (id === 'none') {
      // If "None" is selected, clear everything else and keep only "none"
      updatedConditions = checked ? ['none'] : [];
    } else {
      if (checked) {
        // Remove "none" if any real medical condition is selected
        updatedConditions = updatedConditions.filter(item => item !== 'none');
        updatedConditions.push(id);
      } else {
        updatedConditions = updatedConditions.filter(item => item !== id);
      }
    }

    setValue('medicalConditions', updatedConditions, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Title block modeled from Screenshot 2026-07-05 091641.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Have you ever been treated for or diagnosed with any of the following
          medical conditions?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          Please select all that apply.
        </p>
      </div>

      {/* Main Checkbox Cards Container */}
      <FormField
        control={control}
        name="medicalConditions"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="grid gap-3">
                {CONDITION_OPTIONS.map(option => {
                  const isChecked = selectedConditions.includes(option.id);

                   return (
                     <div
                       key={option.id}
                       role="checkbox"
                       tabIndex={0}
                       aria-checked={isChecked}
                       aria-labelledby={`medical-condition-${option.id}`}
                       onClick={() => handleToggle(option.id, !isChecked)}
                       onKeyDown={event => {
                         if (event.key === 'Enter' || event.key === ' ') {
                           event.preventDefault();
                           handleToggle(option.id, !isChecked);
                         }
                       }}
                       className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all h-14! bg-[background] cursor-pointer text-[16px] text-[#6c6c6c]  ${
                         isChecked
                           ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                           : 'border-gray-200'
                       }`}
                     >
                       <span
                         aria-hidden="true"
                         className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all  ${
                           isChecked
                             ? 'border-[#AFC1B6] bg-secondary-bg text-white'
                             : 'border-gray-300 bg-white text-transparent'
                         }`}
                       >
                         <Check className="h-3.5 w-3.5" />
                       </span>
                       <span id={`medical-condition-${option.id}`} className="text-sm font-medium text-gray-800">
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
