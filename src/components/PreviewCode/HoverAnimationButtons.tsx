import { cn } from '@/lib/utils'

const buttonProps =
  'rounded-lg bg-red-500 px-6 py-2 text-white no-underline font-semibold text-md'

export const HoverTadaButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-tada`, buttonProps)}>
      Hover Me
    </button>
  )
}

export const HoverJiggleButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-jiggle`, buttonProps)}>
      Hover Me
    </button>
  )
}

export const HoverPopButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-pop`, buttonProps)}>
      Hover Me
    </button>
  )
}

export const HoverVibrateButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-vibrate`, buttonProps)}>
      Hover Me
    </button>
  )
}
