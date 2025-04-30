'use server';

import { revalidateTag } from 'next/cache';

import { createTodo } from '@/service/mutations/todos/createTodo';

type CreateTodoActionParams = {
  title: string;
};

export async function createTodoAction({ title }: CreateTodoActionParams) {
  const newTodo = await createTodo({ title });

  revalidateTag('todos');

  return newTodo;
}

