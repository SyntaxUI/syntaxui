'use client'

const GradientBorderButton = () => {
  return (
    <button className="font-regular rounded-full border bg-gradient-to-b from-red-500 to-blue-500 p-[3px] text-white transition-all duration-300 ease-in-out hover:scale-105">
      <span className="flex w-full gap-1 rounded-full bg-gray-900 px-5 py-1 text-sm text-white">
        SyntaxUI
      </span>
    </button>
  )
}

export default GradientBorderButton
