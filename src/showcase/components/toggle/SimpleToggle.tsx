'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SimpleToggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void
}) => {
  const [toggled, setToggled] = useState(true)

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <button
      className={`h-[25px] w-[45px] cursor-pointer rounded-full ${
        toggled ? 'bg-red-500' : 'bg-gray-700/50'
      }`}
      onClick={handleToggle}
    >
      <motion.span
        className="inline-block aspect-square h-full transform rounded-full bg-white shadow-lg"
        variants={{
          animate: {
            x: toggled ? 10 : -10,
            opacity: toggled ? 1 : 0.8,
            scale: toggled ? 0.7 : 0.6,
          },
        }}
        initial="animate"
        animate="animate"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  )
}

export default SimpleToggle
