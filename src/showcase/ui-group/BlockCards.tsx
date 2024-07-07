import Image from 'next/image'
import Link from 'next/link'
import AnimatedLogoCloud from '../blocks/logo-cloud/AnimatedLogoCloud'
import Card from './Card'

const data = [
  {
    title: 'Features',
    image: '/images/ui/features.svg',
    link: '/blocks/features',
  },
  {
    title: 'Pricing',
    image: '/images/ui/pricing.svg',
    link: '/blocks/pricing',
  },
  {
    title: 'Testimonial',
    image: '/images/ui/testimonial.svg',
    link: '/blocks/testimonial',
  },
  {
    title: 'Footer',
    image: '/images/ui/footer.svg',
    link: '/blocks/footer',
  },
  {
    title: 'Logo Cloud',
    component: <AnimatedLogoCloud />,
    link: '/blocks/logo-cloud',
  },
  {
    title: 'Banner',
    image: '/images/ui/banner.svg',
    link: '/blocks/banner',
  },
]

const BlockCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card title={item.title}>
              {item.image ? (
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110 md:w-[200px]"
                />
              ) : item.component ? (
                item.component
              ) : null}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlockCards
