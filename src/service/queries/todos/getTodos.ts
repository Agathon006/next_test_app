import { z } from 'zod';

import type { Todo } from '@/schemas/todos';
import { TodoSchema } from '@/schemas/todos';
import { api } from '@/service/api-client';

export async function getTodos(): Promise<Todo[]> {
  return api.get('/todos', {
    cache: 'force-cache',
    next: { revalidate: 3600, tags: ['todos'] },
  }, z.array(TodoSchema));
}
