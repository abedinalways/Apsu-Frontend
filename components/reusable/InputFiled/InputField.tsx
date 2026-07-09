'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder: string;
}

export default function InputField({
  control,
  name,
  label,
  placeholder,
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-base sm:text-[18px] font-medium text-black">
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="h-[48px] md:h-[56px]  px-[14px] py-[8px] rounded-[12px] border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-sm sm:placeholder:text-[16px] focus-visible:border-[#b8d9c6] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
