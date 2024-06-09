'use client'

import { motion } from 'framer-motion'

const BounceButton = () => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="rounded-full bg-red-500 px-6 py-2 text-sm font-medium text-white"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        SyntaxUI
      </motion.button>
    </div>
  )
}

export default BounceButton
