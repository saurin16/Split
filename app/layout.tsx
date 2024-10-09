import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Split App',
  description: 'Split expenses with friends easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <main>{children}</main>
          <footer className="bg-gray-100 py-4 text-center text-gray-600">
            Created by Saurin Patel
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
