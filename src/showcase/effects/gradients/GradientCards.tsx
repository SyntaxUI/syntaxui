'use client'
import { motion } from 'framer-motion'
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
]

const GradientCards = () => {
  const [copied, setCopied] = useState(false)

  const copyGradient = (gradient: string) => {
    navigator.clipboard.writeText(gradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 500)
    toast.success('Gradient copied to clipboard!')
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="group no-underline"
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="overflow group relative rounded-xl border border-gray-200 transition-all ease-in-out hover:cursor-pointer"
              onClick={() => copyGradient(item.gradient)}
            >
              <div
                className={`relative flex h-[9rem] items-center justify-center rounded-t-xl border-b text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem] ${item.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {copied ? (
                    <Check className="text-2xl text-white" />
                  ) : (
                    <Copy className="text-2xl text-white" />
                  )}
                </div>
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default GradientCards
