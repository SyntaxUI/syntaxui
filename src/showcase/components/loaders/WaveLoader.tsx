'use client'

import React from 'react'
import { motion } from 'framer-motion'

const WaveLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="h-8 w-2 rounded bg-red-500"
          animate={{
            scaleY: [1, 1.5, 1],
            translateY: ['0%', '-25%', '0%'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default WaveLoader
