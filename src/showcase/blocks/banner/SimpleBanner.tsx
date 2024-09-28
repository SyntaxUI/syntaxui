'use client'

const SimpleBanner = () => {
  return (
    <>
      <div
        // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full items-center justify-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <p>Get 50+ Premium Components for your next project on SyntaxUI</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleBanner
