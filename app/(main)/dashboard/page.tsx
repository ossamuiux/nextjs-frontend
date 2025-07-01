'use client';

import { useState } from 'react';

export default function DashBoard() {
  const [name, setName] = useState('');
  console.log('대시보드는 클라이언트 컴포넌트');

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">대시보드</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </main>
  );
}
