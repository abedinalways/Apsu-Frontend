import { describe, it, expect, beforeEach } from 'vitest';
import { authService } from '@/lib/services/auth';

describe('AuthService (demo mode)', () => {
  beforeEach(() => {
    authService.logout();
  });

  it('signs in with valid credentials', async () => {
    const response = await authService.signIn({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(response.success).toBe(true);
    expect(response.user?.email).toBe('test@example.com');
  });

  it('rejects invalid credentials', async () => {
    const response = await authService.signIn({
      email: 'wrong@example.com',
      password: 'wrong',
    });

    expect(response.success).toBe(false);
    expect(response.error).toBeTruthy();
  });

  it('creates a new account', async () => {
    const response = await authService.createPassword({
      email: 'newuser@example.com',
      password: 'password123',
    });

    expect(response.success).toBe(true);
    expect(response.user?.email).toBe('newuser@example.com');
  });

  it('isAuthenticated returns true after login', async () => {
    await authService.signIn({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(authService.isAuthenticated()).toBe(true);
  });

  it('logout clears session', async () => {
    await authService.signIn({
      email: 'test@example.com',
      password: 'password123',
    });

    authService.logout();
    expect(authService.isAuthenticated()).toBe(false);
  });
});
