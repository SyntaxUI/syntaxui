'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const GlassmorphismButton = () => {
  const [state, setState] = useState('normal')

  const variants = {
    normal: {
      left: '0.3rem',
      top: '-0.3rem',
    },
    hover: {
      top: '-0.5rem',
    },
    tap: {
      left: '0.125rem',
      top: '-0.125rem',
    },
  }

  return (
    <button
      className={'group/button relative'}
      onMouseDown={() => setState('tap')}
      onMouseUp={() => setState('hover')}
      onTouchStart={() => setState('tap')}
      onTouchEnd={() => setState('hover')}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('normal')}
    >
      <span className="inline-flex rounded-lg bg-red-500 px-4 py-2 font-semibold text-transparent">
        Syntax UI
      </span>
      <motion.span
        className=" text-large absolute flex h-full w-full items-center justify-center rounded-lg border border-[rgba(255,255,255,0.18)] bg-gradient-to-tl from-[rgba(254,202,202,0.5)] to-[rgba(252,165,165,0.5)] font-bold  text-black text-opacity-70 shadow backdrop-blur-[2px]"
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20,
        }}
        variants={variants}
        initial="normal"
        animate={state}
      >
        Syntax UI
      </motion.span>
    </button>
  )
}

export default GlassmorphismButton
