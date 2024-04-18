import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'useVisible()',
    link: '/docs/hooks/useVisible',
  },
  {
    id: 2,
    title: 'useMediaSizes()',
    link: '/docs/hooks/useMediaSizes',
  },
]

const HooksCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] grid-cols-2 items-center justify-center rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                <div className="py-md rounded-lg border bg-white px-5 font-semibold text-red-500">
                  {item.title}
                </div>
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HooksCard
