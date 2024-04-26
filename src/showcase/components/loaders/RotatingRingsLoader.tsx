'use client'
import { motion } from 'framer-motion'

export default function RotatingRingsLoader() {
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
