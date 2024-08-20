'use client'

import React, { useState, useEffect } from 'react'

const TextScramble: React.FC = () => {
  const [text, setText] = useState('')
  const finalText = 'SyntaxUI'
  const chars = '!<>-_\\/[]{}—=+*^?#________'

  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setText((prevText) =>
        finalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(''),
      )

      if (iteration >= finalText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl font-semibold tabular-nums tracking-tight">
      <div className="text-center text-red-500">{text}</div>
    </div>
  )
}

export default TextScramble
