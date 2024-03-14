// TODO :: remove common classname from all components and make it reusable.

import { cn } from '@/lib/utils'

const buttonProps =
  'hover:underline-0 rounded-lg bg-red-500 px-6 py-2 text-white hover:no-underline'

export const HoverTadaButton = () => {
  return (
    <button className={cn(`group-hover:animate-hover-tada`, buttonProps)}>
      Ansub
    </button>
  )
}
