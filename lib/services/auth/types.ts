/**
 * Auth Service Types & Interface Contract
 *
 * This file defines the shared data types and the IAuthService interface.
 * Both the Demo and real API implementations must satisfy this contract.
 * This ensures that switching from demo → production is a one-line change.
 */

// ─── Data Models ─────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

// ─── Request Payloads ─────────────────────────────────────────────────────────

export interface SignInPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  email: string;
  code: string;
  newPassword: string;
}

// ─── Service Interface (The Contract) ─────────────────────────────────────────

/**
 * IAuthService defines the contract that every auth implementation must follow.
 * Demo mode and real API mode both implement this interface.
 * To switch implementations, change only the export in `index.ts`.
 */
export interface IAuthService {
  /** Sign in with email and password */
  signIn(payload: SignInPayload): Promise<AuthResponse>;

  /** Create password for a user who has verified email (used in registration flow) */
  createPassword(payload: RegisterPayload): Promise<AuthResponse>;

  /** Register a new user (create account + password) */
  register(payload: RegisterPayload): Promise<AuthResponse>;

  /** Request a password reset code to be sent to email */
  forgotPassword(payload: ForgotPasswordPayload): Promise<AuthResponse>;

  /** Reset password using the code received via email */
  resetPassword(payload: ResetPasswordPayload): Promise<AuthResponse>;

  /** Get the currently logged-in user from local storage / cookie */
  getCurrentUser(): User | null;

  /** Check if a user is currently authenticated */
  isAuthenticated(): boolean;

  /** Log out the current user (clear session) */
  logout(): void;
}
