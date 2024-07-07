const CookieBanner = () => {
  return (
    // replace `absolute` with `fixed` if you want the cookie banner to be fixed on the page
    <div className="absolute bottom-0 left-0 px-6 pb-6">
      <div className="max-w-md rounded-xl border bg-white p-6">
        <p className="text-sm text-gray-900">
          Cookie Banner is a message that displays when a user first visits a
          website and gives them the option to accept or reject cookies. Cookies
          are small text files that are placed on your device by websites that
          you visit.
          <a href="#" className="font-semibold text-red-500"></a>
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button className="rounded-xl border-2 border-red-600 bg-red-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-500/80">
            Accept
          </button>
          <button
            type="button"
            className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
