'use client'

import { motion, useAnimation } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { useState } from 'react'

const EcoModeButton = () => {
  const [isActivated, setIsActivated] = useState(false)
  const leafControls = useAnimation()

  const handleClick = async () => {
    setIsActivated(!isActivated)
    await leafControls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    })
  }

  return (
    <motion.button
      className="relative overflow-hidden rounded-full bg-red-500 px-4 py-3 text-sm font-medium text-white"
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-green-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActivated ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div className="relative z-10 flex items-center justify-center space-x-1">
        <Leaf size={16} />
        <span>{isActivated ? 'Eco Mode On' : 'Eco Mode Off'}</span>
      </motion.div>
      {isActivated && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-green-200"
              style={{
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  )
}

export default EcoModeButton
