import type { Todo } from '@/schemas/todos';
import { TodoSchema } from '@/schemas/todos';
import { api } from '@/service/api-client';

type CreateTodoParams = {
  title: string;
};

export async function createTodo({ title }: CreateTodoParams): Promise<Todo> {
  return api.post<Todo>(
    '/todos',
    {
      title,
      completed: false,
      userId: 1,
    },
    {
      next: { tags: ['todos'] },
    },
    TodoSchema
  );
}
