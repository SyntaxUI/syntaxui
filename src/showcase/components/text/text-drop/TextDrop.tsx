'use client'

import { motion } from 'framer-motion'
import DropCharacters from './DropCharacters'

const TextDrop = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <div>
        <DropCharacters
          text={'SyntaxUI'}
          className="text-3xl font-semibold tracking-tight text-red-500"
        />
      </div>
    </motion.div>
  )
}

export default TextDrop
