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
import InputField from '@/components/reusable/InputFiled/InputField';
import { Eye, EyeOff } from 'lucide-react';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  onForgotPassword: () => void;
  onCheckEligibility: () => void;
}

export default function SignInForm({
  onForgotPassword,
  onCheckEligibility,
}: SignInFormProps) {
  const [showPass, setShowPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();
  const { login } = useAuth();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: SignInFormValues) => {
    setIsSubmitting(true);
    
    try {
      const result = await login(values.email, values.password);
      
      if (result.success) {
        toast.success('Welcome back! Login successful.');
        router.push('/profile');
      } else {
        toast.error(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="hidden md:block mb-2">
        <span className="text-3xl font-bold text-[#142C1E] tracking-tight">
          Apsu
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Access your treatments, prescriptions, consultations, and order
          updates.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="maria@example.com"
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm font-medium text-black">
                  Password <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type={showPass ? 'text' : 'password'}
                      placeholder="Your password"
                      className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[#faf9f4] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#142C1E] pr-12 transition-colors"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-20"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <EyeOff className="w-5 h-5 opacity-60" />
                    ) : (
                      <Eye className="w-5 h-5 opacity-60" />
                    )}
                  </button>
                </div>
                <div className="text-right pt-1">
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Forgot Password
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#142C1E] hover:bg-[#1c3d2a] text-white font-medium h-12 rounded-full transition-colors duration-200 mt-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </Form>

      <div className="text-center pt-2">
        <p className="text-xs text-gray-500">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onCheckEligibility}
            className="text-[#142C1E] font-medium hover:underline"
          >
            Check your eligibility
          </button>
        </p>
      </div>
    </div>
  );
}
