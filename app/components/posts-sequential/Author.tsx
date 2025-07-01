type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  const response = await fetch(`http://localhost:9090/blog-users/${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch mock data');
  }

  const user: Author = await response.json();

  return (
    <div className="mt-[20px]">
      작성자: <span className="font-bold">{user.name}</span>
    </div>
  );
}
