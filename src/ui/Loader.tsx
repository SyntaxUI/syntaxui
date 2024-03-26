export const BounceLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white">
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.3s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.13s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500"></div>
    </div>
  )
}

export const ClassicLoader = () => {
  return (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
  )
}
