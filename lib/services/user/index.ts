/**
 * User Service — Entry Point
 *
 * ─── SWITCHING BETWEEN DEMO AND REAL API ──────────────────────────────────────
 *
 * Set the environment variable:
 *   NEXT_PUBLIC_USER_MODE=demo     (default if unset)
 *   NEXT_PUBLIC_USER_MODE=api
 *
 * That's it. One env var. Everything else stays the same.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { demoUserService } from './demo';
import { apiUserService } from './api';

const mode = (process.env.NEXT_PUBLIC_USER_MODE || 'demo') as 'demo' | 'api';

export const userService = mode === 'api' ? apiUserService : demoUserService;

export type { User, UsersResponse } from './types';
