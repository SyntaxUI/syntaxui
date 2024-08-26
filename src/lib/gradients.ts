export function generateTailwindGradient({
  shape,
  direction,
  from,
  via,
  to,
}: {
  shape: string
  direction: string
  from: string
  via?: string
  to: string
}): string {
  const formattedDirection = direction.replace(/\s+/g, '_')
  const viaClass = via ? `via-[${via}]` : ''
  return `bg-[radial-gradient(${shape}_at_${formattedDirection},_var(--tw-gradient-stops))] from-[${from}] ${viaClass} to-[${to}]`
}

export function generateCssGradient({
  shape,
  position,
  fromColor,
  viaColor,
  toColor,
}: {
  shape: string
  position: string
  fromColor: string
  viaColor?: string
  toColor: string
}): string {
  const gradientStops = viaColor
    ? `${fromColor}, ${viaColor}, ${toColor}`
    : `${fromColor}, ${toColor}`
  return `radial-gradient(${shape} at ${position}, ${gradientStops})`
}
