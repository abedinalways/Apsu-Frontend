'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Eye, EyeOff } from 'lucide-react';

interface SetNewPasswordFormProps {
  onSuccess: () => void;
}

export default function SetNewPasswordForm({
  onSuccess,
}: SetNewPasswordFormProps) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const form = useForm({
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = (values: any) => {
    console.log('New password configuration:', values);
    onSuccess();
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Set New Password
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Create a strong password for your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm font-medium text-black">
                  New Password <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type={showPass ? 'text' : 'password'}
                      placeholder="At least 8 characters"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#142C1E] pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <EyeOff className="w-5 h-5 opacity-60" />
                    ) : (
                      <Eye className="w-5 h-5 opacity-60" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm font-medium text-black">
                  Confirm Password <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#142C1E] pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  >
                    {showConfirmPass ? (
                      <EyeOff className="w-5 h-5 opacity-60" />
                    ) : (
                      <Eye className="w-5 h-5 opacity-60" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="w-full bg-[#142C1E] hover:bg-[#1c3d2a] text-white font-medium h-12 rounded-full transition-colors duration-200 mt-4 text-sm"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}
