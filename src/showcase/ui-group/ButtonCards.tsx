import Link from 'next/link'
import ThreeDButton from '@/showcase/components/button/3DButton'
import BorderGlowButton from '@/showcase/components/button/BorderGlowButton'
import GradientFillButton from '@/showcase/components/button/GradientFillButton'
import HeartbeatButton from '@/showcase/components/button/HeartbeatButton'
import NeubrutalismButton from '@/showcase/components/button/NeubrutalismButton'
import ShimmerButton from '@/showcase/components/button/ShimmerButton'
import ShineButton from '@/showcase/components/button/ShineButton'
import StitchesButton from '@/showcase/components/button/StitchesButton'
import TextRevealButton from '../components/button/TextRevealButton'

const data = [
  {
    title: '3D',
    link: '/components/button/3d-button',
    component: <ThreeDButton />,
  },
  {
    title: 'Neubrutalism',
    link: '/components/button/neubrutalism-button',
    component: <NeubrutalismButton />,
  },
  {
    title: 'Heartbeat',
    link: '/components/button/heartbeat-button',
    component: <HeartbeatButton />,
  },
  {
    title: 'Stitches',
    link: '/components/button/stitches-button',
    component: <StitchesButton />,
  },
  {
    title: 'Shimmer',
    link: '/components/button/shimmer-button',
    component: <ShimmerButton />,
  },
  {
    title: 'Border Glow',
    link: '/components/button/border-glow-button',
    component: <BorderGlowButton />,
  },
  {
    title: 'Gradient Fill',
    link: '/components/button/gradient-fill-button',
    component: <GradientFillButton />,
  },
  {
    title: 'Shine',
    link: '/components/button/shine-button',
    component: <ShineButton />,
  },
  {
    title: 'Text Reveal',
    link: '/components/button/text-reveal-button',
    component: <TextRevealButton />,
  },
]

const ButtonCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
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
