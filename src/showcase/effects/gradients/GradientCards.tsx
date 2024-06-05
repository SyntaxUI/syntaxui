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
