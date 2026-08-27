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
          <FormLabel
            htmlFor={name}
            className="text-base sm:text-[18px] font-medium text-black"
          >
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              className="h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border-lightGreenColor bg-background text-sm sm:text-[16px] text-blackColor placeholder:text-grayColor1 placeholder:text-sm sm:placeholder:text-[16px] hover:border-greenColor1 focus-visible:border-greenColor1 focus-visible:ring-4 focus-visible:ring-greenColor1/10 focus-visible:bg-white transition-all duration-200 ease-in-out shadow-sm outline-none focus-visible:ring-offset-0 ouitline-3"
            />
          </FormControl>

          <FormMessage className="absolute -bottom-1 right-0 text-xs text-redColor font-medium bg-white px-2 py-1 rounded" />
        </FormItem>
      )}
    />
  );
}
