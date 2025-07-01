import { redirect } from 'next/navigation';

// 랜덤정수 리턴
// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  const { productId, reviewId } = await params;

  // 0, 1을 리턴받아 간헐적 에러 테스트
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error('리뷰 로딩 에러');
  // }

  // reviewId가 999보다 크면 404 페이지로 이동
  if (parseInt(reviewId) > 999) {
    // notFound();
    redirect('/products');
  }

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">
        Review {reviewId} for product {productId}
      </h2>
    </main>
  );
}
