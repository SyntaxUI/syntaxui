import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://syntaxui.com'),
  title: {
    template: '%s - SyntaxUI',
    default: 'SyntaxUI',
  },
  description: 'Ready-to-use UI elements designed for rapid development.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
