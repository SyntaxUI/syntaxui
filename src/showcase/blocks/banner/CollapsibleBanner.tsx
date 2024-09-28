'use client'

import { useState, useEffect } from 'react'

const CloseIcon = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export default function CollapsibleBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div
        // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex w-full items-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5 sm:before:flex-1">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <p>Get 50+ Premium Components for your next project on SyntaxUI</p>

            <a
              href="#"
              className="ml-3 flex-none rounded-lg bg-gray-900 px-3 py-1 text-xs text-white shadow-sm hover:bg-gray-900/80"
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss"
            >
              <CloseIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      {isVisible && <div className="h-[52px]" />}
    </>
  )
}
