import React from 'react';
import './globals.css';

export const metadata = {
  title: 'VERO Atlas',
  description: 'Dashboard for VERO insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <h1>VERO Atlas</h1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="/">Home</a>
            <a href="/shipping">Shipping</a>
            <a href="/energy">Energy</a>
            <a href="/metals">Metals</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
