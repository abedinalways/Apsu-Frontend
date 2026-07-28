/**
 * Authentication Service
 *
 * Simplified demo auth flow. Stores user data directly with no complex token manipulation.
 * To integrate with backend, replace the implementations with API calls.
 */

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface CreatePasswordData {
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  email: string;
  code: string;
  newPassword: string;
}

class AuthService {
  private storageKey = 'apsu_auth_token';
  private userKey = 'apsu_user';
  private usersKey = 'apsu_user_data';

  async createPassword(data: CreatePasswordData): Promise<AuthResponse> {
    await this.delay(1000);

    const newUser: User = {
      id: this.generateId(),
      email: data.email,
    };

    // Save user credentials for future sign-in
    this.saveUserCredentials(data.email, newUser, data.password);

    // Auto-login
    this.setSession(newUser);

    return { success: true, user: newUser };
  }

  async signIn(data: SignInData): Promise<AuthResponse> {
    await this.delay(800);

    const stored = this.getUserCredentials(data.email);
    if (!stored) {
      return {
        success: false,
        error: 'No account found with this email. Please check your email or create a new account.',
      };
    }

    // Compare passwords using simple encoding
    if (btoa(data.password) !== stored.passwordHash) {
      return {
        success: false,
        error: 'Invalid password. Please try again.',
      };
    }

    // Set session
    this.setSession(stored.user);

    return { success: true, user: stored.user };
  }

  async forgotPassword(data: ForgotPasswordData): Promise<AuthResponse> {
    await this.delay(800);
    return { success: true };
  }

  async resetPassword(data: ResetPasswordData): Promise<AuthResponse> {
    await this.delay(1000);

    if (data.code !== '123456') {
      return { success: false, error: 'Invalid or expired code. Please try again.' };
    }

    const currentUser = this.getCurrentUser();
    if (currentUser) {
      this.saveUserCredentials(currentUser.email, currentUser, data.newPassword);
    }

    return { success: true };
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;

    const userData = localStorage.getItem(this.userKey);
    if (!userData) return null;

    try {
      return JSON.parse(userData) as User;
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.usersKey);
    document.cookie = `${this.storageKey}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
  }

  doesUserExist(email: string): boolean {
    if (typeof window === 'undefined') return false;
    const data = localStorage.getItem(this.usersKey);
    if (!data) return false;

    try {
      const users = JSON.parse(data);
      return !!users[email];
    } catch {
      return false;
    }
  }

  // --- Private helpers ---

  private setSession(user: User): void {
    // Store user data directly (simple and reliable)
    localStorage.setItem(this.userKey, JSON.stringify(user));
    localStorage.setItem(this.storageKey, 'authenticated');

    // Set cookie for middleware
    const expires = new Date();
    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `${this.storageKey}=authenticated;expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  private saveUserCredentials(email: string, user: User, password: string): void {
    if (typeof window === 'undefined') return;

    const existingData = localStorage.getItem(this.usersKey);
    let users: Record<string, any> = {};

    try {
      if (existingData) {
        users = JSON.parse(existingData);
        // Handle old format migration
        if (users.email) {
          const oldEmail = users.email;
          users = {};
          if (oldEmail === email) {
            users[email] = { user, passwordHash: users.passwordHash };
          }
        }
      }
    } catch {
      users = {};
    }

    users[email] = { user, passwordHash: btoa(password) };
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  private getUserCredentials(email: string): { user: User; passwordHash: string } | null {
    if (typeof window === 'undefined') return null;

    const data = localStorage.getItem(this.usersKey);
    if (!data) return null;

    try {
      const parsed = JSON.parse(data);
      // Old flat format
      if (parsed.email && parsed.email === email) {
        return parsed as { user: User; passwordHash: string };
      }
      // New keyed format
      return parsed[email] || null;
    } catch {
      return null;
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const authService = new AuthService();