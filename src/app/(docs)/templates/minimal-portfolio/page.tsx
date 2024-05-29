import Image from 'next/image'
import React from 'react'

const MinimalPortfolio = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row items-center justify-between px-4">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-xl font-medium">Minimal Portfolio</h1>
          <p className="mt-2 max-w-sm text-sm text-gray-600">
            This template is designed for a minimal portfolio website with a
            clean and modern design. It features a hero section, a portfolio
            section, and a footer. The hero section includes a call-to-action
            button and a background image. The portfolio section displays a grid
            of portfolio items, each with a thumbnail image, title, and
            description. The footer includes social media links and copyright
            information.
          </p>
          <div className="flex flex-row gap-2">
            <button className="rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white">
              Download Template
            </button>
            <button className="rounded-lg  border px-2 py-1 text-sm">
              Live Preview
            </button>
          </div>
        </div>
        <Image
          src="/images/templates/minimal-portfolio.png"
          alt="Minimal Portfolio"
          width={1200}
          height={600}
          className="w-full max-w-[600px] rounded-lg"
        />
      </div>
    </div>
  )
}

export default MinimalPortfolio
