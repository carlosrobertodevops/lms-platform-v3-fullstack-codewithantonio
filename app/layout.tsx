import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

import { ConfettiProvider } from '@/components/providers/confetti-provider';
import ToastProvider from '@/components/providers/toaster-provider';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={ptBR}
    >
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
