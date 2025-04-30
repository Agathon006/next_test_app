import { z } from 'zod';

import type { User } from '@/schemas';
import { UserSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getUsers(): Promise<User[]> {
  return api.get('/users', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, z.array(UserSchema));
}
