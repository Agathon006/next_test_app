import { api } from '@/service/api-client';
import { User } from '@/types';

export async function getUserById(id: string): Promise<User> {
  return api.get(`/users/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
