import { api } from '@/service/api-client';
import { User } from '@/types';

export async function getUsers(): Promise<User[]> {
  return api.get('/users', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
