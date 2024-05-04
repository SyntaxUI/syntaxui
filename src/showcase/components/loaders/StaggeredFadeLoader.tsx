'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function StaggeredFadeLoader() {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <LazyMotion features={domAnimation} key={index}>
          <m.div
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
          ></m.div>
        </LazyMotion>
      ))}
    </div>
  )
}
