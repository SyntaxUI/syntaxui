'use client'

import SyntaxUIProBanner from '@/components/SyntaxUIProBanner'
import { useProBannerStore } from '@/store'
import { X } from 'lucide-react'
import { ThemeProvider } from 'next-themes'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? '',
  })
}
function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function Providers({ children }: { children: React.ReactNode }) {
  const { showProBanner } = useProBannerStore()

  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
    >
      <CSPostHogProvider>
        {children}
        {showProBanner && <SyntaxUIProBanner />}
      </CSPostHogProvider>
    </ThemeProvider>
  )
}
