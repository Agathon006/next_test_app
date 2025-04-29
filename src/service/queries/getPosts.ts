import { api } from '@/service/api-client';
import { Post } from '@/types';

export async function getPosts(): Promise<Post[]> {
  return api.get('/posts', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
