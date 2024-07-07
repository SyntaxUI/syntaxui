'use client'

const FloatingBanner = () => {
  return (
    // replace `absolute` with `fixed` if you want the banner to be fixed on the page
    <div className="absolute bottom-0 m-2 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="rounded-xl border-2 border-red-600 bg-red-500 px-6 py-2 text-center text-sm font-semibold tracking-tight text-white">
        <a href="#">
          Click here to get Premium components for your next project on SyntaxUI
        </a>
      </div>
    </div>
  )
}

export default FloatingBanner
