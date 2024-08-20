import Image from 'next/image'
import Link from 'next/link'

export const RequiresTailwind = () => {
  return (
    <Link
      href="https://tailwindcss.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full border border-cyan-100 bg-cyan-100/30 px-1">
        <Image
          src="/images/tailwind.svg"
          alt="Tailwind CSS"
          width={18}
          height={18}
        />
        <div className="text-xs font-medium text-cyan-500">Tailwind CSS</div>
      </div>
    </Link>
  )
}

export const RequiresFramerMotion = () => {
  return (
    <Link
      href="https://www.framer.com/motion/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full border border-gray-100 bg-black px-2">
        <Image
          src="/images/framer_dark.svg"
          alt="Tailwind CSS"
          width={8}
          height={8}
        />
        <div className="text-xs font-medium text-white">Framer Motion</div>
      </div>
    </Link>
  )
}

export const RequiresShadcn = () => {
  return (
    <Link
      href="https://ui.shadcn.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full border border-gray-100 bg-black px-1">
        <Image
          src="/images/shadcn.svg"
          alt="Tailwind CSS"
          width={18}
          height={18}
        />
        <div className="text-xs font-medium text-white">shadcn/ui</div>
      </div>
    </Link>
  )
}
