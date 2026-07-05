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
          <FormLabel className="text-[17px] font-medium text-black">
            {label}
          </FormLabel>

          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
             
              className="h-32 rounded-2xl border-[#dce6e1] bg-[#f7f9f8] p-4 text-[16px] text-[#333] placeholder:text-[#999] resize-none focus-visible:border-[#b2c7bc] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
