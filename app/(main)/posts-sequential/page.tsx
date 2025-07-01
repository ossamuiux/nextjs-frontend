import Author from '@/app/components/posts-sequential/Author';
import { Suspense } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostSequential() {
  const response = await fetch('http://localhost:9090/blog-posts');

  if (!response.ok) {
    throw new Error('Failed to fetch mock data');
  }

  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold mb-[20px]">blog posts</h2>
      <ul className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
        {filteredPosts.map((post) => (
          <li key={post.id} className="bg-[#eee] p-[20px] rounded-[8px]">
            <h3 className="text-[20px] font-bold leading-[1.2] mb-[10px] text-gray-600">
              {post.title}
            </h3>
            <p>{post.body}</p>
            <Suspense fallback={<p className="mt-[20px]">로딩...</p>}>
              <Author userId={post.userId} />
            </Suspense>
          </li>
        ))}
      </ul>
    </main>
  );
}
