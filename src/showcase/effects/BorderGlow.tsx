'use client'

import { ReactNode, useEffect, useRef } from 'react'

const BorderGlow = ({ children }: { children: ReactNode }) => {
  // TODO: fix default position
  const ref = useRef<HTMLDivElement>(null)
  const id = useRef<string>(Math.random().toString(36).substring(2, 9))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      document.documentElement.style.setProperty(`--x-${id.current}`, `${x}px`)
      document.documentElement.style.setProperty(`--y-${id.current}`, `${y}px`)
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref.current])

  useEffect(() => {
    document.documentElement.style.setProperty(`--x-${id.current}`, `-100%`)
    document.documentElement.style.setProperty(`--y-${id.current}`, `-100%`)
  }, [])

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-[#e5e7eb]"
      ref={ref}
      style={
        {
          '--x': `var(--x-${id.current})`,
          '--y': `var(--y-${id.current})`,
        } as any
      }
    >
      <span
        className={`absolute left-[var(--x)] top-[var(--y)] z-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2  bg-[radial-gradient(#fb3b53_0%,transparent_70%)]`}
      ></span>
      <div className="relative z-10 m-[1px] rounded-[calc(0.75rem-1px)] bg-white px-6 py-2">
        {children}
      </div>
    </div>
  )
}

export default BorderGlow
