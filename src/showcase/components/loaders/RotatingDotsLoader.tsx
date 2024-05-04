'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function RotatingDotsLoader() {
  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  return (
    <div className="flex items-center justify-center">
      <LazyMotion features={domAnimation}>
        <m.div
          className="relative h-12 w-12"
          variants={rotateVariants}
          animate="rotate"
        >
          <m.div
            className="absolute left-0 top-0 h-4 w-4 rounded-full bg-red-500"
            initial="initial"
            animate="animate"
            transition={{ delay: 0 }}
          ></m.div>
          <m.div
            className="absolute right-0 top-0 h-4 w-4 rounded-full bg-red-500"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          ></m.div>
          <m.div
            className="absolute bottom-0 left-0 h-4 w-4 rounded-full bg-red-500"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          ></m.div>
          <m.div
            className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-500"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          ></m.div>
        </m.div>
      </LazyMotion>
    </div>
  )
}
