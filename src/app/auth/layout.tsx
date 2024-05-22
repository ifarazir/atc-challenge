"use client";

import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <Toaster />
      <main>{children}</main>
    </SessionProvider>
  )
}