import { Album, Comment, Photo,Post, Todo, User } from '@/types';

import { API_BASE_URL, API_ENDPOINTS } from './api';

type FetchOptions = {
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
  method?: string;
  body?: string;
};

export class DataService {
  private static async fetchData<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  static async getTodos(): Promise<Todo[]> {
    return this.fetchData<Todo[]>(API_ENDPOINTS.TODOS, {
      cache: 'force-cache',
      next: {
        revalidate: 3600,
        tags: ['todos'],
      },
    });
  }

  static async updateTodo(id: number, completed: boolean): Promise<Todo> {
    return this.fetchData<Todo>(API_ENDPOINTS.TODOS + `/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed }),
      next: {
        tags: ['todos'],
      },
    });
  }

  static async getUsers(): Promise<User[]> {
    return this.fetchData<User[]>(API_ENDPOINTS.USERS, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getUserById(id: string): Promise<User> {
    return this.fetchData<User>(API_ENDPOINTS.USERS + `/${id}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getPosts(): Promise<Post[]> {
    return this.fetchData<Post[]>(API_ENDPOINTS.POSTS, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getPostById(id: string): Promise<Post> {
    return this.fetchData<Post>(API_ENDPOINTS.POSTS + `/${id}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getPostComments(postId: string): Promise<Comment[]> {
    return this.fetchData<Comment[]>(API_ENDPOINTS.POSTS + `/${postId}/comments`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getAlbums(): Promise<Album[]> {
    return this.fetchData<Album[]>(API_ENDPOINTS.ALBUMS, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getAlbumById(id: string): Promise<Album> {
    return this.fetchData<Album>(API_ENDPOINTS.ALBUMS + `/${id}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }

  static async getAlbumPhotos(id: string): Promise<Photo[]> {
    return this.fetchData<Photo[]>(API_ENDPOINTS.ALBUMS + `/${id}/photos`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  }
}
