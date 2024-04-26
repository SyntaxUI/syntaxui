'use client'
import { motion } from 'framer-motion'

export default function NeonGlowLoader() {
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
              boxShadow: `0 0 20px 5px ${['#fb3a5d', '#00FFFF', '#FFFF00'][index]}`,
              filter: 'blur(10px)',
            }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}
