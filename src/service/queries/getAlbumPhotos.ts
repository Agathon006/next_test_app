import { api } from '@/service/api-client';
import { Photo } from '@/types';

export async function getAlbumPhotos(id: string): Promise<Photo[]> {
  return api.get(`/photos?albumId=${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
}
