'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// /Set disableText to true to remove the labels.

// e state of toggled should be:
// const [toggled, setToggled] = useState<boolean>(ON || false);
// I changed it for the sake of a good preview.

const LabeledToggle = ({
  onToggle,
  ON,
  disableText,
}: {
  onToggle?: (toggled: boolean) => void
  ON?: boolean
  disableText?: boolean
}) => {
  const [toggled, setToggled] = useState<boolean>(ON || true)
  const springConfig = { type: 'spring', stiffness: 500, damping: 30 }

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  const spanVariantBuilder = (side: string) => {
    return {
      initial: {
        transformOrigin: side + ' center',
        scaleX: 1.8,
        opacity: 0,
      },
      exit: {
        transformOrigin: side + ' center',
        scaleX: 1.8,
        opacity: 0,
      },
      animate: {
        transformOrigin: side + ' center',
        scaleX: 1,
        opacity: 1,
      },
    }
  }

  const spanTransition = {
    duration: 0.4,
    delay: 0.07,
    type: 'spring',
  }

  return (
    <motion.button
      className={`relative h-[25px] w-[45px] cursor-pointer rounded-full outline-offset-2 duration-200 focus-within:outline-red-500 ${
        toggled ? 'bg-red-500' : 'bg-gray-700/50'
      }`}
      onClick={handleToggle}
      whileTap="tapping"
    >
      <motion.span
        className="inline-block aspect-square h-full transform rounded-full bg-white shadow-lg"
        variants={{
          tapping: {
            aspectRatio: '1/0.85',
            marginLeft: toggled ? '-10px' : '10px',
          },
        }}
        initial={{
          x: toggled ? 10 : -10,
          opacity: toggled ? 1 : 0.8,
          scale: toggled ? 0.7 : 0.5,
        }}
        animate={{
          x: toggled ? 10 : -10,
          opacity: toggled ? 1 : 0.8,
          scale: toggled ? 0.7 : 0.5,
        }}
        transition={springConfig}
      />
      {!disableText && (
        <>
          <AnimatePresence>
            {toggled && (
              <motion.span
                variants={spanVariantBuilder('left')}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={spanTransition}
                className="pointer-events-none absolute left-0 top-0 flex h-full items-center px-1.5 text-[10px] font-semibold text-white"
              >
                ON
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!toggled && (
              <motion.span
                variants={spanVariantBuilder('right')}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={spanTransition}
                className="pointer-events-none absolute right-0 top-0 flex h-full items-center px-1.5 text-[10px] font-semibold text-white/70"
              >
                OFF
              </motion.span>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.button>
  )
}

export default LabeledToggle
