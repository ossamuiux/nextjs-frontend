'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  function reload() {
    // 오류를 캐치한 후 복구해야하므로 우순순위를 낮춰 에러뒤에 실행되게함
    startTransition(() => {
      // 새로고침
      router.refresh();
      // 초기화
      reset();
    });
  }

  return (
    <div>
      <p>{error.message}</p>
      <button type="button" onClick={() => reload()} className="btn">
        다시 시도
      </button>
    </div>
  );
}
