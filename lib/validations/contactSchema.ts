import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),

  lastName: z.string().min(2, 'Last name is required'),

  email: z.string().email('Invalid email'),

  phone: z.string().min(10, 'Phone number is required'),

  subject: z.string().min(3, 'Subject is required'),

  message: z.string().min(10, 'Message is required'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
