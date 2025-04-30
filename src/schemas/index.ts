import { z } from 'zod';

export const TodoSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

export const PostSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const CommentSchema = z.object({
  postId: z.number(),
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
});

export const AlbumSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
});

export const PhotoSchema = z.object({
  albumId: z.number(),
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

export type Todo = z.infer<typeof TodoSchema>;
export type User = z.infer<typeof UserSchema>;
export type Post = z.infer<typeof PostSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type Album = z.infer<typeof AlbumSchema>;
export type Photo = z.infer<typeof PhotoSchema>;

export const UpdateTodoParamsSchema = z.object({
  id: z.string(),
  changes: TodoSchema.partial(),
});
