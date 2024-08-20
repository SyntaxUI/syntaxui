'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { TemplateData } from '@/data/TemplateData'
import Link from 'next/link'
import { motion, spring } from 'framer-motion'

interface TemplateInfoProps {
  name: string
  image: string
  price: number
  originalPrice: number
  link: string
  category: string
}

const TemplateInfo = ({
  name,
  image,
  price,
  originalPrice,
  link,
  category,
}: TemplateInfoProps) => {
  const imageAnimate = {
    initial: { y: '0%' },
    animate: {
      y: '-5%',
    },
  }

  return (
    <motion.div
      whileHover="animate"
      className="group flex cursor-pointer flex-col items-start justify-center rounded-2xl"
    >
      <Link href={link}>
        <motion.img
          variants={imageAnimate}
          src={image}
          alt={name}
          width={1200}
          height={600}
          className="w-full max-w-[400px] rounded-lg border bg-gray-100 px-5 pt-5"
        />
        <div className="mt-3 flex w-full flex-row items-center justify-between">
          <div className="flex w-full flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-md text-left font-medium text-gray-900 transition-all duration-300 ease-in-out group-hover:text-red-500 dark:text-white">
                {name}
              </h1>
              <p className="rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-medium capitalize text-white">
                {category}
              </p>
            </div>
            <div className="flex flex-row gap-2 text-sm transition-all duration-300 ease-in-out group-hover:text-red-500 dark:text-white">
              {price && <p>${price}</p>}
              {originalPrice && (
                <p className="text-xs text-gray-600/50 line-through">
                  ${originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const Templates = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between text-center">
      <Header />
      <div className="mx-5 mb-24 mt-[10rem] flex w-full max-w-7xl flex-col items-center justify-center gap-5">
        <div className="mx-5 mb-5 flex flex-col items-center">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            <span className="text-red-500">Minimal Website,</span> Simple Code
          </h1>
          <p className="mt-3 max-w-2xl text-center text-sm text-gray-600 md:text-base dark:text-gray-300">
            Get templates made with Next.js and Tailwind CSS for your next
            project.
          </p>
        </div>
        {/* <Pages */}
        <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TemplateData.map((template, index) => (
            <TemplateInfo
              key={index}
              name={template.name}
              image={template.images[0]}
              price={template.price}
              originalPrice={template.originalPrice}
              link={`/templates/${template.id}`}
              category={template.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Templates
