import Link from 'next/link'
import { HoverTadaButton } from '@/showcase/animations/hover/HoverTadaButton'
import { HoverJiggleButton } from '@/showcase/animations/hover/HoverJiggleButton'
import { HoverPopButton } from '@/showcase/animations/hover/HoverPopButton'
import { HoverVibrateButton } from '@/showcase/animations/hover/HoverVibrateButton'
import Card from './Card'

const data = [
  {
    id: 1,
    title: 'Tada',
    link: '/animations/hovers/tada',
    component: <HoverTadaButton />,
  },
  {
    id: 2,
    title: 'Jiggle',
    link: '/animations/hovers/jiggle',
    component: <HoverJiggleButton />,
  },
  {
    id: 3,
    title: 'Pop',
    link: '/animations/hovers/pop',
    component: <HoverPopButton />,
  },
  {
    id: 4,
    title: 'Vibrate',
    link: '/animations/hovers/vibrate',
    component: <HoverVibrateButton />,
  },
]

const HoverAnimationCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="no-underline">
            <Card title={item.title}>{item.component}</Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HoverAnimationCards
