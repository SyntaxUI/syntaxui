'use client'
import { motion } from 'framer-motion'

const BorderRotateButton = () => {
  return (
    <motion.button
      className="relative flex overflow-hidden rounded-full"
      initial={{
        scale: 1,
        padding: '3px',
      }}
      whileTap={{
        scale: 0.95,
        padding: '0px',
      }}
      whileHover={{
        padding: '0px',
        scale: 1.05,
      }}
      transition={{
        stiffness: 500,
        damping: 20,
        type: 'spring',
      }}
    >
      <motion.span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_calc(var(--border-rotate-button-angle)+60deg)_at_calc(50%+var(--border-rotate-button-x))_50%,#fb3b53_50%,#ffccd2_98%,#fb3b53_100%)]"
        initial={
          {
            '--border-rotate-button-angle': '0deg',
            '--border-rotate-button-x': '20px',
          } as any
        }
        animate={
          {
            '--border-rotate-button-angle': '360deg',
            '--border-rotate-button-x': ['18px', '-18px', '18px'],
          } as any
        }
        transition={{
          '--border-rotate-button-angle': {
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          },
          '--border-rotate-button-x': {
            duration: 6,
            repeat: Infinity,
            ease: [0.445, 0.05, 0.55, 0.95],
            times: [0, 0.5, 1],
          },
        }}
      />

      <span className="rounded-full bg-[#bd1212] px-4 py-1 text-xs text-[#f6f6f6] backdrop-blur-sm">
        SyntaxUI
      </span>
    </motion.button>
  )
}

export default BorderRotateButton
