'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/reusable/InputFiled/InputField';
import { toast } from 'sonner';

interface ForgotPasswordFormProps {
  onNext: (email: string) => void;
  onBack: () => void;
}

export default function ForgotPasswordForm({
  onNext: _onNext,
  onBack,
}: ForgotPasswordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({ defaultValues: { email: '' } });

  const onSubmit = async (_values: { email: string }) => {
    setIsSubmitting(true);

    try {
      // Forgot password is not connected to a backend yet.
      toast.error('Password reset is not connected to a backend yet.');
    } catch {
      toast.error('Failed to send reset code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Reset Your Password
        </h2>
        <p className="text-sm text-grayColor1 leading-relaxed">
          Enter your email for the verification code
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="maria@example.com"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary-text hover:bg-greenColor text-white font-medium h-12 rounded-full transition-colors duration-200 mt-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Code'}
          </button>
        </form>
      </Form>

      <div className="text-center pt-2">
        <p className="text-xs text-grayColor1">
          Remember your password?{' '}
          <button
            onClick={onBack}
            className="text-emerald-700 font-medium hover:underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
}
