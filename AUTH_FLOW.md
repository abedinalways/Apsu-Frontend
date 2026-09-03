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
│   └── auth/
│       ├── index.ts            # Auth service entry point (demo/api switching)
│       ├── demo.auth.ts        # Demo implementation
│       ├── api.auth.ts         # Real API implementation (empty - ready for backend)
│       └── types.ts            # Shared types & IAuthService interface
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
    └── (auth)/login/page.tsx    # Login page
```

## Key Features

### 1. **Auth Service** (`lib/services/auth/index.ts`)
- Centralized authentication logic
- Switches between demo and real API via `NEXT_PUBLIC_AUTH_MODE`
- Demo implementation uses cookie-based session
- Easy to replace with real API calls

**Switching:**
```env
NEXT_PUBLIC_AUTH_MODE=demo   # default
NEXT_PUBLIC_AUTH_MODE=api    # use real backend
```

**Methods:**
- `signIn(payload)` - Sign in existing user
- `createPassword(payload)` - Create new account
- `register(payload)` - Register new user
- `forgotPassword(payload)` - Request password reset
- `resetPassword(payload)` - Reset password
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

### Step 1: Implement `lib/services/auth/api.auth.ts`

The `api.auth.ts` file already exists with stub implementations. Update each method to call the real backend endpoints once they are defined. Do not invent endpoint paths or request formats — use the contract agreed with the backend team.

```typescript
// lib/services/auth/api.auth.ts

async signIn(payload: SignInPayload): Promise<AuthResponse> {
  const response = await Fetch.post('<real-endpoint>', payload);
  return response;
}

async createPassword(payload: RegisterPayload): Promise<AuthResponse> {
  const response = await Fetch.post('<real-endpoint>', payload);
  return response;
}

// ... implement other methods similarly
```

Then set `NEXT_PUBLIC_AUTH_MODE=api` in `.env.local`.

### Step 2: Token Storage

The demo service already uses bearer token sessions via `lib/session.ts`. The real API should return an access token from the backend, which the frontend stores and attaches as an `Authorization: Bearer <token>` header via `lib/Fetch.ts`. Do not store tokens in localStorage.

### Step 3: Middleware

The existing middleware already reads cookies for route protection. Add backend token validation when the real API is ready by verifying the session cookie with the backend.

### Step 4: Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_API_ENDPOINT=https://your-api-domain.com
```

## Security Considerations

### Current (Demo):
- ⚠️ Demo mode uses in-memory/cookie session (not real password hashing)
- ⚠️ No HTTPS enforcement in development
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
    - Logout
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
- Check cookies on page refresh
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