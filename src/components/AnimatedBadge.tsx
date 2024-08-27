'use client'

import Counter from '@/showcase/components/text/text-ticker/Counter'
import { useStarStore } from '@/store'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useEffect } from 'react'

const AnimatedBadge = () => {
  const { stars, setStars } = useStarStore()

  useEffect(() => {
    const fetchStars = async () => {
      if (stars > 100) return
      try {
        const response = await fetch(
          'https://api.github.com/repos/syntaxui/syntaxui',
          {
            headers: process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN}`,
                  'Content-Type': 'application/json',
                }
              : {},
          },
        )

        if (response.ok) {
          const data = await response.json()
          setStars(data.stargazers_count || 100)
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error)
      }
    }

    fetchStars()
  }, [stars, setStars])

  return (
    <motion.a
      href="https://github.com/syntaxUI/syntaxui"
      target="_blank"
      rel="noopener noreferrer"
      className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px] ring-1 ring-inset ring-gray-100/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inset-[-1000%] animate-discord-button bg-[conic-gradient(from_calc(var(--discord-button-angle)+60deg)_at_calc(50%+var(--discord-button-x))_50%,transparent_50%,#1d0005_98%,transparent_100%)]"></span>
      <span className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-[12px] font-medium uppercase text-white backdrop-blur">
        <span className="flex items-center gap-2">
          Star On Github
          <span className="h-4 w-[1px] bg-gray-200/50"></span>{' '}
          <span className="flex items-center tabular-nums">
            <Counter value={stars} />
            <Star
              fill="#dba809"
              className="ml-2 inline-block h-4 w-4 text-yellow-500"
            />
          </span>
        </span>
      </span>
    </motion.a>
  )
}

export default AnimatedBadge
