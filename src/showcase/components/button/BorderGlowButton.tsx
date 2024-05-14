'use client'

import { useEffect, useRef, useState } from 'react'

const BorderGlowButton = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: '-100%', y: '-100%' })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x: `${x}px`, y: `${y}px` })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <button
      className="relative overflow-hidden rounded-lg bg-[#e5e7eb] transform transition-transform ease-in-out active:scale-90"
      ref={ref}
    >
      <span
        className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fb3b53_0%,transparent_70%)] `}
        style={
          {
            left: mousePosition.x,
            top: mousePosition.y,
          } as any
        }
      ></span>
      <div className="relative z-10 m-[1px] rounded-[calc(0.5rem-1px)] bg-white/90  px-4 py-1 text-xs text-[#fb3b53] backdrop-blur-sm">
        SyntaxUI
      </div>
    </button>
  )
}

export default BorderGlowButton
