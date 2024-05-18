'use client'

import EffectCards from '@/showcase/ui-group/EffectCards'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import GitHubIcon from '@/icons/github'
import AnimationCards from '@/showcase/ui-group/AnimationCards'
import ComponentCards from '@/showcase/ui-group/ComponentCards'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import posthog from 'posthog-js'
import { ChevronRight } from 'lucide-react'

const DiscordButton = () => {
  return (
    <motion.button
      className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px] ring-1 ring-inset ring-blue-700/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        window.open('https://cal.com/ansub/15')
        posthog.capture('meeting_button_clicked')
      }}
    >
      <span className="absolute inset-[-1000%] animate-discord-button bg-[conic-gradient(from_calc(var(--discord-button-angle)+60deg)_at_calc(50%+var(--discord-button-x))_50%,transparent_50%,#fb3a5d_98%,transparent_100%)]"></span>
      <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[12px] font-medium uppercase text-red-500 backdrop-blur">
        <span>
          Request a Component
          <ChevronRight className="inline-block h-4 w-4 text-red-400" />
        </span>
      </span>
    </motion.button>
  )
}

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between text-center">
        <Header />
        <div className="my-[8rem] flex h-full flex-col items-center justify-center gap-4 px-3">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <DiscordButton />
            <Image
              src="/images/syntaxUI.svg"
              alt="syntaxUI"
              className="mb-4 h-16 w-16 rounded-lg"
              width={100}
              height={100}
            />
            <span className="max-w-lg text-3xl font-bold tracking-tight md:max-w-2xl md:text-5xl">
              Stop coding from scratch. Build faster. Launch sooner.
            </span>
            <div className="text-gray-600">
              Free-to-use UI elements designed for rapid development.
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/components">
              <Button className="bg-red-500 hover:bg-red-500/90">
                Get Started
              </Button>
            </Link>
            <Link
              href="https://git.new/syntax"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={'outline'} className="gap-1">
                <div className="h-5 w-5 text-gray-800">
                  <GitHubIcon />
                </div>
                Star on Github
              </Button>
            </Link>
          </div>
        </div>
        {/* UI Elements */}
        <div className="mb-12 flex w-full max-w-7xl flex-col gap-8 px-3">
          <div>
            <h1 className="mb-4 text-left text-lg font-semibold tracking-tight">
              Components
            </h1>
            <ComponentCards />
          </div>
          <div>
            <h1 className="mb-4 text-left text-lg font-semibold tracking-tight">
              Animations
            </h1>
            <AnimationCards />
          </div>
          <div>
            <h1 className="mb-4 w-full text-left text-lg font-semibold">
              Effects
            </h1>
            <EffectCards />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
