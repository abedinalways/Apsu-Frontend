'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { FormData } from '@/lib/validations/AssessmentSchema';

export default function HealthHistoryStepOne() {
  const { control, watch, formState } = useFormContext<FormData>();
  const unitSystem = watch('unitSystem') || 'imperial';

  return (
    <div className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText tracking-tight">
          We've got you! What's your starting point?
        </h2>
        <p className="text-[14px] text-grayColor1 mt-1.5">
          This will help to calculate your BMI to check your eligibility.
        </p>
      </div>

      {/* Custom Unit Selector Toggle Pill */}
      <FormField
        control={control}
        name="unitSystem"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="inline-flex gap-1 p-1 bg-background border border-gray-200 rounded-md max-w-fit">
                <button
                  type="button"
                  onClick={() => field.onChange('imperial')}
                  className={`px-4 py-1.5 text-[12px] font-semibold rounded-md border transition-all cursor-pointer ${
                    field.value === 'imperial'
                      ? 'border-greenColor bg-greenColor text-white'
                      : 'border-gray-100 text-grayColor1 hover:text-gray-900'
                  }`}
                >
                  ft / lbs
                </button>
                <button
                  type="button"
                  onClick={() => field.onChange('metric')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                    field.value === 'metric'
                      ? 'border-greenColor bg-greenColor text-white'
                      : 'border-gray-100 text-grayColor1 hover:text-gray-900'
                  }`}
                >
                  cm / kgs
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Height Fields */}
      <div className="space-y-2">
        {unitSystem === 'imperial' ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={control}
                name="heightFt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] text-blackColor">
                      Your Height <span className="text-redColor">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          type="number"
                          {...field}
                          className="bg-background h-14! text-[16px] text-grayColor1 focus-visible:ring-[1px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-grayColor1">
                          <div className="flex gap-1">
                            {' '}
                            <div className="flex flex-col text-[8px] text-grayColor1">
                              <ChevronUp className="h-2 w-2" />
                              <ChevronDown className="h-2 w-2" />
                            </div>
                            <span>ft</span>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="heightIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] text-blackColor">
                      Height (in) <span className="text-redColor">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          type="number"
                          {...field}
                          className="bg-background h-14! text-[16px] text-grayColor1 focus-visible:ring-[1px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-grayColor1">
                          <div className="flex gap-1">
                            <div className="flex flex-col text-[8px] text-grayColor1">
                              <ChevronUp className="h-2 w-2" />
                              <ChevronDown className="h-2 w-2" />
                            </div>
                            <span>in</span>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {(formState.errors.heightFt || formState.errors.heightIn) && (
                <div className="grid grid-cols-2 gap-4">
                  {formState.errors.heightFt && (
                    <p className="text-sm text-redColor">
                      {formState.errors.heightFt.message as string}
                    </p>
                  )}
                  {formState.errors.heightIn && (
                    <p className="text-sm text-redColor">
                      {formState.errors.heightIn.message as string}
                    </p>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <FormField
            control={control}
            name="heightCm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-blackColor">
                  Your Height <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-background h-14! text-[16px] text-grayColor1 focus-visible:ring-[1px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-grayColor1">
                      <div className="flex gap-1">
                        <div className="flex flex-col text-[8px] text-grayColor1">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>cm</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>

      {/* Weight Fields */}
      <div className="space-y-2">
        {unitSystem === 'imperial' ? (
          <FormField
            control={control}
            name="weightLbs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-blackColor">
                  Your Current Weight <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-background h-14! text-[16px] text-grayColor1 focus-visible:ring-[1px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-grayColor1">
                      <div className="flex gap-1">
                        {' '}
                        <div className="flex flex-col text-[8px] text-grayColor1">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>lbs</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormField
            control={control}
            name="weightKgs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-blackColor">
                  Your Current Weight <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-background h-14! text-[16px] text-grayColor1 focus-visible:ring-[1px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-grayColor1">
                      <div className="flex gap-1">
                        <div className="flex flex-col text-[8px] text-grayColor1">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>kgs</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
}
