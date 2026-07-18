/**
 * Auth Service — Entry Point
 *
 * ─── TO SWITCH BETWEEN DEMO AND REAL API ─────────────────────────────────────
 *
 *  DEMO MODE (current):
 *    export { demoAuthService as authService } from './demo.auth';
 *
 *  PRODUCTION MODE (when backend is ready):
 *    export { apiAuthService as authService } from './api.auth';
 *
 * That's it. One line change. Everything else stays the same.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ✅ ACTIVE: Demo mode — accepts any email/password, no backend needed
export { demoAuthService as authService } from './demo.auth';

// 🔌 FUTURE: Uncomment when backend is ready
// export { apiAuthService as authService } from './api.auth';

// Re-export types so consumers don't need to import from the sub-files
export type {
  User,
  AuthResponse,
  IAuthService,
  SignInPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from './types';
