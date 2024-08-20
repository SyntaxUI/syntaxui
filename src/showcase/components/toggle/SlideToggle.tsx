'use client'
import React, { useState, useContext, createContext, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SlideToggleProps {
  onToggle?: (toggled: boolean) => void
  onLabel?: string
  offLabel?: string
  isToggled?: boolean
}

interface SlideToggleContextType {
  toggled: boolean
}

const SlideToggleContext = createContext<SlideToggleContextType | null>(null)

interface LabelProps {
  children: ReactNode
  isOn: boolean
}

const Label: React.FC<LabelProps> = ({ children, isOn }) => {
  const context = useContext(SlideToggleContext)

  if (!context) {
    throw new Error('Context Error!')
  }

  const { toggled } = context

  return (
    <AnimatePresence initial={false}>
      {(isOn && toggled) || (!isOn && !toggled) ? (
        <motion.div
          initial={{
            x: isOn ? -20 : 20,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: isOn ? -20 : 20,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.0,
              bounce: 0,
              duration: 0.3,
            },
          }}
          transition={{
            type: 'spring',
            delay: 0.1,
            bounce: 0,
            duration: 0.6,
          }}
          className={`absolute ${
            isOn ? 'left-0 z-10' : 'right-0'
          } p-2 ${isOn ? 'pr-[25px]' : 'pl-[25px]'}`}
        >
          <span
            className={`text-nowrap text-xs font-medium tracking-tight ${
              isOn ? 'text-white' : 'fill-black/40 text-black/40'
            }`}
          >
            {children}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

const SlideToggle: React.FC<SlideToggleProps> = ({
  onToggle,
  offLabel,
  onLabel,
  isToggled = true,
}) => {
  const [toggled, setToggled] = useState(isToggled || false)
  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    onToggle?.(newState)
  }

  return (
    <SlideToggleContext.Provider value={{ toggled }}>
      <motion.button
        className="relative flex h-[25px] min-w-[45px] cursor-pointer items-center overflow-hidden rounded-full bg-gray-600/50 outline-offset-2 duration-200 focus-within:outline-red-500/70"
        onClick={handleToggle}
        style={{
          justifyContent: toggled ? 'end' : 'start',
        }}
        whileTap="tap"
        variants={{
          tap: { scale: 0.95, transition: { duration: 0, delay: 0 } },
        }}
      >
        <AnimatePresence initial={false}>
          {toggled && (
            <motion.span
              transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
              initial={{ x: '-100%', height: '200%' }}
              animate={{ x: 0, height: '300%' }}
              exit={{ x: '-100%', height: '200%' }}
              className="absolute left-0 flex w-full items-center justify-center rounded-full bg-red-500"
            />
          )}
        </AnimatePresence>
        <motion.span
          variants={{ tap: { aspectRatio: '1/.75' } }}
          className="absolute z-10 m-[3px] aspect-square h-[calc(100%-6px)] rounded-full bg-white shadow-lg"
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          style={{
            left: toggled ? 'unset' : '0',
            right: toggled ? '0' : 'unset',
          }}
        />
        {onLabel && offLabel && (
          <>
            <Label isOn={false}>{offLabel}</Label>
            <Label isOn={true}>{onLabel}</Label>
            <div className="pointer-events-none select-none p-2 pr-[25px] opacity-0">
              <span className="text-nowrap">{onLabel}</span>
              <br />
              <span className="text-nowrap text-transparent">{offLabel}</span>
            </div>
          </>
        )}
      </motion.button>
    </SlideToggleContext.Provider>
  )
}

export default SlideToggle
