import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ravi Kumar — Senior Frontend Engineer',
  description: 'Portfolio of Ravi Kumar, a frontend engineer specializing in React, TypeScript and scalable web applications.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
