import { z } from 'zod';
import { profileSchema } from './profile.schema';


export type ProfileFormValues = z.infer<typeof profileSchema>;
