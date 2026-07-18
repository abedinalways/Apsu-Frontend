'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '@/lib/services/auth';

// ─── Context Types ─────────────────────────────────────────────────────────────

interface AuthContextType {
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      console.error('[AuthContext] Session restore failed:', err);
    } finally {
      setIsLoading(false);
    }
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

      if (response.success && response.user) {
        setUser(response.user);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
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

      if (response.success && response.user) {
        setUser(response.user);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Registration failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
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

      if (response.success && response.user) {
        setUser(response.user);
        return { success: true };
      }

      const errorMessage = response.error ?? 'Failed to create account. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } catch {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setError(null);
  };

  const clearError = () => setError(null);

  // ─── Value ──────────────────────────────────────────────────────────────────

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
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