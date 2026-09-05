'use client';

import { useState, useRef } from 'react';
import { toast } from 'sonner';

interface EnterCodeFormProps {
  email: string;
  onNext: () => void;
  onResend: () => void;
}

export default function EnterCodeForm({
  email: _email,
  onNext: _onNext,
  onResend: _onResend,
}: EnterCodeFormProps) {
  const [code, setCode] = useState<string[]>(new Array(6).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Code verification is not connected to a backend yet.
      toast.error('Code verification is not connected to a backend yet.');
    } catch {
      toast.error('Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    try {
      // Resend code is not connected to a backend yet.
      toast.error('Resend code is not connected to a backend yet.');
    } catch {
      toast.error('Failed to resend code. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Enter Code
        </h2>
        <p className="text-sm text-grayColor1 leading-relaxed">
          We sent a 6-digit code to your email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="verification-code-0"
            className="text-sm font-medium text-black"
          >
            Verification Code
          </label>
          <div className="grid grid-cols-6 gap-2">
            {code.map((num, idx) => (
              <input
                key={idx}
                id={`verification-code-${idx}`}
                aria-label={`Verification code digit ${idx + 1}`}
                ref={el => {
                  if (el) inputsRef.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={num}
                onChange={e => handleChange(e.target.value, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-full h-12 text-center text-lg font-medium border border-gray-200 bg-background rounded-lg focus:outline-none focus:border-secondary-text"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary-text hover:bg-greenColor text-white font-medium h-12 rounded-full transition-colors duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Verifying...' : 'Verify'}
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-xs text-grayColor1">
          Didn&apos;t receive code?{' '}
          <button
            onClick={handleResend}
            className="text-emerald-700 font-medium hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
