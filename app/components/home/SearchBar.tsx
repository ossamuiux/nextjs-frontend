'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  // page.tsx가 아닌 일반 컴포넌트에선 useSearchParams훅으로 쿼리 파라메터 읽기
  const paramsObj = useSearchParams();
  // defaultValue에 null타입 안되므로 null이면 빈칸으로 초기화
  const search = paramsObj.get('search') || '';

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" defaultValue={search} />
        <button type="submit" className="btn">
          검색
        </button>
      </form>
    </div>
  );
}
