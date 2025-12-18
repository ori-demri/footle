import { z } from 'zod';

export const envSchema = z.object({
  VITE_API_URL: z.url(),
  VITE_ENABLE_FEATURE_X: z.string().transform(val => val === 'true'),
});
