'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { navigation } from '@/components/Navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import XIcon from '@/icons/x'
import GitHubIcon from '@/icons/github'
import DiscordIcon from '@/icons/discord'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: { href: string; title: string }
  previous?: boolean
}) {
  return (
    <>
      <Link href={page.href} passHref>
        <Button aria-label={`${label}: ${page.title}`} variant="secondary">
          {previous ? <ChevronLeft size={18} /> : null}
          {label}
          {!previous ? <ChevronRight size={18} /> : null}
        </Button>
      </Link>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let pathname = usePathname()
  let allPages = navigation.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex((page) => page.href === pathname)

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        Building in public by{' '}
        <Link
          target="_blank"
          href="https://twitter.com/justansub"
          className="underline"
        >
          Ansub
        </Link>
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://twitter.com/justansub" icon={XIcon}>
          Follow me on X
        </SocialLink>
        <SocialLink href="http://github.com/ansub" icon={GitHubIcon}>
          Follow me on GitHub
        </SocialLink>
        <SocialLink href="https://discord.gg/P8GXYyH3ZU" icon={DiscordIcon}>
          Join the Discord
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
