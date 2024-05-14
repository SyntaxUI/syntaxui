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
      className={`flex h-[25px] w-[45px] cursor-pointer items-center rounded-full p-[4px] duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? '#fb3a5d' : '#24252d50',
        justifyContent: toggled ? 'end' : 'start',
      }}
    >
      <motion.span
        className="h-full aspect-square rounded-full bg-white shadow-lg"
        layout
        transition={{ duration: 0.2 }}
        animate={{
          scale: toggled ? 1 : 0.8,
        }}
      />
    </button>
  )
}

export default SimpleToggle
