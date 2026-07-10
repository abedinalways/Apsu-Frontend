// components/login/LoginForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import EmailVerificationForm from './EmailVerificationForm';
import PasswordCreationForm from './CreatePasswordForm';


// Validation schemas
export const emailVerificationSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const passwordCreationSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type EmailVerificationValues = z.infer<typeof emailVerificationSchema>;
export type PasswordCreationValues = z.infer<typeof passwordCreationSchema>;

type LoginStep = 'email' | 'password';

export default function LoginForm() {
  const [currentStep, setCurrentStep] = useState<LoginStep>('email');
  const [email, setEmail] = useState('');

  const handleEmailVerified = (verifiedEmail: string) => {
    setEmail(verifiedEmail);
    setCurrentStep('password');
  };

  const handlePasswordCreated = () => {
    // Navigate to dashboard or home page
    console.log('Login completed for:', email);
    // router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white  w-full">
      <div className="w-full max-w-md ">
        {currentStep === 'email' ? (
          <EmailVerificationForm onNext={handleEmailVerified} />
        ) : (
          <PasswordCreationForm
            email={email}
            onBack={handlePasswordCreated}
          />
        )}
      </div>
    </div>
  );
}
