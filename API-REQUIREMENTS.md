# API Requirements

This document defines the backend API contract expected by the frontend. All endpoints below are currently unimplemented in the frontend services and throw `"not implemented"` when `NEXT_PUBLIC_*_MODE=api` is set.

---

## Environment Variables

| Variable | Purpose | Default |
|----------|---------|--------|
| `NEXT_PUBLIC_API_ENDPOINT` | Base API URL | `http://127.0.0.1:4000` |
| `NEXT_PUBLIC_AUTH_MODE` | `demo` or `api` | `demo` |
| `NEXT_PUBLIC_BLOG_MODE` | `mock` or `api` | `mock` |
| `NEXT_PUBLIC_PROFILE_MODE` | `mock` or `api` | `mock` |

Set these in `.env.local` for local development.

---

## Shared Conventions

- Base URL: `${NEXT_PUBLIC_API_ENDPOINT}/api`
- All requests use `credentials: "include"` (cookies).
- Session model: the frontend stores the access token in a cookie
  (`apsu_auth_token`, via `lib/session.ts`) and `lib/Fetch.ts` attaches it
  automatically as an `Authorization: Bearer <token>` header. Services must
  never read/write cookies (or headers) directly — route everything through
  `lib/session.ts`.
- Successful responses: `{ success: boolean, data?: any, error?: string }`
- Error responses: HTTP 4xx/5xx with JSON body `{ message: string }`

---

## Authentication

The backend owns all authentication and session handling. This section records, for
each login and registration screen, the operation it needs the backend to perform —
whether it reads or writes, and the data the UI actually holds. Route and wire-format
details are deliberately left to backend design and are not specified here.

**Service file:** `lib/services/auth/index.ts`  
**Switch:** `NEXT_PUBLIC_AUTH_MODE=api`  
**Session:** issued and validated by the backend. The access token is stored by
the frontend in the session cookie through `lib/session.ts`, then attached to
each request as a `Bearer` header by `lib/Fetch.ts`. All session reads and
writes must go through `lib/session.ts`.

### 1. Sign in

- **Screen:** Login → Sign In (`containers/login/SignInForm.tsx`)
- **Type:** write — exchanges credentials for a session
- **Fields sent:** `email`, `password`
- **Fields returned:**
  - `user.id` — string, required
  - `user.email` — string, required
  - `user.name` — string, nullable
  - `user.avatar` — string (URL), nullable
- **Failure cases to distinguish:**
  - Invalid credentials → "Incorrect email or password"
  - Account suspended or disabled → distinct, actionable message
  - Validation failure (malformed email) → field-level message
  - Unexpected server error → generic message

### 2. Register (new account)

- **Screen:** Registration → Create Password (`containers/login/CreatePasswordForm.tsx`)
- **Type:** write — creates an account and starts a session
- **Fields sent:** `email`, `password`, `name` (nullable)
- **Fields returned:** same `user` shape as sign in
- **Failure cases to distinguish:**
  - Email already registered → "An account with this email already exists"
  - Password too weak → specific message
  - Validation failure → field-level message
  - Unexpected server error → generic message

### 3. Forgot password (request reset code)

- **Screen:** Login → Forgot Password (`components/login/ForgotPasswordForm.tsx`)
- **Type:** write — requests a one-time reset code sent by email
- **Fields sent:** `email`
- **Fields returned:** none required by the UI beyond success
- **Failure cases to distinguish:**
  - Email not found → generic confirmation (avoid account enumeration)
  - Email service down → distinct message
  - Unexpected server error → generic message

### 4. Verify reset code

- **Screen:** Login → Enter Code (`components/login/EnterCodeForm.tsx`)
- **Type:** write — confirms the emailed code before allowing a new password
- **Fields sent:** `email`, `code`
- **Fields returned:** a flag permitting the "set new password" step to proceed
- **Failure cases to distinguish:**
  - Invalid or expired code → retry with remaining attempts
  - Too many failed attempts → lock / offer resend
  - Unexpected server error → generic message

