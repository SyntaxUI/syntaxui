'use client'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    title: 'Sunset',
    gradient: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500',
  },
  {
    id: 2,
    title: 'Ocean',
    gradient: 'bg-gradient-to-r from-blue-500 via-teal-500 to-green-500',
  },
  {
    id: 3,
    title: 'Lavender',
    gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
  },
  {
    id: 4,
    title: 'Firefly',
    gradient: 'bg-gradient-to-r from-yellow-500 via-green-500 to-teal-500',
  },
  {
    id: 5,
    title: 'Peachy',
    gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  },
  {
    id: 6,
    title: 'Emerald',
    gradient: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
  },
]

const GradientCards = () => {
  const copyGradient = (gradient: string) => {
    navigator.clipboard.writeText(gradient)
    toast.success('Gradient copied to clipboard!')
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="group relative no-underline"
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="overflow group rounded-xl border border-gray-200 transition-all ease-in-out hover:cursor-pointer"
              onClick={() => copyGradient(item.gradient)}
            >
              <div
                className={`flex h-[9rem] items-center justify-center rounded-t-xl border-b text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem] ${item.gradient}`}
              ></div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
            <div className="pointer-events-none absolute right-2 top-2 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-full border bg-white px-2 text-sm text-xs text-gray-900">
                Click to copy
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default GradientCards
