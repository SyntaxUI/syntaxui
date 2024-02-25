import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://ui.ansubkhan.com'),
  title: {
    template: '%s - ansub/ui',
    default: 'ansub/ui',
  },
  description: 'pre-built components for your next project',
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
