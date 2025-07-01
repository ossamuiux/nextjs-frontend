type User = {
  user_id: number;
  name: string;
  age: number;
  comment: string;
  created_at: string;
};

export default async function UserList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);

  if (!res.ok) {
    throw new Error('데이터 요청 실패');
  }

  const data: User[] = await res.json();

  return (
    <main className="p-[30px]">
      <ul className="space-y-[20px]">
        {data.map((item) => (
          <li key={item.user_id}>
            <strong>{item.name}</strong>
            <p>{item.comment}</p>
            <span>{new Date(item.created_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
