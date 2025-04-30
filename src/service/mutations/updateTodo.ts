import { api } from '@/service/api-client';
import { Todo } from '@/types';

type UpdateTodoParams = {
  id: number;
  changes: Partial<Todo>;
};

export async function updateTodo({ id, changes }: UpdateTodoParams): Promise<Todo> {
  return await api.patch<Todo>(`/todos/${id}`, changes, {
    next: { tags: ['todos'] },
  });
}
