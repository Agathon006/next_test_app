import Link from 'next/link';

import { DataService } from '@/services/dataService';

export default async function AlbumsPage() {
  const albums = await DataService.getAlbums();

  return (
    <div>
      <p className="mt-2 text-2xl">Albums page</p>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="mt-2">
            <Link href={`albums/${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
