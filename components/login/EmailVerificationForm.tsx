'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import InputField from '@/components/reusable/InputFiled/InputField';
import { emailSchema, EmailFormValues } from '@/lib/validations/authSchema';

interface EmailVerificationFormProps {
  onNext: (email: string) => void;
}

export default function EmailVerificationForm({
  onNext,
}: EmailVerificationFormProps) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (values: EmailFormValues) => {
    onNext(values.email);
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="hidden md:block mb-6">
        <span className="text-3xl font-bold text-[#142C1E] tracking-tight">
          Apsu
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Access your treatments, prescriptions, consultations, and order
          updates.
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
            Verify Email
          </button>
        </form>
      </Form>

      <div className="flex items-start gap-2 text-xs text-gray-500 pt-2">
        <svg
          className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span>You'll receive an email invitation to set your password.</span>
      </div>
    </div>
  );
}
