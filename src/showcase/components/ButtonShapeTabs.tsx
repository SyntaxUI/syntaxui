'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = ['Home', 'Docs', 'Components', 'Effects']

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? 'text-white' : 'text-gray-500 hover:text-gray-900'
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-red-500"
        ></motion.span>
      )}
    </button>
  )
}

const ButtonShapeTabs = () => {
  const [selected, setSelected] = useState<string>(tabs[0])
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  )
}

export default ButtonShapeTabs
