import Link from 'next/link'

import {
  BounceLoader,
  ClassicLoader,
  OrbitingLoader,
  RippleLoader,
  RotatingDotsLoader,
  SpinningCubeLoader,
  StaggeredFadeLoader,
} from '@/ui/Loader'

const data = [
  {
    id: 1,
    title: 'Classic',
    link: '/docs/components/loaders/classic',
    component: <ClassicLoader />,
  },
  {
    id: 2,
    title: 'Bounce',
    link: '/docs/components/loaders/bounce',
    component: <BounceLoader />,
  },
  {
    id: 3,
    title: 'Orbiting',
    link: '/docs/components/loaders/orbiting',
    component: <OrbitingLoader />,
  },
  {
    id: 4,
    title: 'Staggered Fade',
    link: '/docs/components/loaders/staggered-fade',
    component: <StaggeredFadeLoader />,
  },
  {
    id: 5,
    title: 'Rotating Dots',
    link: '/docs/components/loaders/rotating-dots',
    component: <RotatingDotsLoader />,
  },
  {
    id: 6,
    title: 'Spinning Cube',
    link: '/docs/components/loaders/spinning-cube',
    component: <SpinningCubeLoader />,
  },
  {
    id: 7,
    title: 'Ripple',
    link: '/docs/components/loaders/ripple',
    component: <RippleLoader />,
  },
  // {
  //   id: 4,
  //   title: 'Neon Glow',
  //   link: '/docs/components/loaders/neon-glow',
  //   component: <NeonGlowLoader />,
  // },
  // {
  //   id: 5,
  //   title: 'Pulsating Gradient',
  //   link: '/docs/components/loaders/pulsating-gradient',
  //   component: <PulsatingGradientLoader />,
  // },
]

const HoverAnimationCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
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
