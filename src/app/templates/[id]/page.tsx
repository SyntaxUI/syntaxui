'use client'

import NotFound from '@/app/not-found'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import FramerLogo from '@/components/Logos/Framer'
import Nextjs from '@/components/Logos/NextJS'
import TailwindCSS from '@/components/Logos/Tailwind'
import { TemplateData } from '@/data/TemplateData'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TemplateButton = ({
  href,
  children,
  variant,
}: {
  href: string
  children: string
  variant?: string
}) => {
  return (
    <Link
      href={href || ''}
      target="_blank"
      rel="noreferrer"
      className={cn(
        `hover:bg-red-500/90" rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out`,
        variant === 'primary' && 'bg-red-500 text-white',
        variant === 'secondary' &&
          'border bg-white text-gray-900 hover:bg-gray-100/50',
      )}
    >
      {children}
    </Link>
  )
}

const Template = () => {
  const router = usePathname()
  const slug = router.replace('/templates/', '')

  const template = TemplateData.find((t) => t.id === slug)

  if (!template) {
    return <NotFound />
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between text-center">
      <Header />
      <div className="mx-5 mb-24 mt-[5rem] flex w-full max-w-7xl flex-col items-center justify-center gap-5 md:mt-[10rem]">
        <div className="flex flex-col items-start justify-center gap-20 px-4 lg:flex-row lg:items-start">
          <div className="flex flex-col items-start justify-center gap-4 md:sticky md:top-[10rem]">
            <Link
              href="/templates"
              className="group flex flex-row items-center text-xs uppercase text-gray-600/80"
            >
              <ChevronLeft
                size={15}
                className="transition-all duration-300 group-hover:-translate-x-1"
              />
              Back
            </Link>
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-xl font-medium">{template.name}</h1>
              {template.discount && (
                <div className="text-xs font-medium text-red-500">
                  {template.discount}% off
                </div>
              )}
            </div>
            <div className="flex flex-row items-center gap-1 text-lg">
              <p className="font-semibold text-red-500">$19</p>
              <p className="text-xs text-gray-600/50 line-through">$39</p>
            </div>
            <div className="mt-2 max-w-sm text-left text-sm text-gray-600 dark:text-gray-200">
              {template.description}
            </div>
            <div className="flex flex-row gap-3">
              <FramerLogo className="h-5 w-5 brightness-0  dark:invert" />
              <Nextjs className="h-5 w-5" />
              <TailwindCSS className="h-5 w-5 brightness-0  dark:invert" />
            </div>
            <div className="flex flex-row gap-2">
              <Link
                href={template.downloadLink || ''}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-500/90"
              >
                Download Template
              </Link>
              <TemplateButton
                href={template.livePreviewLink}
                variant="secondary"
              >
                Live Preview
              </TemplateButton>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {template.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={template.name}
                width={1200}
                height={600}
                className="w-full max-w-[800px] rounded-lg border"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Template
