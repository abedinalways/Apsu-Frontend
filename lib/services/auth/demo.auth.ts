/**
 * Demo Auth Implementation
 *
 * This is a fully client-side mock of the auth service.
 * It accepts ANY valid email + password (min 8 chars) — no account creation needed.
 * Session is stored in cookies (via `lib/session.ts`) for client state and
 * middleware route protection.
 *
 * ─── HOW TO SWITCH TO REAL API ───────────────────────────────────────────────
 * Set `NEXT_PUBLIC_AUTH_MODE=api` in your environment (default is `demo`).
 * `lib/services/auth/index.ts` reads that variable and exports the matching
 * implementation. No imports or components need to change.
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
import { Session } from '@/lib/session';

// ─── Demo Credentials ─────────────────────────────────────────────────────────
// In demo mode, you can log in with any valid email.
// Password just needs to be at least 8 characters.
// No account creation is required.

// ─── Implementation ───────────────────────────────────────────────────────────

class DemoAuthService implements IAuthService {
  /**
   * Sign in with any valid email and password (min 8 chars).
   * No prior registration is needed in demo mode.
   */
  async signIn(payload: SignInPayload): Promise<AuthResponse> {
    await this.simulateNetwork(600);

    const { email, password } = payload;

    // Basic validation — mirrors what the real API would check
    if (!email || !password) {
      return { success: false, error: 'Email and password are required.' };
    }

    if (password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters.' };
    }

    // Demo: Accept any valid email/password — create an on-the-fly user
    const user: User = {
      id: this.generateId(email),
      email,
      name: this.guessNameFromEmail(email),
    };

    this.persistSession(user);

    return { success: true, user };
  }

  /** Create password (registration flow after email verification) */
  async createPassword(payload: RegisterPayload): Promise<AuthResponse> {
    await this.simulateNetwork(800);

    const { email, password, name } = payload;

    if (!email || !password) {
      return { success: false, error: 'Email and password are required.' };
    }

    if (password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters.' };
    }

    const user: User = {
      id: this.generateId(email),
      email,
      name: name ?? this.guessNameFromEmail(email),
    };

    this.persistSession(user);

    return { success: true, user };
  }

  /**
   * Register a new account.
   * In demo mode this also auto-logs in the user.
   */
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    await this.simulateNetwork(800);

    const { email, password, name } = payload;

    if (!email || !password) {
      return { success: false, error: 'Email and password are required.' };
    }

    if (password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters.' };
    }

    const user: User = {
      id: this.generateId(email),
      email,
      name: name ?? this.guessNameFromEmail(email),
    };

    this.persistSession(user);

    return { success: true, user };
  }

  /**
   * Demo: Always succeeds. Pretends to send a reset email.
   */
  async forgotPassword(_payload: ForgotPasswordPayload): Promise<AuthResponse> {
    await this.simulateNetwork(600);
    return { success: true };
  }

  /**
   * Demo: Code "123456" is the magic code that always works.
   */
  async resetPassword(payload: ResetPasswordPayload): Promise<AuthResponse> {
    await this.simulateNetwork(600);

    if (payload.code !== '123456') {
      return { success: false, error: 'Invalid or expired code. Please try again.' };
    }

    return { success: true };
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const data = Session.getUser();
    if (!data) return null;
    return {
      id: data.email,
      email: data.email,
      name: data.name,
    };
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!Session.getToken();
  }

  logout(): void {
    Session.clearAll();
  }

  // ─── Private Helpers ──────────────────────────────────────────────────────

  private persistSession(user: User): void {
    Session.setUser({ email: user.email, name: user.name });
    Session.setToken('demo_token');
  }

  /** Generate a stable ID from the email (demo only) */
  private generateId(email: string): string {
    return `demo_${btoa(email).replace(/[^a-z0-9]/gi, '').substring(0, 12)}`;
  }

  /** Extract a friendly name from the email address */
  private guessNameFromEmail(email: string): string {
    const local = email.split('@')[0];
    return local
      .replace(/[._-]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /** Simulate an async network call for realistic UX */
  private simulateNetwork(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const demoAuthService = new DemoAuthService();
