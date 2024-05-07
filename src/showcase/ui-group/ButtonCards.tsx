import ThreeDButton from '@/showcase/components/button/3DButton'
import BorderRotateButton from '@/showcase/components/button/BorderRotateButton'
import GradientBorderButton from '@/showcase/components/button/GradientBorderButton'
import HeartbeatButton from '@/showcase/components/button/HeartbeatButton'
import NeubrutalismButton from '@/showcase/components/button/NeubrutalismButton'
import ShimmerButton from '@/showcase/components/button/ShimmerButton'
import StitchesButton from '@/showcase/components/button/StitchesButton'
import Link from 'next/link'
import GradientFillButton from '@/showcase/components/button/GradientFillButton'
import BorderGlowButton from '@/showcase/components/button/BorderGlowButton'
import ShineButton from '@/showcase/components/button/ShineButton'

const data = [
  {
    id: 1,
    title: '3D',
    link: '/docs/components/button/3d-button',
    component: <ThreeDButton />,
  },
  {
    id: 2,
    title: 'Neubrutalism',
    link: '/docs/components/button/neubrutalism-button',
    component: <NeubrutalismButton />,
  },
  {
    id: 3,
    title: 'Heartbeat',
    link: '/docs/components/button/heartbeat-button',
    component: <HeartbeatButton />,
  },
  {
    id: 4,
    title: 'Stitches',
    link: '/docs/components/button/stitches-button',
    component: <StitchesButton />,
  },
  {
    id: 5,
    title: 'Shimmer',
    link: '/docs/components/button/shimmer-button',
    component: <ShimmerButton />,
  },
  {
    id: 6,
    title: 'Border Rotate',
    link: '/docs/components/button/border-rotate-button',
    component: <BorderRotateButton />,
  },
  {
    id: 7,
    title: 'Border Glow',
    link: '/docs/components/button/border-glow-button',
    component: <BorderGlowButton />,
  },
  {
    id: 8,
    title: 'Gradient Fill',
    link: '/docs/components/button/gradient-fill-button',
    component: <GradientFillButton />,
  },
  {
    id: 9,
    title: 'Gradient Border',
    link: '/docs/components/button/gradient-border-button',
    component: <GradientBorderButton />,
  },
  {
    id: 10,
    title: 'Shine',
    link: '/docs/components/button/shine-button',
    component: <ShineButton />,
  },
]

const ButtonCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="no-underline">
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.component}
              </div>
              <div className="flex items-center justify-between px-3 py-4">
                <div className="text-sm font-medium text-gray-800">
                  {item.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ButtonCards
