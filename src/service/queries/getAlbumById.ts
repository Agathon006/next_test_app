import { api } from '@/service/api-client';
import { Album } from '@/types';

export async function getAlbumById(id: string): Promise<Album> {
  return api.get(`/albums/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
