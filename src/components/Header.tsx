'use client'

import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import { Button } from '@/components/ui/button'
import GitHubIcon from '@/icons/github'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'
import { ThemeToggle } from './ThemeToggle'

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
        className="whitespace-nowrap text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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
            src="/images/syntaxUI-outline.svg"
            alt="syntaxUI"
            className="mr-1 h-6 w-6 rounded-lg"
            width={100}
            height={100}
          />
          <div className="text-md font-medium text-gray-800 dark:text-white">
            Syntax<span className="text-[10px] font-bold text-red-500">UI</span>
          </div>
        </Link>
        <ul role="list" className="flex w-full items-center gap-4">
          <TopLevelNavItem href="/components">Get Started</TopLevelNavItem>
          <TopLevelNavItem href="/templates">Templates</TopLevelNavItem>
        </ul>
      </div>
      {/* <Search /> */}
      <div className="flex items-center gap-3 lg:hidden">
        {pathname === '/' || pathname.includes('/templates') ? null : (
          <MobileNavigation />
        )}
        <Link
          href="/"
          aria-label="Home"
          className="ml-2 mr-3 flex items-center justify-center gap-1"
        >
          <Image
            src="/images/syntaxUI-outline.svg"
            alt="syntaxUI"
            className="h-6 w-6"
            width={100}
            height={100}
          />
          <div className="text-md hidden font-medium text-gray-800 md:inline">
            Syntax<span className="text-[10px] font-bold text-red-500">UI</span>
          </div>{' '}
        </Link>
        <ul role="list" className="flex w-full items-center gap-4">
          <TopLevelNavItem href="/docs">Get Started</TopLevelNavItem>
          <TopLevelNavItem href="https://discord.gg/P8GXYyH3ZU">
            Community
          </TopLevelNavItem>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <Search />
        </nav>
        {/* <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" /> */}
        <div className="flex items-center gap-2">
          <MobileSearch />
          <ThemeToggle />
          <Link href="https://git.new/syntax" target="_blank" rel="noreferrer">
            <Button
              variant={'outline'}
              className="gap-1  bg-gray-800 text-white hover:bg-gray-800/90 hover:text-white"
            >
              <div className="h-5 w-5 text-white">
                <GitHubIcon fill="currentColor" />
              </div>
              Star on Github
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
})
