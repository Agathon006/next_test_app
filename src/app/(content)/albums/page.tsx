import Link from 'next/link';

import { getAlbums } from '@/service/queries/albums/getAlbums';


export default async function AlbumsPage() {
  const albums = await getAlbums();

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
