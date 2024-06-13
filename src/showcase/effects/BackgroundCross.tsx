interface CrossPatternBackgroundProps {
  crossSize?: number
  crossColor?: string
  backgroundColor?: string
  gap?: number
  maskColor?: string
  className?: string
  style?: React.CSSProperties
  fade?: boolean
  [key: string]: any
}

export const BackgroundCross: React.FC<CrossPatternBackgroundProps> = ({
  crossColor = '#a1a1a1',
  backgroundColor = 'transparent',
  crossSize = 40,
  className,
  fade = true,
  style,
  ...props
}) => {
  const encodedCrossColor = encodeURIComponent(crossColor)

  const maskStyle: React.CSSProperties = fade
    ? {
        maskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
      }
    : {}

  //  SVG taken from https://heropatterns.com/
  const backgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${crossSize}' height='${crossSize}' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='${encodedCrossColor}' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

export default BackgroundCross
