'use client'

import AnimationCards from '@/components/AnimationCards'
import ComponentCards from '@/components/ComponentCards'
import EffectCards from '@/components/EffectCards'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import HooksCard from '@/components/HooksCards'
import PricingPage from '@/components/PreviewCode/Pricing'
import { Button } from '@/components/ui/button'
import GitHubIcon from '@/icons/github'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between text-center">
        <Header />
        <div className="my-[8rem] flex h-full flex-col items-center justify-center gap-4 px-3">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <PricingPage />
            <Image
              src="/images/syntaxUI.svg"
              alt="syntaxUI"
              className="mb-4 h-16 w-16"
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
