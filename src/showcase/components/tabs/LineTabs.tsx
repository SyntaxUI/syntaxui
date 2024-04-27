'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = ['Home', 'Docs', 'Components', 'Hooks']

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  customID?: string
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected ? 'text-red-500' : ' hover:text-gray-900'
      } relative rounded-md  px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-red-500/50`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + 'linetab'}
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-red-500"></span>
        </motion.div>
      )}
    </button>
  )
}

interface LineTabProps {
  center?: boolean
  customID?: string
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0])
  return (
    <div
      className={` ${
        center ? 'justify-center ' : ''
      } border-black-500/25 mb-8 flex flex-wrap items-center gap-2 border-b`}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          customID={customID}
        />
      ))}
    </div>
  )
}

export default LineTabs
