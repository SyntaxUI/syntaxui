'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const SimpleToggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void
}) => {
  const [toggled, setToggled] = useState(true)
  const springConfig = { type: 'spring', stiffness: 500, damping: 30 }

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <motion.button
      className={`h-[25px] w-[45px] cursor-pointer rounded-full ${
        toggled ? 'bg-red-500' : 'bg-gray-700/50'
      }`}
      onClick={handleToggle}
      transition={springConfig}
    >
      <motion.span
        className="inline-block aspect-square h-full transform rounded-full bg-white shadow-lg"
        animate={{
          x: toggled ? 10 : -10,
          opacity: toggled ? 1 : 0.8,
          scale: toggled ? 0.7 : 0.6,
        }}
        transition={springConfig}
      />
    </motion.button>
  )
}
