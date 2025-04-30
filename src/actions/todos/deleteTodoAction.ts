'use server';

import { revalidateTag } from 'next/cache';

import { deleteTodo } from '@/service/mutations/todos/deleteTodo';

type DeleteTodoActionParams = {
  id: string;
};

export async function deleteTodoAction({ id }: DeleteTodoActionParams) {
  const updatedTodo = await deleteTodo({ id });

  revalidateTag('todos');

  return updatedTodo;
}
