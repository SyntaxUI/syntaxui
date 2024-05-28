import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card'

const data = [
  {
    id: 1,
    title: 'Image Fade',
    image: '/images/ui/image-fade.png',
    link: '/effects/image-fade',
  },
  {
    id: 2,
    title: 'Gradients',
    image: '/images/ui/gradients.png',
    link: '/effects/gradients',
  },
]

const EffectCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <Card title={item.title}>
              <Image
                width={200}
                height={200}
                src={item.image}
                alt={item.title}
                className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110 md:w-[200px]"
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EffectCards
