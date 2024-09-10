import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';
import { cn } from '@/utils/util';
import NavAndFooter from './components/NavAndFooter/NavAndFooter';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Design Portfolio',
  description: 'A UI/UX designer portfolio landing page'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(plusJakartaSans.className, 'min-h-screen bg-design-900')}
      >
        <header>
          <NavAndFooter />
        </header>
        {children}
      </body>
    </html>
  );
}
