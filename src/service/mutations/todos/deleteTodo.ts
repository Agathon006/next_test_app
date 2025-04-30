import type { Todo } from '@/schemas/todos';
import { TodoSchema } from '@/schemas/todos';
import { api } from '@/service/api-client';

type DeleteTodoParams = {
  id: string;
};

export async function deleteTodo({ id }: DeleteTodoParams): Promise<Todo> {
  return api.delete<Todo>(
    `/todos/${id}`,
    {
      next: { tags: ['todos'] },
    },
    TodoSchema
  );
}
