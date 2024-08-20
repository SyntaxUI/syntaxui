'use client'
import Card from '@/showcase/ui-group/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const data = [
  {
    title: 'Sunset',
    gradient: 'bg-gradient-to-r from-[#fb3a5d] via-[#f97316] to-[#eab308]',
  },
  {
    title: 'Tangerine',
    gradient: 'bg-gradient-to-r from-[#fcd34d] via-[#fbbf24] to-[#f59e0b]',
  },
  {
    title: 'Sunrise',
    gradient: 'bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#facc15]',
  },

  {
    title: 'Evening Surf',
    gradient: 'bg-gradient-to-r from-[#fa8cff] via-[#9182ff] to-[#0476ff]',
  },
  {
    title: 'Jet',
    gradient: 'bg-gradient-to-r from-[#bfdbfe] to-[#a5f3fc]',
  },
  {
    title: 'Lavender',
    gradient: 'bg-gradient-to-r from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc]',
  },
  {
    title: 'Electric Blue',
    gradient: 'bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]',
  },
  {
    title: 'Mint',
    gradient: 'bg-gradient-to-r from-[#6ee7b7] via-[#34d399] to-[#10b981]',
  },
  {
    title: 'Ocean Breeze',
    gradient: 'bg-gradient-to-r from-[#22d3ee] via-[#0ea5e9] to-[#0284c7]',
  },
  {
    title: 'Coral Reef',
    gradient: 'bg-gradient-to-r from-[#fca5a5] via-[#f87171] to-[#ef4444]',
  },
  {
    title: 'Citrus Blast',
    gradient: 'bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f59e0b]',
  },
  {
    title: 'Purple Haze',
    gradient: 'bg-gradient-to-r from-[#e879f9] via-[#c084fc] to-[#a855f7]',
  },
  {
    title: 'Emerald City',
    gradient: 'bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#16a34a]',
  },
  {
    title: 'Pink Lemonade',
    gradient: 'bg-gradient-to-r from-[#fbcfe8] via-[#f9a8d4] to-[#f472b6]',
  },
  {
    title: 'Sunset Sands',
    gradient: 'bg-gradient-to-r from-[#fde047] via-[#fb923c] to-[#f97316]',
  },
  {
    title: 'Violet Vibe',
    gradient: 'bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6]',
  },

  {
    title: 'Crimson Tide',
    gradient: 'bg-gradient-to-r from-[#fecaca] via-[#f87171] to-[#dc2626]',
  },
  {
    title: 'Mango Tango',
    gradient: 'bg-gradient-to-r from-[#fcd34d] via-[#fbbf24] to-[#f59e0b]',
  },
  {
    title: 'Blueberry Blast',
    gradient: 'bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]',
  },
  {
    title: 'Mint Chocolate Chip',
    gradient: 'bg-gradient-to-r from-[#d1fae5] via-[#a7f3d0] to-[#6ee7b7]',
  },
  {
    title: 'Cotton Candy',
    gradient: 'bg-gradient-to-r from-[#fae8ff] via-[#e9d5ff] to-[#d8b4fe]',
  },
  {
    title: 'Aqua Marine',
    gradient: 'bg-gradient-to-r from-[#a5f3fc] via-[#67e8f9] to-[#22d3ee]',
  },
  {
    title: 'Lemon Lime',
    gradient: 'bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#facc15]',
  },
  {
    title: 'Rose Quartz',
    gradient: 'bg-gradient-to-r from-[#fda4af] via-[#fb7185] to-[#f43f5e]',
  },
  {
    title: 'Sapphire Sky',
    gradient: 'bg-gradient-to-r from-[#bfdbfe] via-[#93c5fd] to-[#60a5fa]',
  },
  {
    title: 'Lime Zest',
    gradient: 'bg-gradient-to-r from-[#bef264] via-[#a3e635] to-[#84cc16]',
  },
  {
    title: 'Grape Soda',
    gradient: 'bg-gradient-to-r from-[#e879f9] via-[#d946ef] to-[#c026d3]',
  },
  {
    title: 'Ocean Mist',
    gradient: 'bg-gradient-to-r from-[#cffafe] via-[#a5f3fc] to-[#67e8f9]',
  },
  {
    title: 'Peach Melba',
    gradient: 'bg-gradient-to-r from-[#fecdd3] via-[#fda4af] to-[#fb923c]',
  },
  {
    title: 'Electric Indigo',
    gradient: 'bg-gradient-to-r from-[#c7d2fe] via-[#a5b4fc] to-[#818cf8]',
  },
  {
    title: 'Bubblegum Pop',
    gradient: 'bg-gradient-to-r from-[#fbcfe8] via-[#f0abfc] to-[#e879f9]',
  },
  {
    title: 'Teal Zeal',
    gradient: 'bg-gradient-to-r from-[#99f6e4] via-[#5eead4] to-[#2dd4bf]',
  },
  {
    title: 'Flamingo Flair',
    gradient: 'bg-gradient-to-r from-[#fecdd3] via-[#fda4af] to-[#f87171]',
  },
  {
    title: 'Ocean',
    gradient: `bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]`,
  },
  {
    title: 'Forest',
    gradient: `bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#80ed99] to-[#1a4301]`,
  },
  {
    title: 'Night Life',
    gradient: `bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#ff00ff] to-[#00ffff]`,
  },
]

const GradientCards = () => {
  const [copied, setCopied] = useState(false)

  const copyGradient = (gradient: string) => {
    navigator.clipboard.writeText(gradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    toast.success('Gradient copied to clipboard!')
  }

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <button key={index} onClick={() => copyGradient(item.gradient)}>
            <Card title={item.title}>
              <div
                className={`relative flex h-full w-full items-center justify-center ${item.gradient}`}
              >
                <div className="inset-0 flex items-center justify-center  rounded-lg   bg-gray-900 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="checkmark"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <Check size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <Copy size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}

export default GradientCards
