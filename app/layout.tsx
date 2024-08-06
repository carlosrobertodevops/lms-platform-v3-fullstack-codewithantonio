import { ConfettiProvider } from '@/components/providers/confetti-provider';
import {
  ClerkProvider
} from '@clerk/nextjs';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <ConfettiProvider/>
          {/* <ToastProvider/> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
