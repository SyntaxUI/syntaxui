'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function PulsatingDots() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <LazyMotion features={domAnimation}>
          <m.div
            className="h-3 w-3 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <m.div
            className="h-3 w-3 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: 0.3,
            }}
          />
          <m.div
            className="h-3 w-3 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: 0.6,
            }}
          />
        </LazyMotion>
      </div>
    </div>
  )
}
