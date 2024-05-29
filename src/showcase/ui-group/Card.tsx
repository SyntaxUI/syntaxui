export default function Card({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer dark:border-transparent dark:ring-zinc-700">
      <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem] dark:border-zinc-700 dark:bg-white/5 dark:group-hover:bg-white/10">
        {children}
      </div>
      <div className="w-full p-4 text-sm font-medium text-gray-800 dark:text-white">
        {title}
      </div>
    </div>
  )
}
