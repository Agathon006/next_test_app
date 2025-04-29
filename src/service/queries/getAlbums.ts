import { api } from '@/service/api-client';
import { Album } from '@/types';

export async function getAlbums(): Promise<Album[]> {
  return api.get('/albums', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}