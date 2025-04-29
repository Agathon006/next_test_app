import { DataService } from '@/services/dataService';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await DataService.getPosts();

  return (
    <div>
      <p className="mt-2 text-2xl">Posts page</p>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mt-2">
            <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
