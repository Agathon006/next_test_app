'use server';

import { revalidateTag } from 'next/cache';

import { updateTodo } from '@/service/mutations/updateTodo';

export async function updateTodoAction(id: number, completed: boolean) {
  const updatedTodo = await updateTodo(id, completed);

  revalidateTag('todos');

  return updatedTodo;
}
