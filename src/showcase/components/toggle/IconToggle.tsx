'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const IconToggle = ({
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
      className={`flex h-[25px] w-[45px] cursor-pointer items-center rounded-full p-[3px] justify-start duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? '#fb3a5d' : '#24252d50',
        justifyContent: toggled ? 'end' : 'start',
      }}
    >
      <motion.div
        className="flex aspect-square h-full items-center justify-center rounded-full bg-white shadow-lg"
        layout
        transition={{ duration: 0.2 }}
        animate={{
          scale: toggled ? 1 : 0.9,
        }}
      >
        <AnimatePresence mode="wait">
          {toggled ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >
              <Check size={13} strokeWidth={3} className="text-red-500" />
            </motion.div>
          ) : (
            <motion.div
              key="x"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >
              <X size={13} strokeWidth={3} className="text-[#24252d50]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  )
}

export default IconToggle
