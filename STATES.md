# States Documentation

This document catalogs all async and form states implemented in the frontend. Use it to verify coverage and understand how each screen handles loading, error, empty, submitting, and submit-failure states.

---

## Async Screens

### Blog List — `app/(Front-End)/blog/page.tsx`

| State | How handled |
|-------|------------|
| Loading | `loading.tsx` renders `BlogSkeleton` |
| Error | `error.tsx` renders retry UI; page-level `try/catch` re-throws to trigger it |
| Empty | If `blogs.length === 0`, renders centered "No blogs found" message |

### Blog Detail — `app/(Front-End)/blog/[slug]/page.tsx`

| State | How handled |
|-------|------------|
| Loading | `loading.tsx` renders `BlogDetailsSkeleton` |
| Error | `error.tsx` renders retry UI + back link; fetch wrapped in `try/catch` |
| Not Found | `notFound()` from `next/navigation` renders `_not-found.tsx` |
| Empty | Handled by `notFound()` when `blog` is null |

### Profile — `containers/user-profile/ProfileClient.tsx`

| State | How handled |
|-------|------------|
| Auth Loading | Suspense fallback in `app/(user)/profile/page.tsx` |
| Profile Loading | `treatmentState === 'loading'` renders spinner |
| Error | `treatmentState === 'error'` renders error message + Retry button |
| Empty — no treatment | `EmptyTabState` component with message |
| Empty — no orders | `EmptyTabState` component in Order Details tab |
| Empty — no prescriptions | `EmptyTabState` component in Prescriptions tab |

---

## Forms

### Sign In — `containers/login/SignInForm.tsx`

| State | How handled |
|-------|------------|
| Submitting | `isSubmitting` disables button, shows "Signing In..." |
| Validation error | Inline red banner above form: "Please enter both email and password." |
| Submit failure | `error` state renders inline red banner with message from API |
| Success | `toast.success` + `router.push(redirectTo)` |

### Create Password — `containers/login/CreatePasswordForm.tsx`

| State | How handled |
|-------|------------|
| Submitting | Button disabled, text changes to "Creating Account..." |
| Submit failure | `toast.error` with message from API |
| Success | `toast.success` + `router.push('/profile')` |

### Set New Password — `containers/login/SetNewPasswordForm.tsx`

| State | How handled |
|-------|------------|
| Submitting | Button disabled, text changes to "Resetting..." |
| Submit failure | `toast.error('Failed to reset password. Please try again.')` |
| Success | Callback `onSuccess()` |

### Contact — `components/contact/ContactForm.tsx`

| State | How handled |
|-------|------------|
| Submitting | Button disabled, text changes to "Submitting..." |
| Submit failure | `submitError` state renders inline banner with Retry button |
| Success | None yet — backend not connected |

### Edit Profile — `containers/user-profile/EditProfileModal.tsx`

| State | How handled |
|-------|------------|
| Submitting | `isLoading` passed to `ModalFooter` to disable Save button |
| Submit failure | `catch` logs to console; no user-facing message yet |
| Success | Modal closes via `onClose()` |

### Assessment — WeightLoss `containers/Assessment/WeightLoss/MultiStepForm.tsx`

| State | How handled |
|-------|------------|
| Submitting (Place order) | `isSubmitting` disables button, shows "Processing..." |
| Submit failure | `submitError` renders red banner above footer buttons |
| Success | Redirects to `/assessment/payment-success` after delay |

### Assessment — BirthControl `containers/Assessment/BirthControl/MultiStepForm.tsx`

| State | How handled |
|-------|------------|
| Submitting (Place order) | Same as WeightLoss |
| Submit failure | Same as WeightLoss |
| Success | Redirects to `/assessment/payment-success` after delay |

### Assessment — Sleep `containers/Assessment/Sleep/MultiStepForm.tsx`

| State | How handled |
|-------|------------|
| Submitting (Place order) | Same as WeightLoss |
| Submit failure | Same as WeightLoss |
| Success | Redirects to `/assessment/payment-success` after delay |

---

## Skeleton Loaders

| Component | File | Used in |
|-----------|------|---------|
| `BlogSkeleton` | `components/blog/BlogSkeleton.tsx` | `app/(Front-End)/blog/loading.tsx` |
| `BlogDetailsSkeleton` | `components/blogDetails/BlogDetailsSkeleton.tsx` | `app/(Front-End)/blog/[slug]/loading.tsx` |

---

## Error Boundaries

| Route | File | Behavior |
|-------|------|----------|
| `/blog` | `app/(Front-End)/blog/error.tsx` | Retry button resets the error boundary |
| `/blog/[slug]` | `app/(Front-End)/blog/[slug]/error.tsx` | Retry button + link back to blog list |

---

## Coverage Gaps

| Area | Gap |
|------|-----|
| Profile update | No user-facing error message in `EditProfileModal.tsx` |
| Contact form | No real backend integration; submit always fails with toast |
| Assessment forms | Only `handlePlaceOrder` has error state; individual step submissions do not exist yet |
