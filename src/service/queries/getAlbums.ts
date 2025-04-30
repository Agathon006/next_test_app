import { z } from 'zod';

import type { Album } from '@/schemas';
import { AlbumSchema } from '@/schemas';
import { api } from '@/service/api-client';

export async function getAlbums(): Promise<Album[]> {
  return api.get('/albums', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  }, z.array(AlbumSchema));
}
