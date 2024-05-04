'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function SpinningCubeLoader() {
  const cubeVariants = {
    spin: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="flex items-center justify-center">
      <LazyMotion features={domAnimation}>
        <m.div
          className="h-16 w-16 rounded-2xl bg-red-500"
          variants={cubeVariants}
          animate="spin"
          style={{ perspective: 200 }}
        ></m.div>
      </LazyMotion>
    </div>
  )
}
