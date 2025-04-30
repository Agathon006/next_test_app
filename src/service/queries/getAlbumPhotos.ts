import { z } from 'zod';

import type { Photo } from '@/schemas';
import { PhotoSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getAlbumPhotos(id: string): Promise<Photo[]> {
  return api.get(`/photos?albumId=${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, z.array(PhotoSchema));
}
