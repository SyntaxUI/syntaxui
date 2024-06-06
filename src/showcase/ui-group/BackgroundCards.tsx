import Link from 'next/link'
import Card from './Card'
import DotPatternBackground, { BackgroundDots } from '../effects/BackgroundDots'
import BackgroundGrid from '../effects/BackgroundGrid'
import BackgroundBricks from '../effects/BackgroundBricks'
import BackgroundCross from '../effects/BackgroundCross'
import BackgroundPlus from '../effects/BackgroundPlus'
import BackgroundXO from '../effects/BackgroundXO'

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
    component: <BackgroundDots className="relative z-0" fade={false} />,
  },
  {
    title: 'Cross',
    link: '/effects/background/cross',
    component: <BackgroundCross className="relative z-0" fade={false} />,
  },
  {
    title: 'Bricks',
    link: '/effects/background/bricks',
    component: <BackgroundBricks className="relative z-0" fade={false} />,
  },
  {
    title: 'Plus',
    link: '/effects/background/plus',
    component: <BackgroundPlus className="relative z-0" fade={false} />,
  },
  {
    title: 'XO',
    link: '/effects/background/xo',
    component: <BackgroundXO className="relative z-0" fade={false} />,
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
