# Apsu Frontend

Next.js frontend for the Apsu health platform. Supports weight loss, birth control, and sleep assessment flows, blog 

content, and user profile management.

---

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
