'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import InputField from '@/components/reusable/InputFiled/InputField';
import { emailSchema, EmailFormValues } from '@/lib/validations/authSchema';
import { toast } from 'sonner';

interface EmailVerificationFormProps {
  onNext: (email: string) => void;
  onExistingUser: (email: string) => void;
}

export default function EmailVerificationForm({
  onNext: _onNext,
  onExistingUser: _onExistingUser,
}: EmailVerificationFormProps) {
  const [isChecking, setIsChecking] = useState(false);
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (_values: EmailFormValues) => {
    setIsChecking(true);
    try {
      // Email verification is not connected to a backend yet.
      // In demo mode, we proceed as if the email is new.
      toast.error('Email verification is not connected to a backend yet.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="hidden md:block mb-6"></div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-sm text-grayColor1 leading-relaxed">
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
            disabled={isChecking}
            className="w-full bg-secondary-text hover:bg-greenColor text-white font-medium h-12 rounded-full transition-colors duration-200 mt-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isChecking ? 'Checking...' : 'Verify Email'}
          </button>
        </form>
      </Form>

      <div className="flex items-start gap-2 text-xs text-grayColor1 pt-2">
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
