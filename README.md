# Apsu Frontend

Next.js frontend for the Apsu health platform. Supports weight loss, birth control, and sleep assessment flows, blog 

content, and user profile management.
--
## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler (noEmit) |

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_ENDPOINT=http://127.0.0.1:4000
NEXT_PUBLIC_AUTH_MODE=demo
NEXT_PUBLIC_BLOG_MODE=mock
NEXT_PUBLIC_PROFILE_MODE=mock
```

| Variable | Values | Default | Purpose |
|----------|--------|---------|---------|
| `NEXT_PUBLIC_API_ENDPOINT` | URL | `http://127.0.0.1:4000` | Backend base URL |
| `NEXT_PUBLIC_AUTH_MODE` | `demo` / `api` | `demo` | Switch auth between mock and real backend |
| `NEXT_PUBLIC_BLOG_MODE` | `mock` / `api` | `mock` | Switch blog data between static and API |
| `NEXT_PUBLIC_PROFILE_MODE` | `mock` / `api` | `mock` | Switch profile data between static and API |

---

## Project Structure

```
app/                          # Next.js App Router pages
├── (Front-End)/              # Public pages (blog, contact, faq, etc.)
├── (auth)/                   # Login / registration flows
├── (admin)/                  # Admin dashboard
├── (user)/                   # Protected user pages (profile)
components/
├── blog/                     # Blog list components
├── blogDetails/              # Blog detail page components
├── contact/                  # Contact form
├── profile/                  # Profile form sections
├── Assessment/               # Assessment step components
│   ├── form/                 # Shared assessment steps
│   ├── WeightLoss/           # Weight-loss-specific steps
│   ├── BirthControl/         # Birth-control-specific steps
│   └── Sleep/                # Sleep-specific steps
├── reusable/                 # Shared UI components (InputField, buttons)
└── ui/                       # shadcn/ui components
containers/
├── login/                    # Login page container + forms
├── user-profile/             # Profile page client logic
└── Assessment/               # Multi-step form containers
lib/
├── services/                 # API services (auth, blog, profile)
│   └── auth/                 # Auth service with demo/api switching
├── validations/              # Zod schemas
├── data/                     # Static data (blogs)
├── Fetch.ts                  # Centralized HTTP client
└── session.ts                # Session management
config/
└── app.config.ts             # App configuration factory
```

---

## Architecture Notes

### Auth Switching
Set `NEXT_PUBLIC_AUTH_MODE=api` to use the real backend. The auth service lives in `lib/services/auth/index.ts` and exports either `demoAuthService` or `apiAuthService` based on this env var. Both implement `IAuthService`.

### Blog Switching
Set `NEXT_PUBLIC_BLOG_MODE=api` to use the real backend. Blog data is currently static in `lib/data/`.

### Profile Switching
Set `NEXT_PUBLIC_PROFILE_MODE=api` to use the real backend. Profile data is currently mocked in `lib/services/profile.service.ts`.

### HTTP Client
All API calls go through `lib/Fetch.ts`, which wraps Axios with `credentials: "include"`. Do not pass `Authorization` headers in individual services; use cookie-based sessions.

### State Management
- Auth state: `contexts/AuthContext.tsx`
- Messaging: `contexts/MessagingContext.tsx`
- Form state: `react-hook-form` + `zod` per form
- Server state: fetched in page components or containers, passed down as props

---

## Backend Integration Guide

When the real backend is ready, the files below are the only ones that need to change. No component or page code should be touched — the service layer isolates backend wiring completely.

### Step 1: Set environment variables

Update `.env.local`:

```env
NEXT_PUBLIC_API_ENDPOINT=https://your-real-backend.com
NEXT_PUBLIC_AUTH_MODE=api
NEXT_PUBLIC_BLOG_MODE=api
NEXT_PUBLIC_PROFILE_MODE=api
NEXT_PUBLIC_USER_MODE=api
```

### Step 2: Implement the real API services

| File | What to do |
|------|-----------|
| `lib/services/auth/api.auth.ts` | Implement `signIn`, `register`, `createPassword`, `forgotPassword`, `resetPassword`, `getCurrentUser`, `logout` against real auth endpoints. Types are already defined in `lib/services/auth/types.ts`. |
| `lib/services/blog.service.ts` | Replace mock returns in `getBlogs`, `getBlogBySlug`, `getRelatedBlogs` with real API calls. |
| `lib/services/profile.service.ts` | Replace mock returns in `getProfile`, `getTreatment`, `getOrders`, `getPrescriptions` with real API calls. |
| `lib/services/user/api.ts` | Implement `getUsers` against the real users endpoint. Types are in `lib/services/user/types.ts`. |

### Step 3: Update the HTTP client if needed

| File | What to do |
|------|-----------|
| `lib/Fetch.ts` | Update `baseUrl` or timeout/retry config if the backend requires it. Auth headers are already attached via interceptor. |
| `lib/session.ts` | Update session storage mechanism if the backend uses a different token scheme. All session reads/writes flow through this module only. |

### Step 4: Remove or archive demo/mock files (optional)

Once real implementations are verified, the following mock files can be removed or kept for reference:

| File | Purpose |
|------|---------|
| `lib/services/auth/demo.auth.ts` | Demo auth implementation |
| `lib/services/user/demo.ts` | Demo user data |
| `lib/data/blogsData.ts` | Static blog listings |
| `lib/data/blogDetails.ts` | Static blog content |

### Files that do NOT need to change

All components, containers, pages, forms, and contexts remain untouched. They call the service layer through the same interface regardless of mock or real backend.

---

## Documentation

| File | Purpose |
|------|---------|
| `API-REQUIREMENTS.md` | Backend endpoint contracts, request/response shapes |
| `MOCKS.md` | How mock data works, how to switch modes |
| `STATES.md` | Loading/error/empty/submitting state coverage |
| `AUTH_FLOW.md` | Authentication flow diagrams and integration steps |

---

## Accessibility

- All form inputs have associated `<label>` elements or `aria-label`.
- Custom checkbox divs use `role="checkbox"` + `aria-checked` + `aria-labelledby`.
- Loading and error states are announced via semantic HTML.
- Run `npm run build` and `npm run typecheck` before shipping.

---

## Deployment

1. Set production env vars in your hosting platform (Vercel, etc.)
2. Ensure `NEXT_PUBLIC_AUTH_MODE=api`, `NEXT_PUBLIC_BLOG_MODE=api`, `NEXT_PUBLIC_PROFILE_MODE=api` are set for production.
3. Run `npm run build` to verify no build errors.
4. Run `npm run start` or deploy to Vercel.
