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

export const StaggeredFadeLoader = () => {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-4 w-4 rounded-full bg-red-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      ))}
    </div>
  )
}

export const MorphingShapesLoader = () => {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M20,50 Q50,0 80,50 Q50,100 20,50 Z"
          fill="none"
          stroke="#FF4136"
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  )
}

export const NeonGlowLoader = () => {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-20 w-20"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute  h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
            variants={circleVariants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              boxShadow: `0 0 20px 5px ${
                ['#fb3a5d', '#00FFFF', '#FFFF00'][index]
              }`,
              filter: 'blur(10px)',
            }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export const PulsatingGradientLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ filter: 'blur(10px)' }}
      ></motion.div>
    </div>
  )
}

export const RotatingRingsLoader = () => {
  const ringVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 360 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-16 w-16"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-t-2 border-orange-500 border-transparent"
            variants={ringVariants}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
            style={{ borderWidth: `${2 * (index + 1)}px` }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}