### 5. Reset password (set new password)

- **Screen:** Login → Set New Password (`containers/login/SetNewPasswordForm.tsx`)
- **Type:** write — sets a new password using the verified code
- **Fields sent:** `email`, `code`, `newPassword`
- **Fields returned:** none required by the UI beyond success
- **Failure cases to distinguish:**
  - Code expired / already used → return to Enter Code
  - Password too weak → specific message
  - Validation failure → field-level message

### 6. Get current user (session check)

- **Screen:** Profile, Dashboard, Header/Navbar (`hooks/useCurrentUser.ts`)
- **Type:** read — returns the signed-in user for the current session
- **Fields sent:** none — the session cookie identifies the user
- **Fields returned:** `user` shape (id, email, name, avatar) as in sign in
- **Failure cases to distinguish:**
  - Unauthenticated → treat as signed out, redirect to Login
  - Session expired → treat as signed out
  - Unexpected server error → generic message

### 7. Sign out

- **Screen:** Header/Navbar (`containers/reusable/Header.tsx`)
- **Type:** write — ends the current session
- **Fields sent:** none
- **Fields returned:** none required by the UI beyond success
- **Failure cases:** ending the session server-side is best-effort; the UI clears
  local auth state regardless

---

## Blog API

**Service file:** `lib/services/blog.service.ts`  
**Switching:** `NEXT_PUBLIC_BLOG_MODE=api`

### GET /api/blogs

Response 200:
```json
{
  "blogs": [
    {
      "id": 1,
      "slug": "semaglutide-vs-tirzepatide",
      "title": "Semaglutide vs. Tirzepatide...",
      "category": "Weight Loss",
      "date": "21 Jan 2026",
      "readTime": "9 min read",
      "author": "Apsu Health",
      "image": "/images/blog/img29.jpg",
      "heroImage": "/images/blog/img29.jpg",
      "description": "...",
      "href": "/blog/semaglutide-vs-tirzepatide",
      "summary": [],
      "content": [],
      "sources": []
    }
  ]
}
```

---

### GET /api/blogs/:slug

Response 200:
```json
{
  "blog": {
    "id": 1,
    "slug": "semaglutide-vs-tirzepatide",
    "title": "Semaglutide vs. Tirzepatide...",
    "category": "Weight Loss",
    "date": "21 Jan 2026",
    "readTime": "9 min read",
    "author": "Apsu Health",
    "image": "/images/blog/img29.jpg",
    "heroImage": "/images/blog/img29.jpg",
    "description": "...",
    "href": "/blog/semaglutide-vs-tirzepatide",
    "summary": [
      {
        "title": "What is semaglutide?",
        "description": "..."
      }
    ],
    "content": [
      {
        "id": "section-1",
        "type": "heading",
        "text": "Introduction"
      },
      {
        "id": "section-2",
        "type": "paragraph",
        "text": "Body text..."
      },
      {
        "id": "section-3",
        "type": "richText",
        "text": "Text with **bold** inline formatting"
      },
      {
        "id": "section-4",
        "type": "highlight",
        "text": "CTA text",
        "cta": {
          "title": "Start Your Journey",
          "description": "...",
          "buttonText": "Get Started",
          "buttonHref": "/assessment"
        }
      },
      {
        "id": "section-5",
        "type": "bullet",
        "items": ["Item 1", "Item 2"]
      },
      {
        "id": "section-6",
        "type": "table",
        "headers": ["Feature", "Semaglutide", "Tirzepatide"],
        "rows": [
          ["Mechanism", "GLP-1", "GIP/GLP-1"]
        ]
      },
      {
        "id": "section-7",
        "type": "disclaimer",
        "text": "Disclaimer text..."
      }
    ],
    "sources": [
      {
        "title": "Source Title",
        "url": "https://..."
      }
    ]
  }
}
```

---

### GET /api/blogs/:slug/related?limit=3

Response 200:
```json
{
  "blogs": [ /* same shape as blog list item */ ]
}
```

