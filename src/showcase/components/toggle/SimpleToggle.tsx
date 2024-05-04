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
      className={`flex h-[25px] w-[45px] cursor-pointer items-center rounded-full p-[2px]`}
      onClick={handleToggle}
      animate={{ backgroundColor: toggled ? '#fb3a5d' : '#24252d50' }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="rounded-full bg-white shadow-lg"
        layout
        transition={{ duration: 0.2 }}
        style={{
          width: toggled ? '19px' : '16px',
          height: toggled ? '19px' : '16px',
          marginLeft: toggled ? '20px' : '2px',
        }}
      />
    </motion.button>
  )
}

export default SimpleToggle
