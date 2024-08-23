export function generateCssGradient({
    shape,
    position,
    fromColor,
    viaColor,
    toColor,
  }: {
    shape: string;
    position: string;
    fromColor: string;
    viaColor: string; 
    toColor: string;
  }): string {
    const gradientStops =  `${fromColor}, ${viaColor}, ${toColor}`;
    return `radial-gradient(${shape} at ${position}, ${gradientStops})`;
  }