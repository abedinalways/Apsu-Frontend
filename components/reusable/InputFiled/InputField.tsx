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
          <FormLabel className="text-[18px] font-medium text-black">
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="h-[56px] rounded-[12px] border-[#b8d9c6] bg-[#f7f9f8] px-4 text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-[16px] focus-visible:border-[#b2c7bc] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
