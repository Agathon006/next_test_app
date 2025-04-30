import type { Post } from '@/schemas/posts';
import { PostSchema } from '@/schemas/posts';
import { api } from '@/service/api-client';

export async function getPostById(id: string): Promise<Post> {
  return api.get(`/posts/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, PostSchema);
}
