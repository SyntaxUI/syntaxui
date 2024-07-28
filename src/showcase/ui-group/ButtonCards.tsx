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
import Card from './Card'
import BounceButton from '../components/button/BounceButton'
import MagneticButton from '../components/button/MagneticButton'
import { title } from 'process'
import StarWarsButton from '../components/button/StarWarsButton'
import EmojiConfettiButton from '../components/button/EmojiConfettiButton'

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
    title: 'Star Wars',
    link: '/components/button/star-wars-button',
    component: <StarWarsButton />,
  },
  {
    title: 'Emoji Confetti',
    link: '/components/button/emoji-confetti-button',
    component: <EmojiConfettiButton />,
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
  {
    title: 'Bounce',
    link: '/components/button/bounce-button',
    component: <BounceButton />,
  },
  {
    title: 'Magnetic Button',
    link: '/components/button/magnetic-button',
    component: <MagneticButton />,
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
]

const ButtonCards = () => {
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

export default ButtonCards
