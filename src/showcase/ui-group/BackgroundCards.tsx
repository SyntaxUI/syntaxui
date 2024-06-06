import Link from 'next/link'
import Card from './Card'
import DotPatternBackground, { BackgroundDots } from '../effects/BackgroundDots'
import BackgroundGrid from '../effects/BackgroundGrid'
import BackgroundBricks from '../effects/BackgroundBricks'
import BackgroundCross from '../effects/BackgroundCross'

const data = [
  {
    title: 'Grid',
    link: '/effects/background/grid',
    component: (
      <BackgroundGrid
        color="#a1a1a1"
        className="relative z-0"
        cellSize="25px"
        strokeWidth="3px"
        fade={false}
      />
    ),
  },
  {
    title: 'Dots',
    link: '/effects/background/dots',
    component: (
      <BackgroundDots
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
      <BackgroundCross
        className="relative z-0"
        dotColor="#a1a1a1"
        size="25px"
        strokeWidth="3px"
        fade={false}
      />
    ),
  },
  {
    title: 'Bricks',
    link: '/effects/background/bricks',
    component: <BackgroundBricks className="relative z-0" fade={false} />,
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
