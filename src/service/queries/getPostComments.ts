import { z } from 'zod';

import type { Comment } from '@/schemas';
import { CommentSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getPostComments(postId: string): Promise<Comment[]> {
  return api.get(`/comments?postId=${postId}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, z.array(CommentSchema));
}
