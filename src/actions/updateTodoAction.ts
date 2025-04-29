'use server';

import { revalidateTag } from 'next/cache';

import { updateTodo } from '@/service/mutations/updateTodo';
import { Todo } from '@/types';

type UpdateTodoActionParams = {
  id: number;
  changes: Partial<Todo>;
};

export async function updateTodoAction({ id, changes }: UpdateTodoActionParams) {
  const updatedTodo = await updateTodo({ id, changes });

  revalidateTag('todos');

  return updatedTodo;
}
