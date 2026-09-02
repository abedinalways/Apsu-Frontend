'use client';

import { UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProfileFormValues } from './type';
import GlobeIcon from '../icons/GlobeIcon';

interface HealthcarePreferencesProps {
  form: UseFormReturn<ProfileFormValues>;
}

export default function HealthcarePreferences({
  form,
}: HealthcarePreferencesProps) {
  return (
    <div className="space-y-4 rounded-[16px] border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-50 pb-2 text-sm font-medium text-secondary-text">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lightGreenColor">
          <GlobeIcon />
        </span>

        <span className="text-base">Healthcare Preferences</span>
      </div>

      <div className="max-w-sm">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-base font-medium text-black">
                Language
              </FormLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={field.disabled}
              >
                <FormControl>
                  <SelectTrigger
                    ref={field.ref}
                    className="h-[48px] rounded-[8px] md:w-[189px] border-lightGreenColor bg-background focus:ring-0 md:h-[56px]"
                  >
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent className="z-[99999] overflow-x-scroll">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="id">Indonesia</SelectItem>
                  <SelectItem value="bn">Bangla</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
