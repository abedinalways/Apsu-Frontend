'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '@/lib/services/auth';

// ─── Context Types ─────────────────────────────────────────────────────────────

interface AuthContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  createPassword: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  clearError: () => void;
}

// ─── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => authService.isAuthenticated()
  );
  const [isLoading, setIsLoading] = useState(true);

  // Re-hydrate auth state on mount. Loading only reflects the initial
  // auth check (and in-flight sign-in/register calls). Without this a
  // first-time visitor would stay stuck in a permanent loading state.
  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
    setIsLoading(false);
  }, []);

  // ─── Actions ────────────────────────────────────────────────────────────────

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.signIn({ email, password });

      if (response.success) {
        setIsAuthenticated(true);
        setIsLoading(false);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Login failed. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  const register = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register({ email, password });

      if (response.success) {
        setIsLoading(false);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Registration failed. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  const createPassword = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.createPassword({ email, password });

      if (response.success) {
        setIsLoading(false);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Failed to create account. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setError(null);
  };

  const clearError = () => setError(null);

  // ─── Value ──────────────────────────────────────────────────────────────────

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        error,
        login,
        register,
        createPassword,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an <AuthProvider>.');
  }
  return context;
}