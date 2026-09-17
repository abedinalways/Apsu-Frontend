import * as z from 'zod';

export const emailSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

/**
 * Single source of truth for the password policy used across auth forms and
 * the auth service. Policy: at least 8 characters.
 */
export const passwordPolicy = z
  .string()
  .min(8, 'Password must be at least 8 characters');

export const passwordSchema = z
  .object({
    password: passwordPolicy,
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type EmailFormValues = z.infer<typeof emailSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
