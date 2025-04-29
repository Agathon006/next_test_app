import { api } from '@/service/api-client';
import { Todo } from '@/types';

export async function getTodos(): Promise<Todo[]> {
  return api.get('/todos', {
    cache: 'force-cache',
    next: { revalidate: 3600, tags: ['todos'] },
  });
}
