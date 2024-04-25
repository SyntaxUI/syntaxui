import Link from 'next/link'
import { HoverTadaButton } from '@/showcase/animations/hover/HoverTadaButton'
import { HoverJiggleButton } from '@/showcase/animations/hover/HoverJiggleButton'
import { HoverPopButton } from '@/showcase/animations/hover/HoverPopButton'
import { HoverVibrateButton } from '@/showcase/animations/hover/HoverVibrateButton'

const data = [
  {
    id: 1,
    title: 'Tada',
    link: '/docs/animations/hovers/tada',
    component: <HoverTadaButton />,
  },
  {
    id: 2,
    title: 'Jiggle',
    link: '/docs/animations/hovers/jiggle',
    component: <HoverJiggleButton />,
  },
  {
    id: 3,
    title: 'Pop',
    link: '/docs/animations/hovers/pop',
    component: <HoverPopButton />,
  },
  {
    id: 4,
    title: 'Vibrate',
    link: '/docs/animations/hovers/vibrate',
    component: <HoverVibrateButton />,
  },
]

const HoverAnimationCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="no-underline">
            <div className="overflow group group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.component}
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

export default HoverAnimationCards
