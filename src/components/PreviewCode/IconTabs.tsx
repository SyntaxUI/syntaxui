'use client'

import { useState, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Fingerprint,
  Bolt,
  Info,
  CircleUserRound,
  CircleDollarSign,
} from 'lucide-react'

const tabs = [
  { title: 'General', icon: <Bolt /> },
  { title: 'About', icon: <Info /> },
  { title: 'Billing', icon: <CircleDollarSign /> },
  { title: 'Privacy', icon: <Fingerprint /> },
  { title: 'Profile', icon: <CircleUserRound /> },
]

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  animate: (selected: boolean) => ({
    gap: selected ? '.5rem' : 0,
    paddingLeft: selected ? '1rem' : '.5rem',
    paddingRight: selected ? '1rem' : '.5rem',
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.35 }

interface TabProps {
  text: string
  selected: boolean
  setSelected: (tab: Object) => void
  children: ReactNode
  index: number
}

const Tab = ({ text, selected, setSelected, index, children }: TabProps) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      custom={selected}
      onClick={() => setSelected(tabs[index])}
      transition={transition}
      className={`${
        selected ? 'bg-red-500/15 text-red-500 ' : ' hover:text-gray-900'
      } relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-red-500/50`}
    >
      {children}
      <AnimatePresence>
        {selected && (
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="overflow-hidden"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// IconTabs component
const IconTabs = ({ center }: { center?: boolean }) => {
  // State to manage selected tab
  const [selected, setSelected] = useState<Object>(tabs[0])

  return (
    <div
      className={` ${
        center ? 'justify-center ' : ''
      } border-black-500/25 mb-8 flex flex-wrap items-center gap-2 border-b pb-2`}
    >
      {tabs.map((tab, index) => (
        <Tab
          text={tab.title}
          selected={selected === tab}
          setSelected={setSelected}
          index={index}
          key={tab.title}
        >
          {tab.icon}
        </Tab>
      ))}
    </div>
  )
}

export default IconTabs
