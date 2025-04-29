import { api } from '@/service/api-client';
import { Post } from '@/types';

export async function getPostById(id: string): Promise<Post> {
  return api.get(`/posts/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
