import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://syntaxui.com'),
  title: {
    template: '%s - SyntaxUI',
    default:
      'SyntaxUI - Stop coding from scratch. Build faster. Launch sooner.',
  },
  description: 'Free-to-use UI elements designed for rapid development.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
