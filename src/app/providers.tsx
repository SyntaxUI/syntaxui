'use client'

import { Button } from '@/components/mdx'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

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

const SyntaxUIProBanner = () => {
  const router = useRouter()
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full items-center justify-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5">
          <div className="flex items-center gap-4 text-sm font-medium leading-6 text-white">
            <p>{`Get Premium Blocks and Templates for your next project on SyntaxUI Pro`}</p>
            <Button onClick={() => router.push('/pro')}>Get Now!</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
    >
      <CSPostHogProvider>
        {children}
        <SyntaxUIProBanner />
      </CSPostHogProvider>
    </ThemeProvider>
  )
}
