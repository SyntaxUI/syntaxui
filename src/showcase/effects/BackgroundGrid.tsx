export function cn(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(' ')
}

export default function BackgroundGrid({
  color = 'black',
  size = '35px',
  strokeWidth = '1px',
  fade,
  fadeFrom = '0%',
  fadeTo = '100%',
  className,
}: {
  color?: string
  size?: string | number
  strokeWidth?: number | string
  fadeFrom?: `${number}%`
  fadeTo?: `${number}%`
  fade?: boolean
  className?: string
}) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}'>
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className={cn(
        'pointer-events-none fixed left-0 top-0 -z-50 flex h-full w-full overflow-hidden ',
        className,
      )}
      style={{
        color: 'red',
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: size,
        maskImage: fade
          ? `radial-gradient(circle at 50% 50%, transparent ${fadeFrom}, black ${fadeTo})`
          : '',
      }}
    ></div>
  )
}
