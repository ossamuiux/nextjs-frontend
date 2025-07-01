import { generatePagination } from '@/app/_lib/utils';
import { useEffect, useState } from 'react';

export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: (num: number) => void;
  totalPage: number;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[5px]">
      <button
        type="button"
        className="btn leading-[28px] px-[10px] text-[14px] disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        이전
      </button>
      {pageArr.map((item, i) => {
        if (item === '...') {
          return <span key={i}>...</span>;
        } else {
          return (
            <button
              type="button"
              key={i}
              onClick={() => setPage(item as number)}
              className={`${
                page === item ? 'bg-point1 text-white' : 'text-black'
              } btn leading-[28px] px-[10px] text-[14px]`}
            >
              {item}
            </button>
          );
        }
      })}
      <button
        type="button"
        className="btn leading-[28px] px-[10px] text-[14px] disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >
        다음
      </button>
    </div>
  );
}
