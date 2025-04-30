import { z } from 'zod';

import type { Post } from '@/schemas/posts';
import { PostSchema } from '@/schemas/posts';
import { api } from '@/service/api-client';

export async function getPosts(): Promise<Post[]> {
  return api.get('/posts', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, z.array(PostSchema));
}
