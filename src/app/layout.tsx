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
    default:
      'SyntaxUI - Stop coding from scratch. Build faster. Launch sooner.',
  },
  description: `Get free access to pre-built, Tailwind CSS-powered components, animations and effects - brought to life using Framer Motion. Just copy, paste and you're ready to go!`,
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
