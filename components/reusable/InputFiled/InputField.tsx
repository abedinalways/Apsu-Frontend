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
  type?: React.HTMLInputTypeAttribute;
}

export default function InputField({
  control,
  name,
  label,
  placeholder,
  type,
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative space-y-2 pb-4">
          <FormLabel className="text-base sm:text-[18px] font-medium text-black">
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className="h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-sm sm:placeholder:text-[16px] hover:border-[#8ab69b] focus-visible:border-[#5a8d6e] focus-visible:ring-4 focus-visible:ring-[#5a8d6e]/10 focus-visible:bg-white transition-all duration-200 ease-in-out shadow-sm outline-none focus-visible:ring-offset-0 ouitline-3"
            />
          </FormControl>

          <FormMessage className="absolute -bottom-1 right-0 text-xs text-red-600 font-medium bg-white px-2 py-1 rounded" />
        </FormItem>
      )}
    />
  );
}
