export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">my blog</h2>
    </main>
  );
}
