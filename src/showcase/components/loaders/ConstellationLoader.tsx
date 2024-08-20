'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Star {
  x: number
  y: number
  size: number
}

const ConstellationLoader: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setStars(
      Array.from(
        { length: 20 },
        (): Star => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 1,
        }),
      ),
    )
  }, [])

  return (
    <div className="relative h-40 w-40 overflow-hidden rounded-xl">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500 dark:bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <motion.div
        className="absolute h-1 w-1 rounded-full bg-transparent"
        animate={{
          x: stars.map((star) => `${star.x}%`),
          y: stars.map((star) => `${star.y}%`),
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          times: stars.map((_, i) => i / (stars.length - 1)),
          repeat: Infinity,
        }}
      />
    </div>
  )
}

export default ConstellationLoader
