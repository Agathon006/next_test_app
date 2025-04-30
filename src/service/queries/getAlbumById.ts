import type { Album } from '@/schemas';
import { AlbumSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getAlbumById(id: string): Promise<Album> {
  return api.get(`/albums/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, AlbumSchema);
}
