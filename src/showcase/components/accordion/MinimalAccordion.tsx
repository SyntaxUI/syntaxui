import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  content: string
  isExpanded: boolean
  onToggle: () => void
  backgroundColor: string
}

interface AccordionProps {
  items: Array<{
    title: string
    content: string
    backgroundColor: string
  }>
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
  backgroundColor,
}) => {
  const cardVariants: Variants = {
    collapsed: { height: '60px', backgroundColor: '#fafafa' },
    expanded: { height: 'auto', backgroundColor },
  }

  const contentVariants: Variants = {
    collapsed: { opacity: 0, y: -20 },
    expanded: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  }

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  }

  return (
    <motion.div
      className="w-90 my-4 h-full cursor-pointer select-none overflow-hidden rounded-lg border"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900">
        <h2 className="m-0 text-sm font-semibold ">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <p className="m-0 text-sm text-gray-900">{content}</p>
      </motion.div>
    </motion.div>
  )
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          backgroundColor={item.backgroundColor}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

// Sample accordion items with custom background colors
const accordionItems = [
  {
    title: 'Explore Knowledge',
    content:
      'Discover new worlds of information with our interactive learning platform.',
    backgroundColor: '#e6f7ff',
  },
  {
    title: 'Innovative Learning',
    content:
      'Experience cutting-edge educational techniques that adapt to your unique learning style.',
    backgroundColor: '#f6ffed',
  },
  {
    title: 'Global Community',
    content:
      'Connect with learners worldwide and share insights in our vibrant, diverse community.',
    backgroundColor: '#fff7e6',
  },
  {
    title: 'Personalized Growth',
    content:
      'Track your progress and receive tailored recommendations to accelerate your learning journey.',
    backgroundColor: '#fff1f0',
  },
]

const AccordionExample: React.FC = () => {
  return <Accordion items={accordionItems} />
}

export default AccordionExample
