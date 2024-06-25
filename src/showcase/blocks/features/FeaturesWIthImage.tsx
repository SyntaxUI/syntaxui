import { motion } from 'framer-motion'
import { BadgeDollarSign, BookOpenText, Rss } from 'lucide-react'
import React, { useState } from 'react'

const ImageSection = () => {
  const [activeImage, setActiveImage] = useState(1)

  const ImageTabs = [
    {
      name: 'UI Library',
      description:
        'Build faster. Launch sooner. Build your next project with SyntaxUI.',
      icon: <Rss />,
    },
    {
      name: 'Templates',
      description:
        'Get templates made with Next.js and Tailwind CSS for your next project.',
      icon: <BadgeDollarSign />,
    },
    {
      name: 'Ui Blocks',
      description: 'Get UI blocks and components for your next project.',
      icon: <BookOpenText />,
    },
  ]

  // Images taken from https://dashboardsdesign.com/

  const Images = [
    {
      imageNumber: 1,
      imageSource:
        'https://dashboardsdesign.com/img/dashboards/dashboard-05-custom.png',
    },
    {
      imageNumber: 2,
      imageSource:
        'https://dashboardsdesign.com/img/dashboards/dashboard-02.png',
    },
    {
      imageNumber: 3,
      imageSource:
        'https://dashboardsdesign.com/img/dashboards/dashboard-03.png',
    },
  ]

  const handleImageChange = (index: number) => {
    setActiveImage(index)
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-2xl space-y-4 sm:text-center">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
          See SyntaxUI in action
        </p>
        <p className="text-md text-gray-600">
          Watch how SyntaxUI can help you get started with your project in
          seconds with our pre-built components and blocks.
        </p>
      </div>
      <div className="image-navigation mt-8 flex w-full items-center justify-center text-center">
        <div className="mb-10 flex w-full max-w-6xl flex-col gap-2 md:flex-row">
          {ImageTabs.map((tab, index) => (
            <button
              key={index}
              className={`group relative flex w-full flex-col items-start p-3 text-left`}
              onClick={() => handleImageChange(index + 1)}
            >
              <div
                className={`mb-3 ${
                  activeImage === index + 1
                    ? `bg-red-500 text-red-100`
                    : `bg-red-100 text-red-500`
                } z-10 rounded-lg p-1 group-hover:bg-red-500 group-hover:text-red-100`}
              >
                {tab.icon}
              </div>
              <div className="z-10 mb-2 text-xs font-semibold">{tab.name}</div>
              <p className="z-10 m-0 text-xs text-gray-600 md:text-sm">
                {tab.description}
              </p>
              {activeImage === index + 1 && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: 'spring', duration: 0.3 }}
                  className="absolute inset-0 z-0 rounded-md bg-red-100"
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-6xl rounded-lg border">
        {Images.map((image, index) => (
          <div key={index} data-image-number={image.imageNumber}>
            {activeImage === image.imageNumber && (
              <motion.img
                src={image.imageSource}
                alt={`Image ${image.imageNumber}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSection
