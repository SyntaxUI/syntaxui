'use client'
import React, { useState } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

const NeubrutalismToggle = ({
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
    <button
      className={
        'relative h-[25px] w-[45px] translate-x-1 translate-y-1 cursor-pointer  rounded-full bg-[#222222]'
      }
      onClick={handleToggle}
    >
      <LazyMotion features={domAnimation}>
        <m.span
          className={`flex h-full w-full items-center justify-center  rounded-full border-[2px]  border-[#222222] ${toggled ? 'bg-[#ff527a]' : 'bg-gray-400'} p-[2px]`}
          variants={{
            off: { x: 0, y: 0 },
            on: { x: 3, y: -3 },
          }}
          initial={toggled ? 'on' : 'off'}
          animate={toggled ? 'on' : 'off'}
          transition={springConfig}
        >
          <m.span
            className="aspect-square h-full transform rounded-full border-[2px] border-[#222222] bg-white shadow-lg"
            variants={{
              on: { x: 10 },
              off: { x: -10 },
            }}
            initial={toggled ? 'on' : 'off'}
            animate={toggled ? 'on' : 'off'}
            transition={springConfig}
          />
        </m.span>
      </LazyMotion>
    </button>
  )
}

export default NeubrutalismToggle
