'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder: string;
}

export default function TextareaField({
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
          <FormLabel className="text-base sm:text-[17px] font-medium text-black">
            {label}
          </FormLabel>

          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className="h-28 sm:h-32 rounded-2xl border-[#b8d9c6] bg-[#faf9f4] p-4 text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-sm sm:placeholder:text-[16px] resize-none focus-visible:border-[#b2c7bc] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
