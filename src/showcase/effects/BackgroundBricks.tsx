interface CustomPatternBackgroundProps {
  patternColor?: string
  backgroundColor?: string
  maskColor?: string
  className?: string
  style?: React.CSSProperties
  fade?: boolean
  [key: string]: any
}

export const BackgroundBricks: React.FC<CustomPatternBackgroundProps> = ({
  patternColor = '#aaaaaa80',
  backgroundColor = 'transparent',
  className,
  fade = true,
  style,
  ...props
}) => {
  const encodedPatternColor = encodeURIComponent(patternColor)

  const maskStyle: React.CSSProperties = fade
    ? {
        maskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
      }
    : {}

  const backgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='${encodedPatternColor}' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    ...maskStyle,
    ...style,
  }

  return (
    <div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={backgroundStyle}
      {...props}
    />
  )
}

export default BackgroundBricks
