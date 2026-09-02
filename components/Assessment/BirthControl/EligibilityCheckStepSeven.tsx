'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '@/lib/validations/AssessmentSchema';

export default function EligibilityCheckStepSeven() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Question Header text from Screenshot 2026-07-05 113401.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          Please share any concerns or questions you have for the medical team
          below.
        </h2>
      </div>

      {/* Concerns Textarea block */}
      <FormField
        control={control}
        name="medicalTeamConcerns"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] font-semibold text-blackColor">
              Do you have any concerns you would like to share with your medical
              team?
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Describe your concerns if you have any..."
                className="min-h-[110px] resize-none rounded-xl border-gray-200  text-sm placeholder:text-grayColor1 w-full p-4 bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
