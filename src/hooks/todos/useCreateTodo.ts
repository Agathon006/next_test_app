'use client';

import { useMutation } from '@tanstack/react-query';

import { createTodoAction } from '@/actions/todos/createTodoAction';

type CreateTodoParams = {
  title: string;
};

export function useCreateTodo() {
  return useMutation({
    mutationFn: ({ title }: CreateTodoParams) => {
      return createTodoAction({ title });
    },
  });
}

