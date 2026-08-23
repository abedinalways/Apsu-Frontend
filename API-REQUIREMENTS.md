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
- Successful responses: `{ success: boolean, data?: any, error?: string }`
- Error responses: HTTP 4xx/5xx with JSON body `{ message: string }`
- Auth header is sent automatically via cookie; no manual `Authorization` header in services.

---

## Auth API

**Service file:** `lib/services/auth/index.ts`  
**Switching:** `NEXT_PUBLIC_AUTH_MODE=api`

### POST /api/auth/signin

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response 200:
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name"
  },
  "token": "jwt_or_session_token"
}
```

Response 401:
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

---

### POST /api/auth/register

Request:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

Response 201:
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name"
  },
  "token": "jwt_or_session_token"
}
```

---

### POST /api/auth/create-password

Used after email verification in the registration flow.

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response 200:
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "token": "jwt_or_session_token"
}
```

---

### POST /api/auth/forgot-password

Request:
```json
{
  "email": "user@example.com"
}
```

Response 200:
```json
{
  "success": true,
  "message": "Password reset code sent"
}
```

---

### POST /api/auth/reset-password

Request:
```json
{
  "email": "user@example.com",
  "code": "123456",
  "newPassword": "newpassword123"
}
```

Response 200:
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

---

### GET /api/auth/verify

Headers: Cookie-based session only.

Response 200:
```json
{
  "valid": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

Response 401:
```json
{
  "valid": false,
  "error": "Unauthorized"
}
```

---

### POST /api/auth/logout

Response 200:
```json
{
  "success": true
}
```

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

Request body: Full `FormData` from the multi-step form.

Response 200:
```json
{
  "success": true,
  "orderId": "ORD-002",
  "redirectUrl": "/assessment/payment-success"
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
