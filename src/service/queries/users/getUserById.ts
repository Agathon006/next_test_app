import type { User } from '@/schemas/users';
import { UserSchema } from '@/schemas/users';
import { api } from '@/service/api-client';

export async function getUserById(id: string): Promise<User> {
  return api.get(`/users/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, UserSchema);
}
