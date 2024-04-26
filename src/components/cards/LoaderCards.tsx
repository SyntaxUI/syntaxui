import Link from 'next/link'

import PulsatingDots from '@/showcase/components/loaders/PulsatingDots'
import RippleLoader from '@/showcase/components/loaders/RippleLoader'
import SpinningCubeLoader from '@/showcase/components/loaders/SpinningCubeLoader'
import RotatingDotsLoader from '@/showcase/components/loaders/RotatingDotsLoader'
import StaggeredFadeLoader from '@/showcase/components/loaders/StaggeredFadeLoader'
import OrbitingLoader from '@/showcase/components/loaders/OrbitingLoader'
import ClassicLoader from '@/showcase/components/loaders/ClassicLoader'
import BounceLoader from '@/showcase/components/loaders/BounceLoader'
import NeonGlowLoader from '@/showcase/components/loaders/NeonGlowLoader'
import PulsatingGradientLoader from '@/showcase/components/loaders/PulsatingGradientLoader'

interface LoaderCardProps {
  title: string
  link: string
  component: React.JSX.Element
  hide?: boolean
}

const data: LoaderCardProps[] = [
  {
    title: 'Classic',
    link: '/docs/components/loaders/classic',
    component: <ClassicLoader />,
  },
  {
    title: 'Bounce',
    link: '/docs/components/loaders/bounce',
    component: <BounceLoader />,
  },
  {
    title: 'Orbiting',
    link: '/docs/components/loaders/orbiting',
    component: <OrbitingLoader />,
  },
  {
    title: 'Staggered Fade',
    link: '/docs/components/loaders/staggered-fade',
    component: <StaggeredFadeLoader />,
  },
  {
    title: 'Rotating Dots',
    link: '/docs/components/loaders/rotating-dots',
    component: <RotatingDotsLoader />,
  },
  {
    title: 'Spinning Cube',
    link: '/docs/components/loaders/spinning-cube',
    component: <SpinningCubeLoader />,
  },
  {
    title: 'Pulsating Dots',
    link: '/docs/components/loaders/pulsating-dots',
    component: <PulsatingDots />,
  },
  {
    title: 'Ripple',
    link: '/docs/components/loaders/ripple',
    component: <RippleLoader />,
  },
  {
    title: 'Neon Glow',
    link: '/docs/components/loaders/neon-glow',
    component: <NeonGlowLoader />,
    hide: true,
  },
  {
    title: 'Pulsating Gradient',
    link: '/docs/components/loaders/pulsating-gradient',
    component: <PulsatingGradientLoader />,
    hide: true,
  },
]

export default function LoaderCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data
        .filter((item) => !item.hide)
        .map((item, i) => (
          <Link href={item.link} key={i}>
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
  )
}
