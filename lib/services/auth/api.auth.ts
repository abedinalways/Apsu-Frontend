/**
 * Real API Auth Implementation (Future Use)
 *
 * This file is the production implementation. All methods are intentionally
 * unimplemented because the backend API is not defined yet. When the backend
 * is ready, implement each method against the agreed endpoints.
 *
 * ─── HOW TO ACTIVATE ─────────────────────────────────────────────────────────
 * Set `NEXT_PUBLIC_AUTH_MODE=api` in your environment.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ─── ENV SETUP ───────────────────────────────────────────────────────────────
 * Add to your .env.local:
 *   NEXT_PUBLIC_API_URL=https://your-api-domain.com
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  IAuthService,
  User,
  AuthResponse,
  SignInPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';
const SESSION_COOKIE = 'apsu_auth_token';

class ApiAuthService implements IAuthService {
  async signIn(_payload: SignInPayload): Promise<AuthResponse> {
    throw new Error('signIn not implemented');
  }

  async createPassword(_payload: RegisterPayload): Promise<AuthResponse> {
    throw new Error('createPassword not implemented');
  }

  async register(_payload: RegisterPayload): Promise<AuthResponse> {
    throw new Error('register not implemented');
  }

  async forgotPassword(_payload: ForgotPasswordPayload): Promise<AuthResponse> {
    throw new Error('forgotPassword not implemented');
  }

  async resetPassword(_payload: ResetPasswordPayload): Promise<AuthResponse> {
    throw new Error('resetPassword not implemented');
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    // In production, current user should be fetched from the backend
    // using the session token, not read from client-side storage.
    return null;
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!document.cookie.split('; ').find((row) => row.startsWith(`${SESSION_COOKIE}=`));
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      document.cookie = `${SESSION_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    }
  }
}

export const apiAuthService = new ApiAuthService();
