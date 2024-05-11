import { StarsIcon } from 'lucide-react'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  width: number
  height: number
}

interface AvatarData {
  src: string
  alt: string
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="inline-block rounded-full">
      <Image
        className="m-0 h-12 w-12 rounded-full border-2 border-white"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </div>
  )
}

const HeroAvatars: React.FC = () => {
  const avatars: AvatarData[] = [
    {
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      alt: 'Avatar 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
      alt: 'Avatar 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      alt: 'Avatar 3',
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      alt: 'Avatar 4',
    },
  ]

  const StarIcon: React.FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fbbf24"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-star"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }

  return (
    <div className="flex w-full flex-row items-center justify-center gap-x-4">
      <div className="flex -space-x-2 overflow-hidden">
        {avatars.map((avatar, index) => (
          <Avatar key={index} src={avatar.src} alt={avatar.alt} />
        ))}
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-start justify-center">
          {Array(5)
            .fill(null)
            .map((index) => (
              <div key={index} className="flex items-center justify-center">
                <StarIcon />
              </div>
            ))}
        </div>
        <div className="text-xs font-medium text-gray-900 md:text-sm">
          Join 1k+ Engineers today
        </div>
      </div>
    </div>
  )
}

export default HeroAvatars
