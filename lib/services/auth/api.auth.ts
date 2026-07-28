/**
 * Real API Auth Implementation (Future Use)
 *
 * Replace the demo implementation with this when your backend is ready.
 * This file calls the actual Laravel API endpoints.
 *
 * ─── HOW TO ACTIVATE ─────────────────────────────────────────────────────────
 * In `lib/services/auth/index.ts`, change:
 *   export { demoAuthService as authService } from './demo.auth';
 * to:
 *   export { apiAuthService as authService } from './api.auth';
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ─── ENV SETUP ───────────────────────────────────────────────────────────────
 * Add to your .env.local:
 *   NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Cookies from 'js-cookie';
import type {
  IAuthService,
  User,
  AuthResponse,
  SignInPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from './types';

// ─── Constants ────────────────────────────────────────────────────────────────

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';
const TOKEN_COOKIE = 'apsu_auth_token';
const USER_KEY = 'apsu_user';

// ─── Implementation ───────────────────────────────────────────────────────────

class ApiAuthService implements IAuthService {
  async signIn(payload: SignInPayload): Promise<AuthResponse> {
    try {
      const res = await this.post('/auth/login', payload);

      if (res.success && res.token && res.user) {
        this.persistSession(res.user, res.token);
      }

      return res;
    } catch {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
  }

  async createPassword(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const res = await this.post('/auth/create-password', payload);

      if (res.success && res.token && res.user) {
        this.persistSession(res.user, res.token);
      }

      return res;
    } catch {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
  }

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const res = await this.post('/auth/register', payload);

      if (res.success && res.token && res.user) {
        this.persistSession(res.user, res.token);
      }

      return res;
    } catch {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
  }

  async forgotPassword(payload: ForgotPasswordPayload): Promise<AuthResponse> {
    try {
      return await this.post('/auth/forgot-password', payload);
    } catch {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
  }

  async resetPassword(payload: ResetPasswordPayload): Promise<AuthResponse> {
    try {
      return await this.post('/auth/reset-password', payload);
    } catch {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;

    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!Cookies.get(TOKEN_COOKIE);
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(USER_KEY);
    }
    Cookies.remove(TOKEN_COOKIE, { path: '/' });
  }

  // ─── Private Helpers ──────────────────────────────────────────────────────

  private persistSession(user: User, token: string): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    Cookies.set(TOKEN_COOKIE, token, {
      expires: 7,     // 7 days
      path: '/',
      sameSite: 'lax',
      // secure: true, // Uncomment in production (requires HTTPS)
    });
  }

  private async post(path: string, body: unknown): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return {
        success: false,
        error: err?.message ?? `Request failed with status ${response.status}`,
      };
    }

    return response.json();
  }
}

export const apiAuthService = new ApiAuthService();
