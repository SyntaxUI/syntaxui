'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubIcon from '@/icons/github'

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between text-center">
        <Header />
        <div className="flex h-full flex-col items-center justify-center gap-4 px-3">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <Image
              src="/images/ansub-ui.svg"
              alt="ansub-ui"
              className="mb-4 h-16 w-16"
              width={100}
              height={100}
            />
            <span className="text-2xl font-bold tracking-tight md:text-5xl">
              Pre-built components for your next project
            </span>
            <div className="text-gray-600">Just Copy, Paste, and Launch</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <a
              href="https://github.com/Ansub/ui"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={'outline'} className="gap-1">
                <div className="h-5 w-5 text-gray-800">
                  <GitHubIcon />
                </div>
                Github
              </Button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
