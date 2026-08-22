/**
 * Auth Service — Entry Point
 *
 * ─── SWITCHING BETWEEN DEMO AND REAL API ──────────────────────────────────────
 *
 * Set the environment variable:
 *   NEXT_PUBLIC_AUTH_MODE=demo     (default if unset)
 *   NEXT_PUBLIC_AUTH_MODE=api
 *
 * That's it. One env var. Everything else stays the same.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { demoAuthService } from './demo.auth';
import { apiAuthService } from './api.auth';

const mode = (process.env.NEXT_PUBLIC_AUTH_MODE || 'demo') as 'demo' | 'api';

export const authService = mode === 'api' ? apiAuthService : demoAuthService;

export type {
  User,
  AuthResponse,
  IAuthService,
  SignInPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from './types';
