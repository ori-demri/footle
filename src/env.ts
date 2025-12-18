import { envSchema } from '@/features/env/schema';

export const env = envSchema.parse(import.meta.env);
