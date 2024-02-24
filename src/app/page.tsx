'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between text-center">
        <Header />
        <div className="flex h-full flex-col items-center justify-center px-3">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              src="/images/ansub-ui.svg"
              alt="ansub-ui"
              className="mb-4 h-16 w-16"
              width={100}
              height={100}
            />
            <span className="mb-1 text-3xl font-semibold tracking-tight">
              Pre-built components for your next project
            </span>
            <div className="text-gray-600">Just Copy, Paste, and Launch</div>
          </div>
          <div className="mt-4 space-x-4">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <Button variant={'outline'}>Github</Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
