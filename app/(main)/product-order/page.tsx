'use client';

import { useRouter } from 'next/navigation';

export default function ProductOrder() {
  const router = useRouter();

  function handleOrder() {
    // 조건과 관계없이 클릭시 강제이동
    router.push('/');
  }

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">제품 주문</h2>
      <button type="button" onClick={handleOrder} className="btn">
        주문하기
      </button>
    </main>
  );
}
