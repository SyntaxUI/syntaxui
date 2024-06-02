'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const templates = [
  {
    name: 'Minimal Portfolio',
    image: '/images/templates/minimal-portfolio.png',
    price: 19,
    originalPrice: 49,
  },
  {
    name: 'Modern Business',
    image: '/images/templates/minimal-portfolio.png',
    price: 29,
    originalPrice: 59,
  },
  {
    name: 'Creative Agency',
    image: '/images/templates/minimal-portfolio.png',
    price: 39,
    originalPrice: 69,
  },
]

interface TemplateInfoProps {
  name: string
  image: string
  price: number
  originalPrice: number
}

const TemplateInfo = ({
  name,
  image,
  price,
  originalPrice,
}: TemplateInfoProps) => (
  <div className="group flex cursor-pointer flex-col items-start justify-center rounded-2xl">
    <Image
      src={image}
      alt={name}
      width={1200}
      height={600}
      className="w-full max-w-[400px] rounded-lg border bg-gray-100 px-5 pt-5"
    />
    <div className="mt-3 flex w-full flex-row items-center justify-between">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <h1 className="text-md text-left font-medium text-gray-900 dark:text-white">
          {name}
        </h1>
        <div className="flex flex-row gap-2 text-sm">
          <p>${price}</p>
          <p className="text-xs text-gray-600/50">${originalPrice}</p>
        </div>
      </div>
    </div>
  </div>
)

const Templates = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between text-center">
      <Header />
      <div className="mx-5 mb-24 mt-[10rem] flex w-full max-w-7xl flex-col items-center justify-center gap-5">
        <div className="mx-5 mb-5 flex flex-col items-center">
          <h1 className="max-w-lg text-3xl font-bold tracking-tight md:max-w-3xl md:text-5xl">
            <span className="text-red-500">Next.js</span> &{' '}
            <span className="text-red-500">Tailwind CSS</span> templates for
            your next project.
          </h1>
          <p className="mt-3 max-w-2xl text-center text-sm text-gray-600 md:text-base dark:text-gray-300">
            Simplify your Next.js app creation process with Tailwind
            CSS-integrated, fully responsive, and SEO-optimized foundation.
          </p>
        </div>
        {/* <Pages */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <TemplateInfo
              key={index}
              name={template.name}
              image={template.image}
              price={template.price}
              originalPrice={template.originalPrice}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Templates
