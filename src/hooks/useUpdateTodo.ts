'use client';

import { useMutation } from '@tanstack/react-query';
import { updateTodoAction } from '@/actions/updateTodoAction';
import { Todo } from '@/types';

export function useUpdateTodo() {
  return useMutation({
    mutationFn: async ({ id, changes }: { id: number; changes: Partial<Todo> }) => {
      return updateTodoAction({ id, changes });
    },
  });
}
