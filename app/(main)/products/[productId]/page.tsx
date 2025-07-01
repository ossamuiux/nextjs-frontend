type ProductDetailsProp = {
  params: Promise<{ productId: string }>;
};

// 메타데이터 동적으로 생성하는 함수, 이름변경 불가
export async function generateMetadata({ params }: ProductDetailsProp) {
  const { productId } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`갤럭시 ${productId}`), 200);
  });

  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: ProductDetailsProp) {
  const { productId } = await params;

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">
        details about product {productId}
      </h2>
    </main>
  );
}
