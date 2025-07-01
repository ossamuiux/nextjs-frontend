'use client';

export default function ClientOne({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>ClentOne</h2>
      {children}
    </div>
  );
}
