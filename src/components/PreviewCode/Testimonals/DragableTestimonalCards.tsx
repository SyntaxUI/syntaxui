import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

type PositionType = 'lead' | 'center' | 'trail'

const TestimonialCardSlider = () => {
  const [sequence, updateSequence] = useState<PositionType[]>([
    'lead',
    'center',
    'trail',
  ])

  const shuffleCards = () => {
    const sequenceClone = [...sequence]
    sequenceClone.unshift(sequenceClone.pop() as PositionType)
    updateSequence(sequenceClone)
  }

  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <TestimonialCard
          quote="syntaxUI is the best thing I've ever used for my coding needs."
          name="Nicole W."
          onShuffle={shuffleCards}
          cardPosition={sequence[0]}
        />
        <TestimonialCard
          quote="the amount of time I save by using syntaxUI is amazing."
          name="Joe"
          onShuffle={shuffleCards}
          cardPosition={sequence[1]}
        />
        <TestimonialCard
          quote="best thing about syntaxUI is that it is free & open source."
          name="Alex M."
          onShuffle={shuffleCards}
          cardPosition={sequence[2]}
        />
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  onShuffle: () => void
  quote: string
  cardPosition: PositionType
  name: string
}

const TestimonialCard = ({
  onShuffle,
  quote,
  cardPosition,
  name,
}: TestimonialCardProps) => {
  const initialMousePosition = useRef(0)

  const handleDragStart = (event: MouseEvent) => {
    initialMousePosition.current = event.clientX
  }

  const handleDragEnd = (event: MouseEvent) => {
    const movement = initialMousePosition.current - event.clientX
    if (movement > 150) {
      onShuffle()
    }
    initialMousePosition.current = 0
  }

  const horizontalPosition =
    cardPosition === 'lead' ? '0%' : cardPosition === 'center' ? '33%' : '66%'
  const cardRotation =
    cardPosition === 'lead'
      ? '-6deg'
      : cardPosition === 'center'
        ? '0deg'
        : '6deg'
  const layerIndex =
    cardPosition === 'lead' ? '2' : cardPosition === 'center' ? '1' : '0'
  const isDraggable = cardPosition === 'lead'

  return (
    <motion.div
      style={{ zIndex: layerIndex }}
      animate={{ rotate: cardRotation, x: horizontalPosition }}
      drag
      dragElastic={0.15}
      dragListener={isDraggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[200px] w-[300px] select-none place-content-center space-y-4 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl sm:h-[250px] sm:w-[350px] sm:space-y-6 sm:p-6 ${
        isDraggable ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <span className="text-center text-base italic text-gray-400 sm:text-lg">
        {`"${quote}"`}
      </span>
      <span className="text-center text-sm font-medium text-gray-400">
        {name}
      </span>
    </motion.div>
  )
}

export default TestimonialCardSlider
