'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  passwordSchema,
  PasswordFormValues,
} from '@/lib/validations/authSchema';
import { EyeIcon } from 'lucide-react';

interface CreatePasswordFormProps {
  email: string;
  onBack: () => void;
}

export default function CreatePasswordForm({
  email,
  onBack,
}: CreatePasswordFormProps) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = (values: PasswordFormValues) => {
    console.log('Password Data for API:', email, values);
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      

      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Create Your Password
        </h2>
        <p className="text-sm md:text-[16px] text-gray-500 leading-relaxed">
          Your APSU account is ready. Set a password to access your care center.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* New Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-base sm:text-[14px] font-medium text-black">
                  New Password <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type={showPass ? 'text' : 'password'}
                      placeholder="At least 8 characters"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-sm focus:outline-none focus:border-[#142C1E] pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-20 flex items-center justify-center"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <span className="text-xs font-semibold bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                       <EyeIcon/>
                      </span>
                    ) : (
                      <svg
                        className="w-5 h-5 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-base sm:text-[14px] font-medium text-black">
                  Confirm Password <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] placeholder:text-sm focus:outline-none focus:border-[#142C1E] pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-20 flex items-center justify-center"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  >
                    {showConfirmPass ? (
                      <span className="text-xs font-semibold bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                        <EyeIcon/>
                      </span>
                    ) : (
                      <svg
                        className="w-5 h-5 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                        />
                      </svg>
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
            Continue to Log In
          </button>
        </form>
      </Form>
    </div>
  );
}
