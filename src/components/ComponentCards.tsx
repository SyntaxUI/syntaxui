import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    id: 1,
    title: 'Badge',
    image: '/images/ui/badges.png',
    link: '/docs/components/badges',
  },
  {
    id: 2,
    title: 'Breadcrumb',
    image: '/images/ui/breadcrumb.png',
    link: '/docs/components/breadcrumb',
  },
  {
    id: 3,
    title: 'Feature',
    image: '/images/ui/features.png',
    link: '/docs/components/features',
  },
  {
    id: 4,
    title: 'Footer',
    image: '/images/ui/footer.png',
    link: '/docs/components/footer',
  },
]

const ComponentCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[12rem] items-center justify-center border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110"
                />
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

export default ComponentCards
