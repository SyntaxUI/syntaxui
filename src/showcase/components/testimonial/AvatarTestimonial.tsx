'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const defaultAvatars = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
  'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a',
  'https://images.unsplash.com/photo-1645830166230-187caf791b90',
  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1569913486515-b74bf7751574',
  'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a',
  'https://images.unsplash.com/photo-1645830166230-187caf791b90',
  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1569913486515-b74bf7751574',
]

function AvatarCarousel({
  avatarSize = 48,
  avatarSpacing = 8,
  avatars = defaultAvatars,
}: {
  avatarSize?: number
  avatarSpacing?: number
  avatars?: string[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const getPlacementIndex = (index: number) => {
    const half = Math.floor(avatars.length / 2)
    const diff = index - activeIndex

    if (diff > half) {
      return diff - avatars.length
    } else if (diff < -half) {
      return diff + avatars.length
    } else {
      return diff
    }
  }
  const isAtEnd = (placementIndex: number) => {
    const half = Math.floor(avatars.length / 2)
    return placementIndex === -half || placementIndex === half
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % avatars.length)
    }, 3000)

    return () => clearInterval(interval)
  })

  return (
    <div
      className="relative flex h-full w-full gap-2"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        minHeight: `${avatarSize}px`,
        maxWidth: `${(avatarSize + avatarSpacing) * 5}px`,
      }}
    >
      {avatars.map((avatar, index) => {
        const placement = getPlacementIndex(index)
        const left = placement * (avatarSize + avatarSpacing)

        const shouldHide = isAtEnd(placement)

        return (
          <Image
            key={index}
            className=" absolute m-0 flex-none rounded-full object-cover"
            src={avatar}
            alt={avatar}
            width={avatarSize}
            height={avatarSize}
            style={
              {
                width: avatarSize,
                height: avatarSize,
                top: '50%',
                left: `calc(50% + ${left}px)`,
                transform: `translate(-50%, -50%)`,
                zIndex: activeIndex === index ? 1 : 0,
                opacity: shouldHide ? 0 : activeIndex === index ? 1 : 0.6,
                scale: 1 - Math.abs(placement) * 0.1,
                transformOrigin: 'top left',
                transition: 'left 0.5s, opacity 0.5s, scale 0.5s',
              } as any
            }
          />
        )
      })}
    </div>
  )
}

const Avatar = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div>Trusted by</div>
      <AvatarCarousel />
    </div>
  )
}

export default Avatar
