import FramerLogo from '@/components/Logos/Framer'
import Nextjs from '@/components/Logos/NextJS'
import TailwindCSS from '@/components/Logos/Tailwind'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MinimalPortfolio = () => {
  return (
    <div className="mb-4 mt-12">
      <div className="flex flex-col items-start justify-center gap-20 px-4 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-xl font-medium">Minimal Portfolio</h1>
            <div className="text-xs font-medium text-red-500">50% off</div>
          </div>
          <div className="flex flex-row gap-2 text-lg">
            <p className="font-semibold text-red-500">$9</p>
            <p className="text-gray-600/50 line-through">$19</p>
          </div>
          <div className="mt-2 max-w-sm text-sm text-gray-600 dark:text-gray-200">
            <p className="">
              Elevate your online presence with a sleek and minimalist portfolio
              that showcases your skills, projects, and thought leadership. This
              modern template offers a clean and professional design, empowering
              you to make a lasting impression on your visitors. Discover its
              powerful features:
            </p>
            <ul className="mt-2 list-inside list-disc">
              <li>Animations powered by Framer Motion</li>
              <li>MDX Blog Support for content creation</li>
              <li>Tailwind CSS for styling</li>
              <li>Built on the Next.js 14</li>
              <li>Fully responsive</li>
              <li>SEO Optimized</li>
            </ul>
          </div>

          <div className="mt-2 flex flex-row gap-3">
            <TailwindCSS className="h-6 w-6 brightness-0  dark:invert" />
            <FramerLogo className="h-6 w-6 brightness-0  dark:invert" />
            <Nextjs className="h-6 w-6" />
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href="https://syntaxui.lemonsqueezy.com/buy/a3c17154-6196-4704-ab1d-2d47dcf15d97"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-500/90"
            >
              Download Template
            </Link>
            <Link
              href="https://minimal-portfolio-mocha.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg  border px-2 py-1 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-gray-100/50"
            >
              Live Preview
            </Link>
          </div>
        </div>
        <Image
          src="/images/templates/minimal-portfolio.png"
          alt="Minimal Portfolio"
          width={1200}
          height={600}
          className="w-full max-w-[600px] rounded-lg border"
        />
      </div>
    </div>
  )
}

export default MinimalPortfolio
