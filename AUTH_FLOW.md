# Authentication Flow Documentation

## Overview
This document describes the authentication flow implementation and how to integrate it with a backend API in the future.

## Current Implementation (Demo Mode)

### Flow Diagram
```
┌─────────────────┐
│  Email Verify   │ (Step 1: User enters email)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Create Password │ (Step 2: User sets password)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Auto Login +   │ (Demo: Auto-login after password creation)
│  Redirect to    │
│   /profile      │
└─────────────────┘

Alternative Flow (Existing User):
┌─────────────────┐
│  Sign In        │ (Email + Password)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Redirect to    │
│   /profile      │
└─────────────────┘

Forgot Password Flow:
┌─────────────────┐
│  Forgot PW      │ (Enter email)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Enter Code     │ (6-digit code - Demo: 123456)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Set New PW     │ (Create new password)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Back to Sign   │
│     In          │
└─────────────────┘
```

## File Structure

```
├── lib/services/
│   └── auth.service.ts          # Auth service with demo implementations
├── contexts/
│   └── AuthContext.tsx          # React context for auth state management
├── middleware.ts                # Route protection middleware
├── components/login/
│   ├── LoginPageClient.tsx      # Main login page orchestrator
│   ├── EmailVerificationForm.tsx
│   ├── CreatePasswordForm.tsx
│   ├── SignInForm.tsx
│   ├── ForgotPasswordForm.tsx
│   ├── EnterCodeForm.tsx
│   └── SetNewPasswordForm.tsx
└── app/
    ├── layout.tsx               # Root layout with AuthProvider
    ├── (auth)/login/page.tsx    # Login page
    └── (user)/profile/          # Protected profile page
```

## Key Features

### 1. **Auth Service** (`lib/services/auth.service.ts`)
- Centralized authentication logic
- Demo implementations with localStorage
- Easy to replace with real API calls

**Methods:**
- `createPassword(email, password)` - Create new account
- `signIn(email, password)` - Sign in existing user
- `forgotPassword(email)` - Request password reset
- `resetPassword(email, code, newPassword)` - Reset password
- `getCurrentUser()` - Get current user
- `isAuthenticated()` - Check auth status
- `logout()` - Logout user

### 2. **Auth Context** (`contexts/AuthContext.tsx`)
- Global auth state management
- Provides `useAuth()` hook for components
- Handles loading states and errors

**Usage:**
```tsx
import { useAuth } from '@/contexts/AuthContext';

const { user, login, logout, isLoading } = useAuth();
```

### 3. **Middleware** (`middleware.ts`)
- Protects routes like `/profile` and `/assessment`
- Redirects unauthenticated users to `/login`
- Redirects authenticated users away from `/login`

### 4. **Form Components**
All forms include:
- Loading states during submission
- Toast notifications for success/error
- Form validation with Zod
- Disabled buttons during submission

## Demo Credentials

### Test the Flow:
1. **New User:**
   - Enter any email (e.g., `test@example.com`)
   - Create password (min 8 characters)
   - Auto-login and redirect to `/profile`

2. **Existing User:**
   - Use same email and password
   - Sign in successfully

3. **Forgot Password:**
   - Enter email
   - Use code: `123456`
   - Set new password
   - Redirect to sign in

## Integration with Backend API

### Step 1: Update Auth Service

Replace demo implementations with real API calls:

```typescript
// lib/services/auth.service.ts

async createPassword(data: CreatePasswordData): Promise<AuthResponse> {
  // Replace this:
  // await this.delay(1000);
  
  // With this:
  const response = await fetch(`${this.baseUrl}/auth/create-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  return result;
}

async signIn(data: SignInData): Promise<AuthResponse> {
  // Replace demo logic with:
  const response = await fetch(`${this.baseUrl}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  
  if (result.success && result.token) {
    this.setToken(result.token);
  }
  
  return result;
}
```

### Step 2: Update Token Storage

Replace localStorage with HTTP-only cookies for security:

```typescript
// In middleware.ts
const token = request.cookies.get('auth_token')?.value;

// In auth.service.ts
private setToken(token: string): void {
  // Use cookies instead of localStorage
  document.cookie = `auth_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
}
```

### Step 3: Update Middleware

Add backend token validation:

```typescript
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  
  if (token && isProtectedRoute) {
    // Verify token with backend
    const response = await fetch(`${baseUrl}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (!response.ok) {
      // Token invalid, redirect to login
      return NextResponse.redirect(loginUrl);
    }
  }
}
```

### Step 4: Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

## API Endpoints (Expected)

### POST /api/auth/create-password
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "123",
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}
```

### POST /api/auth/signin
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "123",
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}
```

### POST /api/auth/forgot-password
**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true
}
```

### POST /api/auth/reset-password
**Request:**
```json
{
  "email": "user@example.com",
  "code": "123456",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "success": true
}
```

### GET /api/auth/verify
**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "valid": true,
  "user": {
    "id": "123",
    "email": "user@example.com"
  }
}
```

## Security Considerations

### Current (Demo):
- ⚠️ Passwords stored in localStorage (insecure)
- ⚠️ Simple base64 encoding (not real hashing)
- ⚠️ No HTTPS enforcement
- ⚠️ Demo token validation

### Production:
- ✅ Use HTTP-only cookies for tokens
- ✅ Backend password hashing (bcrypt/argon2)
- ✅ HTTPS only
- ✅ JWT with proper signing and expiration
- ✅ CSRF protection
- ✅ Rate limiting on auth endpoints
- ✅ Email verification for new accounts
- ✅ Password strength requirements

## Testing

### Manual Testing:
1. Navigate to `/login`
2. Test new user flow:
   - Enter email
   - Create password
   - Verify redirect to `/profile`
3. Test sign in:
   - Use same credentials
   - Verify successful login
4. Test forgot password:
   - Enter email
   - Use code `123456`
   - Reset password
   - Sign in with new password
5. Test route protection:
   - Logout (clear localStorage)
   - Try accessing `/profile`
   - Verify redirect to `/login`

### Automated Testing:
```typescript
// Example test structure
describe('Authentication Flow', () => {
  it('should create new account and login', async () => {
    // Test create password
    // Test auto-login
    // Test redirect
  });
  
  it('should sign in existing user', async () => {
    // Test sign in
    // Test redirect
  });
  
  it('should protect routes', async () => {
    // Test middleware
    // Test redirects
  });
});
```

## Troubleshooting

### Issue: Middleware not working
- Ensure middleware.ts is in the root directory
- Check matcher pattern includes your routes
- Verify cookies are being set correctly

### Issue: Auth state not persisting
- Check localStorage/cookies on page refresh
- Verify AuthProvider is wrapping the app
- Check token expiration

### Issue: Redirect loops
- Ensure public routes are correctly defined
- Check middleware logic for edge cases
- Verify token validation isn't failing

## Next Steps

1. **Backend Integration:**
   - Set up API endpoints
   - Implement JWT authentication
   - Add database for user storage

2. **Security Enhancements:**
   - Add email verification
   - Implement password reset via email
   - Add 2FA option
   - Rate limiting

3. **UX Improvements:**
   - Add "Remember me" option
   - Social login (Google, Apple)
   - Password strength indicator
   - Biometric authentication

4. **Testing:**
   - Unit tests for auth service
   - Integration tests for forms
   - E2E tests for complete flow