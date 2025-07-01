import Link from 'next/link';

export default function Products() {
  const productId = 100;

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">products</h2>
      <ul>
        <li>
          <Link href="/products/1">product 1</Link>
        </li>
        <li>
          <Link href="/products/2">product 2</Link>
        </li>
        <li>
          {/* 현재페이지가 경로에 추가되지않으므로 뒤로가기시 전전페이지로 이동 */}
          <Link href="/products/3" replace>
            product 3
          </Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>product {productId}</Link>
        </li>
      </ul>
    </main>
  );
}
