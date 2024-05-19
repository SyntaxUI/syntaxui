// onLabel takes a string that will be displayed when the toggle is on.
// offLabel takes a string that will be displayed when the toggle is off.

// Don't forget to remove the exports at the end of the file before usage.

'use client'
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SlideToggleProps {
  onToggle?: (toggled: boolean) => void
  onLabel?: string
  offLabel?: string
  isToggled? : boolean
}

interface SlideToggleContextType {
  toggled: boolean
}

const SlideToggleContext = createContext<SlideToggleContextType | null>(null)

const SlideToggle: React.FC<SlideToggleProps> = ({
  onToggle,
  offLabel,
  onLabel,
  isToggled,
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
        className="relative flex h-[25px] min-w-[45px] cursor-pointer items-center overflow-hidden rounded-full bg-gray-500/50 outline-offset-2 duration-200 focus-within:outline-red-500/70"
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
            <OFFLabel>{offLabel}</OFFLabel>
            <ONLabel>{onLabel}</ONLabel>
            <div className="pointer-events-none select-none p-2 pr-[25px] opacity-0">
              <span className="text-transparent text-nowrap">{onLabel}</span>
              <br />
              <span className="text-transparent text-nowrap">{offLabel}</span>
            </div>
          </>
        )}
      </motion.button>
    </SlideToggleContext.Provider>
  )
}

const OFFLabel = ({ children }: { children: ReactNode }) => {
  const context = useContext(SlideToggleContext)

  if (!context) {
    throw new Error('Context Error!')
  }

  const { toggled } = context


  return (
    <AnimatePresence initial={false}>
      {!toggled && (
        <motion.div
          initial={{
            x: 20,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: 20,
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
          className="absolute right-0 p-2 pl-[25px]"
        >
          <span className="fill-black/40 text-black/40 text-nowrap">{children}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ONLabel = ({ children }: { children: ReactNode }) => {
  const context = useContext(SlideToggleContext)

  if (!context) {
    throw new Error('Context Error!')
  }

  const { toggled } = context

  return (
    <AnimatePresence initial={false}>
      {toggled && (
        <motion.div
          initial={{
            x: -20,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: -20,
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
          className="absolute left-0 z-10 p-2 pr-[25px]"
        >
          <span className=" text-white text-nowrap">{children}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Uncomment this!
// export default SlideToggle

// Remove this!
const SlideTogglePreview = () => <SlideToggle onLabel='Live' offLabel='Go live' isToggled/>;
export default SlideTogglePreview;