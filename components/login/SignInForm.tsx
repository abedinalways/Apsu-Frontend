'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface SignInFormProps {
  onForgotPassword: () => void;
}

export default function SignInForm({ onForgotPassword }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        toast.success('Welcome back! Login successful.');
        const redirectTo = searchParams.get('redirect') || '/profile';
        router.push(redirectTo);
      } else {
        toast.error(result.error || 'Login failed. Please try again.');
      }
    } catch {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 font-[Work_Sans]">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-[28px] font-medium text-gray-900 tracking-tight ">
          Welcome Back
        </h2>
        <p className="text-sm md:text-[1rem] text-gray-500 leading-relaxed">
          Access your treatments, prescriptions, consultations, and order
          updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="signin-email"
            className="text-base sm:text-[18px] font-medium text-black"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="maria@example.com"
            className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[background] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[secondary-text] transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-black"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="signin-password"
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full h-[48px] md:h-[56px] px-[14px] py-[8px] rounded-[12px] border border-[#b8d9c6] bg-[background] text-sm sm:text-[16px] text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[secondary-text] pr-12 transition-colors"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-20"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <svg
                  className="w-5 h-5 opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="text-right pt-1">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs text-red-400 hover:underline"
            >
              Forgot Password
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[secondary-text] hover:bg-[#1c3d2a] text-white font-medium h-12 rounded-full transition-colors duration-200 mt-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
