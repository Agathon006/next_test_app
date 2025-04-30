import { z } from 'zod';

export const TodoSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;

export const UpdateTodoParamsSchema = z.object({
  id: z.string(),
  changes: TodoSchema.partial(),
});