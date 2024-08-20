import React from 'react'
import { motion } from 'framer-motion'

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  fontSize?: number
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 80,
  size = 70,
  strokeWidth = 7,
  fontSize = 14,
}) => {
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <motion.svg
      width={size}
      height={size}
      className="transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <circle
        className="text-gray-200 opacity-25"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
      />{' '}
      <circle
        className="text-red-300 opacity-50"
        strokeWidth={strokeWidth / 2}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
      />
      <motion.circle
        className="text-red-500"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
        transform={`rotate(-90 ${center} ${center})`}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dy=".3em"
        className="fill-current font-semibold"
        style={{ fontSize: `${fontSize}px` }}
      >
        {value}%
      </text>
    </motion.svg>
  )
}

export default CircularProgress
