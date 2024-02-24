import Image from 'next/image'

export const RequiresTailwind = () => {
  return (
    <div className="inline-flex h-6 items-center justify-center gap-1 rounded-full border border-cyan-100 bg-cyan-100/30 px-2">
      <Image
        src="/images/tailwind.svg"
        alt="Tailwind CSS"
        width={18}
        height={18}
      />
      <div className="text-xs font-medium text-cyan-500">Tailwind CSS</div>
    </div>
  )
}
