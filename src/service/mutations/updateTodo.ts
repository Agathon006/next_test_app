import { api } from '@/service/api-client';
import { Todo } from '@/types';

export async function updateTodo(id: number, completed: boolean): Promise<Todo> {
  return await api.patch<Todo>(
    `/todos/${id}`,
    { completed },
    {
      next: { tags: ['todos'] },
    }
  );
}
