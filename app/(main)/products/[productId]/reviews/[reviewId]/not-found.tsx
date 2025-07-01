'use client';
// params는 page.tsx만 사용가능하므로 usePathname훅 사용
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <p className="text-[20px]">
        {productId}번 상품에 대한 {reviewId}번 리뷰를 찾을 수 없습니다.
      </p>
    </main>
  );
}
