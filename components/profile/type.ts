import { z } from 'zod';
import { profileSchema } from '@/lib/validations/profile.schema';

export type ProfileFormValues = z.infer<typeof profileSchema>;
