'use client';

import { use } from 'react';

export default function Child2({
  posts,
}: {
  posts: Promise<
    {
      id: number;
      title: string;
      content: string;
    }[]
  >;
}) {
  // 프라미스 완료 결과 받을때 use훅 사용
  // 클라이언트, 서버 컴포넌트 모두 사용가능
  // 프라미스 완료를 기다린후 jsx가 리턴됨
  const allPosts = use(posts);

  return (
    <ul>
      {allPosts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
