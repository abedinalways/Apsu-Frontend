'use client';

import { useState } from 'react';
import Image from 'next/image';
import EmailVerificationForm from './EmailVerificationForm';
import CreatePasswordForm from './CreatePasswordForm';

export default function LoginPageClient() {
  const [step, setStep] = useState<'verify-email' | 'create-password'>(
    'verify-email',
  );
  const [userEmail, setUserEmail] = useState<string>('');

  const handleEmailSubmitted = (email: string) => {
    setUserEmail(email);
    setStep('create-password');
  };

  return (
    <div className="w-full min-h-screen bg-white md:rounded-[32px] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
      {/* Left Column: Brand Sidebar */}
      <div className="hidden md:flex flex-col justify-between p-12 lg:p-16 text-white relative overflow-hidden">
        <Image
          src="/images/login.png"
          alt="Apsu Brand Background"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 768px) 0vw, 50vw"
        />

        {/* Content Layer */}
        <div className="space-y-10 mt-32 z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-[40px] font-normal leading-tight tracking-tight text-center text-white">
            Care that follows <br /> you, in the language <br /> you live in.
          </h1>
          <p className="text-white text-[16px] font-light leading-relaxed text-center opacity-90">
            Personalized treatments for weight loss, birth <br /> control, and
            sleep — delivered to your door.
          </p>
        </div>
      </div>

      {/* Right Column: Dynamic Form Area */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-20 bg-white">
        {/* Mobile Logo Only */}
        <div className="md:hidden mb-8">
          <span className="text-2xl font-bold text-[#142C1E]">Apsu</span>
        </div>

        {step === 'verify-email' ? (
          <EmailVerificationForm onNext={handleEmailSubmitted} />
        ) : (
          <CreatePasswordForm
            email={userEmail}
            onBack={() => setStep('verify-email')}
          />
        )}
      </div>
    </div>
  );
}
