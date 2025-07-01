import SearchBar from '@/app/components/home/SearchBar';

export default function Header() {
  return (
    <header className="p-[30px] bg-amber-200 flex justify-between">
      <h2 className="text-[26px] font-bold">헤더</h2>
      <SearchBar />
    </header>
  );
}
