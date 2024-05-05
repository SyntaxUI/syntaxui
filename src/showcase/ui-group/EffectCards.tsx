import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BorderGlow from '@/showcase/effects/BorderGlow'

const data = [
  {
    id: 1,
    title: 'Image Fade',
    image: '/images/ui/image-fade.png',
    link: '/docs/effects/image-fade',
  },
  {
    id: 2,
    title: 'Gradients',
    image: '/images/ui/gradients.png',
    link: '/docs/effects/gradients',
  },
  {
    id: 3,
    title: 'Border Glow',
    preview: (
      <div className="flex flex-col gap-2">
        <BorderGlow>Border Glow</BorderGlow>
        <BorderGlow>Border Glow</BorderGlow>
      </div>
    ),
    link: '/docs/effects/border-glow',
  },
]

const EffectCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.preview ? item.preview : null}
                {item.image ? (
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110"
                  />
                ) : null}
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

export default EffectCards
