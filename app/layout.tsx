import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: '네이버',
    template: '%s | 네이버',
  },
  description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={pretendard.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
