import { getPostById } from '@/service/queries/posts/getPostById';
import { getPostComments } from '@/service/queries/posts/getPostComments';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [post, comments] = await Promise.all([getPostById(id), getPostComments(id)]);

  return (
    <div className="mt-2">
      <p className="ml-2">UserId: {post.userId}</p>
      <p className="ml-2">Title: {post.title}</p>
      <p className="ml-2">Content: {post.body}</p>
      <section className="ml-2">
        {!comments.length ? (
          'no comments yet...'
        ) : (
          <ul className="p-2">
            {comments.map(comment => {
              return (
                <li key={comment.id} className="mt-2">
                  <p>{comment.name}</p>
                  <p>{comment.email}</p>
                  <p>{comment.body}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
