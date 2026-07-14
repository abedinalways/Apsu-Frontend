/**
 * Authentication Service
 * 
 * This service provides a demo authentication flow that can be easily
 * integrated with a real backend API in the future.
 * 
 * To integrate with backend:
 * 1. Replace the demo implementations with actual API calls
 * 2. Update the API endpoints in the configuration
 * 3. Ensure the response format matches the expected types
 */

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
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
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
  private storageKey = 'apsu_auth_token';

  /**
   * Demo: Create password for new user
   * In production, this will call: POST /api/auth/create-password
   */
  async createPassword(data: CreatePasswordData): Promise<AuthResponse> {
    // Demo: Simulate API delay
    await this.delay(1000);

    // Demo: Create user (replace with actual API call)
    const demoUser: User = {
      id: this.generateId(),
      email: data.email,
    };

    // Demo: Auto-login after password creation
    const token = this.generateToken(demoUser);
    this.setToken(token);
    this.setUser(demoUser);

    return {
      success: true,
      user: demoUser,
      token,
    };
  }

  /**
   * Demo: Sign in user
   * In production, this will call: POST /api/auth/signin
   */
  async signIn(data: SignInData): Promise<AuthResponse> {
    // Demo: Simulate API delay
    await this.delay(800);

    // Demo: Check if user exists (in production, this is done by backend)
    const storedUser = this.getStoredUser(data.email);
    
    if (!storedUser) {
      return {
        success: false,
        error: 'No account found with this email. Please check your email or create a new account.',
      };
    }

    // Demo: Validate password (in production, backend handles this)
    const isValid = this.validatePassword(data.password, storedUser.passwordHash);
    
    if (!isValid) {
      return {
        success: false,
        error: 'Invalid password. Please try again.',
      };
    }

    const token = this.generateToken(storedUser.user);
    this.setToken(token);
    this.setUser(storedUser.user);

    return {
      success: true,
      user: storedUser.user,
      token,
    };
  }

  /**
   * Demo: Request password reset
   * In production, this will call: POST /api/auth/forgot-password
   */
  async forgotPassword(data: ForgotPasswordData): Promise<AuthResponse> {
    await this.delay(800);

    // Demo: Always return success (in production, check if email exists)
    return {
      success: true,
    };
  }

  /**
   * Demo: Reset password with code
   * In production, this will call: POST /api/auth/reset-password
   */
  async resetPassword(data: ResetPasswordData): Promise<AuthResponse> {
    await this.delay(1000);

    // Demo: Validate code (in production, backend validates)
    if (data.code !== '123456') {
      return {
        success: false,
        error: 'Invalid or expired code. Please try again.',
      };
    }

    // Demo: Update password
    const user = this.getCurrentUser();
    if (user) {
      this.storeUser({ ...user, passwordHash: this.hashPassword(data.newPassword) });
    }

    return {
      success: true,
    };
  }

  /**
   * Get current authenticated user
   */
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.user;
    } catch {
      return null;
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Logout user
   */
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.storageKey);
      localStorage.removeItem('apsu_user');
      localStorage.removeItem('apsu_user_data');
      
      // Clear cookie
      document.cookie = `${this.storageKey}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
    }
  }

  // Helper methods (replace with actual implementation in production)

  private setToken(token: string): void {
    if (typeof window !== 'undefined') {
      // Store in localStorage for client-side access
      localStorage.setItem(this.storageKey, token);
      
      // IMPORTANT: Also store in cookie for middleware access
      // The middleware runs on the server and can only read cookies
      const expires = new Date();
      expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days
      document.cookie = `${this.storageKey}=${token};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }
  }

  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(this.storageKey);
  }

  private setUser(user: User): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('apsu_user', JSON.stringify(user));
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private generateToken(user: User): string {
    // Demo: Simple JWT-like token (use proper JWT in production)
    const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ 
      user, 
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    }));
    return `${header}.${payload}.`;
  }

  private hashPassword(password: string): string {
    // Demo: Simple hash (use bcrypt or similar in production)
    return btoa(password);
  }

  private validatePassword(password: string, hash: string): boolean {
    return btoa(password) === hash;
  }

  private storeUser(user: any): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('apsu_user_data', JSON.stringify(user));
  }

  private getStoredUser(email: string): { user: User; passwordHash: string } | null {
    if (typeof window === 'undefined') return null;
    
    const data = localStorage.getItem('apsu_user_data');
    if (!data) return null;

    const users = JSON.parse(data);
    return users[email] || null;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const authService = new AuthService();