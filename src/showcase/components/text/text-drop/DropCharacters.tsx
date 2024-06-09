'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedCharactersProps {
  text: string
  className?: string
}

const DropCharacters: React.FC<AnimatedCharactersProps> = ({
  text,
  className = '',
}) => {
  const item = {
    hidden: {
      y: '200%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }

  return (
    <div className={className}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="whitespace-nowrap">
          {[...word, '\u00A0'].map((char, charIndex) => (
            <span key={charIndex} className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={item}>
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

export default DropCharacters
