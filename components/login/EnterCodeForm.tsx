'use client';

import { useState, useRef } from 'react';

interface EnterCodeFormProps {
  email: string;
  onNext: () => void;
  onResend: () => void;
}

export default function EnterCodeForm({
  email,
  onNext,
  onResend,
}: EnterCodeFormProps) {
  const [code, setCode] = useState<string[]>(new Array(6).fill(''));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight">
          Enter Code
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          We sent a 6-digit code to your email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">
            Verification Code
          </label>
          <div className="grid grid-cols-6 gap-2">
            {code.map((num, idx) => (
              <input
                key={idx}
                ref={el => {
                  if (el) inputsRef.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={num}
                onChange={e => handleChange(e.target.value, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-full h-12 text-center text-lg font-medium border border-gray-200 bg-[#faf9f4] rounded-lg focus:outline-none focus:border-[#142C1E]"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#142C1E] hover:bg-[#1c3d2a] text-white font-medium h-12 rounded-full transition-colors duration-200 text-sm"
        >
          Verify
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-xs text-gray-500">
          Didn't receive code?{' '}
          <button
            onClick={onResend}
            className="text-emerald-700 font-medium hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
