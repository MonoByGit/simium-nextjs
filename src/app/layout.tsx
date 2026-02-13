import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Layout } from '@/components/LayoutNextJS'
import { DarkModeProvider } from '@/components/DarkModeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simium - AI-gedreven business scans voor het MKB',
  description: 'Snel, betrouwbaar, direct inzicht in je cloudkosten, cashflow en prijsstrategie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkModeProvider>
          <Layout>
            {children}
          </Layout>
        </DarkModeProvider>
      </body>
    </html>
  )
}
