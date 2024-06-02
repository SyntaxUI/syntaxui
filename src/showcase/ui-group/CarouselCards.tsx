import Link from 'next/link'
import Card from './Card'
import AvatarCarousel from '@/showcase/components/carousel/AvatarCarousel'

const data = [
  {
    title: 'Avatar Carousel',
    link: '/components/carousel/avatar-carousel',
    component: <AvatarCarousel />,
  },
]

export default function CarouselCards() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card title={item.title}>{item.component}</Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
