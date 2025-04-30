import type { Todo } from '@/schemas';
import { TodoSchema, UpdateTodoParamsSchema } from '@/schemas';
import { api } from '@/service/api-client';

type UpdateTodoParams = {
  id: string;
  changes: Partial<Todo>;
};

export async function updateTodo({ id, changes }: UpdateTodoParams): Promise<Todo> {
  await UpdateTodoParamsSchema.parseAsync({ id, changes });

  return api.patch<Todo>(
    `/todos/${id}`,
    changes,
    {
      next: { tags: ['todos'] },
    },
    TodoSchema
  );
}
