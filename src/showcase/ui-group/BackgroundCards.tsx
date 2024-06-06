import Link from 'next/link'
import DotPatternBackground from '../effects/BackgroundDots'
import BackgroundGrid from '../effects/BackgroundGrid'
import Card from './Card'
import CrossPatternBackground from '../effects/CrossPatternBackground'

const data = [
  {
    title: 'Grid',
    link: '/effects/background/grid',
    component: (
      <BackgroundGrid
        color="#aaaaaa70"
        className="relative z-0"
        size="30px"
        strokeWidth="4px"
        fade={false}
      />
    ),
  },
  {
    title: 'Dots',
    link: '/effects/background/dots',
    component: (
      <DotPatternBackground
        className="relative z-0"
        dotColor="#a1a1a1"
        size="25px"
        strokeWidth="3px"
        fade={false}
      />
    ),
  },
  {
    title: 'Cross',
    link: '/effects/background/cross',
    component: (
      <CrossPatternBackground
        className="relative z-0"
        dotColor="#a1a1a1"
        size="25px"
        strokeWidth="3px"
        fade={false}
      />
    ),
  },
]

const HoverAnimationCards = () => {
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

export default HoverAnimationCards
