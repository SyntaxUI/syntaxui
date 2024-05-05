'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const GradientFillButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] border-gray-600/20 bg-transparent px-5 py-1.5 text-xs font-medium text-gray-600/50 transition-colors duration-500 hover:border-red-100 hover:text-white"
    >
      <span className="relative z-10">SyntaxUI</span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 150,
              damping: 20,
            }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-red-500"
          />
        )}
      </AnimatePresence>
    </button>
  )
}

export default GradientFillButton
