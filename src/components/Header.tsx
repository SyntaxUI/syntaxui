import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'

import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import GitHubIcon from '@/icons/github'
import { Star } from 'lucide-react'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  { className?: string }
>(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])
  const pathname = usePathname()

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8',
        !isInsideMobileNavigation && 'backdrop-blur-sm  dark:backdrop-blur',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <div className="hidden gap-4 lg:flex">
        <Link
          href="/"
          aria-label="Home"
          className="mr-3 flex items-center justify-center gap-1"
        >
          <Image
            src="/images/ansub-ui.svg"
            alt="ansub-ui"
            className="h-5 w-5"
            width={100}
            height={100}
          />
          <div className="text-sm font-medium text-gray-800">Syntax UI</div>
        </Link>
        <ul role="list" className="flex w-full items-center gap-4">
          <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
          <TopLevelNavItem href="/github">Github</TopLevelNavItem>
        </ul>
      </div>
      {/* <Search /> */}
      <div className="flex items-center gap-5 lg:hidden">
        {pathname === '/' ? null : <MobileNavigation />}
        <Link
          href="/"
          aria-label="Home"
          className="mr-3 flex items-center justify-center gap-1"
        >
          <Image
            src="/images/ansub-ui.svg"
            alt="ansub-ui"
            className="h-5 w-5"
            width={100}
            height={100}
          />
          <div className="text-sm font-medium text-gray-800">ansub/ui</div>
        </Link>
        <ul role="list" className="flex w-full items-center gap-4">
          <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
          <TopLevelNavItem href="/github">Github</TopLevelNavItem>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <Search />
        </nav>
        {/* <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" /> */}
        <div className="flex">
          <MobileSearch />
          {/* <ThemeToggle /> */}
          <a
            href="https://github.com/ansub/ui"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-lg border p-1 px-3 text-sm text-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            star on <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
})
