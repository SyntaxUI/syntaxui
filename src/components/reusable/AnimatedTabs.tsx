import React from 'react'
import { motion } from 'framer-motion'

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  customID?: string
  icon?: React.ComponentType<{ className?: string }>
}

const Tab = ({
  text,
  selected,
  setSelected,
  customID,
  icon: Icon,
}: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={
        (selected ? 'text-red-500' : 'hover:text-red-500') +
        ' relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300'
      }
    >
      <div className="flex items-center space-x-1">
        {Icon && (
          <Icon
            className={
              selected ? 'h-4 w-4 text-red-500' : 'h-4 w-4 text-gray-400'
            }
          />
        )}
        <span
          className={`relative z-10 capitalize ${selected ? 'text-red-500' : 'text-gray-400'}`}
        >
          {text}
        </span>
      </div>
      {selected && (
        <motion.div
          className="absolute bottom-0 left-0 top-1 flex size-full items-end justify-center"
          layoutId={customID + 'linetab'}
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-red-500/80"></span>
        </motion.div>
      )}
    </button>
  )
}

interface AnimatedTabsProps {
  tabs?: string[]
  selected: string
  setSelected: (text: string) => void
  center?: boolean
  customID?: string
  icons?: React.ComponentType<{ className?: string }>[]
}

const AnimatedTabs = ({
  tabs,
  selected,
  setSelected,
  center,
  customID,
  icons = [],
}: AnimatedTabsProps) => {
  return (
    <div
      className={
        (center ? 'justify-center ' : '') +
        'flex  w-full items-center justify-end  gap-2 border-gray-500/25 pb-1 '
      }
    >
      {tabs?.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          customID={customID}
          icon={icons[index]}
        />
      ))}
    </div>
  )
}

export default AnimatedTabs
