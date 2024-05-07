'use client'

const TextRevealButton = () => {
  return (
    <button className="group/button relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-red-500 font-medium text-white transition-all duration-300 hover:w-24">
      <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
        Syntax UI
      </p>
      <div className="absolute right-1.5">
        <svg
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-white"
        >
          <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
        </svg>
      </div>
    </button>
  )
}

export default TextRevealButton
