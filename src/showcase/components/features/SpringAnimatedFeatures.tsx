'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'syntaxUI',
    description: 'Ready-to-use UI elements designed for rapid development.',
    link: 'https://syntaxui.com',
    image: 'https://ansubkhan.com/images/projects/syntaxUI.svg',
  },
  {
    id: 2,
    name: 'Prettyfolio',
    description: 'A curated collection of portfolios for inspiration.',
    link: 'https://prettyfolio.com',
    image: 'https://ansubkhan.com/images/projects/prettyfolio.png',
  },
  {
    id: 2,
    name: 'Enchant',
    description: 'A vibrant theme for Visual Studio Code.',
    link: 'https://enchant.ansubkhan.com',
    image: 'https://ansubkhan.com/images/projects/enchant.png',
  },
  {
    id: 3,
    name: 'Ansubkhan.com',
    description: 'My personal website, blogs and newsletter.',
    link: 'https://ansubkhan.com',
    image: 'https://ansubkhan.com/images/projects/portfolio.png',
  },
  {
    id: 4,
    name: 'Quote Vault',
    description: 'Social media, but for sharing quotes.',
    link: 'https://quote-vault.vercel.app',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
]

const SpringAnimatedFeatures = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        {' '}
        {ProjectsData.map((project) => {
          return (
            <LazyMotion features={domAnimation} key={project.id}>
            <m.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </m.div>
            </LazyMotion>
          )
        })}
      </div>
    </div>
  )
}

export default SpringAnimatedFeatures
