'use client'

import { motion } from 'framer-motion'

export const BounceLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white">
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.3s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.13s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500"></div>
    </div>
  )
}

export const ClassicLoader = () => {
  return (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
  )
}

export const OrbitingLoader = () => {
  return (
    <div className="flex">
      <motion.div
        className="flex"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        ></motion.div>
      </motion.div>
    </div>
  )
}
