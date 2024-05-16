import clsx from 'clsx'

const variantStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
}

export function Tag({
  children,
  variant = 'medium',
}: {
  children: string
  variant?: keyof typeof variantStyles
}) {
  return (
    <span
      className={clsx(
        'text-[0.625rem] font-semibold uppercase',
        'bg-text-200 text-red-500 dark:text-red-400',
        variantStyles[variant],
        variant === 'medium' &&
          'bg-red-400/10 ring-red-300 dark:ring-red-400/30',
      )}
    >
      {children}
    </span>
  )
}
