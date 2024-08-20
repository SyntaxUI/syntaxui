import clsx from 'clsx'

export function Tag({ children }: { children: string }) {
  return (
    <span
      className={clsx(
        'text-[0.625rem] font-semibold uppercase text-red-500 ring-red-300  dark:text-red-400 dark:ring-red-400/30',
      )}
    >
      {children}
    </span>
  )
}
