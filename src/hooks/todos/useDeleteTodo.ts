'use client';

import { useMutation } from '@tanstack/react-query';

import { deleteTodoAction } from '@/actions/todos/deleteTodoAction';

export function useDeleteTodo() {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      return deleteTodoAction({ id });
    },
  });
}
