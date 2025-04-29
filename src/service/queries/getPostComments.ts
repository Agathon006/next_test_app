import { api } from '@/service/api-client';
import { Comment } from '@/types';

export async function getPostComments(postId: string): Promise<Comment[]> {
  return api.get(`/comments?postId=${postId}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
