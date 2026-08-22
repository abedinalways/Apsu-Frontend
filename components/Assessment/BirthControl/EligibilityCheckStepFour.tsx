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
import { FormData } from '@/zod/AssessmentSchema';

export default function EligibilityCheckStepFour() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const isMonitored = watch('monitoredForHighBP');

  return (
    <div className="space-y-6">
      {/* Step Header Title Area */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Blood pressure monitoring
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          This will help your physician to provide the right medications for
          you.
        </p>
      </div>

      {/* Textarea Field: BP Numbers */}
      <FormField
        control={control}
        name="bloodPressureValue"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] font-semibold text-[#111] tracking-wide">
              Do you know your BP? If yes, please write it below:
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="eg-Normal- Both numbers less than 129/80"
                className="min-h-[110px] resize-none rounded-xl border-gray-200 placeholder:text-gray-400 bg-[background] h-14! text-[16px] text-[#6c6c6c focus-visible:ring-[1px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Horizontal Yes/No Choice Selector */}
      <FormField
        control={control}
        name="monitoredForHighBP"
        render={() => (
          <FormItem className="space-y-3">
            <FormLabel className="text-[14px] font-semibold text-[#111] tracking-wide flex items-center gap-0.5">
              Are you currently being monitored for high blood pressure?{' '}
              <span className="text-red-500 font-serif text-sm">*</span>
            </FormLabel>
            <FormControl>
              <div className="flex items-center gap-3">
                {/* YES Option button */}
                <button
                  type="button"
                  onClick={() =>
                    setValue('monitoredForHighBP', 'yes', {
                      shouldValidate: true,
                    })
                  }
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold transition-all bg-[background] h-14! cursor-pointer text-[16px] text-[#6c6c6c] ${
                    isMonitored === 'yes'
                      ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                      : 'border-gray-200'
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isMonitored === 'yes'
                        ? 'border-[#AFC1B6] bg-secondary-bg'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {isMonitored === 'yes' && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-gray-700 text-xs font-bold">Yes</span>
                </button>

                {/* NO Option button */}
                <button
                  type="button"
                  onClick={() =>
                    setValue('monitoredForHighBP', 'no', {
                      shouldValidate: true,
                    })
                  }
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold transition-all bg-[background] h-14! cursor-pointer text-[16px] text-[#6c6c6c] ${
                    isMonitored === 'no'
                      ? 'border-[#AFC1B6] border-2 text-secondary-bg'
                      : 'border-gray-200'
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isMonitored === 'no'
                        ? 'border-[#AFC1B6] bg-secondary-bg'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {isMonitored === 'no' && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-gray-700 text-xs font-bold">No</span>
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
