'use client';

import { useTheme } from '@/app/components/ThemeProvider';

export default function ClientRoute() {
  const { defaultTheme, defaultFn } = useTheme();
  console.log(defaultFn());

  return (
    <main className="p-[30px]">
      <h2
        className="text-[26px] font-bold"
        style={{
          color: defaultTheme.colors.primary,
        }}
      >
        클라이언트 페이지
      </h2>
      page
    </main>
  );
}
