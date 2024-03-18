import { cn } from '@/lib/utils'

const buttonProps =
  'rounded-lg bg-red-500 px-6 py-2 text-white no-underline font-semibold text-md'

export const HoverTadaButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-tada`, buttonProps)}>
      Ansub
    </button>
  )
}

export const HoverJiggleButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-jiggle`, buttonProps)}>
      Ansub
    </button>
  )
}
