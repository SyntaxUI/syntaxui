'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function OrbitingLoader() {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation}>
        <m.div
          className="flex"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <m.div
            className="mx-1 h-4 w-4 rounded-full bg-red-500"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></m.div>
          <m.div
            className="mx-1 h-4 w-4 rounded-full bg-red-500"
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          ></m.div>
          <m.div
            className="mx-1 h-4 w-4 rounded-full bg-red-500"
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          ></m.div>
        </m.div>
      </LazyMotion>
    </div>
  )
}
