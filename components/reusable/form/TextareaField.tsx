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
        <FormItem className="relative space-y-2 pb-4">
          <FormLabel
            htmlFor={name}
            className="text-base sm:text-[17px] font-medium text-black"
          >
            {label}
          </FormLabel>

          <FormControl>
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              className="h-28 sm:h-32 rounded-2xl border-border-focus bg-[background] p-4 text-sm sm:text-[16px] text-text-primary placeholder:text-text-muted placeholder:text-sm sm:placeholder:text-[16px] resize-none hover:border-[#8ab69b] focus-visible:border-success focus-visible:ring-4 focus-visible:ring-[#5a8d6e]/10 focus-visible:bg-white transition-all duration-200 ease-in-out shadow-sm outline-none focus-visible:ring-offset-0"
            />
          </FormControl>

          <FormMessage className="absolute -bottom-1 right-0 text-xs text-red-600 font-medium px-2 py-1 rounded" />
        </FormItem>
      )}
    />
  );
}
