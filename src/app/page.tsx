'use client'

import EffectCards from '@/showcase/ui-group/EffectCards'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import GitHubIcon from '@/icons/github'
import AnimationCards from '@/showcase/ui-group/AnimationCards'
import ComponentCards from '@/showcase/ui-group/ComponentCards'
import HooksCard from '@/showcase/ui-group/HooksCards'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const DiscordButton = ({
  backgroundAnimation = false,
  borderAnimation = false,
}: {
  backgroundAnimation?: boolean
  borderAnimation?: boolean
}) => {
  return (
    <motion.button
      className="relative mb-8 inline-flex overflow-hidden  rounded-full p-[1px] ring-1 ring-inset ring-blue-700/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        window.open('https://discord.gg/P8GXYyH3ZU', '_blank')
      }}
    >
      {borderAnimation && (
        <span className="absolute inset-[-1000%] animate-discord-button bg-[conic-gradient(from_calc(var(--discord-button-angle)+60deg)_at_calc(50%+var(--discord-button-x))_50%,transparent_50%,#5865F2_98%,transparent_100%)]"></span>
      )}
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#5865F2] backdrop-blur ">
        <span>Join the Discord Family</span>
        <svg
          viewBox="0 0 256 199"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
            fill="#5865F2"
          />
        </svg>
        {backgroundAnimation && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
        )}
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
            <DiscordButton borderAnimation />
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
            <Link href="/docs">
              <Button className="bg-red-500 hover:bg-red-500/90">
                Get Started
              </Button>
            </Link>
            <a href="https://git.new/syntax" target="_blank" rel="noreferrer">
              <Button variant={'outline'} className="gap-1">
                <div className="h-5 w-5 text-gray-800">
                  <GitHubIcon />
                </div>
                Star on Github
              </Button>
            </a>
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
          <div>
            <h1 className="mb-4 w-full text-left text-lg font-semibold">
              Hooks
            </h1>
            <HooksCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
