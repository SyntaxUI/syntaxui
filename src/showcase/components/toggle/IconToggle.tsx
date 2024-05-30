'use client'
import React, { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const IconToggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void
}) => {
  const [toggled, setToggled] = useState(true)
  const [showIcon, setShowIcon] = useState(false)

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    setShowIcon(false)
    if (onToggle) {
      onToggle(newState)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [toggled])

  return (
    <button
      className={`relative h-7 w-12 cursor-pointer rounded-full duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? '#fb3a5d' : '#24252d50',
      }}
    >
      <span
        className={cn(
          `absolute left-0 top-0 flex items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200`,
          toggled ? 'translate-x-full transform' : 'translate-x-0 transform',
          toggled ? 'h-5 w-5' : 'h-4 w-4',
          toggled ? 'm-1' : 'm-1.5',
        )}
      >
        {showIcon && (
          toggled ? (
            <Check size={13} strokeWidth={3} className="text-red-500 transition-opacity duration-100" />
          ) : (
            <X size={13} strokeWidth={3} className="text-[#24252d50] transition-opacity duration-100" />
          )
        )}
      </span>
    </button>
  )
}

export default IconToggle
