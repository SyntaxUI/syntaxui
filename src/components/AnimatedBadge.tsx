'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AnimatedBadge = () => {
  const router = useRouter()

  return (
    <motion.button
      className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px] ring-1 ring-inset ring-gray-100/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        router.push('https://github.com/syntaxUI/syntaxui')
      }}
    >
      <span className="absolute inset-[-1000%] animate-discord-button bg-[conic-gradient(from_calc(var(--discord-button-angle)+60deg)_at_calc(50%+var(--discord-button-x))_50%,transparent_50%,#1d0005_98%,transparent_100%)]"></span>
      <span className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-[12px] font-medium uppercase text-white backdrop-blur">
        <span>
          Star On Github
          <Star
            fill="#dba809"
            className="ml-2 inline-block h-4 w-4 text-yellow-500"
          />
        </span>
      </span>
    </motion.button>
  )
}

export default AnimatedBadge
