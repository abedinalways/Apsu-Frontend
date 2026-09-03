'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import EnterCodeForm from './EnterCodeForm';
import SetNewPasswordForm from '@/containers/login/SetNewPasswordForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignInForm from '@/containers/login/SignInForm';
import APSU from '../icons/APSU';
import Link from 'next/link';

type AuthStep =
  | 'sign-in'
  | 'forgot-password'
  | 'enter-code'
  | 'set-new-password';

export default function LoginPageClient() {
  // Default to sign-in for existing users.
  const [step, setStep] = useState<AuthStep>('sign-in');
  const [userEmail, setUserEmail] = useState<string>('');

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

        {/* Back Button */}
        <Link href="/" className="relative z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-900 hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>

        {/* Content Layer */}
        <div className="space-y-10  z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl lg:text-[55px] font-normal leading-tight tracking-tight text-center text-white">
            Care that follows you, in the language <br /> you live in.
          </h1>
          <p className="text-white text-[16px] font-light leading-relaxed text-center opacity-90">
            Personalized treatments for weight loss, birth <br /> control, and
            sleep — delivered to your door.
          </p>
        </div>
      </div>

      {/* Right Column: Dynamic Form Area */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-20 bg-white relative">
        {/* Mobile Logo */}
        <Link href="/">
          <div className="lg:hidden mb-8">
            <APSU />
          </div>
        </Link>

        {step === 'sign-in' && (
          <Suspense fallback={null}>
            <SignInForm onForgotPassword={() => setStep('forgot-password')} />
          </Suspense>
        )}

        {step === 'forgot-password' && (
          <ForgotPasswordForm
            onNext={email => {
              setUserEmail(email);
              setStep('enter-code');
            }}
            onBack={() => setStep('sign-in')}
          />
        )}

        {step === 'enter-code' && (
          <EnterCodeForm
            email={userEmail}
            onNext={() => setStep('set-new-password')}
            onResend={() => {}}
          />
        )}

        {step === 'set-new-password' && (
          <SetNewPasswordForm onSuccess={() => setStep('sign-in')} />
        )}
      </div>
    </div>
  );
}
