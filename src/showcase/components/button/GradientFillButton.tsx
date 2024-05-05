'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const GradientFillButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] border-red-500/20 bg-red-100 px-5 py-1.5 text-xs font-medium text-red-500 transition-colors duration-500 hover:border-red-500 hover:text-white"
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
            className="absolute inset-0 z-0 bg-gradient-to-t from-red-600 to-red-500"
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default GradientFillButton
