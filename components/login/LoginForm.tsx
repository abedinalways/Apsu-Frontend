// components/login/LoginForm.tsx
'use client';

import { useState } from 'react';
import EmailVerificationForm from './EmailVerificationForm';
import PasswordCreationForm from '@/containers/login/CreatePasswordForm';

// Re-export the shared auth validation schemas (single source of truth lives in
// lib/validations/authSchema). Kept for compatibility — this component is not
// currently rendered anywhere.
export {
  emailSchema as emailVerificationSchema,
  passwordSchema as passwordCreationSchema,
} from '@/lib/validations/authSchema';
export type {
  EmailFormValues as EmailVerificationValues,
  PasswordFormValues as PasswordCreationValues,
} from '@/lib/validations/authSchema';

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
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white  w-full">
      <div className="w-full max-w-md ">
        {currentStep === 'email' ? (
          <EmailVerificationForm
            onNext={handleEmailVerified}
            onExistingUser={(email) => {
              setEmail(email);
              setCurrentStep('password');
            }}
          />
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
