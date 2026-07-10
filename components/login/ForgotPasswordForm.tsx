'use client';

import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/reusable/InputFiled/InputField';

interface ForgotPasswordFormProps {
  onNext: (email: string) => void;
  onBack: () => void;
}

export default function ForgotPasswordForm({
  onNext,
  onBack,
}: ForgotPasswordFormProps) {
  const form = useForm({ defaultValues: { email: '' } });

  const onSubmit = (values: { email: string }) => {
    onNext(values.email);
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
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
            className="w-full bg-[#142C1E] hover:bg-[#1c3d2a] text-white font-medium h-12 rounded-full transition-colors duration-200 mt-2 text-sm"
          >
            Send Code
          </button>
        </form>
      </Form>

      <div className="text-center pt-2">
        <p className="text-xs text-gray-500">
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
