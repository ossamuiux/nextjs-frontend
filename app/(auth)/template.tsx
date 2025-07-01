'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forgot-password', label: 'Forgot password' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState('');
  const pathname = usePathname();

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="flex gap-x-[10px] p-[30px] pb-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? 'text-point1' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
