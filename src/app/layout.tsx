import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  metadataBase: new URL('https://syntaxui.com'),
  title: {
    template: '%s - SyntaxUI',
    default: 'SyntaxUI - Free React, Tailwind CSS & Framer UI Components',
  },
  description: `Get free-to-use Prebuilt React components powered by Tailwind CSS & Framer Motion. Modern, Minimal and customizable. Just copy, paste and you're ready to go!`,
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
          <Toaster position="bottom-center" />
        </Providers>
      </body>
    </html>
  )
}
