import type { User } from '@/schemas';
import { UserSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getUserById(id: string): Promise<User> {
  return api.get(`/users/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, UserSchema);
}
