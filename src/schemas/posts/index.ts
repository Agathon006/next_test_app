import { z } from 'zod';

export const PostSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const CommentSchema = z.object({
  postId: z.number(),
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
});

export type Comment = z.infer<typeof CommentSchema>;
