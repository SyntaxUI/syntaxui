'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AniamtedBadge = () => {
  const router = useRouter()

  return (
    <motion.button
      className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px] ring-1 ring-inset ring-blue-700/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        // window.open('https://cal.com/ansub/15')
        // window.open('https://discord.com/invite/P8GXYyH3ZU')
        router.push('https://pro.syntaxui.com/')
        // posthog.capture('meeting_button_clicked')
      }}
    >
      <span className="absolute inset-[-1000%] animate-discord-button bg-[conic-gradient(from_calc(var(--discord-button-angle)+60deg)_at_calc(50%+var(--discord-button-x))_50%,transparent_50%,#fb3a5d_98%,transparent_100%)]"></span>
      <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[12px] font-medium uppercase text-red-500 backdrop-blur">
        <span>
          Get Premium Templates
          <ChevronRight className="inline-block h-4 w-4 text-red-400" />
        </span>
      </span>
    </motion.button>
  )
}

export default AniamtedBadge