---

## Profile API

**Service file:** `lib/services/profile.service.ts`  
**Switching:** `NEXT_PUBLIC_PROFILE_MODE=api`

### GET /api/profile

Response 200:
```json
{
  "treatment": {
    "id": "1",
    "title": "Weight Loss Program",
    "planDuration": "12 months plan",
    "status": "Active",
    "medication": "Semaglutide 0.5mg",
    "startDate": "Jan 15, 2025",
    "duration": "6 Months",
    "renewalDate": "Jul 15, 2025",
    "progressPercentage": 33
  },
  "orders": [
    {
      "id": "ORD-001",
      "status": "Shipped",
      "trackingNumber": "9400 1111 2222",
      "estimatedDelivery": "Jul 30, 2026",
      "items": [
        {
          "name": "Semaglutide 0.5mg",
          "quantity": 1,
          "price": "$200"
        }
      ]
    }
  ],
  "prescriptions": [
    {
      "id": "RX-001",
      "medication": "Semaglutide 0.5mg",
      "dosage": "0.5mg weekly",
      "prescribedBy": "Dr. Smith",
      "dateIssued": "Jan 15, 2025",
      "status": "Active"
    }
  ]
}
```

---

### GET /api/profile/treatment

Response 200:
```json
{
  "treatment": {
    "id": "1",
    "title": "Weight Loss Program",
    "planDuration": "12 months plan",
    "status": "Active",
    "medication": "Semaglutide 0.5mg",
    "startDate": "Jan 15, 2025",
    "duration": "6 Months",
    "renewalDate": "Jul 15, 2025",
    "progressPercentage": 33
  }
}
```

---

### GET /api/profile/orders

Response 200:
```json
{
  "orders": [
    {
      "id": "ORD-001",
      "status": "Shipped",
      "trackingNumber": "9400 1111 2222",
      "estimatedDelivery": "Jul 30, 2026",
      "items": [
        {
          "name": "Semaglutide 0.5mg",
          "quantity": 1,
          "price": "$200"
        }
      ]
    }
  ]
}
```

---

### GET /api/profile/prescriptions

Response 200:
```json
{
  "prescriptions": [
    {
      "id": "RX-001",
      "medication": "Semaglutide 0.5mg",
      "dosage": "0.5mg weekly",
      "prescribedBy": "Dr. Smith",
      "dateIssued": "Jan 15, 2025",
      "status": "Active"
    }
  ]
}
```

---

### PUT /api/profile

Request body: `ProfileFormValues` (see `components/profile/type.ts`)

Response 200:
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

---

## Contact API

**Service file:** `components/contact/ContactForm.tsx`  
**Current status:** Not connected to backend. `toast.error('Contact form is not connected to a backend yet.')`

### POST /api/contact

Request:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "General inquiry",
  "message": "Hello, I have a question..."
}
```

Response 200:
```json
{
  "success": true,
  "message": "Thank you for contacting us. We will get back to you soon."
}
```

---

## Assessment / Checkout API

**Service file:** `containers/Assessment/*/MultiStepForm.tsx`  
**Current status:** `handlePlaceOrder` simulates a 1.2s delay then redirects to `/assessment/payment-success`.

### POST /api/assessment/submit

Request body: structured JSON with the form fields (see `containers/Assessment/*/MultiStepForm.tsx` for the exact field names).

Response 200:
```json
{
  "success": true,
  "orderId": "ORD-002"
}
```

Response 400:
```json
{
  "success": false,
  "error": "Validation failed",
  "fields": {
    "cardNumber": "Invalid card number"
  }
}
```

---

## Error Handling Policy

- Network failures: `Fetch.get/post/put/patch/delete` throw `Error(message)`.
- Service layer: catches and re-throws with `"not implemented"` when in `api` mode but backend is missing.
- UI layer: catches service errors and shows `toast.error(...)` or inline error state.

Do **not** swallow errors silently. Always surface to the user via toast or inline message.
