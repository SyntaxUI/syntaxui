'use client'

import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { type ThemeProviderProps } from 'next-themes/dist/types'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? '',
  })
}
function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

// function ThemeWatcher() {
//   let { resolvedTheme, setTheme } = useTheme()

//   useEffect(() => {
//     let media = window.matchMedia('(prefers-color-scheme: dark)')

//     function onMediaChange() {
//       let systemTheme = media.matches ? 'dark' : 'light'
//       if (resolvedTheme === systemTheme) {
//         setTheme('light')
//       }
//     }

//     onMediaChange()
//     media.addEventListener('change', onMediaChange)

//     return () => {
//       media.removeEventListener('change', onMediaChange)
//     }
//   }, [resolvedTheme, setTheme])

//   return null
// }

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider {...props} attribute="class" disableTransitionOnChange>
      {/* <ThemeWatcher /> */}
      <CSPostHogProvider>{children}</CSPostHogProvider>
    </ThemeProvider>
  )
}
