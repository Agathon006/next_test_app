'use server';

import { revalidateTag } from 'next/cache';
import { DataService } from '@/services/dataService';

export async function updateTodoAction(id: number, completed: boolean) {
  const updatedTodo = await DataService.updateTodo(id, completed);

  revalidateTag('todos');

  return updatedTodo;
}
