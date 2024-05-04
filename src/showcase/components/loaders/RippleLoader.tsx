'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function RippleLoader() {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 3,
    },
  }

  const rippleTransition = {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1,
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-10">
        <LazyMotion features={domAnimation}>
          <m.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={rippleTransition}
          ></m.div>
          <m.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay: 0.5 }}
          ></m.div>
          <m.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay: 1 }}
          ></m.div>
        </LazyMotion>
      </div>
    </div>
  )
}
