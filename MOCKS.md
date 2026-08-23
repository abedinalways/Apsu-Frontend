# Mocks Documentation

This project uses a **mock-first** approach for data-fetching features. Each feature area has a dedicated service file that can switch between mock data and real API calls using a single environment variable.

---

## Switching Strategy

| Feature | Env Variable | Default | How it works |
|---------|-------------|---------|--------------|
| Authentication | `NEXT_PUBLIC_AUTH_MODE` | `demo` | `lib/services/auth/index.ts` exports either `demoAuthService` or `apiAuthService` |
| Blog | `NEXT_PUBLIC_BLOG_MODE` | `mock` | `lib/services/blog.service.ts` returns local data or throws `"not implemented"` |
| Profile | `NEXT_PUBLIC_PROFILE_MODE` | `mock` | `lib/services/profile.service.ts` returns local data or throws `"not implemented"` |

### How to switch

```bash
# Use demo/mock data
npm run dev

# Use real API (requires backend running)
NEXT_PUBLIC_AUTH_MODE=api NEXT_PUBLIC_BLOG_MODE=api NEXT_PUBLIC_PROFILE_MODE=api npm run dev
```

Or set them in `.env.local`:
```env
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
NEXT_PUBLIC_AUTH_MODE=api
NEXT_PUBLIC_BLOG_MODE=api
NEXT_PUBLIC_PROFILE_MODE=api
```

---

## Auth Mocks

**File:** `lib/services/auth/demo.auth.ts`

### Current User
```ts
{
  id: 'demo-user-1',
  email: 'demo@apsu.com',
  name: 'Demo User'
}
```

### Behavior
- `signIn` / `createPassword`: delays 800ms, returns `{ success: true, user, token: 'demo-token' }`
- `forgotPassword`: delays 600ms, returns `{ success: true }`
- `resetPassword`: delays 600ms, returns `{ success: true }`
- `getCurrentUser`: reads from cookie `apsu_session` (base64-encoded JSON)
- `isAuthenticated`: checks if cookie exists
- `logout`: clears cookie

### Demo credentials
- Any email + password (min 8 chars) works for sign-up/sign-in.
- Forgot password code: `123456`

---

## Blog Mocks

**Files:** `lib/data/blogsData.ts`, `lib/data/blogDetails.ts`, `lib/services/blog.service.ts`

### Blogs listing
5 static blog entries in `lib/data/blogsData.ts`.

### Blog details
5 matching detail entries in `lib/data/blogDetails.ts` with:
- `slug`, `title`, `author`, `heroImage`
- `summary[]` — array of `{ title, description }`
- `content[]` — array of section objects:
  - `{ type: 'heading', text: string }`
  - `{ type: 'paragraph', text: string }`
  - `{ type: 'richText', text: string }` — supports `**bold**` inline syntax
  - `{ type: 'highlight', text: string, cta?: { title, description, buttonText, buttonHref } }`
  - `{ type: 'bullet', items: string[] }`
  - `{ type: 'table', headers: string[], rows: string[][] }`
  - `{ type: 'disclaimer', text: string }`
- `sources[]` — array of `{ title, url }`

### When to replace
Replace `MOCK_BLOGS` construction in `blog.service.ts` with a real `fetch('/api/blogs')` call. The shape returned must match the `Blog` type in `types/blog.ts`.

---

## Profile Mocks

**File:** `lib/services/profile.service.ts`

### Treatment
```ts
{
  id: '1',
  title: 'Weight Loss Program',
  planDuration: '12 months plan',
  status: 'Active',
  medication: 'Semaglutide 0.5mg',
  startDate: 'Jan 15, 2025',
  duration: '6 Months',
  renewalDate: 'Jul 15, 2025',
  progressPercentage: 33
}
```

### Orders
```ts
[
  {
    id: 'ORD-001',
    status: 'Shipped',
    trackingNumber: '9400 1111 2222',
    estimatedDelivery: 'Jul 30, 2026',
    items: [
      { name: 'Semaglutide 0.5mg', quantity: 1, price: '$200' }
    ]
  }
]
```

### Prescriptions
```ts
[
  {
    id: 'RX-001',
    medication: 'Semaglutide 0.5mg',
    dosage: '0.5mg weekly',
    prescribedBy: 'Dr. Smith',
    dateIssued: 'Jan 15, 2025',
    status: 'Active'
  }
]
```

### When to replace
Replace each `MOCK_*` constant and the `USE_MOCK` guard with real `fetch('/api/profile/...')` calls. Keep the same return types.

---

## Contact Form

**File:** `components/contact/ContactForm.tsx`

Currently shows `toast.error('Contact form is not connected to a backend yet.')`. No mock data. Replace the `onSubmit` handler body with a real `Fetch.post('/api/contact', values)` call when the backend endpoint is ready.

---

## Assessment / Checkout Form

**File:** `containers/Assessment/*/MultiStepForm.tsx`

`handlePlaceOrder` currently:
1. Validates payment fields
2. Simulates 1.2s delay
3. Redirects to `/assessment/payment-success`

Replace the simulated delay with `Fetch.post('/api/assessment/submit', form.getValues())` and redirect based on the response.

---

## Adding a New Mock

1. Create static data in `lib/data/` or inline in the service file.
2. Guard with `const USE_MOCK = (process.env.NEXT_PUBLIC_<FEATURE>_MODE || 'mock') === 'mock';`
3. Return mock data when `USE_MOCK` is true.
4. Throw `new Error('<Method> not implemented')` when `USE_MOCK` is false.
5. Document the endpoint contract in `API-REQUIREMENTS.md`.

---

## Rules

- **Never invent endpoints.** If the backend does not exist yet, use mock mode and throw a clear error in api mode.
- **Never fake success.** Do not simulate a successful response when the backend call fails.
- **Keep types centralized.** Use shared interfaces from `lib/services/*/types.ts` so mock and real implementations stay in sync.
