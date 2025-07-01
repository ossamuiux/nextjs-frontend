export const metadata = {
  title: 'About',
};

export default function About() {
  console.log('서버 컴포넌트');

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">about me</h2>
    </main>
  );
}
