'use client'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="justfiy-center mx-auto flex h-screen max-w-xl flex-col justify-center text-center">
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/">
          <Button className="mt-8">Go Back</Button>
        </Link>
      </div>
    </>
  )
}
