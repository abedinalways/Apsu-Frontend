'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Check } from 'lucide-react';
import { FormData } from '@/lib/validations/AssessmentSchema';

const REVIEW_ITEMS = [
  'Information provided is accurate.',
  'You understand that eligibility is determined by a licensed physician.',
  'Payment does not guarantee a prescription.',
  'If not approved, you may be eligible for a refund.',
];

export default function EligibilityStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const isAcknowledged = watch('reviewAcknowledged') || false;

  const toggleAcknowledgment = () => {
    setValue('reviewAcknowledged', !isAcknowledged, { shouldValidate: true });
  };

  return (
    <div className="w-full bg-background border border-gray-100 rounded-2xl p-6 sm:p-8 space-y-6">
      {/* Title Header text matched exactly from Frame 195.png */}
      <div className="space-y-4">
        <h2 className="text-[20px] font-semibold text-titleText">
          You&apos;re almost done!
        </h2>
        <div className="h-px w-full bg-gray-200/60" />
        <p className="text-[14px] text-blackColor">
          Before you continue, please review the following:
        </p>
      </div>

      {/* Checklist items rendering matching layout from Frame 195.png */}
      <FormField
        control={control}
        name="reviewAcknowledged"
        render={() => (
          <FormItem className="space-y-4">
            <FormControl>
              <div
                onClick={toggleAcknowledgment}
                className="space-y-4 cursor-pointer select-none"
              >
                {REVIEW_ITEMS.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-greenColor text-white transition-transform group-hover:scale-105">
                      <Check className="h-3.5 w-3.5 stroke-3" />
                    </div>
                    <span className="text-[14px] text-blackColor leading-relaxed">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
