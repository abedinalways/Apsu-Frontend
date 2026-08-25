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
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const setPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SetPasswordFormValues = z.infer<typeof setPasswordSchema>;

interface SetNewPasswordFormProps {
  onSuccess: () => void;
}

export default function SetNewPasswordForm({
  onSuccess,
}: SetNewPasswordFormProps) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const form = useForm<SetPasswordFormValues>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = async (values: SetPasswordFormValues) => {
    setIsSubmitting(true);

    try {
      // Password reset is not connected to a backend yet.
      toast.error('Password reset is not connected to a backend yet.');
    } catch {
      toast.error('Failed to reset password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-blackColor tracking-tight">
          Set New Password
        </h2>
        <p className="text-sm text-grayColor1 leading-relaxed">
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
                <FormLabel
                  htmlFor="new-password"
                  className="text-sm font-medium text-blackColor"
                >
                  New Password <span className="text-redColor">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      id="new-password"
                      type={showPass ? 'text' : 'password'}
                      placeholder="At least 8 characters"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-lightGreenColor bg-background text-sm sm:text-[16px] text-blackColor placeholder:text-grayColor1 focus:outline-none focus:border-secondary-text pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-grayColor1"
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
                <FormLabel
                  htmlFor="confirm-new-password"
                  className="text-sm font-medium text-blackColor"
                >
                  Confirm Password <span className="text-redColor">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      id="confirm-new-password"
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-lightGreenColor bg-background text-sm sm:text-[16px] text-blackColor placeholder:text-grayColor1 focus:outline-none focus:border-secondary-text pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-grayColor1"
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
            disabled={isSubmitting}
            className="w-full bg-secondary-text hover:bg-greenColor text-white font-medium h-12 rounded-full transition-colors duration-200 mt-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </Form>
    </div>
  );
}
