import clsx from 'clsx';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaS Landing Page',
  description: 'Stunning Dark Theme SaaS Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, 'antialiased')}>{children}</body>
    </html>
  );
}
