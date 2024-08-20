import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface BackButtonProps {
  href: string
}

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      className="mb-8 flex flex-row items-center text-red-500 no-underline hover:text-red-500/70"
      href={href}
    >
      <ChevronLeft size={17} />
      Back
    </Link>
  )
}
