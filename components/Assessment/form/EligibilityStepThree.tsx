'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { FormData } from '@/lib/validations/AssessmentSchema';

export default function EligibilityStepThree() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Title Header text layout from Frame 1984077999 (1).png */}
      <div>
        <h2 className="text-[20px] font-semibold text-titleText">
          If your treatment is approved, where should we ship your order?
        </h2>
      </div>

      <div className="space-y-4">
        {/* Full-Width Street Address Input */}
        <FormField
          control={control}
          name="shippingAddress"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[14px] text-blackColor flex items-center gap-0.5">
                Address <span className="text-redColor">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Apertment no., rd no etc.."
                  className="bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State & City Grid Container Row */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="shippingState"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[14px] text-blackColor flex items-center gap-0.5">
                  State <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jakarta"
                    className="bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="shippingCity"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[14px] text-blackColor flex items-center gap-0.5">
                  City <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jakarta"
                    className="bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Country & Postal Code Grid Container Row */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="shippingCountry"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[14px] text-blackColor flex items-center gap-0.5">
                  Country <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Indonesia"
                    className="bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="shippingPostalCode"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[14px] text-blackColor flex items-center gap-0.5">
                  Postal Code <span className="text-redColor">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="10111"
                    className="bg-background h-14! text-[16px] text-blackColor focus-visible:ring-[1px]]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Option Selection Area checkboxes layout at bottom of frame layout section */}
      <div className="space-y-3 pt-2">
        {/* Billing Synchronization Checkbox item */}
        <FormField
          control={control}
          name="billingSameAsShipping"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-4 w-4 rounded border-gray-300 text-emerald-900 data-[state=checked]:bg-secondary-bg data-[state=checked]:border-secondary-bg"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-[14px] text-blackColor">
                  Billing address is the same as shipping address.
                </label>
              </div>
            </FormItem>
          )}
        />

        {/* Promotional email sub-checkbox list option configuration tracking array layout context */}
        <FormField
          control={control}
          name="receivePromotions"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-4 w-4 rounded border-gray-300 text-emerald-900 data-[state=checked]:bg-secondary-bg data-[state=checked]:border-secondary-bg"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-[14px] text-blackColor leading-normal">
                  I&apos;m also like to receive occasional promotions via email.
                  Opt-out any time.
                </label>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
