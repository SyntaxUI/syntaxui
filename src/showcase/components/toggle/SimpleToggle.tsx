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
    <motion.button
      className={`flex h-[25px] w-[45px] cursor-pointer items-center rounded-full p-[2px] ${
        toggled ? 'bg-red-500' : 'bg-gray-700/50'
      }`}
      onClick={handleToggle}
    >
      <motion.span
        className="h-[20px] w-[20px] rounded-full bg-white shadow-lg"
        layout
        style={{ marginLeft: toggled ? '20px' : '0px' }}
      />
    </motion.button>
  )
}

export default SimpleToggle
