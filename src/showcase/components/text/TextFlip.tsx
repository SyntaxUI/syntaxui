'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const text = ['Syntax UI', 'UI Library', 'Text Flip']

const TextFlip = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex w-full items-center justify-center py-4 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute cursor-pointer text-3xl font-semibold tracking-tight text-red-500"
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TextFlip
