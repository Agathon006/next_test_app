import type { Todo } from '@/schemas/todos';
import { TodoSchema} from '@/schemas/todos';
import { api } from '@/service/api-client';

type UpdateTodoParams = {
  id: string;
  changes: Partial<Todo>;
};

export async function updateTodo({ id, changes }: UpdateTodoParams): Promise<Todo> {
  return api.patch<Todo>(
    `/todos/${id}`,
    changes,
    {
      next: { tags: ['todos'] },
    },
    TodoSchema
  );
}
