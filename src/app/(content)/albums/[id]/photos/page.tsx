import { ReturnButton } from "@/components/ReturnButton";

import { DataService } from '@/services/dataService';

export default async function AlbumsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const album = await DataService.getAlbumById(id);
  const albumPhotos = await DataService.getAlbumPhotos(id);

  return (
    <div className="mt-2">
      <ReturnButton />
      <p>Title: {album.title}</p>
      <section className="ml-2">
        {!albumPhotos.length ? 'no photos yet...' : <ul className="p-2">
          {albumPhotos.map((photo) => {
            return <li key={photo.id} className="mt-2">
              <p>{photo.title}</p>
              <p>{photo.url}</p>
            </li>
          })}</ul>}
      </section>
    </div>
  );
}
