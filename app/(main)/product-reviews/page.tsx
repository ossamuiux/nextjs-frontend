import Product from '@/app/components/product-reviews/Product';
import Reviews from '@/app/components/product-reviews/Reviews';
import { Suspense } from 'react';

export default function ProductReviews() {
  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold mb-[20px]">product reviews</h2>
      <Suspense fallback={<p>제품 리스트 로딩...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>리뷰 로딩...</p>}>
        <Reviews />
      </Suspense>
    </main>
  );
}
