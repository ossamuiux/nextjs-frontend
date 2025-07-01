'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

type Article = {
  id: number;
  title: string;
  content: string;
};

// 검색어 볼드처리
function BoldText({ text, keyword }: { text: string; keyword: string }) {
  // split후 기준문자가 포함되려면 정규표현식 그룹 () 사용
  // 정규표현식 내부에 변수사용시 RegExp 객체 사용
  // 'gi'는 옵션이며 g는 global, 문자열 전체 검색
  // i는 ignore case 대소문자 구분안함
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

  // split된 문자 배열중 검색어와 같으면 <b>로 감아주고 아니면 그냥 리턴
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword?.toLowerCase() ? (
          <b className="text-[#0057ff]" key={index}>
            {part}
          </b>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Articles({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const paramsObj = use(searchParams);
  // 프라미스 해제된 검색파라메터 객체를 URLSearchParams 인스턴스 생성하여 스테이트 등록
  const [params] = useState(new URLSearchParams(paramsObj));
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery<{
    result: Article[];
    total: number;
  }>({
    queryKey: ['articles', page, paramsObj.search],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/articles?page=${page}&search=${paramsObj.search}`
      ).then((res) => res.json());
    },
  });

  // data 변경시 tatalpage 계산
  useEffect(() => {
    // data가 있고 total도 있을때만 setter실행
    if (data?.total) {
      setTotalPage(Math.ceil(data.total / 5));
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page, params, router]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef.current?.value) {
      // 클릭으로 쿼리 파라메터 추가시 state 사용하면 이전 값이 사용되므로
      // 바로 사용할 수 있는 값 사용하기
      params.set('search', inputRef.current.value);
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`);
    setPage(1);
  }

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold mb-[20px]">뉴스 기사</h2>
      <form onSubmit={handleSearch} className="flex gap-x-[10px]">
        <input
          type="search"
          placeholder="검색어를 입력하세요"
          ref={inputRef}
          autoComplete="off"
          defaultValue={paramsObj.search}
          className="border border-gray-300 w-full"
        />
        <button type="submit" className="btn shrink-0">
          검색
        </button>
      </form>
      {isPending && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && data?.result?.length > 0 && (
        <ul className="space-y-[10px] mt-[20px] mb-[20px]">
          {data.result.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                {/* 검색어 볼드 처리 */}
                <BoldText text={article.title} keyword={paramsObj.search} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!isPending && data?.result?.length === undefined && (
        <p className="text-gray-500 my-[40px] text-center">
          검색결과가 없습니다.
        </p>
      )}
      {data && data?.result?.length > 0 && (
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      )}
    </main>
  );
}
