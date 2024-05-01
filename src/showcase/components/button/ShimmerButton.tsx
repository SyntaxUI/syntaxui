'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ShimmerButton = () => {
  return (
    <motion.button
      className="inline-flex overflow-hidden rounded-lg bg-[linear-gradient(120deg,#fb3b53_calc(var(--shimmer-button-x)-25%),#f6f6f6_var(--shimmer-button-x),#fb3b53_calc(var(--shimmer-button-x)+25%))] [--shimmer-button-x:0%] *:[--border:0.125rem]"
      initial={
        {
          scale: 1,
          '--shimmer-button-x': '-100%',
        } as any
      }
      animate={
        {
          '--shimmer-button-x': '200%',
        } as any
      }
      transition={{
        stiffness: 500,
        damping: 20,
        type: 'spring',
        '--shimmer-button-x': {
          duration: 3,
          repeat: Infinity,
          ease: [0.445, 0.05, 0.55, 0.95],
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <span className="m-[var(--border)] rounded-[calc(0.5rem-var(--border))] bg-[#f8607b]/90 px-[calc(1rem-var(--border))] py-[calc(0.25rem-var(--border))] text-[#f6f6f6] backdrop-blur-sm">
        Syntax UI
      </span>
    </motion.button>
  )
}

export default ShimmerButton
