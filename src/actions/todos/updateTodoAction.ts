'use server';

import { revalidateTag } from 'next/cache';

import type { Todo } from '@/schemas/todos';
import { updateTodo } from '@/service/mutations/todos/updateTodo';

type UpdateTodoActionParams = {
  id: string;
  changes: Partial<Todo>;
};

export async function updateTodoAction({ id, changes }: UpdateTodoActionParams) {
  const updatedTodo = await updateTodo({ id, changes });

  revalidateTag('todos');

  return updatedTodo;
}
