'use client'

import { motion } from 'framer-motion'
import { Check, ChevronRight, Zap } from 'lucide-react'
import React, { useEffect } from 'react'

const RotatingCompleteButton = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, 2000)
    }
  }, [isOpen])

  return (
    <motion.button
      className={`rounded-full ${
        isOpen ? 'bg-green-500' : 'bg-red-500'
      } px-4 py-2 font-semibold text-white`}
      animate={{
        rotate: isOpen ? 180 : 0,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isOpen ? (
          <span className="flex rotate-180 items-center gap-1 text-sm font-medium">
            Marked as complete <Check size={16} />
          </span>
        ) : (
          <span className="flex items-center gap-1 text-sm font-medium">
            Mark as complete <ChevronRight size={16} />
          </span>
        )}
      </motion.span>
    </motion.button>
  )
}

export default RotatingCompleteButton
