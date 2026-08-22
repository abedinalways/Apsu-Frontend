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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormData } from '@/zod/AssessmentSchema';

export default function GeneralInformation() {
  const { control, watch } = useFormContext<FormData>();
  const currentGender = watch('gender');

  const genders = ['male', 'female', 'intersex'] as const;

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-semibold text-[#102b1c]">
        Tell us about yourself first!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start auto-rows-auto">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] text-[#111]">
                First Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="bg-[background] h-14! text-[16px] text-[#6c6c6c] focus-visible:ring-[1px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] text-[#111]">
                Last Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="bg-[background] h-14! text-[16px] text-[#6c6c6c focus-visible:ring-[1px]]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] text-[#111]">
              Date of Birth <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Input
                type="date"
                {...field}
                className="bg-[background] h-14! text-[16px] text-[#6c6c6c] flex flex-col pt-4 focus-visible:ring-[1px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] text-[#111]">
              Gender <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-3 gap-3"
              >
                {genders.map(g => (
                  <div
                    key={g}
                    className={`flex items-center justify-center gap-2 bg-[background] h-14! rounded-xl border text-[16px] text-[#6c6c6c] capitalize transition-all w-full ${
                      currentGender === g
                        ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                        : 'border-gray-200'
                    }`}
                  >
                    <RadioGroupItem value={g} id={g} />
                    <label htmlFor={g} className="cursor-pointer select-none">
                      {g}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="residence"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] text-[#111]">
              Select your Residence <span className="text-red-500">*</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-[background] h-14! w-full text-[16px] text-[#6c6c6c] cursor-pointer">
                  <SelectValue placeholder="Select your state name" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
